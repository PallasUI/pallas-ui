import { defineSlotRecipe } from '@pandacss/dev'

export const inputOTP = defineSlotRecipe({
  className: 'inputOTP',
  description: 'Styles for the Input OTP component',
  slots: ['root', 'group', 'slot', 'separator'],
  base: {
    root: {
      '&[data-disabled="true"]': {
        '& input[data-input-otp="true"]': {
          cursor: 'not-allowed',
        },
      },

      // to show multiple groups in a single line
      '& [data-input-otp-container="true"]': {
        display: 'flex',
        gap: '{spacing.gap.inline.xs}',
      },
    },
    group: {
      display: 'flex',
      gap: '{spacing.gap.inline.xs}',
    },
    slot: {
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.md}',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',

      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',

      '& [data-slot="input-otp-placeholder"]': {
        opacity: 0.2,
      },

      '& [data-slot="input-otp-caret"]': {
        animationStyle: 'caretBlink',
        textStyle: 'xl',
        pb: '{spacing.pading.block.sm}',
      },

      '[data-disabled="true"] &': {
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}',
        border: '{borders.disabled.xs}',
      },

      transition: 'common',
    },
    separator: {
      py: '{spacing.padding.block.sm}',
    },
  },
  variants: {
    styling: {
      outline: {
        slot: {
          border: '{borders.default.xs}',
          _active: {
            border: '{borders.hover.xs}',
            shadow: '{shadows.primary.2xs}',
          },
          '[data-status="success"] &': {
            border: '{borders.success.xs}',
            _active: {
              border: '{borders.success.xs}',
              shadow: '{shadows.success.2xs}',
            },
          },
          '[data-status="error"] &': {
            border: '{borders.error.xs}',
            _active: {
              border: '{borders.error.xs}',
              shadow: '{shadows.error.2xs}',
            },
          },
          '[data-status="warning"] &': {
            border: '{borders.warning.xs}',
            _active: {
              border: '{borders.warning.xs}',
              shadow: '{shadows.warning.2xs}',
            },
          },
        },
      },
      underlined: {
        group: {
          gap: '0',
        },
        slot: {
          _after: {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            h: '{sizes.underlineHeight.default}',
            transition: 'common',

            bg: {
              base: '{colors.border}',
              '[data-status="error"] &': '{colors.error.border}',
              '[data-status="warning"] &': '{colors.warning.border}',
              '[data-status="success"] &': '{colors.success.border}',
            },
          },
          _active: {
            _after: {
              h: '{sizes.underlineHeight.active}',
              bg: {
                base: '{colors.primary.hover}',
                '[data-status="error"] &': '{colors.error.borderHover}',
                '[data-status="warning"] &': '{colors.warning.borderHover}',
                '[data-status="success"] &': '{colors.success.borderHover}',
              },
            },
          },
        },
      },
      filled: {
        slot: {
          bg: '{colors.fill.secondary}',

          _active: {
            bg: '{colors.surface.elevated}',
            border: '{borders.hover.xs}',
          },

          '[data-status="success"] &': {
            bg: '{colors.success.bg}',
            _active: {
              border: '{borders.success.xs}',
            },
          },
          '[data-status="error"] &': {
            bg: '{colors.error.bg}',
            _active: {
              border: '{borders.error.xs}',
            },
          },
          '[data-status="warning"] &': {
            bg: '{colors.warning.bg}',
            _active: {
              border: '{borders.warning.xs}',
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
          rounded: '{radii.sm}',

          '& [data-slot="input-otp-caret"]': {
            textStyle: 'md',
          },
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
          rounded: '{radii.lg}',

          '& [data-slot="input-otp-caret"]': {
            textStyle: '2xl',
          },
        },
      },
    },
    radii: {
      sm: {
        slot: {
          rounded: '{radii.sm}',
        },
      },
      md: {
        slot: {
          rounded: '{radii.md}',
        },
      },
      lg: {
        slot: {
          rounded: '{radii.lg}',
        },
      },
      full: {
        slot: {
          rounded: '{radii.full}',
        },
      },
    },
  },
  defaultVariants: {
    styling: 'outline',
    slotSize: 'md',
    radii: 'md',
  },
})
