import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  description: 'Styles for the Textarea component',
  base: {
    display: 'flex',
    minH: '20',
    w: 'full',
    bg: '{colors.surface.elevated}',
    px: '{spacing.padding.inline.md}',
    py: '{spacing.padding.block.md}',
    transition: 'common',

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
        '&:not(:disabled):hover': {
          border: '{borders.hover.xs}',
        },
        _focus: {
          border: '{borders.hover.xs}',
          shadow: '{shadows.primary.2xs}',
        },

        // Success state
        '&[data-status="success"]': {
          border: '{borders.success.xs}',
          '&:not(:disabled):hover': {
            border: '{borders.successHover.xs}',
          },
          _focus: {
            border: '{borders.successHover.xs}',
            shadow: '{shadows.success.2xs}',
          },
        },

        // Error state
        '&[data-status="error"]': {
          border: '{borders.error.xs}',
          '&:not(:disabled):hover': {
            border: '{borders.errorHover.xs}',
          },
          _focus: {
            border: '{borders.errorHover.xs}',
            shadow: '{shadows.error.2xs}',
          },
        },

        // Warning state
        '&[data-status="warning"]': {
          border: '{borders.warning.xs}',
          '&:not(:disabled):hover': {
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
        '&:not(:disabled):hover': {
          borderBottom: '{borders.hover.xs}',
        },
        _focus: {
          borderBottom: '{borders.hover.xs}',
        },

        // Success state
        '&[data-status="success"]': {
          borderBottom: '{borders.success.xs}',
          '&:not(:disabled):hover': {
            borderBottom: '{borders.successHover.xs}',
          },
          _focus: {
            borderBottom: '{borders.successHover.xs}',
          },
        },

        // Error state
        '&[data-status="error"]': {
          borderBottom: '{borders.error.xs}',
          '&:not(:disabled):hover': {
            borderBottom: '{borders.errorHover.xs}',
          },
          _focus: {
            borderBottom: '{borders.errorHover.xs}',
          },
        },

        // Warning state
        '&[data-status="warning"]': {
          borderBottom: '{borders.warning.xs}',
          '&:not(:disabled):hover': {
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
        '&:not(:disabled):hover': {
          bg: '{colors.fill}',
        },
        _focus: {
          bg: '{colors.surface.elevated}!',
          border: '{borders.hover.xs}',
        },

        // Success state
        '&[data-status="success"]': {
          bg: '{colors.success.bg}',
          '&:not(:disabled):hover': {
            bg: '{colors.success.bgHover}',
          },
          _focus: {
            border: '{borders.success.xs}',
            shadow: '{shadows.success.2xs}',
          },
        },

        // Error state
        '&[data-status="error"]': {
          bg: '{colors.error.bg}',
          '&:not(:disabled):hover': {
            bg: '{colors.error.bgHover}',
          },
          _focus: {
            border: '{borders.error.xs}',
            shadow: '{shadows.error.2xs}',
          },
        },

        // Warning state
        '&[data-status="warning"]': {
          bg: '{colors.warning.bg}',
          '&:not(:disabled):hover': {
            bg: '{colors.warning.bgHover}',
          },
          _focus: {
            border: '{borders.warning.xs}',
            shadow: '{shadows.warning.2xs}',
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
