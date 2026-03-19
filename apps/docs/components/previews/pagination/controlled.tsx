'use client'

import { useState } from 'react'
import Pagination from '@/components/ui/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function PaginationControlledPreview() {
  const [page, setPage] = useState(1)

  return (
    <VStack gap="4" align="stretch">
      <Paragraph>Current page: {page}</Paragraph>
      <Pagination.Root
        count={50}
        pageSize={5}
        page={page}
        onPageChange={(details) => setPage(details.page)}
      >
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
      </Pagination.Root>
    </VStack>
  )
}
