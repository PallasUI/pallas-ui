import { css, cx } from '@styled-system/css'
import type React from 'react'

export type PreviewProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Omit default inset padding for full-bleed previews (e.g. sidebar). */
  noPadding?: boolean
}

export function Preview({ className, children, noPadding, ...props }: PreviewProps) {
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(noPadding ? {} : { p: '{spacing.padding.inline.lg}' }),
          minH: { base: '100px', md: '200px' },
          bg: 'surface.elevated',
          color: 'text',
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
