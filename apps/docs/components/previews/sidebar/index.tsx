'use client'

import Avatar from '@/components/ui/avatar'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import {
  Calendar,
  Command,
  Home,
  Inbox,
  Menu,
  PanelLeft,
  Plus,
  Search,
  Settings,
} from 'lucide-react'

export default function Default() {
  return (
    <Box h="50vh" w="full">
      <Sidebar.Provider>
        <Sidebar.Root style={{ position: 'absolute' }}>
          <Sidebar.Header>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg" asChild>
                  <Header />
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Header>

          <Sidebar.Separator />

          <Sidebar.Content>
            <SidebarContentGroup />
          </Sidebar.Content>

          <Sidebar.Footer>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg" asChild>
                  <Footer />
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Footer>

          <Sidebar.Rail />
        </Sidebar.Root>

        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <PageContent />
        </main>
      </Sidebar.Provider>
    </Box>
  )
}

export const URL =
  'https://images.unsplash.com/photo-1738008896551-9ab767d9e6ac?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const Header = () => (
  <a
    href={'#' as string}
    className={css({
      display: 'flex',
      gap: 2,
      '.group:is([data-collapsible=icon]) &': {
        gap: 0,
      },
    })}
  >
    <div
      className={css({
        display: 'flex',
        size: '{spacing.9}',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '{lg}',
        bg: '{colors.primary.active}',
        color: '{colors.surface.container}',
      })}
    >
      <Command className="size-4" />
    </div>
    <div
      className={css({
        display: 'grid',
        flex: '1',
        textAlign: 'left',
        fontSize: '{sm}',
        lineHeight: 'tight',
      })}
    >
      <span
        className={css({
          truncate: true,
          fontWeight: 'semibold',
        })}
      >
        Acme Inc
      </span>
      <span
        className={css({
          truncate: true,
          fontSize: '{xs}',
        })}
      >
        Enterprise
      </span>
    </div>
  </a>
)

export const Footer = () => (
  <a
    href={'#' as string}
    className={css({
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      '.group:is([data-collapsible=icon]) &': {
        gap: 0,
      },
    })}
  >
    <Avatar.Root
      css={{
        borderRadius: 'md',
        '.group:is([data-collapsible=icon]) &': {
          h: '8!',
        },
      }}
    >
      <Avatar.Image src={URL} />
    </Avatar.Root>
    <div
      className={css({
        display: 'grid',
        flex: '1',
        textAlign: 'left',
        fontSize: '{sm}',
        lineHeight: 'tight',
      })}
    >
      <span
        className={css({
          truncate: true,
          fontWeight: 'semibold',
        })}
      >
        Pallas UI
      </span>
      <span
        className={css({
          truncate: true,
          fontSize: '{xs}',
        })}
      >
        Carbonteq
      </span>
    </div>
  </a>
)

const MENU_ITEMS = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

export const SidebarContentGroup = () => (
  <Sidebar.Group>
    <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
    <Sidebar.GroupAction title="Application Menu" size="sm" variant="text">
      <Menu strokeWidth={1} size={20} />
    </Sidebar.GroupAction>
    <Sidebar.GroupContent>
      <Sidebar.Menu>
        {MENU_ITEMS.map((item, i) => (
          <Sidebar.MenuItem key={item.title}>
            <Sidebar.MenuButton>
              <item.icon />
              <a href={item.url}>
                <span>{item.title}</span>
              </a>
            </Sidebar.MenuButton>
            {i === 0 && (
              <>
                <Sidebar.MenuBadge>12</Sidebar.MenuBadge>
                <Sidebar.MenuSub>
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton>Users</Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton>Groups</Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton>Media</Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                </Sidebar.MenuSub>
              </>
            )}
            {i === 2 && (
              <Sidebar.MenuAction title="Add Event" size="sm" variant="text">
                <Plus strokeWidth={1} size={20} />
              </Sidebar.MenuAction>
            )}
          </Sidebar.MenuItem>
        ))}
      </Sidebar.Menu>
    </Sidebar.GroupContent>
  </Sidebar.Group>
)

export const PageContent = () => {
  return (
    <>
      {/* Top bar with trigger */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          h: '53px',
          borderBottom: '1px solid',
          borderColor: 'border',
          gap: 2,
        })}
      >
        <Sidebar.Trigger>
          <PanelLeft size={20} />
        </Sidebar.Trigger>
        <span
          className={css({
            fontWeight: 'semibold',
            fontSize: 'lg',
            color: 'text',
          })}
        >
          Dashboard
        </span>
        <div />
      </div>

      {/* 3 skeleton cards */}
      <div
        className={css({
          display: 'flex',
          gap: 4,
          px: 6,
          py: 6,
          bg: 'transparent',
        })}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={css({
              flex: 1,
              h: '24',
              borderRadius: 'lg',
              boxShadow: 'sm',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              position: 'relative',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                w: '40%',
                h: 2,
                bg: 'border',
                borderRadius: 'full',
              })}
            />
            <div
              className={css({
                w: '40%',
                h: 2,
                bg: 'border',
                borderRadius: 'full',
              })}
            />
          </div>
        ))}
      </div>

      {/* 1 large card */}
      <div
        className={css({
          flex: 1,
          px: 6,
          pb: 6,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <div
          className={css({
            flex: 1,
            borderRadius: 'xl',
            boxShadow: 'md',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            position: 'relative',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              w: '40%',
              h: 3,
              bg: 'border',
              borderRadius: 'full',
              mb: 3,
            })}
          />
          <div
            className={css({
              w: '60%',
              h: 3,
              bg: 'border',
              borderRadius: 'full',
              mb: 2,
            })}
          />
          <div
            className={css({
              w: '30%',
              h: 3,
              bg: 'border',
              borderRadius: 'full',
            })}
          />
        </div>
      </div>
    </>
  )
}
