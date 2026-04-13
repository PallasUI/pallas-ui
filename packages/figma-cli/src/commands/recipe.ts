import chalk from 'chalk'
import type { Command } from 'commander'
import { getRecipe } from '../utils/get-recipe.js'

export default function recipeCommand(program: Command) {
  program
    .command('recipe')
    .description('Get recipe of a component')
    .argument(
      '<componentName>',
      'Name of the component to get the recipe for, or * to get recipes for all components',
    )
    .action(async (componentName) => {
      console.log(chalk.yellowBright('Pallas UI Component Recipe'))
      console.log(chalk.gray('—'))

      const recipe = await getRecipe(componentName)

      console.log(JSON.stringify(recipe, null, 2))
    })
}
