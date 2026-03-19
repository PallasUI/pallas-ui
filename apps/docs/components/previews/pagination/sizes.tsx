'use client'

import Pagination from '@/components/ui/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { VStack } from '@styled-system/jsx'

function PaginationExample({ size }: { size: 'sm' | 'md' | 'lg' }) {
  return (
    <Pagination.Root count={20} pageSize={5} size={size} data-size={size}>
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
    </Pagination.Root>
  )
}

export default function PaginationSizesPreview() {
  return (
    <VStack gap="6" align="stretch">
      <VStack gap="2" align="stretch">
        <span>Small</span>
        <PaginationExample size="sm" />
      </VStack>
      <VStack gap="2" align="stretch">
        <span>Medium</span>
        <PaginationExample size="md" />
      </VStack>
      <VStack gap="2" align="stretch">
        <span>Large</span>
        <PaginationExample size="lg" />
      </VStack>
    </VStack>
  )
}
