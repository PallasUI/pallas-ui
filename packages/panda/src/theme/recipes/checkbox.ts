import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  description: 'Styles for the Checkbox component',
  slots: ['root', 'indicator'],
  base: {
    root: {
      flexShrink: '0',
      rounded: '{radii.sm}',
      border: '{borders.default.sm}',
      cursor: 'pointer',
      boxShadow: '{shadows.insetMinimal}',
      _hover: {
        border: '{borders.hover.sm}',
      },
      _focusVisible: {
        outline: 'none',
      },

      _disabled: {
        cursor: 'not-allowed',
        bg: '{colors.fill.disabled}',
        _hover: {
          border: '{borders.default.sm}',
        },
      },
      _checked: {
        bg: '{colors.primary}',
        border: '{borders.primary.sm}',
      },
      _indeterminate: {
        bg: '{colors.primary}',
        border: '{borders.primary.sm}',
      },
      transition: 'common',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.surface.elevated}',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          h: '{sizes.selectionControl.sm}',
          w: '{sizes.selectionControl.sm}',
        },
      },
      md: {
        root: {
          h: '{sizes.selectionControl.md}',
          w: '{sizes.selectionControl.md}',
        },
      },
      lg: {
        root: {
          h: '{sizes.selectionControl.lg}',
          w: '{sizes.selectionControl.lg}',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
