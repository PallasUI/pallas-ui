import chalk from 'chalk'
import type { Command } from 'commander'

import recipes from '../../styled-system/specs/recipes.json' with { type: 'json' }
import formatRecipeToDisplay from '../utils/format-recipe-to-display.js'

export default function componentCommand(program: Command) {
  program
    .command('component')
    .description('Get detailed information about a component')
    .argument('<name>')
    .action((name) => {
      console.log(chalk.yellowBright('Pallas UI Component'))
      console.log(chalk.gray('—'))

      const recipe = recipes.data.find((r) => r.name.toLowerCase() === name.toLowerCase())

      if (recipe) {
        console.log(formatRecipeToDisplay(recipe))
      } else {
        console.log(chalk.red(`Component not found: ${name}`))
      }
    })
}
