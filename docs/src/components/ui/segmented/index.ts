'use client'

import * as Tabs from '@radix-ui/react-tabs'
import type { SegmentedVariantProps } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { Root, withContext } from './root'

export type RootProps = Assign<
  WithFixedClassName<ComponentProps<typeof Tabs.Root>>,
  SegmentedVariantProps & JsxStyleProps
>

export const Option = withContext<
  React.ElementRef<typeof Tabs.Trigger>,
  Assign<WithFixedClassName<ComponentProps<typeof Tabs.Trigger>>, JsxStyleProps>
>(Tabs.Trigger, 'option')

export const Text = withContext<
  React.ElementRef<'p'>,
  Assign<WithFixedClassName<ComponentProps<'p'>>, JsxStyleProps>
>('p', 'text')

const Segmented = {
  Root,
  Option,
  Text,
}

export default Segmented
