'use client'

import type { Assign, WithFixedClassName } from '@pallas-ui/style-context'
import { createStyleContext } from '@pallas-ui/style-context'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tooltip } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(tooltip)

export type RootProps = WithFixedClassName<TooltipPrimitive.TooltipProps>

const Provider = TooltipPrimitive.Provider
const Portal = TooltipPrimitive.Portal

export const Root = withProvider<
  React.ComponentRef<typeof TooltipPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(TooltipPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  Assign<TooltipPrimitive.TooltipTriggerProps, JsxStyleProps>
>(TooltipPrimitive.Trigger, 'trigger')

const Arrow = withContext<
  React.ComponentRef<typeof TooltipPrimitive.Arrow>,
  Assign<TooltipPrimitive.TooltipArrowProps, JsxStyleProps>
>(TooltipPrimitive.Arrow, 'arrow')

const CustomContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipPrimitive.TooltipContentProps
>(({ align = 'center', sideOffset = 4, children, ...props }, ref) => (
  <Portal>
    <TooltipPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} {...props}>
      {children}
      <Arrow />
    </TooltipPrimitive.Content>
  </Portal>
))
CustomContent.displayName = TooltipPrimitive.Content.displayName

export const Content = withContext<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  Assign<TooltipPrimitive.TooltipContentProps, JsxStyleProps>
>(CustomContent, 'content')

const Tooltip = {
  Root,
  Trigger,
  Content,
  Provider,
}

export default Tooltip
