import { defineSlotRecipe } from '@pandacss/dev'

export const command = defineSlotRecipe({
  className: 'command',
  description: 'Styles for the Command component',
  slots: ['root', 'dialog', 'input', 'list', 'empty', 'group', 'item', 'separator'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      bg: '{colors.surface.elevated}',
      rounded: '{radii.lg}',
      border: 'solid',
      borderWidth: '1px',
      borderColor: '{colors.border}',
      shadow: 'sm',
    },
    dialog: {},
    input: {
      w: 'full',
      outline: 'none',
      bg: 'transparent',
      rounded: '{radii.md}',
      p: '{spacing.padding.block.xs}',
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      color: '{colors.text}',
      fontSize: '{fontSizes.md}',
    },
    list: {
      '& [data-selected=true]': {
        bg: '{colors.primary.bg}',
      },
      '& [data-disabled=true]': {
        pointerEvents: 'none',
        opacity: 0.5,
      },
      overflowX: 'hidden',
      overflowY: 'auto',
      maxH: '[300px]',
      color: '{colors.text}',
    },
    empty: {
      p: 4,
      fontSize: '{fontSizes.md}',
    },
    group: {
      '& [cmdk-group-heading]': {
        color: '{colors.text.tertiary}',
        fontSize: 'sm',
        px: 1,
        py: 0.5,
      },
      p: '{spacing.padding.block.sm}',
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      alignItems: 'center',
      gap: 2,
      rounded: '{radii.md}',
      px: '{spacing.padding.inline.sm}',
      py: '{spacing.padding.block.sm}',

      fontSize: '{fontSizes.sm}',
      outline: 'hidden',
      userSelect: 'none',
    },
    separator: {
      h: '1px',
      bg: '{colors.fill}',
      my: '{spacing.1}',
    },
  },
  variants: {
    type: {
      flat: {
        root: {
          "& [data-slot='dialog-close']": {
            top: '{spacing.padding.inline.sm}',
            right: '{spacing.padding.block.sm}',
            fontSize: '{fontSizes.xs}',
          },
          h: 'full',
          w: 'full',
        },
      },
      floating: {
        group: {
          '& [cmdk-group-heading]': {
            color: '{colors.text.tertiary}',
            px: '{spacing.padding.inline.sm}',
            fontWeight: 'medium',
          },
        },
        list: {
          '& [cmdk-group]': {
            p: '{spacing.padding.inline.sm}',
          },
          '& [cmdk-group]:not([hidden]) ~ [cmdk-group]': {
            pt: 0,
          },
          '& [cmdk-item]': {
            px: '{spacing.padding.block.md}',
            py: '{spacing.padding.inline.md}',
          },
          '& [cmdk-item] svg': {
            height: '{sizes.5}',
            width: '{sizes.5}',
          },
        },
        root: {
          "& [data-slot='command-input-icon']": {
            ml: '{spacing.padding.inline.xs}',
          },
          '& [cmdk-input]': {
            height: '{sizes.12}',
          },
          "& [data-slot='command-input-wrapper']": {
            height: '{sizes.12}',
          },
          "& [data-slot='dialog-close']:is(:hover, [data-hover])": {
            borderColor: '{colors.primary.hover}',
            opacity: 1,
            cursor: 'pointer',
          },
          "& [data-slot='dialog-close']": {
            base: {
              top: '{spacing.padding.inline.md}',
              right: '{spacing.padding.block.lg}',
              fontSize: '{fontSizes.xs}',
              color: '{colors.text}',
              position: 'absolute',
              rounded: '{radii.xs}',
              flexShrink: 0,
              opacity: 0.5,
            },
            _focus: {
              outline: '2px solid {colors.primary.bgHover}',
              outlineOffset: '2px',
            },
            _disabled: {
              pointerEvents: 'none',
            },
            _open: {
              bg: '{colors.bgSolid}',
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    type: 'flat',
  },
  staticCss: [{ type: ['*'] }],
})
