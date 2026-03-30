import { defineSlotRecipe } from '@pandacss/dev'

export const table = defineSlotRecipe({
  className: 'table',
  description: 'Styles for the Table component',
  slots: ['root', 'header', 'body', 'footer', 'row', 'head', 'cell', 'caption'],
  base: {
    root: {
      width: 'full',
      textStyle: 'sm',
      color: '{colors.text}',
      borderCollapse: 'collapse',
    },
    caption: {
      textStyle: 'sm',
      color: '{colors.text.tertiary}',
      py: '{spacing.padding.block.md}',
      textAlign: 'left',
    },
    footer: {
      borderTopWidth: '1px',
      borderColor: '{colors.border}',
      color: '{colors.text.secondary}',
      fontWeight: 'medium',
      '& tr:last-child': {
        borderBottomWidth: '0',
      },
    },
    row: {
      borderBottomWidth: '1px',
      borderColor: '{colors.border}',
    },
    head: {
      textAlign: 'left',
      fontWeight: 'semibold',
      color: '{colors.text.secondary}',
      verticalAlign: 'bottom',
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.md}',
    },
    cell: {
      verticalAlign: 'middle',
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.md}',
    },
  },
  variants: {
    size: {
      sm: {
        head: {
          px: '{spacing.padding.inline.sm}',
          py: '{spacing.padding.block.sm}',
          textStyle: 'xs',
        },
        cell: {
          px: '{spacing.padding.inline.sm}',
          py: '{spacing.padding.block.sm}',
          textStyle: 'xs',
        },
      },
      md: {
        head: {
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.md}',
          textStyle: 'sm',
        },
        cell: {
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.md}',
          textStyle: 'sm',
        },
      },
      lg: {
        head: {
          px: '{spacing.padding.inline.lg}',
          py: '{spacing.padding.block.lg}',
          textStyle: 'md',
        },
        cell: {
          px: '{spacing.padding.inline.lg}',
          py: '{spacing.padding.block.lg}',
          textStyle: 'md',
        },
      },
    },
    variant: {
      ghost: {
        row: {
          _hover: { bg: '{colors.fill.secondary}' },
        },
      },
      surface: {
        root: {
          bg: '{colors.surface.elevated}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          borderRadius: '{radii.md}',
        },
        header: {
          bg: '{colors.surface.elevated}',
        },
        row: {
          _hover: { bg: '{colors.fill.secondary}' },
        },
      },
    },
    bordered: {
      true: {
        head: {
          borderWidth: '1px',
          borderColor: '{colors.border}',
        },
        cell: {
          borderWidth: '1px',
          borderColor: '{colors.border}',
        },
      },
    },
    striped: {
      true: {
        head: {
          bg: '{colors.surface.elevated}',
        },
        row: {
          _even: { bg: '{colors.fill.secondary}' },
          _hover: { bg: '{colors.primary.bgHover}' },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'ghost',
    bordered: false,
    striped: false,
  },
})
