import { generateThemeColors } from '@pallas-ui/panda-preset/colors/colors'
import { type Token, token } from '@styled-system/tokens'
import type { ThemeColorTokens } from 'node_modules/@pallas-ui/panda-preset/src/types/color'
import { themeColorPalette } from '../../panda.config'

export function cleanToken(str: string) {
  // Check if the string starts with '{' and ends with '}'
  if (str.startsWith('{') && str.endsWith('}')) {
    // Remove the first and last character
    return str.slice(1, -1)
  }
  // Return the original string if no surrounding brackets are found
  return str
}
export const themeColors = generateThemeColors(themeColorPalette)

export function generateSwatches(themeColors: ThemeColorTokens) {
  //@ts-ignore
  return Object.entries(themeColors?.semanticTokens).map(([colorName, shades]) => {
    const swatches = Object.entries(shades).reduce(
      (acc, [shadeName, shadeValue]) => {
        if (shadeValue.value.base.startsWith('{')) {
          acc[`${colorName}.${shadeName}`] = token(cleanToken(shadeValue.value.base) as Token)
        } else {
          acc[`${colorName}.${shadeName}`] = shadeValue.value.base
        }
        return acc
      },
      {} as Record<string, string>,
    )
    return { name: colorName, swatches }
  })
}

export const swatches = generateSwatches(themeColors)
