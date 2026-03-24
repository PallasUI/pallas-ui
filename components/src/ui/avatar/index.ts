'use client'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { type AvatarVariantProps, avatar } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProps = WithFixedClassName<ComponentProps<typeof RadixAvatar.Root>>

export const Root = withProvider<
  React.ComponentRef<typeof RadixAvatar.Root>,
  Assign<RootProps, AvatarVariantProps & JsxStyleProps>
>(RadixAvatar.Root, 'root')

export const Image = withContext<
  React.ComponentRef<typeof RadixAvatar.Image>,
  Assign<ComponentProps<typeof RadixAvatar.Image>, JsxStyleProps>
>(RadixAvatar.Image, 'image')

export const Fallback = withContext<
  React.ComponentRef<typeof RadixAvatar.Fallback>,
  Assign<ComponentProps<typeof RadixAvatar.Fallback>, JsxStyleProps>
>(RadixAvatar.Fallback, 'fallback')

const Avatar = {
  Root,
  Image,
  Fallback,
}

export default Avatar
