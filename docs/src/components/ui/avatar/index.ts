'use client'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { avatar } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProps = WithFixedClassName<ComponentProps<typeof RadixAvatar.Root>>

export const Root = withProvider<
  React.ElementRef<typeof RadixAvatar.Root>,
  Assign<RootProps, JsxStyleProps>
>(RadixAvatar.Root, 'root')

export const Image = withContext<
  React.ElementRef<typeof RadixAvatar.Image>,
  Assign<ComponentProps<typeof RadixAvatar.Image>, JsxStyleProps>
>(RadixAvatar.Image, 'image')

export const Fallback = withContext<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  Assign<ComponentProps<typeof RadixAvatar.Fallback>, JsxStyleProps>
>(RadixAvatar.Fallback, 'fallback')

const Avatar = {
  Root,
  Image,
  Fallback,
}

export default Avatar
