import type { HTMLStyledProps } from '@styled-system/types'
import { useMemo } from 'react'
import { useProgressContext } from './context'
import { withContext } from './root'

const Component = withContext<React.ElementRef<'line'>, HTMLStyledProps<'line'>>(
  'line',
  'lineTrack',
)

export const LineTrack = (props: HTMLStyledProps<'line'>) => {
  const { width, height, strokeWidth, strokeLinecap, steps, stepToGapRatio } = useProgressContext()
  const halfStroke = strokeWidth / 2

  const y = height / 2
  const x1 = strokeLinecap === 'round' ? halfStroke : 0
  const x2 = strokeLinecap === 'round' ? width - halfStroke : width

  const strokeDasharray = useMemo(() => {
    if (steps <= 1) return undefined
    const section = (x2 - x1) / steps
    return `${(section * stepToGapRatio) / (stepToGapRatio + 1)} ${(section * 1) / (stepToGapRatio + 1)}`
  }, [steps, x1, x2, stepToGapRatio])

  return (
    <Component
      x1={x1}
      x2={x2}
      y1={y}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeDasharray={strokeDasharray}
      {...props}
    />
  )
}
