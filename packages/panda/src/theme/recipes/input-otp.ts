import { defineSlotRecipe } from '@pandacss/dev'

export const inputOTP = defineSlotRecipe({
  className: 'inputOTP',
  description: 'Styles for the Input OTP component',
  slots: ['root', 'group', 'slot', 'separator'],
  base: {
    root: {
      '&[data-disabled="true"] ': {
        '& input[data-input-otp="true"]': {
          cursor: 'not-allowed',
        },
      },
      '& [data-input-otp-container="true"]': {
        display: 'flex',
        gap: '{spacing.2}',
      },
    },
    group: {
      display: 'flex',
      gap: '{spacing.2}',
    },
    slot: {
      px: '{spacing.padding.block.md}',
      py: '{spacing.padding.block.md}',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',

      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',
      borderRadius: '{radii.md}',

      '& [data-slot="input-otp-placeholder"]': {
        opacity: 0.2,
      },

      '& [data-slot="input-otp-caret"]': {
        animationStyle: 'caretBlink',
        fontSize: 'xl',
      },

      '[data-disabled="true"] &': {
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled} !important',
        borderColor: '{colors.border.secondary} ',
      },
    },
    separator: {
      py: '{spacing.padding.block.sm}',
    },
  },
  variants: {
    styling: {
      outline: {
        slot: {
          border: '.8px solid',
          borderColor: {
            base: '{colors.border}',
            _active: '{colors.primary.hover}',
            '[data-status="error"] &': {
              base: '{colors.error.border}',
              _active: '{colors.error.borderHover}',
            },
            '[data-status="warning"] &': {
              base: '{colors.warning.border}',
              _active: '{colors.warning.borderHover}',
            },
            '[data-status="success"] &': {
              base: '{colors.success.border}',
              _active: '{colors.success.borderHover}',
            },
          },
          shadow: {
            _active: {
              base: '0 0 0 2px {colors.primary.bgHover}',
              '[data-status="error"] &': '0 0 0 2px {colors.error.bgHover}',
              '[data-status="warning"] &': '0 0 0 2px {colors.warning.bgHover}',
              '[data-status="success"] &': '0 0 0 2px {colors.success.bgHover}',
            },
          },
        },
      },
      underlined: {
        group: {
          gap: '{spacing.0}',
        },
        slot: {
          borderRadius: 'unset !important',
          borderBottom: {
            base: '1px solid {colors.border}',
            _active: '2px solid {colors.primary.hover}',
          },

          borderColor: {
            '[data-status="error"] &': {
              base: '{colors.error.border}',
              _active: '{colors.error.borderHover}',
            },
            '[data-status="warning"] &': {
              base: '{colors.warning.border}',
              _active: '{colors.warning.borderHover}',
            },
            '[data-status="success"] &': {
              base: '{colors.success.border}',
              _active: '{colors.success.borderHover}',
            },
          },
        },
      },
      filled: {
        slot: {
          bg: {
            base: '{colors.fill.secondary}',
            _active: '{colors.surface.elevated}',
            '[data-status="error"] &': '{colors.error.bg}',
            '[data-status="warning"] &': '{colors.warning.bg}',
            '[data-status="success"] &': '{colors.success.bg}',
          },

          _active: {
            border: '.8px solid {colors.primary.hover}',
          },

          borderColor: {
            _active: {
              '[data-status="error"] &': '{colors.error.borderHover}',
              '[data-status="warning"] &': '{colors.warning.borderHover}',
              '[data-status="success"] &': '{colors.success.borderHover}',
            },
          },
        },
      },
      borderless: {
        slot: {
          color: {
            '[data-status="error"] &': '{colors.error.text}',
            '[data-status="warning"] &': '{colors.warning.text}',
            '[data-status="success"] &': '{colors.success.text}',
          },
        },
      },
    },
    slotSize: {
      sm: {
        slot: {
          w: '{sizes.controlHeight.sm}',
          h: '{sizes.controlHeight.sm}',
          textStyle: 'sm',
          borderRadius: '{radii.sm}',
        },
      },
      md: {
        slot: {
          w: '{sizes.controlHeight.md}',
          h: '{sizes.controlHeight.md}',
          textStyle: 'md',
        },
      },
      lg: {
        slot: {
          w: '{sizes.controlHeight.lg}',
          h: '{sizes.controlHeight.lg}',
          textStyle: 'lg',
          borderRadius: '{radii.lg}',
        },
      },
    },
    shape: {
      rounded: {
        slot: {
          borderRadius: '{radii.full}',
        },
      },
    },
  },
  defaultVariants: {
    styling: 'outline',
    slotSize: 'md',
  },
})
