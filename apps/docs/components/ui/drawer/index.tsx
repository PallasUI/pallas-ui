'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { type DrawerVariantProps, drawer } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(drawer)

export const Portal = DrawerPrimitive.Portal

export type RootProps = WithFixedClassName<DrawerPrimitive.DialogProps>

export const Root = withProvider<
  React.ComponentRef<typeof DrawerPrimitive.Root>,
  Assign<RootProps, DrawerVariantProps & JsxStyleProps>
>(DrawerPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ComponentRef<typeof DrawerPrimitive.Trigger>,
  DrawerPrimitive.DialogTriggerProps
>(DrawerPrimitive.Trigger, 'trigger')

const Overlay = withContext<
  React.ComponentRef<typeof DrawerPrimitive.Overlay>,
  Assign<DrawerPrimitive.DialogOverlayProps, JsxStyleProps>
>(DrawerPrimitive.Overlay, 'overlay')

const CustomContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  DrawerPrimitive.DialogContentProps
>(({ children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DrawerPrimitive.Content ref={ref} {...props}>
      {children}
    </DrawerPrimitive.Content>
  </Portal>
))
CustomContent.displayName = DrawerPrimitive.Content.displayName

export const Content = withContext<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  Assign<DrawerPrimitive.DialogContentProps, JsxStyleProps>
>(CustomContent, 'content')

export const Close = withContext<
  React.ComponentRef<typeof DrawerPrimitive.Close>,
  Assign<DrawerPrimitive.DialogCloseProps, JsxStyleProps>
>(DrawerPrimitive.Close, 'close')

export const Title = withContext<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  Assign<DrawerPrimitive.DialogTitleProps, JsxStyleProps>
>(DrawerPrimitive.Title, 'title')

export const Description = withContext<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  Assign<DrawerPrimitive.DialogDescriptionProps, JsxStyleProps>
>(DrawerPrimitive.Description, 'description')

export const Header = withContext<
  React.ComponentRef<'div'>,
  Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>
>('div', 'header')

export const Body = withContext<
  React.ComponentRef<'div'>,
  Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>
>('div', 'body')

export const Footer = withContext<
  React.ComponentRef<'div'>,
  Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>
>('div', 'footer')

const Drawer = {
  Root,
  Trigger,
  Content,
  Close,
  Title,
  Description,
  Header,
  Body,
  Footer,
}

export default Drawer
