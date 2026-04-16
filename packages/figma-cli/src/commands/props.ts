import chalk from 'chalk'
import type { Command } from 'commander'

import { markdownTable } from 'markdown-table'
import {
  type ComponentInfoResult,
  type PropDetail,
  getComponentInfo,
} from '../utils/get-component-info.js'
import { validateComponentName } from '../validation/validate-component-name.js'

export default function propsCommand(program: Command) {
  program
    .command('props')
    .description('Get component mapping information for Figma agents')
    .argument('[name]', 'Component name to inspect')
    .option('--json', 'Output as JSON')
    .action(async (componentName, options) => {
      try {
        const validatedName = await validateComponentName(componentName)

        if (!validatedName) {
          console.log(chalk.gray('\nUsage: figma-cli props <name>'))
          return
        }

        const result = await getComponentInfo(validatedName)

        if (!result) {
          console.log(chalk.red(`Component not found: ${validatedName}`))
          console.log(chalk.gray(`Run "figma-cli props" (no args) to see available components.`))
          return
        }

        if (options.json) {
          console.log(JSON.stringify(result, null, 2))
        } else {
          printComponentInfo(result)
        }
      } catch (error) {
        console.error(chalk.red(error instanceof Error ? error.message : String(error)))
      }
    })
}

export function printComponentInfo(result: ComponentInfoResult) {
  // Header
  console.log(chalk.yellowBright(`Component: ${result.name}`))
  console.log(chalk.gray(`Level: ${result.level}`))
  if (result.purpose) {
    console.log(chalk.gray(`Purpose: ${result.purpose}`))
  }
  if (result.builtFrom.length > 0) {
    console.log(chalk.gray(`Built from: ${result.builtFrom.join(', ')}`))
  }
  console.log(chalk.gray('—'))

  // Props (simple component)
  if (result.props.length > 0) {
    console.log(chalk.cyan('\nProps'))
    console.log(formatPropsTable(result.props))
  }

  // Sub-components (compound component)
  if (result.subComponents.length > 0) {
    console.log(chalk.cyan('\nSub-components'))
    for (const sub of result.subComponents) {
      console.log(`\n  ${chalk.bold(sub.name)}`)
      console.log(chalk.gray(`  Role: ${sub.role}`))
      if (sub.figmaNotes) {
        console.log(chalk.gray(`  Note: ${sub.figmaNotes}`))
      }
      if (sub.props.length > 0) {
        const table = formatPropsTable(sub.props)
        const indented = table
          .split('\n')
          .map((line) => `  ${line}`)
          .join('\n')
        console.log(indented)
      } else {
        console.log(chalk.gray('    (No component-specific props)'))
      }
    }
  }

  // Notes
  console.log(chalk.cyan('\nNotes'))
  if (result.notes.length > 0) {
    for (const note of result.notes) {
      console.log(chalk.gray(`- ${note}`))
    }
  } else {
    console.log(chalk.gray('(none)'))
  }
}

function formatPropsTable(props: PropDetail[]): string {
  if (props.length === 0) return ''

  const rows = [
    ['Prop', 'Type', 'Description', 'Required', 'Default', 'Figma role'],
    ...props.map((p) => [
      p.name,
      p.type,
      p.description ?? '—',
      p.required ? 'yes' : 'no',
      p.default ?? '—',
      p.figmaRole ?? '—',
    ]),
  ]
  return markdownTable(rows)
}
