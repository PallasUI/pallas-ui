import chalk from 'chalk'
import type { Command } from 'commander'
import { readFileSync } from 'node:fs'
import { markdownTable } from 'markdown-table'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getComponentProps, type ComponentPropsResult } from '../utils/get-component-props.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const configPath = resolve(__dirname, '../../figma-cli-config.json')

export default function propsCommand(program: Command) {
  program
    .command('props')
    .description('Get available props for components')
    .argument('[name]', 'Component name to inspect')
    .option('--json', 'Output as JSON')
    .action(async (name, options) => {
      if (!name) {
        listComponents()
        return
      }

      const result = getComponentProps(name.toLowerCase(), configPath)

      if (!result) {
        console.log(chalk.red(`Component not found: ${name}`))
        console.log(
          chalk.gray(
            `Run "figma-cli props" (no args) to see available components.`,
          ),
        )
        return
      }

      if (options.json) {
        console.log(JSON.stringify(result, null, 2))
      } else {
        printPretty(result)
      }
    })
}

function listComponents() {
  const config = JSON.parse(readFileSync(configPath, 'utf-8'))

  console.log(chalk.yellowBright('Available components in config:'))
  console.log(chalk.gray('—'))

  for (const [name, conf] of Object.entries(
    config.components as Record<string, { isCompound?: boolean }>,
  )) {
    const compound = conf.isCompound ? chalk.cyan('[compound]') : ''
    console.log(`  ${chalk.green(name)} ${compound}`)
  }

  console.log(
    chalk.gray('\nUsage: figma-cli props <name> [--json]'),
  )
}

function printPretty(result: ComponentPropsResult) {
  console.log(chalk.yellowBright(`Props: ${result.name}`))
  console.log(
    chalk.gray(`Type: ${result.isCompound ? 'compound' : 'simple'}`),
  )
  console.log(chalk.gray('—'))

  for (const part of result.parts) {
    if (result.isCompound) {
      console.log(chalk.cyan(`\n${part.name}`))
    }

    if (part.props.length === 0) {
      console.log(chalk.gray('  No props found'))
      continue
    }

    const rows = [['Prop', 'Type', 'Required'], ...part.props.map((p) => [p.name, p.type, p.required ? 'yes' : 'no'])]

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
