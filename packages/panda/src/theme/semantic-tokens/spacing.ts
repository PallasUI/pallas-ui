import { defineSemanticTokens } from '@pandacss/dev'

export const spacing = defineSemanticTokens.spacing({
  layout: {
    default: {
      '2xs': { value: '{spacing.1}' },
      sm: { value: '{spacing.9}' },
      md: { value: '{spacing.10}' },
      lg: { value: '{spacing.12}' },
    },
    internal: {
      xs: { value: '{spacing.2}' },
      sm: { value: '{spacing.3}' },
      md: { value: '{spacing.4}' },
      lg: { value: '{spacing.5}' },
    },
    section: {
      sm: { value: '{spacing.6}' },
      md: { value: '{spacing.8}' },
      lg: { value: '{spacing.10}' },
    },
  },
  gap: {
    component: {
      sm: { value: '{spacing.4}' },
      md: { value: '{spacing.5}' },
      lg: { value: '{spacing.6}' },
    },
    inline: {
      xs: { value: '{spacing.2}' },
      sm: { value: '{spacing.3}' },
      md: { value: '{spacing.4}' },
      lg: { value: '{spacing.5}' },
    },
  },
  padding: {
    block: {
      xs: { value: '{spacing.0.5}' },
      sm: { value: '{spacing.1}' },
      md: { value: '{spacing.2}' },
      lg: { value: '{spacing.3}' },
      xl: { value: '{spacing.4}' },
    },
    inline: {
      xs: { value: '{spacing.1}' },
      sm: { value: '{spacing.2}' },
      md: { value: '{spacing.3}' },
      lg: { value: '{spacing.4}' },
      xl: { value: '{spacing.5}' },
    },
  },
})
