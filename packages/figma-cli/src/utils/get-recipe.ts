import { getPandaCtx } from './get-panda-ctx.js'

export async function getRecipe(componentName: string | '*') {
  const ctx = await getPandaCtx(componentName)

  if (componentName === '*') {
    return Object.values(ctx.recipes.config)
  }

  const recipe = ctx.recipes.getRecipe(componentName)
  return recipe?.config
}
