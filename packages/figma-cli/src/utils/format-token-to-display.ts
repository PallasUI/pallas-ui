import chalk from 'chalk'
import { markdownTable } from 'markdown-table'

import tokens from '../../styled-system/specs/tokens.json' with { type: 'json' }

type Token = (typeof tokens.data)[number]

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default function formatTokenToDisplay(token: Token): string {
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
