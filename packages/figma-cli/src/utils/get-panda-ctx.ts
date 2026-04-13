import { createPreset } from '@pallas-ui/panda-preset'
import { defineConfig } from '@pandacss/dev'
import { loadConfigAndCreateContext } from '@pandacss/node'
import type { RecipeRule } from '@pandacss/types'

const defaultColors = {
  blue: '#1677ff',
  red: '#f5222d',
  green: '#52c41a',
  yellow: '#fadb14',
}

export async function getPandaCtx(componentName: string | '*') {
  const preset = createPreset({
    colors: {
      primary: { colorName: 'blue', colorValue: defaultColors.blue },
      error: { colorName: 'red', colorValue: defaultColors.red },
      success: { colorName: 'green', colorValue: defaultColors.green },
      warning: { colorName: 'yellow', colorValue: defaultColors.yellow },
      info: { colorName: 'blue', colorValue: defaultColors.blue },
    },
    baseRadius: 2,
  })

  const staticCssRecipes: '*' | { [recipe: string]: RecipeRule[] } | undefined =
    componentName === '*' ? ('*' as const) : { [componentName]: ['*'] }

  const config = defineConfig({
    preflight: false,
    presets: [preset],
    include: [],
    outdir: 'styled-system', // outdir is required but we won't write any files
    staticCss: { recipes: staticCssRecipes },
    minify: true,
  })

  return await loadConfigAndCreateContext({ config })
}
