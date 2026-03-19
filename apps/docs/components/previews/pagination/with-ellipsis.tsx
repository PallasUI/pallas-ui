'use client'

import Pagination from '@/components/ui/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PaginationWithEllipsisPreview() {
  return (
    <Pagination.Root count={500} pageSize={10} siblingCount={1}>
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
