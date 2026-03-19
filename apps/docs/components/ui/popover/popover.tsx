'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { popover } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(popover)

export const Portal = PopoverPrimitive.Portal

export type RootProps = WithFixedClassName<PopoverPrimitive.PopoverProps>
export const Root = withProvider<
  React.ComponentRef<typeof PopoverPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(PopoverPrimitive.Root as any, 'root')

export const Trigger = withContext<
  React.ComponentRef<typeof PopoverPrimitive.Trigger>,
  PopoverPrimitive.PopoverTriggerProps
>(PopoverPrimitive.Trigger as any, 'trigger')

const Arrow = withContext<
  React.ComponentRef<typeof PopoverPrimitive.Arrow>,
  Assign<PopoverPrimitive.PopoverArrowProps, JsxStyleProps>
>(PopoverPrimitive.Arrow as any, 'arrow')

const CustomContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverPrimitive.PopoverContentProps
>(({ align = 'center', sideOffset = 4, children, ...props }, ref) => (
  <Portal>
    <PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} {...(props as any)}>
      {children}
      <Arrow />
    </PopoverPrimitive.Content>
  </Portal>
))
CustomContent.displayName = PopoverPrimitive.Content.displayName

export const Content = withContext<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  Assign<PopoverPrimitive.PopoverContentProps, JsxStyleProps>
>(CustomContent as any, 'content')

export const Close = withContext<
  React.ComponentRef<typeof PopoverPrimitive.Close>,
  Assign<PopoverPrimitive.PopoverCloseProps, JsxStyleProps>
>(PopoverPrimitive.Close as any, 'close')

const Popover = {
  Root,
  Trigger,
  Content,
  Portal,
  Close,
}

export default Popover
