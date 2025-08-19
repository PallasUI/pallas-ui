'use client'

import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { timeline } from '@styled-system/recipes'
import type { HTMLStyledProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(timeline)

type RootProps =
  | Assign<
      HTMLStyledProps<'div'>,
      {
        orientation?: 'vertical'
        placement?: 'left' | 'right' | 'alternate'
        indicatorSize?: 'sm' | 'md' | 'lg' | 'xl'
        textSize?: 'sm' | 'md' | 'lg' | 'xl'
      }
    >
  | Assign<
      HTMLStyledProps<'div'>,
      {
        orientation: 'horizontal'
        placement?: 'top' | 'bottom'
        indicatorSize?: 'sm' | 'md' | 'lg' | 'xl'
        textSize?: 'sm' | 'md' | 'lg' | 'xl'
      }
    >

const RootPrimitive = withProvider<React.ComponentRef<'div'>, RootProps>('div', 'root')

export const Root = React.forwardRef<React.ComponentRef<'div'>, RootProps>((props, ref) => {
  const { orientation = 'vertical', placement, indicatorSize, textSize, ...rest } = props

  if (orientation === 'vertical') {
    const verticalPlacement = placement as 'left' | 'right' | 'alternate' | undefined
    return (
      <RootPrimitive
        ref={ref}
        orientation={orientation}
        placement={verticalPlacement ?? 'right'}
        indicatorSize={indicatorSize ?? 'md'}
        textSize={textSize ?? 'sm'}
        {...rest}
      />
    )
  }

  const horizontalPlacement = placement as 'top' | 'bottom' | undefined
  return (
    <RootPrimitive
      ref={ref}
      orientation={orientation}
      placement={horizontalPlacement ?? 'bottom'}
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
  Assign<HTMLStyledProps<'div'>, { variant?: 'default' | 'success' | 'warning' | 'error' }>
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
