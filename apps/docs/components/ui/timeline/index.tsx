'use client'

import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { type TimelineVariantProps, timeline } from '@styled-system/recipes'
import type { HTMLStyledProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(timeline)

// Custom placement types to avoid repetition
/** Valid placement values for vertical timeline orientation */
type VerticalPlacement = 'left' | 'right' | 'alternate'
/** Valid placement values for horizontal timeline orientation */
type HorizontalPlacement = 'top' | 'bottom'

// Helper functions for type-safe placement handling
/**
 * Safely extracts vertical placement value, falling back to 'right' if invalid
 */
const getVerticalPlacement = (
  placement: VerticalPlacement | HorizontalPlacement | undefined,
): VerticalPlacement => {
  if (placement === 'left' || placement === 'right' || placement === 'alternate') {
    return placement
  }
  return 'right' // default
}

/**
 * Safely extracts horizontal placement value, falling back to 'bottom' if invalid
 */
const getHorizontalPlacement = (
  placement: VerticalPlacement | HorizontalPlacement | undefined,
): HorizontalPlacement => {
  if (placement === 'top' || placement === 'bottom') {
    return placement
  }
  return 'bottom' // default
}

// Use the generated TimelineVariantProps as base, then extend with conditional logic
type RootProps = Assign<
  HTMLStyledProps<'div'>,
  TimelineVariantProps & {
    // Override placement to be conditional based on orientation
    placement?: VerticalPlacement | HorizontalPlacement
  }
>

const RootPrimitive = withProvider<React.ComponentRef<'div'>, RootProps>('div', 'root')

export const Root = React.forwardRef<React.ComponentRef<'div'>, RootProps>((props, ref) => {
  const { orientation = 'vertical', placement, indicatorSize, textSize, ...rest } = props

  if (orientation === 'vertical') {
    return (
      <RootPrimitive
        ref={ref}
        orientation={orientation}
        placement={getVerticalPlacement(placement)}
        indicatorSize={indicatorSize ?? 'md'}
        textSize={textSize ?? 'sm'}
        {...rest}
      />
    )
  }

  return (
    <RootPrimitive
      ref={ref}
      orientation={orientation}
      placement={getHorizontalPlacement(placement)}
      indicatorSize={indicatorSize ?? 'md'}
      textSize={textSize ?? 'sm'}
      {...rest}
    />
  )
})
Root.displayName = 'Timeline.Root'

// Item
export const Item = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>('div', 'item')

// Indicator
export const Indicator = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'indicator',
)

// Dot
export const Dot = withProvider<
  React.ComponentRef<'div'>,
  Assign<HTMLStyledProps<'div'>, Pick<TimelineVariantProps, 'variant'>>
>('div', 'dot')

// Icon
export const Icon = withContext<
  React.ComponentRef<'div'>,
  HTMLStyledProps<'div'> & { icon: React.ElementType }
>(
  React.forwardRef<React.ComponentRef<'div'>, HTMLStyledProps<'div'> & { icon: React.ElementType }>(
    ({ icon: IconComponent, ...props }, ref) => (
      <div ref={ref} {...props}>
        <IconComponent />
      </div>
    ),
  ),
  'icon',
)

// Connector
export const Connector = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'connector',
)

// Content
export const Content = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'content',
)

// Time
export const Time = withContext<React.ComponentRef<'time'>, HTMLStyledProps<'time'>>('time', 'time')

// Title
export const Title = withContext<React.ComponentRef<'h3'>, HTMLStyledProps<'h3'>>('h3', 'title')

// Description
export const Description = withContext<React.ComponentRef<'p'>, HTMLStyledProps<'p'>>(
  'p',
  'description',
)

export const Timeline = {
  Root,
  Item,
  Indicator,
  Dot,
  Icon,
  Connector,
  Content,
  Time,
  Title,
  Description,
}

export default Timeline
