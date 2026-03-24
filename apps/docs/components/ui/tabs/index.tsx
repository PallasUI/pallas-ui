'use client'

import { createStyleContext } from '@pallas-ui/style-context'
import type { Assign, WithFixedClassName } from '@pallas-ui/style-context'
import * as RadixTabs from '@radix-ui/react-tabs'
import { type TabsVariantProps, tabs } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(tabs)

export type RootProps = WithFixedClassName<ComponentProps<typeof RadixTabs.Root>>
export const Root = withProvider<
  React.ComponentRef<typeof RadixTabs.Root>,
  Assign<RootProps, TabsVariantProps>
>(RadixTabs.Root, 'root')

export const TabList = withContext<
  React.ComponentRef<typeof RadixTabs.List>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixTabs.List>>, JsxStyleProps>
>(RadixTabs.List, 'tabList')

export const Trigger = withContext<
  React.ComponentRef<typeof RadixTabs.Trigger>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixTabs.Trigger>>, JsxStyleProps>
>(RadixTabs.Trigger, 'trigger')

export const Content = withContext<
  React.ComponentRef<typeof RadixTabs.Content>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixTabs.Content>>, JsxStyleProps>
>(RadixTabs.Content, 'content')

const Tabs = {
  Root,
  TabList,
  Trigger,
  Content,
}

export default Tabs
