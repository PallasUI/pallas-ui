import { createPreset } from '@pallas-ui/panda-preset'
import { defineConfig } from '@pandacss/dev'

import { presetPrimaryColors } from '@pallas-ui/panda-preset/colors/paletteGenerator'
import type { ThemeColorPalette } from '@pallas-ui/panda-preset/types'

//gave error on build time, defined defaults
const defaultColors = {
  blue: '#1677ff',
  red: '#f5222d',
  green: '#52c41a',
  yellow: '#fadb14',
}

export const themeColorPalette: ThemeColorPalette = {
  primary: {
    colorName: 'blue',
    colorValue: presetPrimaryColors['blue'] ?? defaultColors.blue,
  },
  error: {
    colorName: 'red',
    colorValue: presetPrimaryColors['red'] ?? defaultColors.red,
  },
  success: {
    colorName: 'green',
    colorValue: presetPrimaryColors['green'] ?? defaultColors.green,
  },
  warning: {
    colorName: 'yellow',
    colorValue: presetPrimaryColors['yellow'] ?? defaultColors.yellow,
  },
  info: {
    colorName: 'blue',
    colorValue: presetPrimaryColors['blue'] ?? defaultColors.blue,
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
