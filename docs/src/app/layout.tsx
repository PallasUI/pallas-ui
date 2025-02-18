import './global.css'
import { css } from '@styled-system/css'
import type { Metadata } from 'next/dist/types'
import type React from 'react'
import Header from '~/components/layout/header'
import Sidebar from '~/components/layout/sidebar'

export const metadata: Metadata = {
  title: 'Design System Documentation',
  description: 'Documentation for our design system components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          })}
        >
          <Header />
          <div
            className={css({
              display: 'flex',
              flex: '1',
            })}
          >
            <Sidebar />
            <main
              className={css({
                flex: '1',
                padding: '6',
                maxWidth: '1200px',
                margin: '0 auto',
              })}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
