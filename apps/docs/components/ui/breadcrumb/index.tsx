'use client'
import * as BreadcrumbPrimitive from '@pallas-ui/breadcrumb'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { breadcrumb } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(breadcrumb)

export type RootProps = WithFixedClassName<ComponentProps<typeof BreadcrumbPrimitive.Root>>
export const Root = withProvider<
  React.ComponentRef<typeof BreadcrumbPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(BreadcrumbPrimitive.Root, 'root')

export const List = withContext<
  React.ComponentRef<typeof BreadcrumbPrimitive.List>,
  Assign<ComponentProps<typeof BreadcrumbPrimitive.List>, JsxStyleProps>
>(BreadcrumbPrimitive.List, 'list')

export const Item = withContext<
  React.ComponentRef<typeof BreadcrumbPrimitive.Item>,
  Assign<ComponentProps<typeof BreadcrumbPrimitive.Item>, JsxStyleProps>
>(BreadcrumbPrimitive.Item, 'item')

export const Link = withContext<
  React.ComponentRef<typeof BreadcrumbPrimitive.Link>,
  Assign<ComponentProps<typeof BreadcrumbPrimitive.Link>, JsxStyleProps>
>(BreadcrumbPrimitive.Link, 'link')

export const Separator = withContext<
  React.ComponentRef<typeof BreadcrumbPrimitive.Separator>,
  Assign<ComponentProps<typeof BreadcrumbPrimitive.Separator>, JsxStyleProps>
>(BreadcrumbPrimitive.Separator, 'separator')

export const Ellipsis = withContext<
  React.ComponentRef<typeof BreadcrumbPrimitive.Ellipsis>,
  Assign<ComponentProps<typeof BreadcrumbPrimitive.Ellipsis>, JsxStyleProps>
>(BreadcrumbPrimitive.Ellipsis, 'ellipsis')

const Breadcrumb = {
  Root,
  List,
  Item,
  Link,
  Separator,
  Ellipsis,
}

export default Breadcrumb
