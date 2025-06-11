import { defineSlotRecipe } from '@pandacss/dev'

export const steps = defineSlotRecipe({
  className: 'steps',
  description: 'Styles for the Steps component',
  slots: ['root', 'step', 'trigger', 'stepContent', 'item', 'indicator', 'separator', 'list'],
  base: {
    root: {
      display: 'flex',
      gap: '{spacing.gap.component.sm}',
      _horizontal: {
        width: '100%',
        flexDirection: 'column',
      },
      _vertical: {
        flexDirection: 'row',
        height: '100%',
      },
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      _complete: {
        backgroundColor: '{colors.primary.bg}',
      },
      _vertical: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      _horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    stepContent: {
      display: 'flex',
    },
    item: {
      position: 'relative',
      display: 'flex',
      flex: '1 0 0',
      _horizontal: {
        alignItems: 'center',
      },
      _vertical: {
        alignItems: 'flex-start',
        flexDirection: 'column',
      },
      '&:last-of-type': {
        flex: 'initial',
      },
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '{radii.full}',
      width: '{sizes.icon.md}',
      height: '{sizes.icon.md}',
      fontSize: '{fontSizes.md}',

      _current: {
        border: '1px solid {colors.fill.secondary}',
        color: '{colors.text}',
        backgroundColor: '{colors.primary.bg}',
      },
      _complete: {
        backgroundColor: '{colors.primary}',
        border: '1px solid {colors.primary}',
        color: '{colors.bgSolid.text}',
      },
      _incomplete: {
        border: '1px solid {colors.fill.secondary}',
        backgroundColor: '{colors.fill.secondary}',
        color: '{colors.fill}',
      },
    },
    separator: {
      flex: '1 0 0',
      backgroundColor: '{colors.fill.secondary}',
      _vertical: {
        width: '1px',
        height: '100%',
        marginLeft: 'calc({spacing.gap.inline.md} - 0.25rem)',
        marginInline: '{spacing.gap.inline.md}',
        writingMode: 'vertical-rl',
      },
      _horizontal: {
        height: '1px',
        width: '100%',
        marginInline: '{spacing.gap.inline.sm}',
      },
      _complete: {
        backgroundColor: '{colors.primary}',
      },
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      gap: '{spacing.gap.inline.xs}',
      textAlign: 'start',
      borderRadius: '{radii.sm}',
      _incomplete: {
        color: '{colors.fill}',
        '& *': {
          color: '{colors.fill}',
        },
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: '{spacing.gap.component.xs}',
        },
        indicator: {
          width: '{sizes.icon.sm}',
          height: '{sizes.icon.sm}',
          fontSize: '{fontSizes.sm}',
        },
        separator: {
          _vertical: {
            width: '1px',
            marginLeft: 'calc({spacing.gap.inline.sm} - 0.25rem)',
            marginInline: '{spacing.gap.inline.sm}',
          },
          _horizontal: {
            height: '1px',
            marginInline: '{spacing.gap.inline.xs}',
          },
        },
        trigger: {
          gap: '{spacing.gap.inline.2xs}',
          fontSize: '{fontSizes.sm}',
          '& *': {
            fontSize: 'inherit',
          },
        },
      },
      md: {
        root: {
          gap: '{spacing.gap.component.sm}',
        },
        indicator: {
          width: '{sizes.icon.md}',
          height: '{sizes.icon.md}',
          fontSize: '{fontSizes.md}',
        },
        separator: {
          _vertical: {
            width: '1px',
            marginLeft: 'calc({spacing.gap.inline.md} - 0.25rem)',
            marginInline: '{spacing.gap.inline.md}',
          },
          _horizontal: {
            height: '1px',
            marginInline: '{spacing.gap.inline.sm}',
          },
        },
        trigger: {
          gap: '{spacing.gap.inline.xs}',
          fontSize: '{fontSizes.md}',
          '& *': {
            fontSize: 'inherit',
          },
        },
      },
      lg: {
        root: {
          gap: '{spacing.gap.component.md}',
        },
        indicator: {
          width: '{sizes.icon.lg}',
          height: '{sizes.icon.lg}',
          fontSize: '{fontSizes.lg}',
        },
        separator: {
          _vertical: {
            width: '2px',
            marginLeft: 'calc({spacing.gap.inline.lg} - 0.3rem)',
            marginInline: '{spacing.gap.inline.lg}',
          },
          _horizontal: {
            height: '2px',
            marginInline: '{spacing.gap.inline.md}',
          },
        },
        trigger: {
          gap: '{spacing.gap.inline.sm}',
          fontSize: '{fontSizes.lg}',
          '& *': {
            fontSize: 'inherit',
          },
        },
      },
    },
  },
})
