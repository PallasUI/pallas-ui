import { css } from '@styled-system/css'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Footer } from '~/components/docs/footer'
import { Header } from '~/components/docs/header'
import { siteUrl } from '~/lib/env'
import { ThemeProvider } from './theme-provider'

const commonMetadata = {
  title: {
    default: 'Shadow Panda',
    template: '%s | Shadow Panda',
  },
  description:
    'Shadow Panda is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...commonMetadata,
  keywords: ['Shadow Panda', 'Panda CSS', 'shadcn/ui', 'Radix UI', 'Components', 'React'],
  manifest: '/site.webmanifest',
  openGraph: {
    ...commonMetadata,
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
  },
  twitter: {
    ...commonMetadata,
    site: 'Shadow Panda',
    card: 'summary_large_image',
    creator: '@nanopx',
  },
}

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              minH: 'screen',
            })}
          >
            <Header />
            <div className={css({ flex: '1' })}>{props.children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
