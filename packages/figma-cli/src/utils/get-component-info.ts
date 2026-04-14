import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  type CallExpression,
  type Node,
  Project,
  type SourceFile,
  SyntaxKind,
  type Type,
  type TypeAliasDeclaration,
  type VariableDeclaration,
} from 'ts-morph'
import { getPandaCtx } from './get-panda-ctx.js'

// --- Output Types ---

export interface VariantAxisDetail {
  values: string[]
  default?: string
}

export interface PropDetail {
  name: string
  type: string
  required: boolean
  default?: string
  figmaRole?: string
  description?: string
}

export interface SubComponentInfo {
  name: string
  role: 'provider' | 'region'
  props: PropDetail[]
  figmaNotes?: string
}

export interface FigmaSlot {
  name: string
  description: string
}

export interface FigmaProperties {
  variantAxes: string[]
  booleanProperties: string[]
  textProperties: string[]
  slots: FigmaSlot[]
}

export interface ComponentInfoResult {
  name: string
  level: 'atomic' | 'molecule'
  purpose?: string
  builtFrom: string[]
  variantAxes: Record<string, VariantAxisDetail>
  subComponents: SubComponentInfo[]
  props: PropDetail[]
  figmaProperties: FigmaProperties
  notes: string[]
}

// --- Config Types ---

interface FigmaPropOverride {
  figmaRole?: string
  description?: string
}

interface FigmaSubComponentOverride {
  figmaNotes?: string
}

interface FigmaConfig {
  purpose?: string
  notes?: string[]
  propOverrides?: Record<string, FigmaPropOverride>
  subComponentOverrides?: Record<string, FigmaSubComponentOverride>
  slots?: FigmaSlot[]
}

interface ComponentConfig {
  paths: string[]
  isCompound?: boolean
  figma?: FigmaConfig
}

interface FigmaCliConfig {
  components: Record<string, ComponentConfig>
}

// --- Constants ---

const SKIP_EXPORTS = new Set(['default'])

const TEXT_PROP_NAMES = new Set(['text', 'title', 'label', 'description', 'placeholder'])

const IRRELEVANT_PROP_NAMES = new Set(['className', 'css', 'style', 'asChild'])

function isFunctionType(typeText: string): boolean {
  return typeText.includes('=>') || typeText.toLowerCase().includes('function')
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const configPath = resolve(__dirname, '../../figma-cli-config.json')

// --- Recipe Extraction ---

interface RecipeData {
  variantAxes: Record<string, VariantAxisDetail>
  isSlotRecipe: boolean
  slotNames?: string[]
}

export async function extractRecipeData(componentName: string): Promise<RecipeData | null> {
  const ctx = await getPandaCtx(componentName)
  const recipe = ctx.recipes.getRecipe(componentName)
  if (!recipe) return null

  const config = recipe.config
  const variantAxes: Record<string, VariantAxisDetail> = {}

  if (config.variants) {
    for (const [axisName, axisValues] of Object.entries(config.variants)) {
      variantAxes[axisName] = {
        values: Object.keys(axisValues),
        default: (config.defaultVariants as Record<string, string> | undefined)?.[axisName],
      }
    }
  }

  const isSlotRecipe = 'slots' in config && Array.isArray(config.slots)
  const slotNames = isSlotRecipe ? (config as { slots: string[] }).slots : undefined

  return { variantAxes, isSlotRecipe, slotNames }
}

// --- ts-morph Extraction ---

function loadConfig(): FigmaCliConfig {
  try {
    return JSON.parse(readFileSync(configPath, 'utf-8'))
  } catch {
    throw new Error(`Config file not found at ${configPath}. Ensure figma-cli-config.json exists.`)
  }
}

function inferFigmaRole(
  propName: string,
  typeText: string,
  variantAxisNames: Set<string>,
): string | undefined {
  if (variantAxisNames.has(propName)) return 'variant'
  if (propName === 'children') return 'slot'

  const lowerType = typeText.toLowerCase()
  if (lowerType.includes('boolean')) return 'booleanProperty'
  if (
    lowerType.includes('reactelement') ||
    lowerType.includes('reactnode') ||
    lowerType.includes('element')
  ) {
    return 'slot'
  }

  if (TEXT_PROP_NAMES.has(propName.toLowerCase())) return 'textProperty'

  return undefined
}

function cleanTypeText(text: string): string {
  return text.replace(/import\("[^"]*"\)\./g, '')
}

function isInheritedReactProp(prop: ReturnType<Type['getProperties']>[number]): boolean {
  const declarations = prop.getDeclarations()
  if (declarations.length === 0) return false
  for (const decl of declarations) {
    const filePath = decl.getSourceFile().getFilePath()
    if (filePath.includes('@types/react')) return true
  }
  return false
}

function extractJsDocDescription(prop: ReturnType<Type['getProperties']>[number]): string | undefined {
  for (const decl of prop.getDeclarations()) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const jsDocs = (decl as any).getJsDocs?.() ?? []
    for (const jsDoc of jsDocs) {
      const text = jsDoc.getCommentText?.()
      if (text) return text.replace(/\n\s*/g, ' ')
    }
  }
  return undefined
}

function extractPropsFromType(
  type: Type,
  locationNode: Node,
  variantAxisNames: Set<string>,
  propOverrides?: Record<string, FigmaPropOverride>,
): PropDetail[] {
  const props: PropDetail[] = []

  for (const prop of type.getProperties()) {
    const name = prop.getName()
    if (name.startsWith('__')) continue
    if (isInheritedReactProp(prop)) continue
    if (IRRELEVANT_PROP_NAMES.has(name)) continue

    const propType = prop.getTypeAtLocation(locationNode)
    const rawTypeText = propType.getText(locationNode)
    const typeText = cleanTypeText(rawTypeText)

    // Skip callback/event handler props (function types, including on* handlers)
    if (isFunctionType(typeText)) continue

    const required = !prop.isOptional()

    const override = propOverrides?.[name]
    const figmaRole = override?.figmaRole ?? inferFigmaRole(name, typeText, variantAxisNames)

    // Skip props that are variant axes — they're shown in variantAxes, not in the props list
    if (figmaRole === 'variant') continue

    const detail: PropDetail = { name, type: typeText, required }
    if (figmaRole) detail.figmaRole = figmaRole
    detail.description = override?.description ?? extractJsDocDescription(prop)

    props.push(detail)
  }

  return props
}

function extractDefaultValues(sourceFile: SourceFile): Map<string, string> {
  const defaults = new Map<string, string>()

  const arrows = sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction)
  for (const arrow of arrows) {
    const params = arrow.getParameters()
    if (params.length === 0) continue

    const firstParam = params[0]
    if (!firstParam) continue

    const destructuring = firstParam.getFirstChildByKind(SyntaxKind.ObjectBindingPattern)
    if (!destructuring) continue

    for (const element of destructuring.getElements()) {
      const nameNode = element.getNameNode()
      const initializer = element.getInitializer()
      if (nameNode && initializer) {
        const propName = nameNode.getText()
        const defaultValue = initializer.getText()
        defaults.set(propName, defaultValue)
      }
    }
  }

  return defaults
}

function extractPropsFromCallExpr(
  callExpr: CallExpression,
  typeChecker: ReturnType<Project['getTypeChecker']>,
  variantAxisNames: Set<string>,
  defaults: Map<string, string>,
  propOverrides?: Record<string, FigmaPropOverride>,
): PropDetail[] | null {
  const typeArgs = callExpr.getTypeArguments()
  if (typeArgs.length >= 2) {
    const propsTypeNode = typeArgs[1]
    if (!propsTypeNode) return null
    const resolvedType = typeChecker.getTypeAtLocation(propsTypeNode)
    const props = extractPropsFromType(resolvedType, propsTypeNode as Node, variantAxisNames, propOverrides)
    // Merge defaults
    return props.map((p) => ({
      ...p,
      default: p.default ?? (defaults.get(p.name) || undefined),
    }))
  }
  return null
}

function findTypeAlias(sourceFile: SourceFile, name: string): TypeAliasDeclaration | undefined {
  const typeAliases = sourceFile.getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration)
  return typeAliases.find((ta) => ta.getName() === name)
}

function getSubComponentRole(callExpr: CallExpression): 'provider' | 'region' {
  const expr = callExpr.getExpression()
  if (expr.getKind() === SyntaxKind.Identifier) {
    const name = expr.getText()
    if (name === 'withProvider') return 'provider'
  }
  return 'region'
}

// --- Compound Component Extraction ---

function extractCompoundInfo(
  componentName: string,
  filePaths: string[],
  project: Project,
  typeChecker: ReturnType<Project['getTypeChecker']>,
  variantAxisNames: Set<string>,
  figmaConfig?: FigmaConfig,
): SubComponentInfo[] {
  const parts: SubComponentInfo[] = []

  for (const filePath of filePaths) {
    const sourceFile = project.getSourceFile(filePath)
    if (!sourceFile) continue

    const defaults = extractDefaultValues(sourceFile)
    const exports = sourceFile.getExportedDeclarations()

    for (const [exportName, declarations] of exports) {
      if (SKIP_EXPORTS.has(exportName)) continue

      for (const decl of declarations) {
        if (decl.getKind() !== SyntaxKind.VariableDeclaration) continue

        const varDecl = decl as VariableDeclaration
        const initializer = varDecl.getInitializer()
        if (!initializer || initializer.getKind() !== SyntaxKind.CallExpression) continue

        const callExpr = initializer as CallExpression
        const props = extractPropsFromCallExpr(
          callExpr,
          typeChecker,
          variantAxisNames,
          defaults,
          figmaConfig?.propOverrides,
        )

        if (props) {
          const role = getSubComponentRole(callExpr)
          const subOverride = figmaConfig?.subComponentOverrides?.[exportName]
          const info: SubComponentInfo = { name: exportName, role, props }
          if (subOverride?.figmaNotes) info.figmaNotes = subOverride.figmaNotes
          parts.push(info)
        }
      }
    }
  }

  return parts
}

// --- Simple Component Extraction ---

function extractSimpleInfo(
  componentName: string,
  filePaths: string[],
  project: Project,
  typeChecker: ReturnType<Project['getTypeChecker']>,
  variantAxisNames: Set<string>,
  figmaConfig?: FigmaConfig,
): PropDetail[] {
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
  const propsTypeName = `${capitalizedName}Props`

  for (const filePath of filePaths) {
    const sourceFile = project.getSourceFile(filePath)
    if (!sourceFile) continue

    const defaults = extractDefaultValues(sourceFile)

    const typeAlias = findTypeAlias(sourceFile, propsTypeName)
    if (typeAlias) {
      const type = typeChecker.getTypeAtLocation(typeAlias)
      return extractPropsFromType(type, typeAlias, variantAxisNames, figmaConfig?.propOverrides).map(
        (p) => ({
          ...p,
          default: p.default ?? (defaults.get(p.name) || undefined),
        }),
      )
    }

    const exports = sourceFile.getExportedDeclarations()
    for (const [, declarations] of exports) {
      for (const decl of declarations) {
        if (decl.getKind() !== SyntaxKind.VariableDeclaration) continue
        const varDecl = decl as VariableDeclaration
        const initializer = varDecl.getInitializer()
        if (!initializer || initializer.getKind() !== SyntaxKind.CallExpression) continue

        const callExpr = initializer as CallExpression
        const props = extractPropsFromCallExpr(
          callExpr,
          typeChecker,
          variantAxisNames,
          defaults,
          figmaConfig?.propOverrides,
        )
        if (props && props.length > 0) {
          return props
        }
      }
    }
  }

  return []
}

// --- Figma Properties Builder ---

function buildFigmaProperties(
  props: PropDetail[],
  subComponents: SubComponentInfo[],
  variantAxes: Record<string, VariantAxisDetail>,
  figmaConfig?: FigmaConfig,
): FigmaProperties {
  const variantAxisNames = Object.keys(variantAxes)

  const allProps = [...props, ...subComponents.flatMap((sc) => sc.props)]

  const booleanProperties = allProps
    .filter((p) => p.figmaRole === 'booleanProperty')
    .map((p) => p.name)

  const textProperties = allProps
    .filter((p) => p.figmaRole === 'textProperty')
    .map((p) => p.name)

  const slots = figmaConfig?.slots ?? allProps
    .filter((p) => p.figmaRole === 'slot')
    .map((p) => ({ name: p.name, description: p.description ?? '' }))

  return {
    variantAxes: variantAxisNames,
    booleanProperties,
    textProperties,
    slots,
  }
}

// --- Main Pipeline ---

export async function getComponentInfo(componentName: string): Promise<ComponentInfoResult | null> {
  const config = loadConfig()
  const componentConfig = config.components[componentName]
  if (!componentConfig?.paths) return null

  const isCompound = componentConfig.isCompound ?? false
  const figmaConfig = componentConfig.figma
  const configDir = dirname(resolve(configPath))
  const absolutePaths = componentConfig.paths.map((p: string) => resolve(configDir, p))

  // Step 1: Extract recipe data (variant axes, slots, level)
  const recipeData = await extractRecipeData(componentName)
  const variantAxes = recipeData?.variantAxes ?? {}
  const isSlotRecipe = recipeData?.isSlotRecipe ?? false

  const level: 'atomic' | 'molecule' = isCompound || isSlotRecipe ? 'molecule' : 'atomic'

  // Step 2: ts-morph extraction
  const componentsTsConfigPath = resolve(configDir, '../../components/tsconfig.json')

  let project: Project
  try {
    project = new Project({ tsConfigFilePath: componentsTsConfigPath })
  } catch {
    throw new Error(
      `Failed to create TypeScript project. Ensure tsconfig exists at ${componentsTsConfigPath}.`,
    )
  }

  for (const path of absolutePaths) {
    if (!project.getSourceFile(path)) {
      project.addSourceFileAtPath(path)
    }
  }

  const typeChecker = project.getTypeChecker()
  const variantAxisNames = new Set(Object.keys(variantAxes))

  let subComponents: SubComponentInfo[] = []
  let props: PropDetail[] = []

  if (isCompound) {
    subComponents = extractCompoundInfo(
      componentName,
      absolutePaths,
      project,
      typeChecker,
      variantAxisNames,
      figmaConfig,
    )
  } else {
    props = extractSimpleInfo(
      componentName,
      absolutePaths,
      project,
      typeChecker,
      variantAxisNames,
      figmaConfig,
    )
  }

  // Step 3: Build builtFrom
  const builtFrom = subComponents.map((sc) => sc.name)

  // Step 4: Build figmaProperties summary
  const figmaProperties = buildFigmaProperties(props, subComponents, variantAxes, figmaConfig)

  return {
    name: componentName,
    level,
    purpose: figmaConfig?.purpose,
    builtFrom,
    variantAxes,
    subComponents,
    props,
    figmaProperties,
    notes: figmaConfig?.notes ?? [],
  }
}
