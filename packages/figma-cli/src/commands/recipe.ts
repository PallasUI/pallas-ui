import chalk from 'chalk'
import type { Command } from 'commander'

import { getRecipe } from '../utils/get-recipe.js'
import { validateComponentName } from '../validation/validate-component-name.js'

export default function recipeCommand(program: Command) {
  program
    .command('recipe')
    .description('Get recipe of a component')
    .argument(
      '[componentName]',
      'Name of the component to get the recipe for, or * to get recipes for all components',
    )
    .action(async (componentName?: string | '*') => {
      const validatedName = await validateComponentName(componentName)

      if (!validatedName) {
        console.log(chalk.gray('\nUsage: figma-cli recipe <name>'))
        return
      }

      console.log(chalk.yellowBright('Pallas UI Component Recipe'))
      console.log(chalk.gray('—'))

      const recipe = await getRecipe(validatedName)

      console.log(JSON.stringify(recipe, null, 2))
    })
}
