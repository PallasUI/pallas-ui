'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import { type ScrollAreaVariantProps, scrollArea } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(scrollArea)

export const Root = withProvider<
  React.ComponentRef<typeof RadixScrollArea.Root>,
  Assign<
    WithFixedClassName<ComponentProps<typeof RadixScrollArea.Root>>,
    ScrollAreaVariantProps & JsxStyleProps
  >
>(RadixScrollArea.Root, 'root')

export const Viewport = withContext<
  React.ComponentRef<typeof RadixScrollArea.Viewport>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixScrollArea.Viewport>>, JsxStyleProps>
>(RadixScrollArea.Viewport, 'viewport')

export const Scrollbar = withContext<
  React.ComponentRef<typeof RadixScrollArea.Scrollbar>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixScrollArea.Scrollbar>>, JsxStyleProps>
>(RadixScrollArea.Scrollbar, 'scrollbar')

export const Thumb = withContext<
  React.ComponentRef<typeof RadixScrollArea.Thumb>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixScrollArea.Thumb>>, JsxStyleProps>
>(RadixScrollArea.Thumb, 'thumb')

export const Corner = withContext<
  React.ComponentRef<typeof RadixScrollArea.Corner>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixScrollArea.Corner>>, JsxStyleProps>
>(RadixScrollArea.Corner, 'corner')

const ScrollArea = {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
}

export default ScrollArea
