import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { table } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type { HTMLAttributes } from 'react'

const { withContext, withProvider } = createStyleContext(table)

export const Table = withProvider<
  HTMLTableElement,
  Assign<HTMLAttributes<HTMLTableElement>, JsxStyleProps>
>('table', 'tableRoot')

// const BaseTable = forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
//   (_props, ref) => (
//     <TableContainer>
//       <table ref={ref} {...props} />
//     </TableContainer>
//   ),
// )
// BaseTable.displayName = 'Table'

export const TableHeader = withContext<
  HTMLTableSectionElement,
  Assign<HTMLAttributes<HTMLTableSectionElement>, JsxStyleProps>
>('thead', 'tableHeader')
export const TableBody = withContext<
  HTMLTableSectionElement,
  Assign<HTMLAttributes<HTMLTableSectionElement>, JsxStyleProps>
>('tbody', 'tableBody')
export const TableFooter = withContext<
  HTMLTableSectionElement,
  Assign<HTMLAttributes<HTMLTableSectionElement>, JsxStyleProps>
>('tfoot', 'tableFooter')
export const TableHead = withContext<
  HTMLTableCellElement,
  Assign<HTMLAttributes<HTMLTableCellElement>, JsxStyleProps>
>('th', 'tableHead')
export const TableRow = withContext<
  HTMLTableRowElement,
  Assign<HTMLAttributes<HTMLTableRowElement>, JsxStyleProps>
>('tr', 'tableRow')
export const TableCell = withContext<
  HTMLTableCellElement,
  Assign<HTMLAttributes<HTMLTableCellElement>, JsxStyleProps>
>('td', 'tableCell')
export const TableCaption = withContext<
  HTMLTableCaptionElement,
  Assign<HTMLAttributes<HTMLTableCaptionElement>, JsxStyleProps>
>('caption', 'tableCaption')

export default {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
