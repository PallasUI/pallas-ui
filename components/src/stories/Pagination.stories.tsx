import type { Meta, StoryObj } from '@storybook/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Paragraph } from '~/ui/typography'
import { VStack } from '@styled-system/jsx'
import { useState } from 'react'

import Pagination from '../ui/pagination'

const meta: Meta<typeof Pagination.Root> = {
  component: Pagination.Root,
  title: 'Components/Pagination',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the pagination component',
    },
    count: {
      control: { type: 'number' },
      description: 'Total number of data items',
    },
    pageSize: {
      control: { type: 'number' },
      description: 'Number of items per page',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

function PaginationContent() {
  return (
    <>
      <Pagination.PrevTrigger>
        <ChevronLeft />
      </Pagination.PrevTrigger>
      <Pagination.Context>
        {({ pages }) =>
          pages.map((page, index) =>
            page.type === 'page' ? (
              <Pagination.Item key={index} type="page" value={page.value}>
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis key={index} index={index}>
                &#8230;
              </Pagination.Ellipsis>
            ),
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger>
        <ChevronRight />
      </Pagination.NextTrigger>
    </>
  )
}

export const Default: Story = {
  args: {
    count: 100,
    pageSize: 10,
    size: 'md',
  },
  render: (args) => (
    <Pagination.Root count={args['count']} pageSize={args['pageSize']} size={args['size']}>
      <PaginationContent />
    </Pagination.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <VStack gap={8} w="100%">
      <VStack gap={4} align="flex-start">
        <Paragraph textStyle="bold">Small (sm)</Paragraph>
        <Pagination.Root count={20} pageSize={5} size="sm">
          <PaginationContent />
        </Pagination.Root>
      </VStack>

      <VStack gap={4} align="flex-start">
        <Paragraph textStyle="bold">Medium (md)</Paragraph>
        <Pagination.Root count={20} pageSize={5} size="md">
          <PaginationContent />
        </Pagination.Root>
      </VStack>

      <VStack gap={4} align="flex-start">
        <Paragraph textStyle="bold">Large (lg)</Paragraph>
        <Pagination.Root count={20} pageSize={5} size="lg">
          <PaginationContent />
        </Pagination.Root>
      </VStack>
    </VStack>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1)

    return (
      <VStack gap={4} align="stretch">
        <Paragraph>Current page: {page}</Paragraph>
        <Pagination.Root
          count={50}
          pageSize={5}
          page={page}
          onPageChange={(details) => setPage(details.page)}
        >
          <PaginationContent />
        </Pagination.Root>
      </VStack>
    )
  },
}

export const WithEllipsis: Story = {
  render: () => (
    <Pagination.Root count={500} pageSize={10} siblingCount={1}>
      <PaginationContent />
    </Pagination.Root>
  ),
}
