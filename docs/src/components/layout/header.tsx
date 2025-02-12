import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import Link from 'next/link'
import MenuBar from '~/components/ui/menu-bar/menu-bar'

export default function Header() {
  return (
    <Box
      className={css({
        borderBottom: '1px solid',
        borderColor: 'gray.200',
        padding: '4',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          margin: '0 auto',
        })}
      >
        <Link
          href="/"
          className={css({
            fontSize: 'xl',
            fontWeight: 'bold',
            color: 'primary.900',
          })}
        >
          Design System
        </Link>

        <MenuBar.Root>
          <MenuBar.Menu>
            <MenuBar.Trigger>Documentation</MenuBar.Trigger>
            <MenuBar.Content>
              <MenuBar.Item>
                <Link href="/docs/getting-started">Getting Started</Link>
              </MenuBar.Item>
              <MenuBar.Item>
                <Link href="/docs/components">Components</Link>
              </MenuBar.Item>
              <MenuBar.Item>
                <Link href="/docs/guides">Guides</Link>
              </MenuBar.Item>
            </MenuBar.Content>
          </MenuBar.Menu>
        </MenuBar.Root>
      </div>
    </Box>
  )
}
