'use client'
import * as RadixToast from '@radix-ui/react-toast'
import { HStack } from '@styled-system/jsx'
import { type ToastVariantProps, toast } from '@styled-system/recipes'
import type { ComponentProps, HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'
import type { ButtonProps } from '../button'

const { withProvider, withContext } = createStyleContext(toast)

type RootProps = Assign<
  WithFixedClassName<ComponentProps<typeof RadixToast.Root>>,
  ToastVariantProps
>

export const Root = withProvider<React.ElementRef<typeof RadixToast.Root>, RootProps>(
  RadixToast.Root,
  'root',
)

export const Viewport = withProvider<
  React.ElementRef<typeof RadixToast.Viewport>,
  Assign<ComponentProps<typeof RadixToast.Viewport>, Pick<ToastVariantProps, 'placement'>>
>(RadixToast.Viewport, 'viewport')

export const Title = withContext<
  React.ElementRef<typeof RadixToast.Title>,
  Assign<ComponentProps<typeof RadixToast.Title>, JsxStyleProps>
>(RadixToast.Title, 'title')

export const Description = withContext<
  React.ElementRef<typeof RadixToast.Description>,
  Assign<ComponentProps<typeof RadixToast.Description>, JsxStyleProps>
>(RadixToast.Description, 'description')

export const Close = withContext<
  React.ElementRef<typeof RadixToast.Close>,
  Assign<ComponentProps<typeof RadixToast.Close>, JsxStyleProps>
>(RadixToast.Close, 'close')

export const Actions = withContext<
  React.ElementRef<typeof HStack>,
  Assign<ComponentProps<typeof HStack>, JsxStyleProps>
>(HStack, 'actions')

export type ActionProps = ComponentProps<typeof RadixToast.Action>

export const Action = withContext<
  React.ElementRef<typeof RadixToast.Action>,
  Assign<ActionProps, JsxStyleProps>
>(RadixToast.Action, 'action')

export const Icon = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'icon')

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
