import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx/stack'
import Table from '~/ui/table'

const INVOICES = [
  { id: 'INV-001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV-003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV-004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV-005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
]

const meta: Meta<typeof Table.Root> = {
  render: (props) => (
    <Table.Root {...props}>
      <Table.Caption>A list of recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head>Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {INVOICES.map((invoice) => (
          <Table.Row key={invoice.id}>
            <Table.Cell>{invoice.id}</Table.Cell>
            <Table.Cell>{invoice.status}</Table.Cell>
            <Table.Cell>{invoice.method}</Table.Cell>
            <Table.Cell>{invoice.amount}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total</Table.Cell>
          <Table.Cell>$1,750.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  ),
  title: 'Components/Table',
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    variant: {
      options: ['ghost', 'surface'],
      control: 'inline-radio',
    },
    bordered: { control: 'boolean' },
    striped: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'md', variant: 'ghost', bordered: false, striped: false },
}

export const Variants: Story = {
  render: () => (
    <Stack direction="column" gap="8">
      <Table.Root variant="ghost">
        <Table.Caption>Ghost</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.method}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root variant="surface">
        <Table.Caption>Surface</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.method}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root variant="ghost" bordered striped>
        <Table.Caption>Ghost + Bordered + Striped</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.method}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root variant="surface" bordered striped>
        <Table.Caption>Surface + Bordered + Striped</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.method}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="column" gap="8">
      <Table.Root size="sm">
        <Table.Caption>Small size</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root size="md">
        <Table.Caption>Medium size</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root size="lg">
        <Table.Caption>Large size</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.id}>
              <Table.Cell>{invoice.id}</Table.Cell>
              <Table.Cell>{invoice.status}</Table.Cell>
              <Table.Cell>{invoice.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  ),
}
