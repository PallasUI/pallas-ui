import { defineSemanticTokens } from '@pandacss/dev'

export const sizes = defineSemanticTokens.sizes({
  controlHeight: {
    md: { value: '2rem' },
    lg: { value: '2.5rem' },
    sm: { value: '1.75rem' },
  },
  selectionControl: {
    sm: { value: '1rem' },
    md: { value: '1.25rem' },
    lg: { value: '1.5rem' },
  },
  icon: {
    sm: { value: '1rem' },
    md: { value: '1.5rem' },
    lg: { value: '2rem' },
    xl: { value: '2.75rem' },
  },
  underlineHeight: {
    default: { value: '0.06rem' },
    active: { value: '0.1rem' },
  },
})
