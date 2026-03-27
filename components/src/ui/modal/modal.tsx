'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cx } from '@styled-system/css'
import { button, modal } from '@styled-system/recipes'
import type { ComponentProps, HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(modal)

const ModalPortal = withContext<
  React.ComponentRef<typeof AlertDialogPrimitive.Portal>,
  Assign<WithFixedClassName<AlertDialogPrimitive.AlertDialogPortalProps>, JsxStyleProps>
>(AlertDialogPrimitive.Portal, 'portal')

const ModalOverlay = withContext<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  Assign<AlertDialogPrimitive.AlertDialogOverlayProps, JsxStyleProps>
>(AlertDialogPrimitive.Overlay, 'overlay')

const ContentRaw = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <AlertDialogPrimitive.Content ref={ref} className={className} {...props} />
  </ModalPortal>
))
ContentRaw.displayName = AlertDialogPrimitive.Content.displayName

const CancelRaw = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cx(button({ variant: 'outlined' }), className)}
    {...props}
  />
))
CancelRaw.displayName = AlertDialogPrimitive.Cancel.displayName

export type RootProps = WithFixedClassName<ComponentProps<typeof AlertDialogPrimitive.Root>>
export const Root = withProvider<
  React.ComponentRef<typeof AlertDialogPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(AlertDialogPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ComponentRef<typeof AlertDialogPrimitive.Trigger>,
  Assign<AlertDialogPrimitive.AlertDialogTriggerProps, JsxStyleProps>
>(AlertDialogPrimitive.Trigger, 'trigger')

export const Content = withContext<
  React.ComponentRef<typeof ContentRaw>,
  Assign<AlertDialogPrimitive.AlertDialogContentProps, JsxStyleProps>
>(ContentRaw, 'content')

export const Header = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'header',
)

export const Footer = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'footer',
)

export const Title = withContext<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  Assign<AlertDialogPrimitive.AlertDialogTitleProps, JsxStyleProps>
>(AlertDialogPrimitive.Title, 'title')

export const Description = withContext<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  Assign<AlertDialogPrimitive.AlertDialogDescriptionProps, JsxStyleProps>
>(AlertDialogPrimitive.Description, 'description')

export const Action = withContext<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  Assign<AlertDialogPrimitive.AlertDialogActionProps, JsxStyleProps>
>(AlertDialogPrimitive.Action, 'action')

export const Cancel = withContext<
  React.ComponentRef<typeof CancelRaw>,
  Assign<AlertDialogPrimitive.AlertDialogCancelProps, JsxStyleProps>
>(CancelRaw, 'cancel')

const Modal = {
  Root,
  Trigger,
  Content,
  Header,
  Footer,
  Title,
  Description,
  Action,
  Cancel,
}

export default Modal
