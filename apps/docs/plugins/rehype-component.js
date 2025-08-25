import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'

export function rehypeComponent() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'mdxJsxFlowElement' && node.name === 'ComponentPreview') {
        const attributes = node.attributes || []
        const nameAttr = attributes.find((attr) => attr.name === 'name')
        const fileAttr = attributes.find((attr) => attr.name === 'file')

        if (!nameAttr?.value) return

        const componentName = nameAttr.value
        const fileName = fileAttr?.value || 'index'
        const withRecipe = attributes.some((attr) => attr.name === 'withRecipe')
        const dirName = componentName

        try {
          const componentPath = path.join(
            process.cwd(),
            `components/previews/${dirName}/${fileName}.tsx`,
          )

          const source = fs.existsSync(componentPath)
            ? fs.readFileSync(componentPath, 'utf8')
            : `// Component not found: ${dirName}/${fileName}.tsx`

          node.children.push({
            type: 'element',
            tagName: 'pre',
            properties: {},
            children: [
              {
                type: 'element',
                tagName: 'code',
                properties: {
                  className: ['language-tsx'],
                },
                children: [{ type: 'text', value: source }],
              },
            ],
          })

          if (withRecipe) {
            try {
              // Updated recipe path to point to packages/panda/src/theme/recipes
              const recipePath = path.join(
                process.cwd(),
                '../../packages/panda/src/theme/recipes',
                `${dirName}.ts`, // Changed extension from .mjs to .ts
              )

              if (fs.existsSync(recipePath)) {
                const recipeSource = fs.readFileSync(recipePath, 'utf8')

                node.attributes.push({
                  type: 'mdxJsxAttribute',
                  name: 'hasRecipe',
                  value: true,
                })

                node.children.push({
                  type: 'element',
                  tagName: 'pre',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'code',
                      properties: {
                        className: ['language-typescript'], // Changed from javascript to typescript
                        'data-filename': `packages/panda/src/theme/recipes/${dirName}.ts`, // Added filename display
                      },
                      children: [{ type: 'text', value: recipeSource }],
                    },
                  ],
                })
              } else {
                console.warn(`Recipe not found: ${recipePath}`)
              }
            } catch (error) {
              console.error(`Error reading recipe for ${dirName}:`, error)
            }
          }
        } catch (error) {
          console.error(`Error processing ComponentPreview for ${dirName}/${fileName}:`, error)
        }
      }

      if (node.type === 'mdxJsxFlowElement' && node.name === 'ComponentSource') {
        const attributes = node.attributes || []
        const nameAttr = attributes.find((attr) => attr.name === 'name')
        const fileAttr = attributes.find((attr) => attr.name === 'file')

        if (!nameAttr?.value) return

        const componentName = nameAttr.value
        const fileName = fileAttr?.value || 'index'

        const nameMap = {
          accordion: 'accordion',
          card: 'card',
        }
        const dirName = nameMap[componentName] || componentName

        try {
          let componentPath = path.join(
            process.cwd(),
            '../../components/src/ui',
            dirName,
            `${fileName}.tsx`,
          )

          if (!fs.existsSync(componentPath) && fileName !== 'index') {
            componentPath = path.join(
              process.cwd(),
              '../../components/src/ui',
              dirName,
              'index.tsx',
            )
          }
          if (!fs.existsSync(componentPath)) {
            componentPath = path.join(
              process.cwd(),
              '../../components/src/ui',
              dirName,
              `${dirName}.tsx`,
            )
          }
          if (!fs.existsSync(componentPath)) {
            componentPath = path.join(process.cwd(), '../../components/src/ui', dirName, 'index.ts')
          }

          if (fs.existsSync(componentPath)) {
            const source = fs.readFileSync(componentPath, 'utf8')

            node.children = [
              {
                type: 'element',
                tagName: 'pre',
                properties: {},
                children: [
                  {
                    type: 'element',
                    tagName: 'code',
                    properties: {
                      className: ['language-tsx'],
                      'data-filename': `components/ui/${dirName}/${path.basename(componentPath)}`,
                    },
                    children: [{ type: 'text', value: source }],
                  },
                ],
              },
            ]
          } else {
            node.children = [
              {
                type: 'element',
                tagName: 'pre',
                properties: {},
                children: [
                  {
                    type: 'element',
                    tagName: 'code',
                    properties: { className: ['language-tsx'] },
                    children: [
                      {
                        type: 'text',
                        value: `// Component source not found: ${dirName}/${fileName}.tsx`,
                      },
                    ],
                  },
                ],
              },
            ]
          }
        } catch (error) {
          console.error(`Error processing ComponentSource for ${dirName}/${fileName}:`, error)
        }
      }
    })
  }
}
