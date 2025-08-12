import { css, cx } from '@styled-system/css'
import type React from 'react'

export function Preview({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '{spacing.padding.inline.lg}', // Changed from padding.inline.lg
          minH: { base: '100px', md: '200px' },
          bg: 'surface.elevated',
          color: 'text',
        }),
        className,
      )}
    >
      {children}
    </div>
  )
}
