import { defineSlotRecipe } from '@pandacss/dev'

export const table = defineSlotRecipe({
  className: 'table',
  description: 'Styles for the Table component',
  slots: [
    'tableRoot',
    'tableHeader',
    'tableBody',
    'tableFooter',
    'tableRow',
    'tableCell',
    'tableHead',
    'tableCaption',
  ],
  base: {
    tableRoot: {
      w: 'full',
      captionSide: 'bottom',
      textStyle: 'sm',
    },
    tableHeader: {
      '& tr': {
        borderBottom: '1px solid {colors.border}',
      },
    },
    tableBody: {
      '& tr': {
        _last: {
          borderBottom: 'transparent',
        },
      },
    },
    tableFooter: {
      bg: '{colors.primary}',
      fontWeight: 'medium',
      color: '{colors.primary.foreground}',
    },
    tableRow: {
      borderBottom: '1px solid {colors.border}',
      transition: 'colors',
      _hover: {
        backgroundColor: '{colors.primary.bgHover}',
      },
    },
    tableHead: {
      px: '{spacing.padding.inline.lg}',
      textAlign: 'left',
      verticalAlign: 'middle',
      fontWeight: 'medium',
      color: 'muted.foreground',

      '&:has([role=checkbox])': {
        pr: '0',
      },
    },
    tableCell: {
      p: '{spacing.padding.inline.lg}',
      verticalAlign: 'middle',

      '&:has([role=checkbox])': {
        pr: '0',
      },
    },
    tableCaption: {
      mt: '{spacing.gap.component.lg}',
      textStyle: 'sm',
      color: 'muted.foreground',
    },
  },
})
