import { getPandaCtx } from './get-panda-ctx.js'

export default async function generateRecipeCss(componentName: string | '*'): Promise<string> {
  const ctx = await getPandaCtx(componentName)

  const sheet = ctx.createSheet()

  // ctx.appendLayerParams(sheet) // sets up @layer declarations
  // ctx.appendBaselineCss(sheet) // appendBaselineCss writes tokens + static CSS into the internal sheet.
  ctx.appendCssOfType('static', sheet)

  // sheet.toCss() serializes the populated sheet to a string.
  return sheet.toCss()
}
