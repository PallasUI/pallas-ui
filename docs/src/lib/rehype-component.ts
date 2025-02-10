import fs from 'node:fs'
import path from 'node:path'
import type { Node } from 'unist'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

// TODO: Change paths

export interface UnistNode extends Node {
  type: string
  name?: string
  tagName?: string
  value?: string
  properties?: {
    __code__?: string
    [key: string]: unknown
  }
  attributes?: {
    name: string
    value: unknown
    type?: string
  }[]
  children?: UnistNode[]
}

export interface UnistTree extends Node {
  children: UnistNode[]
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}

function getRecipeSource(component: string) {
  const presetSrcDir = path.join(process.cwd(), '../../packages/preset/src/')

  try {
    return fs.readFileSync(path.join(presetSrcDir, `./recipes/${component}.ts`), 'utf8')
  } catch (error) {
    return ''
  }
}

function getSlotRecipeSource(component: string) {
  const presetSrcDir = path.join(process.cwd(), '../../packages/preset/src/')

  try {
    return fs.readFileSync(path.join(presetSrcDir, `./slot-recipes/${component}.ts`), 'utf8')
  } catch (error) {
    return ''
  }
}

function getTextStylePreviewSource(type: string) {
  try {
    return fs.readFileSync(
      path.join(process.cwd(), `./src/components/previews/typography/${type}-text-style.tsx`),
      'utf8',
    )
  } catch (error) {
    return ''
  }
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === 'ComponentPreview') {
        const component = getNodeAttributeByName(node, 'name')?.value as string
        const file = (getNodeAttributeByName(node, 'file')?.value as string) ?? 'index'

        if (!component) return null

        try {
          const source = fs.readFileSync(
            path.join(process.cwd(), `./src/components/previews/${component}/${file}.tsx`),
            'utf8',
          )

          node.children?.push(
            u('element', {
              tagName: 'pre',
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      // Replace default export
                      value: source.replace('export default', 'export'),
                    },
                  ],
                }),
              ],
            }),
          )
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === 'ComponentSource') {
        const directory =
          (getNodeAttributeByName(node, 'directory')?.value as string) ?? 'components/ui'
        const component = getNodeAttributeByName(node, 'name')?.value as string

        if (!component) return null

        try {
          const source = fs.readFileSync(
            path.join(process.cwd(), `./src/${directory}/${component}/${component}.tsx`),
            'utf8',
          )

          node.children?.push(
            u('element', {
              tagName: 'pre',
              children: [
                u('element', {
                  tagName: 'code',
                  data: {
                    meta: `title="${directory}/${component}/${component}.tsx"`,
                  },
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            }),
          )
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === 'TypographyPreview') {
        const type = getNodeAttributeByName(node, 'type')?.value as string

        const withTextStyle = getNodeAttributeByName(node, 'withTextStyle')?.value !== undefined

        // type is required
        if (!type) return null

        try {
          const source = fs.readFileSync(
            path.join(process.cwd(), './src/components/previews/typography/index.tsx'),
            'utf8',
          )

          const textStyleSource = withTextStyle ? getTextStylePreviewSource(type) : ''

          node.children?.push(
            u('element', {
              tagName: 'pre',
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      // Replace default export
                      value: source.replace('export default', 'export'),
                    },
                  ],
                }),
              ],
            }),
          )

          if (textStyleSource) {
            node.children?.push(
              u('element', {
                tagName: 'pre',
                children: [
                  u('element', {
                    tagName: 'code',
                    properties: {
                      className: ['language-tsx'],
                    },
                    children: [
                      {
                        type: 'text',
                        value: textStyleSource,
                      },
                    ],
                  }),
                ],
              }),
            )
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}
