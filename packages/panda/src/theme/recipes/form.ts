import { defineSlotRecipe } from '@pandacss/dev'

export const form = defineSlotRecipe({
  className: 'form',
  description: 'Styles for the Form component',
  slots: ['root', 'label', 'description', 'message'],
  base: {
    root: {
      backgroundColor: '{colors.background.primary}',
    },
    label: {
      textStyle: 'sm',
      leading: 'none',
      fontWeight: 'medium',
      color: '{colors.text.secondary}',
      lineHeight: '{lineHeights.normal}',
      _peerDisabled: {
        cursor: 'not-allowed',
        color: '{colors.text.disabled}',
      },
      _errorState: {
        color: '{colors.error}',
      },
    },
    description: {
      textStyle: 'xs',
      color: '{colors.text.secondary}',
      lineHeight: '{lineHeights.normal}',
    },
    message: {
      textStyle: 'xs',
      fontWeight: 'semibold',
      _errorState: {
        color: '{colors.error}',
      },
    },
  },
})
