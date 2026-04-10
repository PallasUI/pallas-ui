import chalk from 'chalk'
import type { Command } from 'commander'

import recipes from '../../styled-system/specs/recipes.json' with { type: 'json' }
import generateRecipeCss from '../utils/generate-recipe-css.js'

export default function cssCommand(program: Command) {
  program
    .command('css')
    .description('Get CSS information about a component')
    .argument('<name>')
    .action(async (name) => {
      console.log(chalk.yellowBright('Pallas UI Component CSS'))
      console.log(chalk.gray('—'))

      const componentName = name.toLowerCase()

      const recipe = recipes.data.find((r) => r.name.toLowerCase() === componentName)

      if (recipe) {
        console.log(await generateRecipeCss(componentName))
      } else {
        console.log(chalk.red(`Component not found: ${name}`))
      }
    })
}
