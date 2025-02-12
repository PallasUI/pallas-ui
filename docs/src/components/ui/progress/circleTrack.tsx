import type { HTMLStyledProps } from '@styled-system/types'
import { useMemo } from 'react'
import { useProgressContext } from './context'
import { withContext } from './root'

const Component = withContext<React.ElementRef<'circle'>, HTMLStyledProps<'circle'>>(
  'circle',
  'circleTrack',
)

export const CircleTrack = (props: HTMLStyledProps<'circle'>) => {
  const { height, width, strokeWidth, steps, stepToGapRatio } = useProgressContext()

  const cx = width / 2
  const cy = height / 2
  const radius = (Math.min(height, width) - strokeWidth) / 2
  const circumference = 2 * radius * Math.PI

  const strokeDasharray = useMemo(() => {
    if (steps <= 1) return undefined
    const section = circumference / steps
    return `${(section * stepToGapRatio) / (stepToGapRatio + 1)} ${(section * 1) / (stepToGapRatio + 1)}`
  }, [steps, circumference, stepToGapRatio])

  return (
    <Component
      cx={cx}
      cy={cy}
      r={radius}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      transform={`rotate(-90 ${cx} ${cy})`}
      {...props}
    />
  )
}
