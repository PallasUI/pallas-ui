import chalk from 'chalk'
import { markdownTable } from 'markdown-table'

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

// biome-ignore lint/suspicious/noExplicitAny: This is JSON data, so we don't have types for it
export default function formatRecipeToDisplay(recipe: any): string {
  const title = capitalize(recipe.name)
  const lines: string[] = []

  lines.push(chalk.bold.cyan(`# ${title}`))

  if (recipe.description) {
    lines.push(chalk.gray(recipe.description))
  }

  const variantNames = Object.keys(recipe.variants)

  if (variantNames.length > 0) {
    lines.push('')
    lines.push(chalk.bold('## Variants'))

    const rows: string[][] = [['Name', 'Variants', 'Default']]

    for (const vName of variantNames) {
      const values = recipe.variants[vName as keyof typeof recipe.variants]
      const defaultVal = recipe.defaultVariants[vName as keyof typeof recipe.defaultVariants] ?? '-'
      // biome-ignore lint/suspicious/noExplicitAny: This is JSON data, so we don't have types for it
      const variantStr = values.map((v: any) => `"${v}"`).join(', ')

      rows.push([vName, variantStr, String(defaultVal)])
    }

    lines.push(markdownTable(rows))
  }

  if (recipe.jsxExamples && recipe.jsxExamples.length > 0) {
    lines.push('')
    lines.push(chalk.bold('## JSX Examples:'))

    for (const example of recipe.jsxExamples) {
      lines.push(`  ${example}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}
