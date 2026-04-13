import chalk from 'chalk'
import type { Command } from 'commander'

import {
  formatSemanticTokenToDisplay,
  formatTokenToDisplay,
} from '../utils/format-token-to-display.js'
import { getPandaCtx } from '../utils/get-panda-ctx.js'

export default function tokensCommand(program: Command) {
  program
    .command('tokens')
    .description('Get a list of available tokens')
    .option('-s, --semantic', 'Get semantic tokens')
    .action(async (options) => {
      try {
        console.log(chalk.yellowBright(`Pallas UI${options.semantic ? ' Semantic ' : ' '}Tokens`))
        console.log(chalk.gray('—'))

        const ctx = await getPandaCtx('*')
        const specs = ctx.getSpec()

        if (options.semantic) {
          const semanticTokens = specs.find((s) => s.type === 'semantic-tokens')

          if (semanticTokens) {
            for (const token of semanticTokens.data) {
              console.log(formatSemanticTokenToDisplay(token))
            }
          }

          return
        }

        const tokens = specs.find((s) => s.type === 'tokens')

        if (tokens) {
          for (const token of tokens.data) {
            console.log(formatTokenToDisplay(token))
          }
        }
      } catch (error) {
        console.error(chalk.red(error instanceof Error ? error.message : String(error)))
      }
    })
}
