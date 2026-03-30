'use client'

import { createStyleContext } from '@pallas-ui/style-context'
import type { Assign, WithFixedClassName } from '@pallas-ui/style-context'
import { type TableVariantProps, table } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(table)

export type RootProps = WithFixedClassName<React.HTMLAttributes<HTMLTableElement>> &
  TableVariantProps

export const Root = withProvider<HTMLTableElement, Assign<RootProps, JsxStyleProps>>(
  'table',
  'root',
)

export const Header = withContext<
  HTMLTableSectionElement,
  Assign<WithFixedClassName<React.HTMLAttributes<HTMLTableSectionElement>>, JsxStyleProps>
>('thead', 'header')

export const Body = withContext<
  HTMLTableSectionElement,
  Assign<WithFixedClassName<React.HTMLAttributes<HTMLTableSectionElement>>, JsxStyleProps>
>('tbody', 'body')

export const Footer = withContext<
  HTMLTableSectionElement,
  Assign<WithFixedClassName<React.HTMLAttributes<HTMLTableSectionElement>>, JsxStyleProps>
>('tfoot', 'footer')

export const Row = withContext<
  HTMLTableRowElement,
  Assign<WithFixedClassName<React.HTMLAttributes<HTMLTableRowElement>>, JsxStyleProps>
>('tr', 'row')

export const Head = withContext<
  HTMLTableCellElement,
  Assign<WithFixedClassName<React.ThHTMLAttributes<HTMLTableCellElement>>, JsxStyleProps>
>('th', 'head')

export const Cell = withContext<
  HTMLTableCellElement,
  Assign<WithFixedClassName<React.TdHTMLAttributes<HTMLTableCellElement>>, JsxStyleProps>
>('td', 'cell')

export const Caption = withContext<
  HTMLTableCaptionElement,
  Assign<WithFixedClassName<React.HTMLAttributes<HTMLTableCaptionElement>>, JsxStyleProps>
>('caption', 'caption')

Root.displayName = 'Table.Root'
Header.displayName = 'Table.Header'
Body.displayName = 'Table.Body'
Footer.displayName = 'Table.Footer'
Row.displayName = 'Table.Row'
Head.displayName = 'Table.Head'
Cell.displayName = 'Table.Cell'
Caption.displayName = 'Table.Caption'

const Table = {
  Root,
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
  Caption,
}
export default Table
