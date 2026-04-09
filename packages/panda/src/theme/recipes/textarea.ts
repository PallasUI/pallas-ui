import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  description: 'Styles for the Textarea component',
  base: {
    display: 'flex',
    minH: '20',
    w: 'full',
    px: '{spacing.padding.inline.md}',
    py: '{spacing.padding.block.md}',

    transition: 'common',

    focusRingOffsetColor: '{colors.fill.secondary}',
    bg: '{colors.surface.elevated}',
    color: '{colors.text.secondary}',

    _placeholder: {
      color: '{colors.text.tertiary}',
    },

    _focusVisible: {
      outline: 'none',
    },

    _disabled: {
      cursor: 'not-allowed',
      color: '{colors.text.disabled}',
      bg: '{colors.fill.disabled}',
      opacity: '0.6',
      border: '{borders.disabled.xs}!',
    },
  },

  variants: {
    variant: {
      outline: {
        border: '{borders.default.xs}',
        _hover: {
          border: '{borders.hover.xs}',
        },
        _focus: {
          border: '{borders.hover.xs}',
          shadow: '{shadows.primary.2xs}',
        },

        // Success state
        _statusSuccess: {
          border: '{borders.success.xs}',
          _hover: {
            border: '{borders.successHover.xs}',
          },
          _focus: {
            border: '{borders.successHover.xs}',
            shadow: '{shadows.success.2xs}',
          },
        },

        // Error state
        _statusError: {
          border: '{borders.error.xs}',
          _hover: {
            border: '{borders.errorHover.xs}',
          },
          _focus: {
            border: '{borders.errorHover.xs}',
            shadow: '{shadows.error.2xs}',
          },
        },

        // Warning state
        _statusWarning: {
          border: '{borders.warning.xs}',
          _hover: {
            border: '{borders.warningHover.xs}',
          },
          _focus: {
            border: '{borders.warningHover.xs}',
            shadow: '{shadows.warning.2xs}',
          },
        },
      },
      underlined: {
        borderBottom: '{borders.default.xs}',
        rounded: '0',
        _hover: {
          borderBottom: '{borders.hover.xs}',
        },
        _focus: {
          borderBottom: '{borders.hover.xs}',
        },

        // Success state
        _statusSuccess: {
          borderBottom: '{borders.success.xs}',
          _hover: {
            borderBottom: '{borders.successHover.xs}',
          },
          _focus: {
            borderBottom: '{borders.successHover.xs}',
          },
        },

        // Error state
        _statusError: {
          borderBottom: '{borders.error.xs}',
          _hover: {
            borderBottom: '{borders.errorHover.xs}',
          },
          _focus: {
            borderBottom: '{borders.errorHover.xs}',
          },
        },

        // Warning state
        _statusWarning: {
          borderBottom: '{borders.warning.xs}',
          _hover: {
            borderBottom: '{borders.warningHover.xs}',
          },
          _focus: {
            borderBottom: '{borders.warningHover.xs}',
          },
        },
      },
      filled: {
        bg: '{colors.fill.secondary}',
        border: '{borders.default.xs}',
        borderColor: 'transparent',
        _hover: {
          bg: '{colors.fill}',
        },
        _focus: {
          bg: '{colors.surface.elevated}!',
          border: '{borders.hover.xs}',
        },

        // Success state
        _statusSuccess: {
          bg: '{colors.success.bg}',
          _hover: {
            bg: '{colors.success.bgHover}',
          },
          _focus: {
            border: '{borders.success.xs}',
          },
        },

        // Error state
        _statusError: {
          bg: '{colors.error.bg}',
          _hover: {
            bg: '{colors.error.bgHover}',
          },
          _focus: {
            border: '{borders.error.xs}',
          },
        },

        // Warning state
        _statusWarning: {
          bg: '{colors.warning.bg}',
          _hover: {
            bg: '{colors.warning.bgHover}',
          },
          _focus: {
            border: '{borders.warning.xs}',
          },
        },
      },
      borderless: {
        color: {
          _statusSuccess: '{colors.success.text}',
          _statusError: '{colors.error.text}',
          _statusWarning: '{colors.warning.text}',
        },
      },
    },
    size: {
      sm: {
        textStyle: 'sm',
        px: '{spacing.padding.inline.sm}',
        py: '{spacing.padding.block.sm}',
      },
      md: {
        textStyle: 'md',
        px: '{spacing.padding.inline.md}',
        py: '{spacing.padding.block.md}',
      },
      lg: {
        textStyle: 'lg',
        px: '{spacing.padding.inline.lg}',
        py: '{spacing.padding.block.lg}',
      },
    },
    radii: {
      sm: {
        rounded: '{radii.sm}',
      },
      md: {
        rounded: '{radii.md}',
      },
      lg: {
        rounded: '{radii.lg}',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
    radii: 'md',
  },
})
