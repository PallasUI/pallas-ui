import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
  className: 'carousel',
  description: 'Styles for the Carousel component',
  slots: ['root', 'list', 'item', 'previous', 'next', 'dots', 'dot'],
  base: {
    root: {
      position: 'relative',
    },
    list: {
      display: 'flex',
    },
    item: {
      minWidth: '0',
      flexShrink: '0',
      flexGrow: '0',
      flexBasis: 'full',
    },
    previous: {
      position: 'absolute',
      h: "8",
      w: '8',
      px: '0!',
      py: '0!',
      rounded: 'full',
    },
    next: {
      position: 'absolute',
      h: "8",
      w: '8',
      px: '0!',
      py: '0!',
      rounded: 'full',
    },
    dots: {
      position: 'absolute',
      display: 'flex',
      gap: '{spacing.2}',
    },
    dot: {
      borderWidth: '4',
      borderRadius: 'full',
      w: '4',
      h: '4',
      borderColor: '{colors.border}',
      '&[data-selected=true]': {
        borderColor: '{colors.bgSolid}'
      },
      cursor: 'pointer'
    }
  },
  variants: {
    orientation: {
      horizontal: {
        list: {
          ml: '-4'
        },
        item: {
          pl: '4'
        },
        previous: {
          left: '{spacing.-10}',
          top: '50%',
          translate: '0 -50%',
        },
        next: {
          right: '{spacing.-10}',
          top: '50%',
          translate: '0 -50%',
        },
        dots: {
          justifyContent: 'center',
          bottom: '{spacing.-8}',
          left: '50%',
          translate: '-50% 0',
        }
      },
      vertical: {
        list: {
          flex: 1,
          flexDirection: 'column',
          mt: '-4'
        },
        item: {
          pt: '4'
        },
        previous: {
          top: '{spacing.-10}',
          left: '50%',
          translate: '-50% 0%',
        },
        next: {
          bottom: '{spacing.-10}',
          left: '50%',
          translate: '-50% 0%',
        },
        dots: {
          flexDirection: 'column',
          justifyContent: 'center',
          left: '{spacing.4}',
          top: '50%',
          translate: '0 -50% ',
        }
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})
