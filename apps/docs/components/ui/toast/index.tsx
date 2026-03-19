'use client'
import type { Assign, WithFixedClassName } from '@pallas-ui/style-context'
import { createStyleContext } from '@pallas-ui/style-context'
import * as RadixToast from '@radix-ui/react-toast'
import { HStack } from '@styled-system/jsx'
import { type ToastVariantProps, toast } from '@styled-system/recipes'
import type { ComponentProps, HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import type { ButtonProps } from '../button'

const { withProvider, withContext } = createStyleContext(toast)

type RootProps = Assign<
  WithFixedClassName<ComponentProps<typeof RadixToast.Root>>,
  ToastVariantProps
>

export const Root = withProvider<React.ComponentRef<typeof RadixToast.Root>, RootProps>(
  RadixToast.Root as any,
  'root',
)

export const Viewport = withProvider<
  React.ComponentRef<typeof RadixToast.Viewport>,
  Assign<ComponentProps<typeof RadixToast.Viewport>, Pick<ToastVariantProps, 'placement'>>
>(RadixToast.Viewport as any, 'viewport')

export const Title = withContext<
  React.ComponentRef<typeof RadixToast.Title>,
  Assign<ComponentProps<typeof RadixToast.Title>, JsxStyleProps>
>(RadixToast.Title as any, 'title')

export const Description = withContext<
  React.ComponentRef<typeof RadixToast.Description>,
  Assign<ComponentProps<typeof RadixToast.Description>, JsxStyleProps>
>(RadixToast.Description as any, 'description')

export const Close = withContext<
  React.ComponentRef<typeof RadixToast.Close>,
  Assign<ComponentProps<typeof RadixToast.Close>, JsxStyleProps>
>(RadixToast.Close as any, 'close')

export const Actions = withContext<
  React.ComponentRef<typeof HStack>,
  Assign<ComponentProps<typeof HStack>, JsxStyleProps>
>(HStack as any, 'actions')

export type ActionProps = ComponentProps<typeof RadixToast.Action>

export const Action = withContext<
  React.ComponentRef<typeof RadixToast.Action>,
  Assign<ActionProps, JsxStyleProps>
>(RadixToast.Action as any, 'action')

export const Icon = withContext<React.ComponentRef<'div'>, HTMLStyledProps<'div'>>('div', 'icon')

export const Provider = RadixToast.Provider

export type ToastPropTypes = RootProps & {
  description?: string
}

export type ToastAction = {
  key: string
  label: string
  onClick: (key: string) => void
  buttonProps?: Partial<ButtonProps>
}

const Toast = {
  Provider,
  Root,
  Viewport,
  Icon,
  Title,
  Description,
  Actions,
  Action,
  Close,
}

export default Toast
