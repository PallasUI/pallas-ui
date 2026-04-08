import { defineSlotRecipe } from '@pandacss/dev'

export const scrollArea = defineSlotRecipe({
  className: 'scroll-area',
  description: 'Styles for the ScrollArea component',
  slots: ['root', 'viewport', 'scrollbar', 'thumb', 'corner'],
  base: {
    root: {
      position: 'relative',
      overflow: 'hidden',
      width: 'full',
      height: 'full',
    },
    viewport: {
      width: 'full',
      height: 'full',
      borderRadius: 'inherit',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    scrollbar: {
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      touchAction: 'none',
      position: 'absolute',
      padding: '{spacing.padding.block.xs}',
      transition: 'background {durations.fast} ease-out',
      _hover: {
        background: '{colors.fill.secondary}',
      },
      _vertical: {
        top: '0',
        right: '0',
        bottom: '0',
      },
      _horizontal: {
        flexDirection: 'row',
        bottom: '0',
        left: '0',
        right: '0',
      },
    },
    thumb: {
      position: 'relative',
      background: '{colors.fill.secondary}',
      borderRadius: '{radii.full}',
      transition: 'background {durations.fast} ease-out',
      _hover: {
        background: '{colors.fill}',
      },
      // Enlarges the hit area without changing the visual size
      _before: {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'full',
        height: 'full',
        minWidth: '{spacing.11}',
        minHeight: '{spacing.11}',
      },
    },
    corner: {
      background: '{colors.fill.secondary}',
    },
  },
  variants: {
    size: {
      sm: {
        scrollbar: {
          _vertical: { width: '{spacing.1}' },
          _horizontal: { height: '{spacing.1}' },
        },
      },
      md: {
        scrollbar: {
          _vertical: { width: '{spacing.2}' },
          _horizontal: { height: '{spacing.2}' },
        },
      },
    },
    layout: {
      overlay: {},
      inset: {},
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      layout: 'inset',
      css: {
        viewport: {
          paddingRight: '{spacing.1}',
          paddingBottom: '{spacing.1}',
        },
      },
    },
    {
      size: 'md',
      layout: 'inset',
      css: {
        viewport: {
          paddingRight: '{spacing.2}',
          paddingBottom: '{spacing.2}',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    layout: 'overlay',
  },
})
