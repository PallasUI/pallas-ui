import { defineSemanticTokens } from '@pandacss/dev'
import { borders } from './borders'
import { shadows } from './shadows'
import { sizes } from './sizes'
import { spacing } from './spacing'

export const semanticTokens = defineSemanticTokens({
  shadows,
  sizes,
  spacing,
  borders,
})
