import { defineTokens } from '@pandacss/dev'
import type { Tokens } from '@pandacss/types'
import { borders } from './borders'
import { durations } from './durations'
import { radii } from './radii'
import { shadows } from './shadows'
import { sizes } from './size'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'

//add explicit type annotation here
export const tokens: Tokens = defineTokens({
  sizes,
  spacing,
  durations,
  borders,
  shadows,
  radii,
  fontSizes,
  fontWeights,
  letterSpacings,
  fonts,
  lineHeights,
})
