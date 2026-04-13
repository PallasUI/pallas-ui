import chalk from 'chalk'
import { markdownTable } from 'markdown-table'

import type { SemanticTokenGroupDefinition, TokenGroupDefinition } from '@pandacss/types'

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function formatSemanticTokenToDisplay(token: SemanticTokenGroupDefinition): string {
  const title = capitalize(token.type)
  const lines: string[] = []

  lines.push(chalk.bold.cyan(`# ${title}`))

  const hasDarkModeValues = token.values.some((t) => t.values.some((v) => v.condition === 'dark'))

  if (hasDarkModeValues) {
    if (token.values.length > 0) {
      const rows: string[][] = [['Token', 'Description', 'Light value', 'Dark value', 'Css Variable']]

      for (const tokenValue of token.values) {
        const lightValue = tokenValue.values.find((v) => v.condition === 'base')?.value || ''
        const darkValue = tokenValue.values.find((v) => v.condition === 'dark')?.value || ''
        rows.push([
          tokenValue.name,
          tokenValue.description || '',
          lightValue,
          darkValue,
          tokenValue.cssVar || '',
        ])
      }

      lines.push(markdownTable(rows))
      lines.push('')
    }
  } else {
    if (token.values.length > 0) {
      const rows: string[][] = [['Token', 'Description', 'Value', 'Css Variable']]

      for (const tokenValue of token.values) {
        if (tokenValue.values[0]?.value) {
          rows.push([
            tokenValue.name,
            tokenValue.description || '',
            tokenValue.values[0].value,
            tokenValue.cssVar || '',
          ])
        }
      }

      lines.push(markdownTable(rows))
      lines.push('')
    }
  }

  return lines.join('\n')
}

export function formatTokenToDisplay(token: TokenGroupDefinition): string {
  const title = capitalize(token.type)
  const lines: string[] = []

  lines.push(chalk.bold.cyan(`# ${title}`))

  if (token.values.length > 0) {
    const rows: string[][] = [['Token name', 'Description', 'Value', 'Css Variable']]

    for (const tokenValue of token.values) {
      rows.push([
        tokenValue.name,
        tokenValue.description || '',
        tokenValue.value,
        tokenValue.cssVar || '',
      ])
    }

    lines.push(markdownTable(rows))
    lines.push('')
  }

  return lines.join('\n')
}
