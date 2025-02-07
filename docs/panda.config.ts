import { createPreset } from '@pallas-ui/panda-preset'
import { defineConfig } from '@pandacss/dev'

import { presetPrimaryColors } from '@pallas-ui/panda-preset/colors/paletteGenerator'
import type { ThemeColorPalette } from '@pallas-ui/panda-preset/types'

export const themeColorPalette: ThemeColorPalette = {
  primary: { colorName: 'blue', colorValue: presetPrimaryColors['blue'] },
  error: { colorName: 'red', colorValue: presetPrimaryColors['red'] },
  success: {
    colorName: 'green',
    colorValue: presetPrimaryColors['green'],
  },
  warning: {
    colorName: 'yellow',
    colorValue: presetPrimaryColors['yellow'],
  },
  info: {
    colorName: 'blue',
    colorValue: presetPrimaryColors['blue'],
  },
}

export default defineConfig({
  preflight: true,
  presets: [createPreset({ colors: themeColorPalette, baseRadius: 2 })],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}', './src/stories/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'react',
  jsxStyleProps: 'minimal',
  outdir: 'styled-system',
})
