'use client'
import AnimatedBrandName from '@/components/home/animated-brandname'
import { Heading } from '@/components/ui/typography'
import { css } from '@styled-system/css'
import { Box, HStack } from '@styled-system/jsx'
import { LayoutGrid, Package } from 'lucide-react'
import Link from 'next/link'
import { SearchDialog } from '../search'

export function DocsHeader() {
  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '4',
        px: { base: 4, md: 6 },
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderColor: 'border',
        height: 'header.height',
        position: 'fixed',
        insetInlineStart: '0',
        insetBlockStart: '0',
        top: '0',
        zIndex: '100',
        bg: 'surface.container',
        width: '100%',
      })}
    >
      <HStack w="full" justify="space-between" align="center" gap={{ base: 2, md: 4 }}>
        <HStack gap={4} align="center">
          <Box w={{ base: '86px', md: '220px' }}>
            <Box
              css={{
                fontSize: { base: 'xl', md: '3xl' },
                fontWeight: 'extrabold',
                lineHeight: '1',
                fontFamily: 'heading',
              }}
            >
              <Link href="/">
                <AnimatedBrandName />
              </Link>
            </Box>
          </Box>
        </HStack>
        <HStack>
          <Box minW={{ base: '100px', md: '180px' }} w="auto">
            <SearchDialog />
          </Box>
        </HStack>
        <HStack gap={{ base: 1, md: 8 }} align="center">
          <HStack gap={{ base: 1, md: 6 }} align="center">
            <Link
              href="/docs/introduction/introduction"
              aria-label="Docs"
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                _hover: { color: 'primary.hover' },
              })}
            >
              <LayoutGrid size={18} style={{ marginRight: 4 }} />
              <span className={css({ display: { base: 'none', md: 'inline' } })}>Docs</span>
            </Link>
            <Link
              href="/docs/components/accordion"
              aria-label="Components"
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                _hover: { color: 'primary.hover' },
              })}
            >
              <Package size={18} style={{ marginRight: 4 }} />
              <span className={css({ display: { base: 'none', md: 'inline' } })}>Components</span>
            </Link>
          </HStack>
          <Link
            href="https://github.com/PallasUI/pallas-ui"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-label="GitHub Icon"
              role="img"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
        </HStack>
      </HStack>
    </header>
  )
}
