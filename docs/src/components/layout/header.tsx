import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import Link from 'next/link'
import { Content, Item, Menu, Root, Trigger } from '~/components/ui/menu-bar'

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

        <Root>
          <Menu>
            <Trigger>Documentation</Trigger>
            <Content>
              <Item>
                <Link href="/docs/getting-started">Getting Started</Link>
              </Item>
              <Item>
                <Link href="/docs/components">Components</Link>
              </Item>
              <Item>
                <Link href="/docs/guides">Guides</Link>
              </Item>
            </Content>
          </Menu>
        </Root>
      </div>
    </Box>
  )
}
