'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Label } from '@/components/ui/label'
import Segmented from '@/components/ui/segmented'
import { Box, VStack, Grid } from '@styled-system/jsx'
import { Bot, Mic, Plus, SendHorizonal, User } from 'lucide-react'
import { useState } from 'react'

export default function ChatLayoutsPreview() {
  const [layout, setLayout] = useState<'vertical' | 'horizontal'>('vertical')
  const [newMessage, setNewMessage] = useState('')

  const messages = [
    {
      id: '1',
      content: 'This demo shows different input layouts available in the chat component.',
      variant: 'assistant' as const,
    },
    {
      id: '2',
      content: 'Switch between vertical and horizontal layouts using the controls above!',
      variant: 'user' as const,
    },
  ]

  const renderChat = () => {
    return (
      <Chat.Root>
        {messages.map((message) => (
          <Chat.Message key={message.id} variant={message.variant}>
            <Chat.Avatar
              fallback={message.variant === 'user' ? <User size={20} /> : <Bot size={20} />}
            />
            <Chat.Bubble>{message.content}</Chat.Bubble>
          </Chat.Message>
        ))}

        <Chat.Input layout={layout}>
          {layout === 'horizontal' && (
            <Chat.InputActions>
              <Button size="icon" variant="text" shape="circle">
                <Plus size={16} />
              </Button>
            </Chat.InputActions>
          )}

          <Chat.TextArea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />

          <Chat.InputActions>
            {layout === 'vertical' && (
              <Button size="icon" variant="text" shape="circle">
                <Plus size={16} />
              </Button>
            )}
            <Button
              size="icon"
              variant="text"
              shape="circle"
              css={{ marginLeft: layout === 'vertical' ? 'auto' : undefined }}
            >
              <Mic size={16} />
            </Button>
            <Button size="icon" shape="circle" disabled={!newMessage.trim()}>
              <SendHorizonal size={16} />
            </Button>
          </Chat.InputActions>
        </Chat.Input>
      </Chat.Root>
    )
  }

  return (
    <VStack gap={6} w="full" p="padding.block.lg">
      <Grid columnGap={4} rowGap={4} css={{ gridTemplateColumns: 'auto 1fr' }}>
        <Label htmlFor="layout" css={{ alignSelf: 'end' }}>
          Input Layout
        </Label>
        <Segmented.Root
          value={layout}
          onValueChange={(value) => setLayout(value as 'vertical' | 'horizontal')}
        >
          <Segmented.Option value="vertical">
            <Segmented.Text>Vertical</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="horizontal">
            <Segmented.Text>Horizontal</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>
      </Grid>

      <Box>{renderChat()}</Box>
    </VStack>
  )
}
