import { defineSlotRecipe } from '@pandacss/dev'

export const pagination = defineSlotRecipe({
  className: 'pagination',
  description: 'Styles for the Pagination component',
  slots: ['root', 'prevTrigger', 'nextTrigger', 'item', 'ellipsis'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '{spacing.gap.inline.sm}',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    prevTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '{sizes.controlHeight.md}',
      height: '{sizes.controlHeight.md}',
      padding: '0 {spacing.padding.inline.sm}',
      borderRadius: '{radii.sm}',
      border: '1px solid {colors.border}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text}',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      _hover: {
        bg: '{colors.surface.elevatedHover}',
        borderColor: '{colors.borderHover}',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: {
          bg: '{colors.surface.elevated}',
        },
      },
    },
    nextTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '{sizes.controlHeight.md}',
      height: '{sizes.controlHeight.md}',
      padding: '0 {spacing.padding.inline.sm}',
      borderRadius: '{radii.sm}',
      border: '1px solid {colors.border}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text}',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      _hover: {
        bg: '{colors.surface.elevatedHover}',
        borderColor: '{colors.borderHover}',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: {
          bg: '{colors.surface.elevated}',
        },
      },
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '{sizes.controlHeight.md}',
      height: '{sizes.controlHeight.md}',
      padding: '0 {spacing.padding.inline.sm}',
      borderRadius: '{radii.sm}',
      border: '1px solid transparent',
      bg: 'transparent',
      color: '{colors.text}',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textStyle: 'sm',
      _hover: {
        bg: '{colors.primary.bg}',
        color: '{colors.primary.text}',
      },
      '&[data-selected]': {
        bg: '{colors.primary}',
        color: '{colors.bgSolid.text}',
        borderColor: '{colors.primary}',
        _hover: {
          bg: '{colors.primary.hover}',
          color: '{colors.bgSolid.text}',
        },
      },
    },
    ellipsis: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '{sizes.controlHeight.md}',
      height: '{sizes.controlHeight.md}',
      color: '{colors.text.tertiary}',
      textStyle: 'sm',
    },
  },
  variants: {
    size: {
      sm: {
        prevTrigger: {
          minWidth: '{sizes.controlHeight.sm}',
          height: '{sizes.controlHeight.sm}',
          padding: '0 {spacing.padding.inline.xs}',
        },
        nextTrigger: {
          minWidth: '{sizes.controlHeight.sm}',
          height: '{sizes.controlHeight.sm}',
          padding: '0 {spacing.padding.inline.xs}',
        },
        item: {
          minWidth: '{sizes.controlHeight.sm}',
          height: '{sizes.controlHeight.sm}',
          padding: '0 {spacing.padding.inline.xs}',
          textStyle: 'xs',
        },
        ellipsis: {
          minWidth: '{sizes.controlHeight.sm}',
          height: '{sizes.controlHeight.sm}',
          textStyle: 'xs',
        },
      },
      md: {},
      lg: {
        prevTrigger: {
          minWidth: '{sizes.controlHeight.lg}',
          height: '{sizes.controlHeight.lg}',
          padding: '0 {spacing.padding.inline.md}',
        },
        nextTrigger: {
          minWidth: '{sizes.controlHeight.lg}',
          height: '{sizes.controlHeight.lg}',
          padding: '0 {spacing.padding.inline.md}',
        },
        item: {
          minWidth: '{sizes.controlHeight.lg}',
          height: '{sizes.controlHeight.lg}',
          padding: '0 {spacing.padding.inline.md}',
          textStyle: 'md',
        },
        ellipsis: {
          minWidth: '{sizes.controlHeight.lg}',
          height: '{sizes.controlHeight.lg}',
          textStyle: 'md',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
