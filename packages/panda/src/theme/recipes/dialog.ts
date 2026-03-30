import { defineSlotRecipe } from '@pandacss/dev'

export const dialog = defineSlotRecipe({
  className: 'dialog',
  description: 'Styles for the Dialog component',
  slots: ['root', 'overlay', 'content', 'header', 'close'],
  base: {
    header: {
      srOnly: true,
    },
    overlay: {
      position: 'fixed',
      inset: '0',
      zIndex: 50,
      bg: '{colors.fill}',
      // bgBlur: 'sm',
    },
    content: {
      position: 'fixed',
      top: '[50vh]',
      left: '[50vw]',
      transform: 'translate(-50%, -50%)',
      zIndex: 52,
      shadow: 'lg',
      rounded: '{radii.lg}',
      bg: 'inherit',
      p: 0,
      animationStyle: 'modalContentShow',
      _closed: {
        animationStyle: 'modalContentHide',
      },
    },
  },
  staticCss: [{ type: ['*'] }],
})
