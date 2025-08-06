import { defineSemanticTokens } from '@pandacss/dev'

export const borders = defineSemanticTokens.borders({
  dialog: {
    value: '{borders.sm} {colors.border}',
  },
  control: {
    value: '{borders.sm} {colors.border}',
  },
  primary: {
    sm: { value: '{borders.sm} {colors.primary}' },
    md: { value: '{borders.md} {colors.primary}' },
    lg: { value: '{borders.lg} {colors.primary}' },
    xl: { value: '{borders.xl} {colors.primary}' },
    '2xl': { value: '{borders.2xl} {colors.primary}' },
  },

  secondary: {
    md: { value: '{borders.md} {colors.border.secondary}' },
  },

  default: {
    xs: { value: '{borders.xs} {colors.border}' },
    sm: { value: '{borders.sm} {colors.border}' },
  },

  hover: {
    xs: { value: '{borders.xs} {colors.primary.hover}' },
    sm: { value: '{borders.sm} {colors.primary.hover}' },
  },

  disabled: {
    xs: { value: '{borders.xs} {colors.border.secondary}' },
    sm: { value: '{borders.sm} {colors.border.secondary}' },
  },

  success: {
    xs: { value: '{borders.xs} {colors.success.border}' },
  },
  successHover: {
    xs: { value: '{borders.xs} {colors.success.borderHover}' },
  },
  error: {
    xs: { value: '{borders.xs} {colors.error.border}' },
  },
  errorHover: {
    xs: { value: '{borders.xs} {colors.error.borderHover}' },
  },
  warning: {
    xs: { value: '{borders.xs} {colors.warning.border}' },
  },
  warningHover: {
    xs: { value: '{borders.xs} {colors.warning.borderHover}' },
  },
})
