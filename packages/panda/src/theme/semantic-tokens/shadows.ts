import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
  xs: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  sm: { value: ['0 1px 3px 0 rgb(0 0 0 / 0.1)', '0 1px 2px -1px rgb(0 0 0 / 0.1)'] },
  md: { value: ['0 4px 6px -1px rgb(0 0 0 / 0.1)', '0 2px 4px -2px rgb(0 0 0 / 0.1)'] },
  lg: { value: ['0 10px 15px -3px rgb(0 0 0 / 0.1)', '0 4px 6px -4px rgb(0 0 0 / 0.1)'] },
  xl: { value: ['0 20px 25px -5px rgb(0 0 0 / 0.1)', '0 8px 10px -6px rgb(0 0 0 / 0.1)'] },
  '2xl': { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  inner: { value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
  minimal: { value: '0px 2px 0px 0px rgba(0, 0, 0, 0.02)' },
  insetMinimal: { value: 'inset 0px 1px 0px 0px rgba(0, 0, 0, 0.04)' },

  primary: {
    '2xs': { value: '{shadows.2xs} {colors.primary.bgHover}' },
  },
  success: {
    '2xs': { value: '{shadows.2xs} {colors.success.bgHover}' },
  },
  error: {
    '2xs': { value: '{shadows.2xs} {colors.error.bgHover}' },
  },
  warning: {
    '2xs': { value: '{shadows.2xs} {colors.warning.bgHover}' },
  },

  primaryLight: {
    xxl: { value: '{shadows.xxl} rgb(145, 202, 255, 0.5)' },
    '3xl': { value: '{shadows.3xl} rgb(145, 202, 255, 0.5)' },
    '4xl': { value: '{shadows.4xl} rgb(145, 202, 255, 0.5)' },
  },
})
