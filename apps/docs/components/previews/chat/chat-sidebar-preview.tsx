'use client'

import Avatar from '@/components/ui/avatar'
import { Paragraph } from '@/components/ui/typography'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { Bot, EllipsisVertical, PanelLeft, Search, SquarePen } from 'lucide-react'
import { mockChatHistory } from './mock-data'
import type {
  ChatHistoryGroupProps,
  ChatSidebarProps,
} from './types'
import { useMediaQuery } from './use-media-query'

export function ChatSidebar({
  open,
  onOpenChange,
  selectedChat,
  onChatSelect,
  onNewChat,
}: ChatSidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Sidebar.Provider open={open} onOpenChange={onOpenChange}>
      <Sidebar.Root
        side='left'
        className={css({
          position: 'unset',
          h: 'full',
          borderRight: '1px solid',
          borderColor: 'border',
        })}
      >
        <Sidebar.Header>
          <HStack justify='space-between'>
            <Bot />
            <Sidebar.Trigger onClick={() => onOpenChange(!open)}>
              <PanelLeft />
            </Sidebar.Trigger>
          </HStack>
          <Sidebar.Menu css={{ gap: 0 }}>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size='sm' onClick={onNewChat}>
                <SquarePen />
                New Chat
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size='sm' onClick={onNewChat}>
                <Search />
                Search Chats
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>

        <Sidebar.Separator />

        <Sidebar.Content>
          {mockChatHistory.map((group) => (
            <ChatHistoryGroup
              key={group.label}
              group={group}
              selectedChat={selectedChat}
              onChatSelect={onChatSelect}
            />
          ))}
        </Sidebar.Content>

        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size='md'>
                <>
                  <Avatar.Root css={{ bg: 'primary.bg' }}>
                    <Avatar.Fallback>PU</Avatar.Fallback>
                  </Avatar.Root>
                  Pallas UI
                </>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>

        <Sidebar.Rail />
      </Sidebar.Root>

      {(!open || isMobile) && (
        <Sidebar.Trigger onClick={() => onOpenChange(!open)}>
          <PanelLeft />
        </Sidebar.Trigger>
      )}
    </Sidebar.Provider>
  )
}

function ChatHistoryGroup({ group, selectedChat, onChatSelect }: ChatHistoryGroupProps) {
  return (
    <Sidebar.Group css={{ p: 0 }}>
      <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {group.items.map((item) => (
            <Sidebar.MenuItem
              key={item.id}
              className={css({
                _hover: {
                  '& [data-menu-action]': { opacity: 1 },
                },
              })}
            >
              <Sidebar.MenuButton
                data-active={selectedChat === item.id}
                onClick={() => onChatSelect(item.id)}
                css={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <HStack>
                  <Paragraph css={{ textStyle: 'sm' }}>{item.title}</Paragraph>
                </HStack>
                <Paragraph css={{ textStyle: 'xs', fontWeight: 'normal', lineClamp: 1 }}>
                  {item.preview}
                </Paragraph>
              </Sidebar.MenuButton>

              <Sidebar.MenuAction
                variant='text'
                data-menu-action
                className={css({
                  opacity: 0,
                  transition: 'opacity 0.1s',
                  top: 3,
                })}
              >
                <EllipsisVertical size={16} />
              </Sidebar.MenuAction>
            </Sidebar.MenuItem>
          ))}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  )
}
