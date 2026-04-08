'use client'

import Pagination, { usePagination } from '@/components/ui/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { VStack } from '@styled-system/jsx'
import { Button } from '@/components/ui/button'

export default function PaginationRootProviderPreview() {
  const pagination = usePagination({ count: 50, pageSize: 5, defaultPage: 1 })

  return (
    <VStack gap="4" align="start">
      <Button onClick={() => pagination.goToNextPage()} disabled={pagination.page === pagination.totalPages}>
        Next page
      </Button>
      <Pagination.RootProvider value={pagination}>
        <Pagination.PrevTrigger>
          <ChevronLeft />
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {({ pages }) =>
            pages.map((p, index) =>
              p.type === 'page' ? (
                <Pagination.Item key={index} type="page" value={p.value}>
                  {p.value}
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
      </Pagination.RootProvider>
    </VStack>
  )
}
