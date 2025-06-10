import type { Meta } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/ui/table'

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Table',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john.doe@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane.smith@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob.johnson@example.com</TableCell>
        <TableCell>Editor</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell>3</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)
