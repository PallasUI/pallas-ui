import { progress } from '@styled-system/recipes'
import { useMemo } from 'react'
import { ProgressBar } from 'react-aria-components'
import { createStyleContext } from '~/utils/style-context'
import type { RootProps } from '.'
import { ProgressContext } from './context'

export const { withProvider, withContext } = createStyleContext(progress)

const RootComponent = withProvider<React.ElementRef<typeof ProgressBar>, RootProps>(
  ProgressBar,
  'root',
)

export const Root = (props: RootProps) => {
  // biome-ignore format: to apply ts-ignore on props type
  //@ts-ignore
  const [variantProps, { width: w, height: h, steps, stepToGapRatio, children }] = progress.splitVariantProps(props)

  const width = w || 100
  const strokeWidth = useMemo(() => {
    if (variantProps.shape === 'circle') {
      switch (variantProps.strokeWidth) {
        case 'lg':
          return 8
        case 'md':
          return 5
        case 'sm':
          return 3
        default:
          return variantProps.strokeWidth ? Number(variantProps.strokeWidth) : 5
      }
    }
    switch (variantProps.strokeWidth) {
      case 'lg':
        return 4
      case 'md':
        return 2
      case 'sm':
        return 1
      default:
        return variantProps.strokeWidth ? Number(variantProps.strokeWidth) : 2
    }
  }, [variantProps.strokeWidth, variantProps.shape])

  const height = useMemo(() => {
    switch (props.shape) {
      case 'circle':
        return h || 100
      default:
        return strokeWidth
    }
  }, [props.shape, strokeWidth, h])

  const strokeLinecap = useMemo(() => {
    switch (props.strokeLinecap) {
      case 'round':
        return 'round'
      default:
        return 'butt'
    }
  }, [props.strokeLinecap])

  return (
    <ProgressContext.Provider
      value={{
        width,
        height,
        strokeWidth,
        strokeLinecap,
        steps: steps || 1,
        stepToGapRatio: stepToGapRatio || 9,
      }}
    >
      <RootComponent {...props}>{children}</RootComponent>
    </ProgressContext.Provider>
  )
}
