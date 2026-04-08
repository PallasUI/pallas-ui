import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  description: 'Styles for the Accordion component',
  slots: ['root', 'item', 'itemTrigger', 'itemHeader', 'itemContent'],
  base: {
    root: {
      width: 'full',
      borderRadius: '{radii.sm}',
      borderWidth: '1px',
      borderColor: '{colors.border}',
      boxShadow: '{shadows.minimal}',
    },
    item: {
      borderColor: '{colors.border}',
      overflow: 'hidden',
      _open: {
        bg: '{colors.bg.container}',
      },
      _first: {
        marginTop: '0',
        roundedTop: { base: '{radii.sm}', lg: '{radii.md}' },
      },
      _last: {
        roundedBottom: { base: '{radii.sm}', lg: '{radii.md}' },
        _open: {
          borderBottomWidth: '1px',
        },
      },
      cursor: 'auto',
    },
    itemTrigger: {
      display: 'flex',
      _open: {
        transform: 'rotate(-180deg)',
      },
      cursor: 'pointer',
    },
    itemHeader: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      gap: '{spacing.gap.component.md}',
      justifyContent: 'space-between',
      textStyle: {
        base: 'sm',
        lg: 'md',
      },
      bg: '{colors.primary.bg}',
      fontWeight: 'semibold',
      px: '{spacing.padding.inline.lg}',
      py: '{spacing.padding.block.md}',
    },
    itemContent: {
      overflow: 'hidden',
      color: '{colors.text}',
      px: '{spacing.padding.inline.lg}',
      py: '{spacing.padding.block.lg}',
      textStyle: 'sm',
      borderColor: '{colors.border}',
      borderXWidth: '1px',
    },
  },
})
