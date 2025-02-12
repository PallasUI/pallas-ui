'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tooltip } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

export type RootProps = WithFixedClassName<TooltipPrimitive.TooltipProps>

const Provider = TooltipPrimitive.Provider
const Portal = TooltipPrimitive.Portal

export const Root = withProvider<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(TooltipPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  Assign<TooltipPrimitive.TooltipTriggerProps, JsxStyleProps>
>(TooltipPrimitive.Trigger, 'trigger')

const Arrow = withContext<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  Assign<TooltipPrimitive.TooltipArrowProps, JsxStyleProps>
>(TooltipPrimitive.Arrow, 'arrow')

const CustomContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
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
  React.ElementRef<typeof TooltipPrimitive.Content>,
  Assign<TooltipPrimitive.TooltipContentProps, JsxStyleProps>
>(CustomContent, 'content')

const Tooltip = {
  Root,
  Trigger,
  Content,
  Provider,
}

export default Tooltip
