import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { docs } from '~/collections/docs'
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
  href: string
  items?: NavItem[]
}

export default async function Sidebar({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const entries = await docs.getEntries()
  const items: NavItem[] = []
  for (const entry of entries) {
    const path = entry.getPath()
    const segments = path.split('/')
    let currentPath = ''
    for (const segment of segments) {
      currentPath += `/${segment}`
      console.log(segment, '-==========================')
      const newItem: NavItem = {
        title: segment,
        href: currentPath,
        items: [],
      }
      items.push(newItem)
    }
  }

  console.log(items, '-==========================')

  return (
    <Box
      className={css({
        width: '280px',
        borderRight: '1px solid',
        borderColor: 'gray.200',
        padding: '4',
      })}
    >
      <AccordionRoot type="single">
        {items.map((section) => (
          <AccordianItem key={section.href} value={section.href}>
            <AccordianItemHeader>
              <AccordianItemTrigger>{section.title}</AccordianItemTrigger>
            </AccordianItemHeader>
            <AccordianItemContent>Hello</AccordianItemContent>
          </AccordianItem>
        ))}
      </AccordionRoot>
    </Box>
  )
}
