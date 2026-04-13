import { Command } from 'commander'
import componentCommand from './commands/component.js'
import cssCommand from './commands/css.js'
import propsCommand from './commands/props.js'
import recipeCommand from './commands/recipe.js'
import tokensCommand from './commands/tokens.js'

const program = new Command()

program
  .name('figma-cli')
  .description('CLI tool for retrieving Pallas UI component information for AI agents')
  .version('0.1.0')

componentCommand(program)
cssCommand(program)
tokensCommand(program)
recipeCommand(program)
propsCommand(program)

program.parse()
