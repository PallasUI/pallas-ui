import type { Meta, StoryObj } from '@storybook/react'
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
import Avatar from '~/ui/avatar'
import Sidebar from '~/ui/sidebar'

const meta: Meta<typeof Sidebar.Root> = {
  component: Sidebar.Root,
  title: 'Components/Sidebar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

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

export const Default: Story = {
  argTypes: {
    variant: {
      options: ['sidebar', 'floating', 'inset'],
      control: 'inline-radio',
    },
    side: {
      options: ['left', 'right'],
      control: 'inline-radio',
    },
    collapsible: {
      options: ['offcanvas', 'icon', 'none'],
      control: 'inline-radio',
    },
  },
  args: {
    variant: 'sidebar',
    side: 'left',
    collapsible: 'offcanvas',
  },
  render: (props) => {
    const Main = props['variant'] === 'inset' ? Sidebar.Inset : 'main'
    return (
      <Box h="50vh">
        <Sidebar.Provider>
          {props['side'] === 'right' && (
            <Main style={{ flex: 1 }}>
              <Sidebar.Trigger>
                <PanelLeft size={16} />
              </Sidebar.Trigger>
            </Main>
          )}

          <Sidebar.Root {...props}>
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

          {props['side'] === 'left' && (
            <Main style={{ height: 'full' }}>
              <Sidebar.Trigger>
                <PanelLeft size={16} />
              </Sidebar.Trigger>
            </Main>
          )}
        </Sidebar.Provider>
      </Box>
    )
  },
}

export const Inset = () => (
  <Box h="50vh">
    <Sidebar.Provider>
      <Sidebar.Root variant="inset" side="left" collapsible="offcanvas">
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

      <Sidebar.Inset>
        <Sidebar.Trigger>
          <PanelLeft size={16} />
        </Sidebar.Trigger>
      </Sidebar.Inset>
    </Sidebar.Provider>
  </Box>
)

export const Floating = () => (
  <Box h="50vh">
    <Sidebar.Provider>
      <Sidebar.Root variant="floating" side="left" collapsible="offcanvas">
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

      <main>
        <Sidebar.Trigger>
          <PanelLeft size={16} />
        </Sidebar.Trigger>
      </main>
    </Sidebar.Provider>
  </Box>
)

export const Icons = () => (
  <Box h="50vh">
    <Sidebar.Provider>
      <main>
        <Sidebar.Trigger>
          <PanelLeft size={16} />
        </Sidebar.Trigger>
      </main>

      <Sidebar.Root variant="sidebar" side="right" collapsible="icon">
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
    </Sidebar.Provider>
  </Box>
)

const Header = () => (
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

const Footer = () => (
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

const URL =
  'https://images.unsplash.com/photo-1738008896551-9ab767d9e6ac?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const SidebarContentGroup = () => (
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
