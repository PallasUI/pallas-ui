import chalk from 'chalk'
import type { Command } from 'commander'

import semanticTokens from '../../styled-system/specs/semantic-tokens.json' with { type: 'json' }
import tokens from '../../styled-system/specs/tokens.json' with { type: 'json' }
import formatTokenToDisplay from '../utils/format-token-to-display.js'

export default function tokensCommand(program: Command) {
  program
    .command('tokens')
    .description('Get a list of available tokens')
    .option('-s, --semantic', 'Get semantic tokens')
    .action((options) => {
      console.log(chalk.yellowBright('Pallas UI Tokens'))
      console.log(chalk.gray('—'))

      for (const token of tokens.data) {
        console.log(formatTokenToDisplay(token))
      }
    })
}
