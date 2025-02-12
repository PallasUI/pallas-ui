'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { popover } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import { createStyleContext } from '~/utils/style-context'
import type { Assign, WithFixedClassName } from '~/utils/types'

const { withProvider, withContext } = createStyleContext(popover)

export const Portal = PopoverPrimitive.Portal

export type RootProps = WithFixedClassName<PopoverPrimitive.PopoverProps>
export const Root = withProvider<
  React.ElementRef<typeof PopoverPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(PopoverPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverPrimitive.PopoverTriggerProps
>(PopoverPrimitive.Trigger, 'trigger')

const Arrow = withContext<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  Assign<PopoverPrimitive.PopoverArrowProps, JsxStyleProps>
>(PopoverPrimitive.Arrow, 'arrow')

const CustomContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverPrimitive.PopoverContentProps
>(({ align = 'center', sideOffset = 4, children, ...props }, ref) => (
  <Portal>
    <PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} {...props}>
      {children}
      <Arrow />
    </PopoverPrimitive.Content>
  </Portal>
))
CustomContent.displayName = PopoverPrimitive.Content.displayName

export const Content = withContext<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  Assign<PopoverPrimitive.PopoverContentProps, JsxStyleProps>
>(CustomContent, 'content')

export const Close = withContext<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  Assign<PopoverPrimitive.PopoverCloseProps, JsxStyleProps>
>(PopoverPrimitive.Close, 'close')

const Popover = {
  Root,
  Trigger,
  Content,
  Portal,
  Close,
}

export default Popover
