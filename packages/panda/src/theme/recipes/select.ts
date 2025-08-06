import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  description: 'Styles for the Select component',
  slots: [
    'root',
    'group',
    'value',
    'trigger',
    'viewport',
    'content',
    'label',
    'item',
    'itemIndicator',
    'separator',
  ],
  base: {
    trigger: {
      display: 'flex',
      h: '{sizes.controlHeight.md}',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'space-between',
      bg: '{colors.surface.elevated}',
      // rounded: '{radii.md}',
      cursor: 'pointer',
      transition: 'common',
      outline: 'none',

      _focus: {
        outline: 'none',
      },

      _placeholder: {
        color: '{colors.text.secondary}',
      },

      _disabled: {
        '> *': {
          cursor: 'not-allowed',
          color: '{colors.text.disabled} ',
          bg: '{colors.fill.disabled}',
          borderColor: '{colors.border} ',
          _hover: {
            borderColor: '{colors.border}!',
            color: '{colors.text.disabled}!',
          },
        },
      },

      '& > svg': {
        ml: '{spacing.padding.inline.md}',
      },
    },
    viewport: {
      p: '{spacing.padding.block.sm}',

      '&[data-position=popper]': {
        h: 'var(--radix-select-trigger-height)',
        w: 'full',
        minW: 'var(--radix-select-trigger-width)',
      },
    },
    content: {
      position: 'relative',
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      // rounded: '{radii.md}',
      border: '{borders.default.xs}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text}',
      shadow: 'md',
      mt: '{spacing.layout.default.2xs}',
      mb: '{spacing.layout.default.2xs}',

      animationStyle: 'slideFadeIn',
      animationDuration: '{durations.normal}',
    },
    label: {
      color: '{colors.text.tertiary}',
      fontSize: 'sm',
      py: '{spacing.padding.block.xs}',
      px: '{spacing.padding.block.sm}',

      fontWeight: 'medium',
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'pointer',
      userSelect: 'none',
      alignItems: 'center',
      // rounded: '{radii.sm}',
      pl: '{spacing.gap.component.lg}',
      pr: '{spacing.gap.inline.sm}',
      outline: 'none',
      transition: 'common',

      _focus: {
        bg: '{colors.primary.bg}',
        color: '{colors.text.primary}',
      },

      ['&[data-disabled]']: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    itemIndicator: {
      position: 'absolute',
      left: '{spacing.padding.inline.xs}',
      display: 'flex',
      h: '{sizes.iconSize.sm}',
      w: '{sizes.iconSize.sm}',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: '{colors.border.secondary}',
    },
  },
  variants: {
    styling: {
      outline: {
        trigger: {
          border: '{borders.default.xs}',
          _hover: {
            border: '{borders.hover.xs}',
            color: '{colors.text} ',
          },
          _focus: {
            border: '{borders.hover.xs}',
            shadow: '{shadows.input.default}',
          },

          '[data-status="error"]&': {
            borderColor: '{colors.error.border}',
            _hover: {
              borderColor: '{colors.error.borderHover}',
            },
            _focus: {
              borderColor: '{colors.error.borderHover}',
              shadow: '{shadows.error.2xs}',
            },
          },

          '&[data-status="success"]': {
            borderColor: '{colors.success.border}',
            _hover: {
              borderColor: '{colors.success.borderHover}',
            },
            _focus: {
              borderColor: '{colors.success.borderHover}',
              shadow: '{shadows.success.2xs}',
            },
          },

          '&[data-status="warning"]': {
            borderColor: '{colors.warning.border}',
            _hover: {
              borderColor: '{colors.warning.borderHover}',
            },
            _focus: {
              borderColor: '{colors.warning.borderHover}',
              shadow: '{shadows.warning.2xs}',
            },
          },
        },
      },
      underlined: {
        trigger: {
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
          bg: '{colors.fill.secondary}',
          border: '{borders.default.xs}',
          borderColor: 'transparent',

          _hover: {
            bg: '{colors.fill}',
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
            border: '{borders.hover.xs}',
          },

          '&[data-status="success"]': {
            bg: '{colors.success.bg}',
            _hover: { bg: '{colors.success.bgHover}' },
            _focus: { border: '{borders.success.xs}' },
          },

          '&[data-status="error"]': {
            bg: '{colors.error.bg}',
            _hover: { bg: '{colors.error.bgHover}' },
            _focus: { border: '{borders.error.xs}' },
          },

          '&[data-status="warning"]': {
            bg: '{colors.warning.bg}',
            _hover: { bg: '{colors.warning.bgHover}' },
            _focus: { border: '{borders.warning.xs}' },
          },
        },
      },
      borderless: {
        trigger: {
          borderColor: 'transparent',
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
          h: '{sizes.controlHeight.sm}',
          textStyle: 'sm',
          px: '{spacing.padding.inline.sm}',
          py: '{spacing.padding.block.xs}',
        },
        content: {
          '& *': {
            textStyle: 'sm',
          },
        },
        item: {
          py: '{spacing.padding.block.xs}',
        },
      },
      md: {
        trigger: {
          h: '{sizes.controlHeight.md}',
          textStyle: 'md',
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.sm}',
        },
        content: {
          '& *': {
            textStyle: 'md',
          },
        },
        item: {
          py: '{spacing.padding.block.sm}',
        },
      },
      lg: {
        trigger: {
          h: '{sizes.controlHeight.lg}',
          textStyle: 'lg',
          px: '{spacing.padding.inline.lg}',
          py: '{spacing.padding.block.md}',
        },
        content: {
          '& *': {
            textStyle: 'lg',
          },
        },
        item: {
          py: '{spacing.padding.block.md}',
        },
      },
    },
    radii: {
      sm: {
        trigger: {
          rounded: '{radii.sm}',
        },
        content: {
          rounded: '{radii.sm}',
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
          rounded: '{radii.md}',
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
          rounded: '{radii.lg}',
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
          rounded: '{radii.xl}',
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
})
