import { defineSlotRecipe } from '@pandacss/dev'

export const daypicker = defineSlotRecipe({
  className: 'daypicker',
  description: 'Styles for the DayPicker component',
  slots: [
    'root',
    'months',
    'month',
    'month_caption',
    'weekdays',
    'weekday',
    'caption',
    'caption_label',
    'nav',
    'button_previous',
    'button_next',
    'month_grid',
    'day',
    'selected',
    'today',
    'outside',
    'disabled',
    'range_start',
    'range_middle',
    'range_end',
    'hidden',
    'week',
  ],
  base: {
    root: { w: 'max-content', m: '{spacing.gap.component.sm}' },
    months: {
      display: 'flex',
      flexDirection: 'column',
    },
    month: {
      w: 'full',
      spaceY: '{spacing.gap.component.md}',
    },
    month_caption: {
      position: 'relative',
      h: '7',
      mx: '{spacing.layout.default.md}',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pt: '{spacing.padding.block.sm}',
    },
    caption: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pt: '{spacing.padding.block.sm}',
    },
    caption_label: {
      textStyle: 'sm',
      fontWeight: 'medium',
    },
    nav: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      w: 'full',
    },
    button_previous: {
      position: 'absolute',
      left: '{spacing.gap.inline.xs}',
      size: '{sizes.7}',
      p: '0',
    },
    button_next: {
      position: 'absolute',
      right: '{spacing.gap.inline.xs}',
      size: '{sizes.7}',
      p: '0',
    },
    month_grid: {
      mt: '{spacing.layout.internal.md}',
      mx: 'auto',
    },

    day: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      size: '{sizes.7}',
      p: '0',
      textStyle: 'sm',
      fontWeight: 'normal',
      rounded: '{radii.md}',
      '&[aria-selected="true"]': {
        opacity: '1',
      },
    },
    week: {
      display: 'flex',
      flexDirection: 'row',
      mt: '{spacing.layout.internal.xs}',
      w: 'full',
    },
    weekday: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      w: '7',
      p: '0',
      textStyle: 'sm',
      color: '{colors.text.tertiary}',
    },
    weekdays: {
      display: 'flex',
      flexDirection: 'row',
      mt: '{spacing.layout.internal.xs}',
      w: 'max-content',
    },
    selected: {
      bg: '{colors.primary}',
      color: '{colors.bgSolid.text}',

      _hover: {
        bg: '{colors.primary}',
        color: '{colors.bgSolid.text}',
      },

      _focus: {
        bg: '{colors.primary}',
        color: '{colors.bgSolid.text}',
      },
    },
    today: {
      border: '{borders.primary.sm}',
    },
    outside: {
      color: '{colors.text.secondary}',
    },
    disabled: {
      color: '{colors.text.disabled}',
    },
    range_start: {
      roundedRight: '0',
      _selected: {
        roundedLeft: '{radii.md}',
      },
      _hover: {
        bg: '{colors.primary.hover}',
        color: '{colors.text}',
      },
    },
    range_middle: {
      rounded: '0',
      _selected: {
        bg: '{colors.primary.bg}',
        color: '{colors.text}',

        _hover: {
          bg: '{colors.primary.hover}',
          color: '{colors.text}',
        },
      },
    },
    range_end: {
      roundedLeft: '0',
      roundedRight: '{radii.md}',
      color: '{colors.bgSolid.text}',
      _hover: {
        bg: '{colors.primary.hover}',
        color: '{colors.text}',
      },
    },
    hidden: {
      visibility: 'hidden',
    },
  },
})
