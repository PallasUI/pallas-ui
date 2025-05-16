import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  description: 'Styles for the Skeleton component',
  base: {
    animationStyle: 'skeleton',
    rounded: 'md',
    bg: 'fill.secondary',
  },
})
