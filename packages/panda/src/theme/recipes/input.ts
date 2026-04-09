import { defineSlotRecipe } from '@pandacss/dev'

export const input = defineSlotRecipe({
  className: 'input',
  description: 'Styles for the Input component',
  slots: ['root', 'prefix', 'postfix', 'field', 'control', 'charCount'],
  base: {
    root: {
      display: 'flex',
      w: 'full',
      px: '{spacing.padding.inline.md}',
      py: '0',
      alignItems: 'center',
      '&:has(input[type=number])': {
        appearance: 'textfield',
      },
      '&:has(input[type="file"])': {
        paddingInlineStart: '0',
        overflow: 'hidden',
      },
      transition: 'common',
      position: 'relative',

      // Base styles
      focusRingOffsetColor: '{colors.fill.secondary}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',

      // Disabled state
      _inputDisabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}',
        border: '{borders.disabled.xs}',
      },

      '&:has(input[type="number"])': {
        pr: '0!',
      },
    },
    prefix: {
      display: 'flex',
      width: 'max-content',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.text.secondary}',
      textStyle: 'sm',
    },
    postfix: {
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.text.secondary}',
      textStyle: 'sm',
    },
    field: {
      w: 'full',
      h: '98%',
      py: '{spacing.padding.block.md}',
      bg: 'transparent',
      textStyle: 'sm',

      '&[data-char-count]': {
        paddingInlineEnd: '48px',
      },

      _focus: {
        outline: 'none',
        border: 'none',
      },

      _file: {
        border: 'none',
        borderInlineEnd: '1px solid {colors.surface.elevated}',
        bg: '{colors.fill.secondary}',
        color: '{colors.text.DEFAULT}',
        textStyle: 'sm',
        fontWeight: 'medium',
        paddingInline: '{spacing.padding.inline.sm}',
        paddingBlock: '0',
        borderRadius: '0',
        h: 'full',
        marginBlock: '0',
        cursor: 'pointer',
      },
      '&[type="file"]': {
        py: '0',
        h: 'full',
        alignSelf: 'stretch',
        cursor: 'pointer',
      },

      _placeholder: {
        color: '{colors.text.tertiary}',
      },
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
      },
      '&::-webkit-autofill, &::-webkit-autofill:focus, &::-webkit-autofill:hover, &::-webkit-autofill:active':
        {
          WebkitBoxShadow: '0 0 0 1000px {colors.fill.secondary} inset !important',
          WebkitTextFillColor: '{colors.text.secondary} !important',
        },

      '&[disabled]': {
        cursor: 'not-allowed',
      },
    },
    charCount: {
      position: 'absolute',
      right: '2',
      top: '50%',
      transform: 'translateY(-50%)',
      textStyle: 'xs',
      color: '{colors.text.tertiary}',
      pointerEvents: 'none',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '6',
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1',
      color: '{colors.text.secondary}',
      cursor: 'pointer',
      _hover: {
        bg: '{colors.fill.secondary}',
      },
      _active: {
        bg: '{colors.fill}',
      },
      '&[disabled]': {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: {
          bg: 'revert',
        },
      },
      _first: {
        borderTopRightRadius: '{radii.md}',
      },
      _last: {
        borderBottomRightRadius: '{radii.md}',
      },
    },
  },
  variants: {
    styling: {
      outline: {
        root: {
          border: '{borders.default.xs}',
          _inputHover: {
            border: '{borders.hover.xs}',
          },
          _inputFocus: {
            border: '{borders.hover.xs}',
            shadow: '{shadows.primary.2xs}',
          },

          // Success state
          _inputSuccess: {
            border: '{borders.success.xs}',
          },
          _inputSuccessHover: {
            border: '{borders.successHover.xs}',
          },
          _inputSuccessFocus: {
            border: '{borders.successHover.xs}',
            shadow: '{shadows.success.2xs}',
          },

          // Error state
          _inputError: {
            border: '{borders.error.xs}',
          },
          _inputErrorHover: {
            border: '{borders.errorHover.xs}',
          },
          _inputErrorFocus: {
            border: '{borders.errorHover.xs}',
            shadow: '{shadows.error.2xs}',
          },

          // Warning state
          _inputWarning: {
            border: '{borders.warning.xs}',
          },
          _inputWarningHover: {
            border: '{borders.warningHover.xs}',
          },
          _inputWarningFocus: {
            border: '{borders.warningHover.xs}',
            shadow: '{shadows.warning.2xs}',
          },
        },
      },
      underlined: {
        root: {
          borderBottom: '{borders.default.xs}',
          rounded: '0',
          _inputHover: {
            borderBottom: '{borders.hover.xs}',
          },
          _inputFocus: {
            borderBottom: '{borders.hover.xs}',
          },

          // Success state
          _inputSuccess: {
            borderBottom: '{borders.success.xs}',
          },
          _inputSuccessHover: {
            borderBottom: '{borders.successHover.xs}',
          },
          _inputSuccessFocus: {
            borderBottom: '{borders.successHover.xs}',
          },

          // Error state
          _inputError: {
            borderBottom: '{borders.error.xs}',
          },
          _inputErrorHover: {
            borderBottom: '{borders.errorHover.xs}',
          },
          _inputErrorFocus: {
            borderBottom: '{borders.errorHover.xs}',
          },

          // Warning state
          _inputWarning: {
            borderBottom: '{borders.warning.xs}',
          },
          _inputWarningHover: {
            borderBottom: '{borders.warningHover.xs}',
          },
          _inputWarningFocus: {
            borderBottom: '{borders.warningHover.xs}',
          },
        },
        control: {
          rounded: '0',
        },
      },
      filled: {
        root: {
          bg: '{colors.fill.secondary}',
          border: '{borders.default.xs}',
          borderColor: 'transparent',
          _inputHover: {
            bg: '{colors.fill}',
          },
          _inputFocus: {
            bg: '{colors.surface.elevated}!',
            border: '{borders.hover.xs}',
          },
          transition: 'common',

          // Success state
          _inputSuccess: {
            bg: '{colors.success.bg}',
          },
          _inputSuccessHover: {
            bg: '{colors.success.bgHover}',
          },
          _inputSuccessFocus: {
            border: '{borders.success.xs}',
          },

          // Error state
          _inputError: {
            bg: '{colors.error.bg}',
          },
          _inputErrorHover: {
            bg: '{colors.error.bgHover}',
          },
          _inputErrorFocus: {
            border: '{borders.error.xs}',
          },

          // Warning state
          _inputWarning: {
            bg: '{colors.warning.bg}',
          },
          _inputWarningHover: {
            bg: '{colors.warning.bgHover}',
          },
          _inputWarningFocus: {
            border: '{borders.warning.xs}',
          },
        },
        field: {
          _file: {
            bg: '{colors.fill.secondary}',
            borderInlineEnd: '0',
            borderRight: '0',
            _hover: {
              bg: '{colors.fill.secondary}',
            },
          },
        },
      },
      borderless: {
        root: {
          color: {
            _inputSuccess: '{colors.success.text}',
            _inputError: '{colors.error.text}',
            _inputWarning: '{colors.warning.text}',
          },
        },
        control: {
          rounded: '0',
        },
      },
    },
    size: {
      sm: {
        root: {
          h: '{sizes.controlHeight.sm}',
          px: '{spacing.padding.inline.sm}',
          '&:has(input[type="file"])': {
            paddingInlineStart: '0',
          },
        },
        field: {
          textStyle: 'sm',
          py: '{spacing.padding.block.sm}',

          _file: {
            textStyle: 'xs',
            paddingBlock: '0',
          },
          '&[type="file"]': {
            py: '0',
            h: 'full',
            alignSelf: 'stretch',
          },
        },
        control: {
          width: '6',
        },
        prefix: {
          pr: '{spacing.padding.inline.xs}',
        },
        postfix: {
          pl: '{spacing.padding.inline.xs}',
        },
      },
      md: {
        root: {
          h: '{sizes.controlHeight.md}',
          px: '{spacing.padding.inline.md}',
          '&:has(input[type="file"])': {
            paddingInlineStart: '0',
          },
        },
        field: {
          textStyle: 'sm',
          py: '{spacing.padding.block.md}',
          '&[type="file"]': {
            py: '0',
            h: 'full',
            alignSelf: 'stretch',
          },
        },
        control: {
          width: '7',
        },
        prefix: {
          pr: '{spacing.padding.inline.sm}',
        },
        postfix: {
          pl: '{spacing.padding.inline.sm}',
        },
      },
      lg: {
        root: {
          h: '{sizes.controlHeight.lg}',
          px: '{spacing.padding.inline.lg}',
          '&:has(input[type="file"])': {
            paddingInlineStart: '0',
          },
        },
        field: {
          textStyle: 'md',
          py: '{spacing.padding.block.lg}',

          _file: {
            textStyle: 'sm',
            paddingBlock: '0',
          },
          '&[type="file"]': {
            py: '0',
            h: 'full',
            alignSelf: 'stretch',
          },
        },
        control: {
          width: '8',
        },
        prefix: {
          pr: '{spacing.padding.inline.md}',
        },
        postfix: {
          pl: '{spacing.padding.inline.md}',
        },
      },
    },
    radii: {
      sm: {
        root: {
          rounded: '{radii.sm}',
        },
        control: {
          _first: {
            borderTopRightRadius: '{radii.sm}',
          },
          _last: {
            borderBottomRightRadius: '{radii.sm}',
          },
        },
      },
      md: {
        root: {
          rounded: '{radii.md}',
        },
      },
      lg: {
        root: {
          rounded: '{radii.lg}',
        },
        _first: {
          borderTopRightRadius: '{radii.lg}',
        },
        _last: {
          borderBottomRightRadius: '{radii.lg}',
        },
      },
      full: {
        root: {
          rounded: '{radii.full}',
        },
        control: {
          _first: {
            borderTopRightRadius: '{radii.full}',
          },
          _last: {
            borderBottomRightRadius: '{radii.full}',
          },
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
