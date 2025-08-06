import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'popover',
  description: 'Styles for the Popover component',
  slots: ['root', 'trigger', 'portal', 'content', 'arrow', 'close'],
  base: {
    content: {
      zIndex: 50,
      w: '72',
      rounded: '{radii.lg}',
      bg: '{colors.surface.elevated}',
      py: '{spacing.gap.component.md}',
      px: '{spacing.gap.component.sm}',
      color: '{colors.text}',
      outline: 'none',
      boxShadow: '{shadows.lg}',
      border: '1px solid {colors.border}',
      _open: {
        animateIn: true,
        fadeIn: 0,
        zoomIn: 95,
      },

      _closed: {
        animateOut: true,
        fadeOut: 0,
        zoomOut: 95,
      },
      animationStyle: 'slideFadeIn',

      '&[data-slot="combobox-content"]': {
        p: 0,
        paddingBlock: 0,
        paddingInline: 0,
        border: 'none',
        shadow: 'none',
      },
    },
    arrow: {
      fill: '{colors.border}',
    },
    close: {
      position: 'absolute',
      right: 5,
      top: 5,
      outline: 'none',
      cursor: 'pointer',
    },
  },
})
