import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  description: 'Styles for the Textarea component',
  base: {
    display: 'flex',
    minH: '80px',
    w: 'full',
    bg: '{colors.surface.elevated}',
    px: '{spacing.padding.inline.md}',
    py: '{spacing.padding.block.md}',
    transition: 'common',
    _placeholder: {
      color: '{colors.text.secondary}',
    },

    _focusVisible: {
      outline: 'none',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: '{colors.text.disabled}',
      bg: '{colors.fill.disabled}',
      opacity: 0.75,
      border: '{borders.input.disabled}!',
    },
  },

  variants: {
    styling: {
      outline: {
        border: '{borders.input.default}',
        _hover: {
          border: '{borders.input.hover}',
        },
        _focus: {
          border: '{borders.input.hover}',
          shadow: '{shadows.input.default}',
        },

        // Success state
        '&[data-status="success"]': {
          border: '{borders.input.success}',
          _hover: {
            border: '{borders.input.successHover}',
          },
          _focus: {
            border: '{borders.input.successHover}',
            shadow: '{shadows.input.success}',
          },
        },

        // Error state
        '&[data-status="error"]': {
          border: '{borders.input.error}',
          _hover: {
            border: '{borders.input.errorHover}',
          },
          _focus: {
            border: '{borders.input.errorHover}',
            shadow: '{shadows.input.error}',
          },
        },

        // Warning state
        '&[data-status="warning"]': {
          border: '{borders.input.warning}',
          _hover: {
            border: '{borders.input.warningHover}',
          },
          _focus: {
            border: '{borders.input.warningHover}',
            shadow: '{shadows.input.warning}',
          },
        },
      },
      underlined: {
        borderBottom: '{borders.input.default}',
        rounded: '0',
        _hover: {
          borderBottom: '{borders.input.hover}',
        },
        _focus: {
          borderBottom: '{borders.input.hover}',
        },

        // Success state
        '&[data-status="success"]': {
          borderBottom: '{borders.input.success}',
          _hover: {
            borderBottom: '{borders.input.successHover}',
          },
          _focus: {
            borderBottom: '{borders.input.successHover}',
          },
        },

        // Error state
        '&[data-status="error"]': {
          borderBottom: '{borders.input.error}',
          _hover: {
            borderBottom: '{borders.input.errorHover}',
          },
          _focus: {
            borderBottom: '{borders.input.errorHover}',
          },
        },

        // Warning state
        '&[data-status="warning"]': {
          borderBottom: '{borders.input.warning}',
          _hover: {
            borderBottom: '{borders.input.warningHover}',
          },
          _focus: {
            borderBottom: '{borders.input.warningHover}',
          },
        },
      },
      filled: {
        bg: '{colors.fill.secondary}',
        border: '{borders.input.default}',
        borderColor: 'transparent',
        _hover: {
          bg: '{colors.fill}',
        },
        _focus: {
          bg: '{colors.surface.elevated}!',
          border: '{borders.input.hover}',
        },

        // Success state
        '&[data-status="success"]': {
          bg: '{colors.success.bg}',
          _hover: {
            bg: '{colors.success.bgHover}',
          },
          _focus: {
            border: '{borders.input.success}',
          },
        },

        // Error state
        '&[data-status="error"]': {
          bg: '{colors.error.bg}',
          _hover: {
            bg: '{colors.error.bgHover}',
          },
          _focus: {
            border: '{borders.input.error}',
          },
        },

        // Warning state
        '&[data-status="warning"]': {
          bg: '{colors.warning.bg}',
          _hover: {
            bg: '{colors.warning.bgHover}',
          },
          _focus: {
            border: '{borders.input.warning}',
          },
        },
      },
      borderless: {
        color: {
          '&[data-status="success"]': '{colors.success.text}',
          '&[data-status="error"]': '{colors.error.text}',
          '&[data-status="warning"]': '{colors.warning.text}',
        },
      },
    },
    size: {
      sm: {
        textStyle: 'sm',
        px: '{spacing.padding.inline.sm}',
      },
      md: {
        textStyle: 'md',
      },
      lg: {
        textStyle: 'lg',
        px: '{spacing.padding.inline.lg}',
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
    styling: 'outline',
    size: 'md',
    radii: 'md',
  },
})
