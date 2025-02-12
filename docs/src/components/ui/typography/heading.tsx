import { type Styles, css, cx } from '@styled-system/css'
import { type HeadingVariantMap, heading as headingStyles } from '@styled-system/recipes'
import type React from 'react'
import { type ReactNode, forwardRef } from 'react'

type HeadingProps = React.ComponentPropsWithRef<'h1'> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'normal' | 'accent'
  color?: 'default' | 'secondary' | 'disabled'
  children: ReactNode
  css?: Styles
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, variant = 'normal', color, children, css: cssProp, ...props }, ref) => {
    const headingStylesRaw = headingStyles({
      level: level as unknown as HeadingVariantMap['level'],
      variant,
      color,
    })
    console.log(headingStylesRaw)
    const headingClassName = cx(headingStylesRaw, css(cssProp || {}))
    const Tag: keyof JSX.IntrinsicElements = `h${level}`

    return (
      <Tag ref={ref} className={headingClassName} {...props}>
        {children}
      </Tag>
    )
  },
)

Heading.displayName = 'Heading'

export default Heading
