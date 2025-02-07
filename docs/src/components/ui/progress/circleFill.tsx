import type { HTMLStyledProps } from '@styled-system/types'
import { useMemo, useRef } from 'react'
import { useProgressContext } from './context'
import { withContext } from './root'

export const Component = withContext<React.ElementRef<'circle'>, HTMLStyledProps<'circle'>>(
  'circle',
  'circleFill',
)

export const CircleFill = ({
  percentage,
  ...props
}: HTMLStyledProps<'circle'> & { percentage?: number }) => {
  const { height, width, strokeWidth, steps, stepToGapRatio } = useProgressContext()
  const maskId = useRef(crypto.randomUUID()).current

  const cx = width / 2
  const cy = height / 2
  const radius = (Math.min(height, width) - strokeWidth) / 2
  const circumference = 2 * radius * Math.PI

  const strokeDasharray = useMemo(() => {
    if (steps <= 1) return `${circumference} ${circumference}`
    const section = circumference / steps
    return `${(section * stepToGapRatio) / (stepToGapRatio + 1)} ${(section * 1) / (stepToGapRatio + 1)}`
  }, [steps, circumference, stepToGapRatio])

  const strokeDashoffsetFactor = (100 - Number(percentage)) / 100
  const strokeDashoffset = steps === 1 ? strokeDashoffsetFactor * circumference : 0

  return (
    <>
      <mask id={maskId} maskContentUnits="objectBoundingBox">
        <rect fill="black" x="0" y="0" width="100%" height="100%" />
        <circle
          cx="0.5"
          cy="0.5"
          r="0.5"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray={Math.PI}
          strokeDashoffset={strokeDashoffsetFactor * Math.PI}
        />
      </mask>
      <Component
        cx={cx}
        cy={cy}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${cx} ${cy})`}
        mask={steps > 1 ? `url(#${maskId})` : undefined}
        {...props}
      />
    </>
  )
}
