import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  description: 'Styles for the Accordion component',
  slots: ['root', 'item', 'itemHeader', 'itemTrigger', 'itemContent', 'itemIndicator'],
  base: {
    root: {
      width: 'full',
    },
    item: {
      overflow: 'hidden',
    },
    itemHeader: {
      display: 'flex',
    },
    itemTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: '1',
      fontWeight: 'semibold',
      cursor: 'pointer',
      width: 'full',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: '{colors.primary}',
        outlineOffset: '-2px',
      },
      _disabled: {
        opacity: '0.5',
        cursor: 'not-allowed',
      },
    },
    itemContent: {
      overflow: 'hidden',
      color: '{colors.text}',
      _motionSafe: {
        _open: {
          animation: 'accordion-expand 200ms ease-out',
        },
        _closed: {
          animation: 'accordion-collapse 200ms ease-out',
        },
      },
    },
    itemIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.text.tertiary}',
      '[data-state=open] &[data-rotate="true"]': {
        transform: 'rotate(180deg)',
      },
      _motionSafe: {
        transition: 'transform 200ms ease-out',
      },
    },
  },
  variants: {
    variant: {
      default: {
        item: {
          borderBottomWidth: '1px',
          borderColor: '{colors.border}',
        },
      },
      subtle: {
        item: {
          borderRadius: '{radii.md}',
          _open: {
            bg: '{colors.primary.bg}',
          },
        },
      },
      bordered: {
        root: {
          borderWidth: '1px',
          borderColor: '{colors.border}',
          borderRadius: '{radii.md}',
          overflow: 'hidden',
        },
        item: {
          borderBottomWidth: '1px',
          borderColor: '{colors.border}',
          _last: {
            borderBottomWidth: '0',
          },
          _open: {
            bg: '{colors.bg.subtle}',
          },
        },
      },
      plain: {},
    },
    size: {
      sm: {
        itemHeader: {},
        itemTrigger: {
          textStyle: 'sm',
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.sm}',
        },
        itemContent: {
          textStyle: 'sm',
          px: '{spacing.padding.inline.md}',
          pb: '{spacing.padding.block.sm}',
        },
        itemIndicator: {
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        itemHeader: {},
        itemTrigger: {
          textStyle: 'md',
          px: '{spacing.padding.inline.lg}',
          py: '{spacing.padding.block.md}',
        },
        itemContent: {
          textStyle: 'sm',
          px: '{spacing.padding.inline.lg}',
          pb: '{spacing.padding.block.md}',
        },
        itemIndicator: {
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        itemHeader: {},
        itemTrigger: {
          textStyle: 'lg',
          px: '{spacing.padding.inline.xl}',
          py: '{spacing.padding.block.lg}',
        },
        itemContent: {
          textStyle: 'md',
          px: '{spacing.padding.inline.xl}',
          pb: '{spacing.padding.block.lg}',
        },
        itemIndicator: {
          '& svg': {
            width: '6',
            height: '6',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
