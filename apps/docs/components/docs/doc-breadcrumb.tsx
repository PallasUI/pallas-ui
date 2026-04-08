'use client'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { Box, Divider, HStack } from '@styled-system/jsx'
import { allGuides } from 'content-collections'
import { allThemings } from 'content-collections'
import { ChevronRight, PanelLeft } from 'lucide-react'

export function DocsBreadcrumb({ breadcrumb }: { breadcrumb: { section: string; title: string } }) {
  const getBreadcrumbLink = (section: string) => {
    const sectionLower = section.toLowerCase()
    if (sectionLower === 'components') {
      // Link to the first component
      return '/docs/components/accordion'
    }
    if (sectionLower === 'layout') {
      // Link to the first layout page
      return '/docs/layout/index'
    }
    if (sectionLower === 'theming') {
      // Link to the first theming page
      const firstTheme = allThemings[0]
      return '/docs/theming/index'
    }
    if (sectionLower === 'introduction') {
      // Link to the first guide
      const firstGuide = allGuides[0]
      return '/docs/introduction'
    }
    // Default fallback
    return '/docs'
  }
  return (
    <HStack pt="layout.default.sm">
      <Sidebar.Trigger css={{ display: { base: 'block', md: 'none' } }}>
        <PanelLeft size={16} />
      </Sidebar.Trigger>
      <Breadcrumb.Root>
        <Breadcrumb.List
          className={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
          })}
        >
          <Breadcrumb.Item>
            <Breadcrumb.Link
              href={getBreadcrumbLink(breadcrumb.section)}
              className={css({
                color: 'text.secondary',
                _hover: { color: 'primary' },
                transition: 'color 0.2s ease',
                fontSize: 'md',
              })}
            >
              {breadcrumb.section}
            </Breadcrumb.Link>
            <Breadcrumb.Separator>
              <ChevronRight size={18} className={css({ color: 'text.secondary' })} />
            </Breadcrumb.Separator>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link
              aria-current="page"
              className={css({
                color: 'text',
                fontWeight: 'medium',
                fontSize: 'md',
              })}
            >
              {breadcrumb.title}
            </Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </HStack>
  )
}
