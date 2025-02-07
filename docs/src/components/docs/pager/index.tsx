import { css, cx } from '@styled-system/css'
// @ts-ignore
import { type DocumentTypes, allDocuments } from 'contentlayer/generated'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { sortDocs } from '~/lib/sort-docs'

const orderedPages = sortDocs(allDocuments)

const getPagerForDocs = (doc: DocumentTypes) => {
  const index = orderedPages.findIndex((d) => d.url === doc.url)
  const prev = orderedPages[index - 1]
  const next = orderedPages[index + 1]

  return {
    prev,
    next,
  }
}

export interface PagerProps {
  className?: string
  doc: DocumentTypes
}

export const Pager = ({ className, doc }: PagerProps) => {
  const pager = getPagerForDocs(doc)

  return (
    <div
      className={cx(
        css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }),
        className,
      )}
    >
      {pager?.prev?.url && (
        <Button>
          <Link href={pager.prev.url}>
            <ChevronLeftIcon
              className={css({
                mr: '2',
                h: '4',
                w: '4',
              })}
            />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next?.url && (
        <Button>
          <Link href={pager.next.url}>
            {pager.next.title}
            <ChevronRightIcon
              className={css({
                ml: '2',
                h: '4',
                w: '4',
              })}
            />
          </Link>
        </Button>
      )}
    </div>
  )
}
