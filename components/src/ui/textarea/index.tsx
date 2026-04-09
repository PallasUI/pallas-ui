'use client'

import { css, cx } from '@styled-system/css'
import { type TextareaVariantProps, textarea } from '@styled-system/recipes'
import type { SystemStyleObject } from '@styled-system/types'
import React from 'react'

const resizeClasses = {
  none: css({ resize: 'none' }),
  vertical: css({ resize: 'vertical' }),
  horizontal: css({ resize: 'horizontal' }),
  both: css({ resize: 'both' }),
} as const

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  TextareaVariantProps & {
    resize?: keyof typeof resizeClasses
    css?: SystemStyleObject
  }

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, radii, resize = 'vertical', css: cssProp, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cx(textarea({ variant, size, radii }), resizeClasses[resize], cssProp && css(cssProp), className)}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
