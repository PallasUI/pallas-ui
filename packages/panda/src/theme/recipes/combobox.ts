import { defineSlotRecipe } from '@pandacss/dev'

export const combobox = defineSlotRecipe({
  className: 'combobox',
  description: 'Styles for the Combobox component',
  slots: ['root', 'trigger', 'content', 'input', 'group', 'item', 'separator', 'itemIndicator'],
  base: {
    root: {},
    trigger: {
      shadow: 'none',
      '[disabled]&': {
        cursor: 'not-allowed',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}!',
        borderColor: '{colors.border}',
        _hover: {
          borderColor: '{colors.border}!',
        },
      },
      _focus: {
        outline: 'none',
      },
      justifyContent: 'start',
      '& span': {
        mr: 'auto',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        _placeholder: {
          color: '{colors.text.secondary}',
        },
      },
      '& svg': {
        color: '{colors.text.tertiary}',
      },
      transition: 'common',
    },
    content: {
      animationStyle: 'slideFadeIn',
    },
    input: {},
    group: {},
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'pointer!',
      userSelect: 'none',
      alignItems: 'center',
      pl: '{spacing.gap.component.lg}',
      pr: '{spacing.gap.inline.sm}',
      outline: 'none',
      transition: 'common',

      _focus: {
        bg: '{colors.primary.bg}',
        color: '{colors.text.primary}',
      },

      ['&[data-disabled="true"]']: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: '{colors.border.secondary}',
    },
    itemIndicator: {
      position: 'absolute',
      left: '{spacing.padding.inline.xs}',
      display: 'flex',
      h: '{sizes.icon.sm}',
      w: '{sizes.icon.sm}',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    styling: {
      outline: {
        trigger: {
          border: '{borders.default.xs}',
          _hover: {
            border: '{borders.hover.xs}',
          },
          _focus: {
            border: '{borders.hover.xs}!',
            shadow: '{shadows.primary.2xs}',
          },

          '&[data-status=error]': {
            borderColor: '{colors.error.border}!',
            _hover: {
              borderColor: '{colors.error.borderHover}!',
            },
            _focus: {
              borderColor: '{colors.error.borderHover}!',
              shadow: '{shadows.error.2xs}',
            },
          },

          '&[data-status=success]': {
            borderColor: '{colors.success.border}!',
            _hover: {
              borderColor: '{colors.success.borderHover}!',
            },
            _focus: {
              borderColor: '{colors.success.borderHover}!',
              shadow: '{shadows.success.2xs}',
            },
          },

          '&[data-status=warning]': {
            borderColor: '{colors.warning.border}!',
            _hover: {
              borderColor: '{colors.warning.borderHover}!',
            },
            _focus: {
              borderColor: '{colors.warning.borderHover}!',
              shadow: '{shadows.warning.2xs}',
            },
          },
        },
      },
      underlined: {
        trigger: {
          borderColor: 'transparent!',
          position: 'relative',
          _after: {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            h: '{sizes.underlineHeight.default}',
            bg: {
              base: '{colors.border}',
              '[data-status="error"]&': '{colors.error.border}',
              '[data-status="success"]&': '{colors.success.border}',
              '[data-status="warning"]&': '{colors.warning.border}',
            },
          },
          _hover: {
            _after: {
              bg: {
                base: '{colors.primary.hover}',
                '[data-status="error"]&': '{colors.error.hover}',
                '[data-status="success"]&': '{colors.success.hover}',
                '[data-status="warning"]&': '{colors.warning.hover}',
              },
            },
          },
          _focus: {
            _after: {
              h: '{sizes.underlineHeight.active}',
              bg: {
                base: '{colors.primary.hover}',
                '[data-status="error"]&': '{colors.error.hover}',
                '[data-status="success"]&': '{colors.success.hover}',
                '[data-status="warning"]&': '{colors.warning.hover}',
              },
            },
          },
        },
      },
      filled: {
        trigger: {
          bg: '{colors.fill.secondary}!',
          borderColor: 'transparent!',

          _hover: {
            bg: '{colors.fill}!',
            color: '{colors.text}!',
            '& span': {
              color: {
                '[data-status="error"]&': '{colors.error.text}',
                ' [data-status="warning"]&': '{colors.warning.text}',
                ' [data-status="success"]&': '{colors.success.text}',
              },
            },
          },
          _focus: {
            bg: '{colors.surface.elevated}!',
            border: '{borders.hover.xs}!',
          },

          '&[data-status="success"]': {
            bg: '{colors.success.bg}!',
            _hover: { bg: '{colors.success.bgHover}!' },
            _focus: { border: '{borders.success.xs}!' },
          },

          '&[data-status="error"]': {
            bg: '{colors.error.bg} !',
            _hover: { bg: '{colors.error.bgHover}!' },
            _focus: { border: '{borders.error.xs}!' },
          },

          '&[data-status="warning"]': {
            bg: '{colors.warning.bg}!',
            _hover: { bg: '{colors.warning.bgHover}!' },
            _focus: { border: '{borders.warning.xs}!' },
          },
        },
      },
      borderless: {
        trigger: {
          borderColor: 'transparent!',
          '& span': {
            color: {
              '[data-status="error"]&': '{colors.error.text}',
              ' [data-status="warning"]&': '{colors.warning.text}',
              ' [data-status="success"]&': '{colors.success.text}',
            },
          },
        },
      },
    },
    size: {
      sm: {
        trigger: {
          minH: '{sizes.controlHeight.sm}',
          maxH: '{sizes.controlHeight.sm}',
          px: '{spacing.padding.inline.sm}!',
          py: '{spacing.padding.block.sm}!',
          '& *': {
            textStyle: 'sm',
          },
        },
        content: {
          '& *': {
            textStyle: 'sm',
          },
        },
        item: {
          py: '{spacing.padding.block.sm}',
        },
      },
      md: {
        trigger: {
          minH: '{sizes.controlHeight.md}',
          maxH: '{sizes.controlHeight.md}',
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.md}',
          '& *': {
            textStyle: 'md',
          },
        },
        content: {
          '& *': {
            textStyle: 'md',
          },
        },
        item: {
          py: '{spacing.padding.block.md}',
        },
      },
      lg: {
        trigger: {
          minH: '{sizes.controlHeight.lg}',
          maxH: '{sizes.controlHeight.lg}',
          px: '{spacing.padding.inline.lg}!',
          py: '{spacing.padding.block.lg}!',

          '& *': {
            textStyle: 'lg',
          },
        },
        content: {
          '& *': {
            textStyle: 'lg',
          },
        },
        item: {
          py: '{spacing.padding.block.lg}',
        },
      },
    },
    radii: {
      sm: {
        trigger: {
          rounded: '{radii.sm}',
        },
        content: {
          '& [cmdk-root]': {
            rounded: '{radii.sm}',
          },
        },
        item: {
          rounded: '{radii.xs}',
        },
      },
      md: {
        trigger: {
          rounded: '{radii.md}',
        },
        content: {
          '& [cmdk-root]': {
            rounded: '{radii.md}',
          },
        },
        item: {
          rounded: '{radii.sm}',
        },
      },
      lg: {
        trigger: {
          rounded: '{radii.lg}',
        },
        content: {
          '& [cmdk-root]': {
            rounded: '{radii.lg}',
          },
        },
        item: {
          rounded: '{radii.md}',
        },
      },
      full: {
        trigger: {
          rounded: '{radii.full}',
        },
        content: {
          '& [cmdk-root]': {
            rounded: '{radii.xl}',
          },
        },
        item: {
          rounded: '{radii.lg}',
        },
      },
    },
  },
  defaultVariants: {
    styling: 'outline',
    size: 'md',
    radii: 'md',
  },
  staticCss: [{ size: ['*'] }],
})
