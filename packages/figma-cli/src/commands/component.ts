import chalk from 'chalk'
import type { Command } from 'commander'

import recipes from '../../styled-system/specs/recipes.json' with { type: 'json' }
import formatRecipeToDisplay from '../utils/format-recipe-to-display.js'
import generateRecipeCss from '../utils/generate-recipe-css.js'
import { getRecipe } from '../utils/get-recipe.js'



export default function componentCommand(program: Command) {
  program
    .command('components')
    .description('Get detailed information about components')
    .argument('[name]', 'Get detailed information about a single component')
    .action(async (name) => {
      console.log(chalk.yellowBright('Pallas UI Component'))
      console.log(chalk.gray('—'))

      if (name) {
        const formatted = await formatComponentDetails(name)

        console.log(formatted)
      } else {
        for (const recipe of recipes.data) {
          console.log(formatRecipeToDisplay(recipe))
        }
      }
    })
}

async function formatComponentDetails(name: string) {
  const recipe = recipes.data.find((r) => r.name.toLowerCase() === name.toLowerCase())

  if (!recipe) {
    return chalk.red(
      `Component not found: ${name}\n\nAvailable component: ${recipes.data.map((r) => r.name)}`,
    )
  }

  let details = formatRecipeToDisplay(recipe)

  details += '\n\n## Recipe\n'
  const rawRecipe = await getRecipe(name)
  details += JSON.stringify(rawRecipe, null, 2)

  details += '\n\n## CSS\n'
  const rawCss = await generateRecipeCss(name)
  details += rawCss

  return details
}
