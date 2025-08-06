import { defineTokens } from '@pandacss/dev'

export const borders = defineTokens.borders({
  none: { value: 'none' },
  xs: { value: '0.8px solid' },
  sm: { value: '1px solid' },
  md: { value: '2px solid' },
  lg: { value: '3px solid' },
  xl: { value: '4px solid' },
  '2xl': { value: '5px solid' },
})
