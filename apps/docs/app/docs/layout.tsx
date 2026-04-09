'use client'

import { Footer } from '@/components/layout/footer'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import { useEffect, useState } from 'react'
import { DynamicToc } from '../../components/docs/dynamic-toc'
import { DocsHeader } from '../../components/docs/layout/docs-header'
import { DocsSidebar } from '../../components/docs/layout/docs-sidebar'

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return <>{children}</>
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar.Provider>
      <DocsHeader />
      <Box
        className={css({
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          bg: 'surface.container',
        })}
      >
        <Box
          className={css({
            flex: 1,
            display: 'grid',
            lg: { gridTemplateColumns: '{sizes.sidebar.width} 1fr {sizes.toc.width}' },
            position: 'relative',
          })}
        >
          {/* Sidebar */}
          <Box
            w="{sizes.sidebar.width}"
            h="{sizes.sidebar.height}"
            bg="surface.container"
            className={css({
              display: { base: 'none', lg: 'block' },
              position: 'sticky',
              top: '{sizes.header.height}',
              zIndex: 1,
            })}
          >
            <DocsSidebar />
          </Box>

          {/* Main Content */}
          <Box
            w="100%"
            px="layout.section.sm"
            pb="layout.internal.sm"
            minW={0}
            pl={{ base: '6', md: '10' }}
            pt="{sizes.header.height}"
            className={css({
            overflowX: 'auto',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftStyle: 'solid',
            borderColor: 'border.secondary',
            boxSizing: 'border-box',
            })}
          >
            {children}
          </Box>

          {/* ToC */}
          <Box
            w="calc({sizes.toc.width} - 2px)"
            h="{sizes.sidebar.height}"
            className={css({
              display: { base: 'none', lg: 'block' },
              position: 'sticky',
              top: '{sizes.header.height}',
              zIndex: 1,
              borderLeftWidth: '1px',
              borderLeftStyle: 'solid',
              borderColor: 'border.secondary',
              fontSize: 'sm',
              boxSizing: 'content-box',
            })}
          >
            <Box w="full" p="4" bg="surface.container">
              <ClientOnly>
                <DynamicToc />
              </ClientOnly>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Sidebar.Provider>
  )
}
