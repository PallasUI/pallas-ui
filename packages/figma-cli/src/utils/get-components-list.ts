import { getPandaCtx } from './get-panda-ctx.js'

export async function getComponentsList() {
  const ctx = await getPandaCtx('*')
  return ctx.recipes.details.map((recipe) => recipe.baseName)
}
