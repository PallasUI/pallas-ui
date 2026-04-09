import { css } from '@styled-system/css'
import type React from 'react'

interface StepsProps {
  children: React.ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <div
      className={css({
        borderLeftWidth: '2px',
        borderLeftStyle: 'solid',
        borderColor: 'border',
        pl: '4',
        py: '1',
        counterReset: 'step',
        '& h3': {
          counterIncrement: 'step',
          textStyle: 'xl',
        },
      })}
    >
      {children}
    </div>
  )
}
