import chalk from 'chalk'
import { getPandaCtx } from './get-panda-ctx.js'

export default async function generateRecipeCss(componentName: string | '*'): Promise<string> {
  const ctx = await getPandaCtx(componentName)

  const sheet = ctx.createSheet()
  ctx.appendCssOfType('static', sheet)

  const css = sheet.toCss()

  if (!css) {
    console.warn(chalk.yellow(`Warning: No CSS generated for "${componentName}".`))
    return ''
  }

  return css
}
