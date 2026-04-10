import chalk from 'chalk'
import type { Command } from 'commander'

import recipes from '../../styled-system/specs/recipes.json' with { type: 'json' }
import formatRecipeToDisplay from '../utils/format-recipe-to-display.js'

export default function listCommand(program: Command) {
  program
    .command('list')
    .description('List all available components')
    .action(() => {
      console.log(chalk.yellowBright('Pallas UI Components'))
      console.log(chalk.gray('—'))

      for (const recipe of recipes.data) {
        console.log(formatRecipeToDisplay(recipe))
      }
    })
}
