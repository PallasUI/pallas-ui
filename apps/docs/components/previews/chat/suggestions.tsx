'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Label } from '@/components/ui/label'
import Segmented from '@/components/ui/segmented'
import { Box, VStack, HStack, Grid } from '@styled-system/jsx'
import { Bot, Plus, SendHorizonal, User } from 'lucide-react'
import { useState } from 'react'

export default function ChatSuggestionsPreview() {
  const [suggestionVariant, setSuggestionVariant] = useState<'outlined' | 'filled' | 'primary'>(
    'outlined',
  )
  const [suggestionShape, setSuggestionShape] = useState<'pill' | 'card'>('pill')
  const [newMessage, setNewMessage] = useState('')

  const suggestions = [
    'How can I help you today?',
    'Tell me about your services',
    'Show pricing information',
    'Get technical support',
    'Quick question',
    'Schedule a meeting',
  ]

  const messages = [
    {
      id: '1',
      content: 'This demo shows different suggestion variants and shapes in the chat component.',
      variant: 'assistant' as const,
    },
    {
      id: '2',
      content: 'Try different combinations of variant and shape using the controls above!',
      variant: 'user' as const,
    },
  ]

  const addMessage = (message?: string) => {
    const messageText = message || newMessage
    if (!messageText.trim()) return
    setNewMessage('')
  }

  const renderChat = () => {
    return (
      <Chat.Root>
        <Chat.Messages>
          {messages.map((message) => (
            <Chat.Message key={message.id} variant={message.variant}>
              <Chat.Avatar
                fallback={message.variant === 'user' ? <User size={20} /> : <Bot size={20} />}
              />
              <Chat.Bubble>
                <Chat.Content>{message.content}</Chat.Content>
              </Chat.Bubble>
            </Chat.Message>
          ))}
        </Chat.Messages>

        <Chat.Composer>
          <Chat.Suggestions suggestionVariant={suggestionVariant} suggestionShape={suggestionShape}>
            {suggestions.map((suggestion, index) => (
              <Chat.Suggestion key={index} onClick={() => addMessage(suggestion)}>
                {suggestion}
              </Chat.Suggestion>
            ))}
          </Chat.Suggestions>

          <Chat.Input inputLayout='vertical'>
            <Chat.TextArea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder='Type your message or click a suggestion...'
            />

            <Chat.InputActions>
              <Button size='icon' variant='text' shape='circle'>
                <Plus size={16} />
              </Button>
              <Button
                size='icon'
                shape='circle'
                disabled={!newMessage.trim()}
                css={{ marginLeft: 'auto' }}
              >
                <SendHorizonal size={16} />
              </Button>
            </Chat.InputActions>
          </Chat.Input>
        </Chat.Composer>
      </Chat.Root>
    )
  }

  return (
    <VStack gap={6} w='full' p='padding.block.lg'>
      <Grid columnGap={4} rowGap={4} css={{ gridTemplateColumns: 'auto 1fr' }}>
        <Label css={{ alignSelf: 'end' }}>Suggestion Variant</Label>
        <Segmented.Root
          value={suggestionVariant}
          onValueChange={(value) =>
            setSuggestionVariant(value as 'outlined' | 'filled' | 'primary')
          }
        >
          <Segmented.Option value='outlined'>
            <Segmented.Text>Outlined</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value='filled'>
            <Segmented.Text>Filled</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value='primary'>
            <Segmented.Text>Primary</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>

        <Label css={{ alignSelf: 'end' }}>Suggestion Shape</Label>
        <Segmented.Root
          value={suggestionShape}
          onValueChange={(value) => setSuggestionShape(value as 'pill' | 'card')}
        >
          <Segmented.Option value='pill'>
            <Segmented.Text>Pill</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value='card'>
            <Segmented.Text>Card</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>
      </Grid>

      <Box w='full' h='500px'>
        {renderChat()}
      </Box>
    </VStack>
  )
}
