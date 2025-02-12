'use client'

import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { docs } from '~/collections/docs'
import Accordion from '~/components/ui/accordian/accordian'

type NavItem = {
  title: string
  href: string
  items?: NavItem[]
}

export default function Sidebar() {
  const pathname = usePathname()
  const [navItems, setNavItems] = useState<NavItem[]>([])

  useEffect(() => {
    async function loadNavItems() {
      const entries = await docs.getEntries()
      const items: NavItem[] = []

      for (const entry of entries) {
        const path = entry.getPath()
        const segments = path.split('/')

        let currentLevel = items
        let currentPath = ''

        for (const segment of segments) {
          currentPath += `/${segment}`

          const existing = currentLevel.find((item) => item.href === currentPath)
          if (!existing) {
            const newItem: NavItem = {
              title: segment.charAt(0).toUpperCase() + segment.slice(1),
              href: currentPath,
              items: [],
            }
            currentLevel.push(newItem)
            currentLevel = newItem.items || []
          } else {
            currentLevel = existing.items || []
          }
        }
      }

      setNavItems(items)
    }

    loadNavItems()
  }, [])

  return (
    <Box
      className={css({
        width: '280px',
        borderRight: '1px solid',
        borderColor: 'gray.200',
        padding: '4',
      })}
    >
      <Accordion.Root type="single">
        {navItems.map((section) => (
          <Accordion.Item key={section.href} value={section.href}>
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>{section.title}</Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>
              <nav>
                {section.items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={css({
                      display: 'block',
                      padding: '2',
                      color: pathname === item.href ? 'primary.900' : 'gray.700',
                      fontWeight: pathname === item.href ? 'medium' : 'normal',
                      _hover: {
                        color: 'primary.900',
                      },
                    })}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  )
}
