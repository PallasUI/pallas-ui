import chalk from 'chalk'
import type { Command } from 'commander'

import generateRecipeCss from '../utils/generate-recipe-css.js'
import { getComponentInfo } from '../utils/get-component-info.js'
import { getRecipe } from '../utils/get-recipe.js'
import { validateComponentName } from '../validation/validate-component-name.js'
import { printComponentInfo } from './props.js'

export default function componentCommand(program: Command) {
  program
    .command('component')
    .description('Get detailed information about components')
    .argument('[name]', 'Get detailed information about a single component')
    .action(async (componentName) => {
      try {
        const validatedName = await validateComponentName(componentName)

        if (!validatedName) {
          console.log(chalk.gray('\nUsage: figma-cli component <name>'))
          return
        }

        console.log(chalk.yellowBright('Pallas UI Component'))
        console.log(chalk.gray('—'))

        await formatComponentDetails(validatedName)
      } catch (error) {
        console.error(chalk.red(error instanceof Error ? error.message : String(error)))
      }
    })
}

async function formatComponentDetails(name: string) {
  const rawRecipe = await getRecipe(name)
  const rawCss = await generateRecipeCss(name)
  const info = await getComponentInfo(name)

  if (rawRecipe) {
    console.log(chalk.cyan('\nRecipe'))
    console.log(chalk.gray('—'))
    console.log(JSON.stringify(rawRecipe, null, 2))
  }

  if (rawCss) {
    console.log(chalk.cyan('\nCSS'))
    console.log(chalk.gray('—'))
    console.log(rawCss)
  }

  if (info) {
    console.log(chalk.cyan('\nComponent Info'))
    console.log(chalk.gray('—'))
    printComponentInfo(info)
  }
}
