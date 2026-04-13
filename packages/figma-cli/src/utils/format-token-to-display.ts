import chalk from 'chalk'
import { markdownTable } from 'markdown-table'

import semanticTokens from '../../styled-system/specs/semantic-tokens.json' with { type: 'json' }
import tokens from '../../styled-system/specs/tokens.json' with { type: 'json' }

type Token = (typeof tokens.data)[number]
type SemanticToken = (typeof semanticTokens.data)[number]

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function formatSemanticTokenToDisplay(token: SemanticToken): string {
  const title = capitalize(token.type)
  const lines: string[] = []

  lines.push(chalk.bold.cyan(`# ${title}`))

  const hasDarkModeValues = token.values.some((t) => t.values.some((v) => v.condition === 'dark'))

  if (hasDarkModeValues) {
    if (token.values.length > 0) {
      const rows: string[][] = [['Token', 'Light value', 'Dark value', 'Css Variable']]

      for (const tokenValue of token.values) {
        const lightValue = tokenValue.values.find((v) => v.condition === 'base')?.value || ''
        const darkValue = tokenValue.values.find((v) => v.condition === 'dark')?.value || ''
        rows.push([tokenValue.name, lightValue, darkValue, tokenValue.cssVar])
      }

      lines.push(markdownTable(rows))
      lines.push('')
    }
  } else {
    if (token.values.length > 0) {
      const rows: string[][] = [['Token', 'Value', 'Css Variable']]

      for (const tokenValue of token.values) {
        if (tokenValue.values[0]?.value) {
          rows.push([tokenValue.name, tokenValue.values[0].value, tokenValue.cssVar])
        }
      }

      lines.push(markdownTable(rows))
      lines.push('')
    }
  }

  return lines.join('\n')
}

export function formatTokenToDisplay(token: Token): string {
  const title = capitalize(token.type)
  const lines: string[] = []

  lines.push(chalk.bold.cyan(`# ${title}`))

  if (token.values.length > 0) {
    const rows: string[][] = [['Token name', 'Token value', 'Css Variable']]

    for (const tokenValue of token.values) {
      rows.push([tokenValue.name, tokenValue.value, tokenValue.cssVar])
    }

    lines.push(markdownTable(rows))
    lines.push('')
  }

  return lines.join('\n')
}
