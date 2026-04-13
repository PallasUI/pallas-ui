import chalk from 'chalk'
import type { Command } from 'commander'

import generateRecipeCss from '../utils/generate-recipe-css.js'
import { validateComponentName } from '../validation/validate-component-name.js'

export default function cssCommand(program: Command) {
  program
    .command('css')
    .description('Get CSS information about a component')
    .argument('[name]', 'Name of the component to generate CSS for')
    .action(async (componentName?: string | '*') => {
      const validatedName = await validateComponentName(componentName)

      if (!validatedName) {
        console.log(chalk.gray('\nUsage: figma-cli css <name>'))
        return
      }

      console.log(chalk.yellowBright('Pallas UI Component CSS'))
      console.log(chalk.gray('—'))
      console.log(await generateRecipeCss(validatedName))
    })
}
