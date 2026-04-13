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

export interface PropDetail {
  name: string
  type: string
  required: boolean
  defaultValue?: string
}

export interface SubComponentProps {
  name: string
  props: PropDetail[]
}

export interface ComponentPropsResult {
  name: string
  isCompound: boolean
  parts: SubComponentProps[]
}

interface ComponentConfig {
  paths: string[]
  isCompound?: boolean
}

interface FigmaCliConfig {
  components: Record<string, ComponentConfig>
}

const SKIP_EXPORTS = new Set(['default'])

const __dirname = dirname(fileURLToPath(import.meta.url))
const configPath = resolve(__dirname, '../../figma-cli-config.json')

export function getComponentProps(componentName: string): ComponentPropsResult | null {
  let config: FigmaCliConfig
  try {
    config = JSON.parse(readFileSync(configPath, 'utf-8'))
  } catch {
    throw new Error(`Config file not found at ${configPath}. Ensure figma-cli-config.json exists.`)
  }

  const componentConfig = config.components[componentName]
  if (!componentConfig?.paths) return null

  const isCompound = componentConfig.isCompound ?? false
  const configDir = dirname(resolve(configPath))
  const absolutePaths = componentConfig.paths.map((p: string) => resolve(configDir, p))

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

  if (isCompound) {
    return extractCompoundProps(componentName, absolutePaths, project, typeChecker)
  }
  return extractSimpleProps(componentName, absolutePaths, project, typeChecker)
}

function extractCompoundProps(
  componentName: string,
  filePaths: string[],
  project: Project,
  typeChecker: ReturnType<Project['getTypeChecker']>,
): ComponentPropsResult {
  const parts: SubComponentProps[] = []

  for (const filePath of filePaths) {
    const sourceFile = project.getSourceFile(filePath)
    if (!sourceFile) continue

    const exports = sourceFile.getExportedDeclarations()

    for (const [exportName, declarations] of exports) {
      if (SKIP_EXPORTS.has(exportName)) continue

      for (const decl of declarations) {
        if (decl.getKind() !== SyntaxKind.VariableDeclaration) continue

        const varDecl = decl as VariableDeclaration
        const initializer = varDecl.getInitializer()
        if (!initializer) continue

        // Only handle call expressions (withProvider, withContext, forwardRef)
        if (initializer.getKind() !== SyntaxKind.CallExpression) continue

        const callExpr = initializer as CallExpression
        const props = extractPropsFromCallExpr(callExpr, typeChecker)

        if (props && props.length > 0) {
          parts.push({ name: exportName, props })
        }
      }
    }
  }

  return { name: componentName, isCompound: true, parts }
}

function extractSimpleProps(
  componentName: string,
  filePaths: string[],
  project: Project,
  typeChecker: ReturnType<Project['getTypeChecker']>,
): ComponentPropsResult | null {
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
  const propsTypeName = `${capitalizedName}Props`

  for (const filePath of filePaths) {
    const sourceFile = project.getSourceFile(filePath)
    if (!sourceFile) continue

    // Strategy 1: Find named Props type alias (e.g. ButtonProps)
    const typeAlias = findTypeAlias(sourceFile, propsTypeName)
    if (typeAlias) {
      const type = typeChecker.getTypeAtLocation(typeAlias)
      const props = extractPropsFromType(type, typeAlias)
      return {
        name: componentName,
        isCompound: false,
        parts: [{ name: capitalizedName, props }],
      }
    }

    // Strategy 2: Extract from forwardRef / withProvider call expression
    const exports = sourceFile.getExportedDeclarations()
    for (const [exportName, declarations] of exports) {
      for (const decl of declarations) {
        if (decl.getKind() !== SyntaxKind.VariableDeclaration) continue

        const varDecl = decl as VariableDeclaration
        const initializer = varDecl.getInitializer()
        if (!initializer || initializer.getKind() !== SyntaxKind.CallExpression) continue

        const callExpr = initializer as CallExpression
        const props = extractPropsFromCallExpr(callExpr, typeChecker)
        if (props && props.length > 0) {
          return {
            name: componentName,
            isCompound: false,
            parts: [{ name: exportName, props }],
          }
        }
      }
    }
  }

  return null
}

function findTypeAlias(sourceFile: SourceFile, name: string): TypeAliasDeclaration | undefined {
  const typeAliases = sourceFile.getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration)
  return typeAliases.find((ta) => ta.getName() === name)
}

function extractPropsFromCallExpr(
  callExpr: CallExpression,
  typeChecker: ReturnType<Project['getTypeChecker']>,
): PropDetail[] | null {
  const typeArgs = callExpr.getTypeArguments()

  // withProvider<Ref, PropsType>, withContext<Ref, PropsType>,
  // forwardRef<Ref, PropsType> — props are the 2nd generic arg
  if (typeArgs.length >= 2) {
    const propsTypeNode = typeArgs[1]
    if (!propsTypeNode) return null
    const resolvedType = typeChecker.getTypeAtLocation(propsTypeNode)
    return extractPropsFromType(resolvedType, propsTypeNode as Node)
  }

  return null
}

function extractPropsFromType(type: Type, locationNode: Node): PropDetail[] {
  const props: PropDetail[] = []

  for (const prop of type.getProperties()) {
    const name = prop.getName()

    // Skip internal React props
    if (name.startsWith('__')) continue

    // Skip inherited React/HTML/ARIA props — only keep component-specific props
    if (isInheritedReactProp(prop)) continue

    const propType = prop.getTypeAtLocation(locationNode)
    const rawTypeText = propType.getText(locationNode)
    const typeText = cleanTypeText(rawTypeText)
    const required = !prop.isOptional()

    props.push({ name, type: typeText, required })
  }

  return props
}

/**
 * Check if a prop is declared in @types/react (inherited HTML/ARIA/React props).
 * We only want component-specific props, not the 200+ inherited ones.
 */
function isInheritedReactProp(prop: ReturnType<Type['getProperties']>[number]): boolean {
  const declarations = prop.getDeclarations()
  if (declarations.length === 0) return false

  for (const decl of declarations) {
    const filePath = decl.getSourceFile().getFilePath()
    if (filePath.includes('@types/react')) return true
  }

  return false
}

/**
 * Clean up verbose TypeScript type text by stripping import() qualifiers.
 * e.g. `import("/path/to/module").ConditionalValue<"sm" | "md">` → `ConditionalValue<"sm" | "md">`
 */
function cleanTypeText(text: string): string {
  return text.replace(/import\("[^"]*"\)\./g, '')
}
