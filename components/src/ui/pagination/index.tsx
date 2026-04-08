'use client'

import { Pagination, usePagination } from '@ark-ui/react/pagination'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as React from 'react'

import { pagination } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProps = WithFixedClassName<ComponentProps<typeof Pagination.Root>> & {
  size?: 'sm' | 'md' | 'lg'
}

export const Root = withProvider<
  React.ComponentRef<typeof Pagination.Root>,
  Assign<RootProps, JsxStyleProps>
>(Pagination.Root, 'root', { forwardProps: ['data-size'] })

export type RootProviderProps = WithFixedClassName<ComponentProps<typeof Pagination.RootProvider>> & {
  size?: 'sm' | 'md' | 'lg'
}

export const RootProvider = withProvider<
  React.ComponentRef<typeof Pagination.RootProvider>,
  Assign<RootProviderProps, JsxStyleProps>
>(Pagination.RootProvider, 'root', { forwardProps: ['data-size'] })

export { usePagination }

export const PrevTrigger = withContext<
  React.ComponentRef<typeof Pagination.PrevTrigger>,
  Assign<ComponentProps<typeof Pagination.PrevTrigger>, JsxStyleProps>
>(Pagination.PrevTrigger, 'prevTrigger')

export const NextTrigger = withContext<
  React.ComponentRef<typeof Pagination.NextTrigger>,
  Assign<ComponentProps<typeof Pagination.NextTrigger>, JsxStyleProps>
>(Pagination.NextTrigger, 'nextTrigger')

export const Item = withContext<
  React.ComponentRef<typeof Pagination.Item>,
  Assign<ComponentProps<typeof Pagination.Item>, JsxStyleProps>
>(Pagination.Item, 'item')

export const Ellipsis = withContext<
  React.ComponentRef<typeof Pagination.Ellipsis>,
  Assign<ComponentProps<typeof Pagination.Ellipsis>, JsxStyleProps>
>(Pagination.Ellipsis, 'ellipsis')

export const Context = Pagination.Context

const PaginationComponent = {
  Root,
  RootProvider,
  PrevTrigger,
  NextTrigger,
  Item,
  Ellipsis,
  Context,
  usePagination,
}

export default PaginationComponent
