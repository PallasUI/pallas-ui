import chalk from 'chalk'
import type { Command } from 'commander'

import { markdownTable } from 'markdown-table'
import { type ComponentPropsResult, getComponentProps } from '../utils/get-component-props.js'
import { validateComponentName } from '../validation/validate-component-name.js'

export default function propsCommand(program: Command) {
  program
    .command('props')
    .description('Get available props for components')
    .argument('[name]', 'Component name to inspect')
    .option('--json', 'Output as JSON')
    .action(async (componentName, options) => {
      try {
        const validatedName = await validateComponentName(componentName)

        if (!validatedName) {
          console.log(chalk.gray('\nUsage: figma-cli props <name>'))
          return
        }

        const result = getComponentProps(validatedName.toLowerCase())

        if (!result) {
          console.log(chalk.red(`Component not found: ${validatedName}`))
          console.log(chalk.gray(`Run "figma-cli props" (no args) to see available components.`))
          return
        }

        if (options.json) {
          console.log(JSON.stringify(result, null, 2))
        } else {
          console.log(chalk.yellowBright(`Props: ${result.name}`))
          console.log(chalk.gray(`Type: ${result.isCompound ? 'compound' : 'simple'}`))
          console.log(chalk.gray('—'))
          printPrettyProps(result)
        }
      } catch (error) {
        console.error(chalk.red(error instanceof Error ? error.message : String(error)))
      }
    })
}

export function printPrettyProps(result: ComponentPropsResult) {
  for (const part of result.parts) {
    if (result.isCompound) {
      console.log(chalk.cyan(`\n${part.name}`))
    }

    if (part.props.length === 0) {
      console.log(chalk.gray('  No props found'))
      continue
    }

    const rows = [
      ['Prop', 'Type', 'Required'],
      ...part.props.map((p) => [p.name, p.type, p.required ? 'yes' : 'no']),
    ]

    const table = markdownTable(rows)
    // Indent table rows for compound components
    const formatted = result.isCompound
      ? table
          .split('\n')
          .map((line) => `  ${line}`)
          .join('\n')
      : table

    console.log(formatted)
  }
}
