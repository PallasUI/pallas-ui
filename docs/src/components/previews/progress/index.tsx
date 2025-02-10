'use client'

import * as React from 'react'
import Progress from '~/components/ui/progress'
import { SVG } from '~/components/ui/progress/svg'

export default function Example() {
  const [_progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress.Root>
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress</title>
              <Progress.LineTrack />
              <Progress.LineFill x2={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>
  )
}
