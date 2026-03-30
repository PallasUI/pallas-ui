import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
  className: 'switchRecipe',
  description: 'Styles for the Switch component',
  slots: ['root', 'thumb'],
  base: {
    root: {
      display: 'inline-flex',
      h: '{sizes.icon.md}',
      w: '{sizes.icon.xl}',
      flexShrink: 0,
      cursor: 'pointer',
      alignItems: 'center',
      rounded: 'full',
      border: '{borders.md} transparent',
      transition: 'common',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      _checked: {
        bg: '{colors.primary}',
        _hover: {
          bg: '{colors.primary.hover}',
        },
      },

      _unchecked: {
        bg: '{colors.fill}',
        _hover: {
          bg: 'rgba(0, 0, 0, 0.35)',
        },
      },
    },
    thumb: {
      pointerEvents: 'none',
      display: 'block',
      size: '{sizes.5}',
      rounded: 'full',
      bg: 'background',
      shadow: 'sm',
      focusRingWidth: '0',
      transition: 'transform 500ms',
      translate: 'auto',

      _checked: {
        translateX: '5',
      },

      _unchecked: {
        translateX: '0',
      },
    },
  },
})
