'use client'

import { Pagination } from '@ark-ui/react/pagination'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as React from 'react'

import { pagination } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProps = WithFixedClassName<ComponentProps<typeof Pagination.Root>> & {
  size?: 'sm' | 'md' | 'lg'
}

// Ark UI ForwardRefExoticComponent is incompatible with createStyleContext's ElementType due to React 19 type differences
export const Root = withProvider<
  React.ComponentRef<typeof Pagination.Root>,
  Assign<RootProps, JsxStyleProps>
  // @ts-expect-error - Ark UI component type incompatible with style-context ElementType
>(Pagination.Root, 'root', { forwardProps: ['data-size'] })

export const PrevTrigger = withContext<
  React.ComponentRef<typeof Pagination.PrevTrigger>,
  Assign<ComponentProps<typeof Pagination.PrevTrigger>, JsxStyleProps>
  // @ts-expect-error - Ark UI component type incompatible with style-context ElementType
>(Pagination.PrevTrigger, 'prevTrigger')

export const NextTrigger = withContext<
  React.ComponentRef<typeof Pagination.NextTrigger>,
  Assign<ComponentProps<typeof Pagination.NextTrigger>, JsxStyleProps>
  // @ts-expect-error - Ark UI component type incompatible with style-context ElementType
>(Pagination.NextTrigger, 'nextTrigger')

export const Item = withContext<
  React.ComponentRef<typeof Pagination.Item>,
  Assign<ComponentProps<typeof Pagination.Item>, JsxStyleProps>
  // @ts-expect-error - Ark UI component type incompatible with style-context ElementType
>(Pagination.Item, 'item')

export const Ellipsis = withContext<
  React.ComponentRef<typeof Pagination.Ellipsis>,
  Assign<ComponentProps<typeof Pagination.Ellipsis>, JsxStyleProps>
  // @ts-expect-error - Ark UI component type incompatible with style-context ElementType
>(Pagination.Ellipsis, 'ellipsis')

export const Context = Pagination.Context

const PaginationComponent = {
  Root,
  PrevTrigger,
  NextTrigger,
  Item,
  Ellipsis,
  Context,
}

export default PaginationComponent
