'use client'

import Avatar from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import Sidebar from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { Paragraph } from '@/components/ui/typography'
import { css } from '@styled-system/css'
import { Box, Flex, HStack } from '@styled-system/jsx'
import { Bot, EllipsisVertical, PanelLeft, Search, SquarePen } from 'lucide-react'
import { Mic, Plus, SendHorizonal, User } from 'lucide-react'
import { useState } from 'react'
import * as React from 'react'

// Mock chats with sample conversations
const mockChats: ChatData[] = [
  {
    id: '1',
    title: 'React Component Help',
    timestamp: '2:30 PM',
    messages: [
      {
        id: '1-1',
        content: 'How to create a custom hook for state management in React?',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '1-2',
        content:
          'Custom hooks are functions that start with "use" and can call other hooks. They help you reuse stateful logic between components.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
  {
    id: '2',
    title: 'TypeScript Question',
    timestamp: '1:15 PM',
    messages: [
      {
        id: '2-1',
        content: 'What is the difference between interface and type in TypeScript?',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '2-2',
        content:
          'Interfaces can be extended and merged, while types are more flexible for unions and computed properties. Both define object shapes.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
  {
    id: '3',
    title: 'API Integration',
    timestamp: '11:45 AM',
    messages: [
      {
        id: '3-1',
        content: 'What are the best practices for handling REST API calls?',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '3-2',
        content:
          'Handle errors properly, show loading states, implement caching, add retry logic, and use TypeScript for type safety.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
  {
    id: '4',
    title: 'CSS Grid Layout',
    timestamp: 'Yesterday',
    messages: [
      {
        id: '4-1',
        content: 'Help me understand CSS Grid.',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '4-2',
        content:
          'CSS Grid is a layout system for creating complex layouts. Use display: grid, define columns and rows, and position items with grid properties.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Database Design',
    timestamp: 'Yesterday',
    messages: [
      {
        id: '5-1',
        content: 'How to design a relational database schema?',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '5-2',
        content:
          'Start by identifying entities and their relationships. Use normalization to reduce redundancy, define primary and foreign keys, and add appropriate constraints.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
  {
    id: '6',
    title: 'Performance Optimization',
    timestamp: 'Mar 15',
    messages: [
      {
        id: '6-1',
        content: 'Give me some tips for optimizing React application performance.',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '6-2',
        content:
          'Use React.memo to prevent unnecessary re-renders, memoize expensive calculations with useMemo, implement code splitting, and profile your app to identify bottlenecks.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
  {
    id: '7',
    title: 'Authentication Setup',
    timestamp: 'Mar 14',
    messages: [
      {
        id: '7-1',
        content: 'How to implement JWT authentication in a React app?',
        variant: 'user',
        timestamp: new Date(),
        isNew: false,
      },
      {
        id: '7-2',
        content:
          'Store the JWT token securely, include it in API request headers, protect routes with authentication checks, and implement token refresh for long sessions.',
        variant: 'assistant',
        timestamp: new Date(),
        isNew: false,
      },
    ],
  },
]

// mockChatHostory for sidebar
const mockChatHistory = [
  {
    label: 'Today',
    items: mockChats.slice(0, 3).map((chat) => ({
      id: chat.id,
      title: chat.title,
      timestamp: chat.timestamp,
      preview: `${chat.messages[chat.messages.length - 1]?.content.substring(0, 100)}`,
    })),
  },
  {
    label: 'Yesterday',
    items: mockChats.slice(3, 5).map((chat) => ({
      id: chat.id,
      title: chat.title,
      timestamp: chat.timestamp,
      preview: `${chat.messages[chat.messages.length - 1]?.content.substring(0, 100)}`,
    })),
  },
  {
    label: 'Last Week',
    items: mockChats.slice(5, 7).map((chat) => ({
      id: chat.id,
      title: chat.title,
      timestamp: chat.timestamp,
      preview: `${chat.messages[chat.messages.length - 1]?.content.substring(0, 100)}`,
    })),
  },
]

export default function ChatWithSidebar() {
  const [selectedChat, setSelectedChat] = useState<string>('')
  const [open, setOpen] = useState(true)

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId)
  }

  const handleNewChat = () => {
    setSelectedChat('')
  }

  // Get initial messages based on selected chat
  const getInitialMessages = () => {
    if (!selectedChat) return []
    const chat = mockChats.find((c) => c.id === selectedChat)
    return chat?.messages || []
  }

  return (
    <HStack h='600px' w='full'>
      <Box css={{ w: 'fit', h: 'full' }}>
        <ChatSidebar
          open={open}
          onOpenChange={setOpen}
          selectedChat={selectedChat}
          onChatSelect={handleChatSelect}
          onNewChat={handleNewChat}
        />
      </Box>
      <Flex css={{ w: 'full', h: 'full' }}>
        <ChatPreview initialMessages={getInitialMessages()} chatId={selectedChat} />
      </Flex>
    </HStack>
  )
}

// Type definitions
interface Message {
  id: string
  content: string
  variant: 'user' | 'assistant'
  timestamp: Date
  isNew: boolean
}

interface ChatData {
  id: string
  title: string
  timestamp: string
  messages: Message[]
}

interface ChatPreviewProps {
  initialMessages?: Message[]
  chatId?: string
}

interface ChatHistoryItem {
  id: string
  title: string
  timestamp: string
  preview: string
  isActive?: boolean
}

interface ChatHistoryGroup {
  label: string
  items: ChatHistoryItem[]
}

interface ChatHistoryGroupProps {
  group: ChatHistoryGroup
  selectedChat: string
  onChatSelect: (chatId: string) => void
}

interface ChatSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedChat: string
  onChatSelect: (chatId: string) => void
  onNewChat: () => void
}

function ChatPreview({ initialMessages = [], chatId }: ChatPreviewProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [showSuggestions, setShowSuggestions] = useState(initialMessages.length === 0)
  const [suggestions] = useState([
    'Tell me a fun fact!',
    'How can I improve my productivity?',
    'Suggest a good book to read.',
    'What is the weather like today?',
    'Give me a motivational quote.',
  ])
  const [newMessage, setNewMessage] = useState('')

  React.useEffect(() => {
    setMessages(initialMessages)
    setShowSuggestions(initialMessages.length === 0)
  }, [initialMessages])

  const addMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      variant: 'user',
      timestamp: new Date(),
      isNew: true,
    }

    setMessages((prev) => [...prev.map((msg) => ({ ...msg, isNew: false })), userMessage])
    setNewMessage('')
    setShowSuggestions(false)

    const assistantMessageId = (Date.now() + 1).toString()
    const typingMessage: Message = {
      id: assistantMessageId,
      content: '...',
      variant: 'assistant',
      timestamp: new Date(),
      isNew: true,
    }
    setMessages((prev) => [...prev.map((msg) => ({ ...msg, isNew: false })), typingMessage])

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content:
                  'This is a sample response. Thank you for your message! I\'m here to assist you with any questions or information you need. If you\'d like a fun fact, productivity tips, book suggestions, or anything else, just let me know. How can I help you today?',
                isNew: true
              }
            : { ...msg, isNew: false },
        ),
      )
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion)
    setShowSuggestions(false)
  }

  return (
    <Chat.Root>
      <Chat.Messages>
        {messages.map((message) => (
          <Chat.Message key={message.id} variant={message.variant}>
            <Chat.Avatar
              fallback={message.variant === 'user' ? <User size={20} /> : <Bot size={20} />}
            />
            <Chat.Bubble showTypingEffect={message.variant === 'assistant' && message.isNew}>
              {message.content === '...' ? <Skeleton>{message.content}</Skeleton> : message.content}
            </Chat.Bubble>
          </Chat.Message>
        ))}
      </Chat.Messages>

      <Chat.Composer composerPosition={messages.length === 0 ? 'center' : 'bottom'}>
        {showSuggestions && messages.length === 0 && (
          <Chat.Suggestions suggestionVariant='outlined' suggestionShape='pill'>
            {suggestions.map((suggestion, index) => (
              <Chat.Suggestion key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </Chat.Suggestion>
            ))}
          </Chat.Suggestions>
        )}

        <Chat.Input inputLayout='vertical'>
          <Chat.TextArea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your message...'
            onSend={addMessage}
          />
          <Chat.InputActions>
            <Button size='icon' variant='text' shape='circle'>
              <Plus size={16} />
            </Button>
            <Button size='icon' variant='text' shape='circle' css={{ marginLeft: 'auto' }}>
              <Mic size={16} />
            </Button>
            <Button size='icon' shape='circle' onClick={addMessage} disabled={!newMessage.trim()}>
              <SendHorizonal size={16} />
            </Button>
          </Chat.InputActions>
        </Chat.Input>
      </Chat.Composer>
    </Chat.Root>
  )
}

// Sample Chat Sidebar using Pallas' Sidebar component
function ChatSidebar({
  open,
  onOpenChange,
  selectedChat,
  onChatSelect,
  onNewChat,
}: ChatSidebarProps) {
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

      {!open && (
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
