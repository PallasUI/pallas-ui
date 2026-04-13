import chalk from 'chalk'
import type { Command } from 'commander'

import generateRecipeCss from '../utils/generate-recipe-css.js'
import { getComponentProps } from '../utils/get-component-props.js'
import { getRecipe } from '../utils/get-recipe.js'
import { validateComponentName } from '../validation/validate-component-name.js'
import { printPrettyProps } from './props.js'

export default function componentCommand(program: Command) {
  program
    .command('component')
    .description('Get detailed information about components')
    .argument('[name]', 'Get detailed information about a single component')
    .action(async (componentName) => {
      const validatedName = await validateComponentName(componentName)

      if (!validatedName) {
        console.log(chalk.gray('\nUsage: figma-cli component <name>'))
        return
      }

      console.log(chalk.yellowBright('Pallas UI Component'))
      console.log(chalk.gray('—'))

      await formatComponentDetails(validatedName)
    })
}

async function formatComponentDetails(name: string) {
  const rawRecipe = await getRecipe(name)
  const rawCss = await generateRecipeCss(name)
  const props = getComponentProps(name)

  if (rawRecipe) {
    console.log(chalk.cyan('\nRecipe'))
    console.log(chalk.gray('─'.repeat(40)))
    console.log(JSON.stringify(rawRecipe, null, 2))
  }

  if (rawCss) {
    console.log(chalk.cyan('\nCSS'))
    console.log(chalk.gray('─'.repeat(40)))
    console.log(rawCss)
  }

  if (props) {
    console.log(chalk.cyan('\nProps'))
    console.log(chalk.gray('─'.repeat(40)))
    console.log(printPrettyProps(props))
  }
}
