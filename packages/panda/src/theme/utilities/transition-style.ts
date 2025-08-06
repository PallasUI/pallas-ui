import type { UtilityConfig } from '@pandacss/types'

export const transition: UtilityConfig = {
  transition: {
    className: 'transition',
    values: {
      common: 'all {durations.slow} ease',
    },
    transform: (value: string) => {
      return {
        transition: value,
      }
    },
  },
}
