import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { isDirectory, isFile } from 'renoun/file-system'
import { DocsCollection } from '~/collections/docs'
import {
  Item,
  ItemContent,
  ItemHeader,
  ItemTrigger,
  Root,
} from '~/components/ui/accordian/accordian'

const AccordianItem = Item
const AccordionRoot = Root
const AccordianItemHeader = ItemHeader
const AccordianItemTrigger = ItemTrigger
const AccordianItemContent = ItemContent

type NavItem = {
  title: string
  slug?: string
  items?: NavItem[]
}

const SORT_ORDER = ['Introduction', 'Getting Started', 'Components', 'Utilities']

export default async function Sidebar() {
  const entries = await DocsCollection.getEntries()
  const items: NavItem[] = []
  for (const entry of entries) {
    const isDir = isDirectory(entry)
    const innerEntries = isDir ? await entry.getEntries() : []

    const innerItems = innerEntries.map((innerEntry) => {
      const isF = isFile(innerEntry)
      const slug = isF ? innerEntry.getName().split('.')[0] : `${innerEntry.getSlug()}/`

      return {
        title: innerEntry.getTitle(),
        slug: `${entry.getSlug()}/${slug}`,
      }
    })

    items.push({
      title: entry.getTitle(),
      items: innerItems,
    })
  }

  const sortedItems = items.sort((a, b) => {
    const aIndex = SORT_ORDER.indexOf(a.title)
    const bIndex = SORT_ORDER.indexOf(b.title)
    return aIndex - bIndex
  })

  return (
    <Box
      className={css({
        width: '280px',
        borderRight: '1px solid',
        borderColor: '{colors.border}',
        padding: '4',
      })}
    >
      <AccordionRoot
        type="multiple"
        css={{
          border: 'none',
        }}
      >
        {sortedItems.map((section) => (
          <AccordianItem key={section.title} value={section.title}>
            <AccordianItemHeader>
              {section.title}
              <AccordianItemTrigger>
                <ChevronDown />
              </AccordianItemTrigger>
            </AccordianItemHeader>
            <AccordianItemContent>
              {section.items?.map((item) => (
                <Link
                  href={`/docs/${item.slug}`}
                  className={css({
                    display: 'block',
                    padding: '2',
                    color: 'gray.700',
                    borderRadius: 'sm',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    _hover: {
                      backgroundColor: '{colors.bgSolid.hover}',
                      color: '{colors.primary.hover}',
                    },
                  })}
                  key={item.title}
                >
                  {item.title}
                </Link>
              ))}
            </AccordianItemContent>
          </AccordianItem>
        ))}
      </AccordionRoot>
    </Box>
  )
}
