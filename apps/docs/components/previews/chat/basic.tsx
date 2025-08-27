'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { css } from '@styled-system/css'
import { Box, Grid, HStack, VStack } from '@styled-system/jsx'
import { Bot, Mic, Plus, SendHorizontal, User } from 'lucide-react'
import { useState } from 'react'

interface Message {
  id: string
  content: string
  variant: 'user' | 'assistant'
  timestamp: Date
  isNew: boolean
}

export default function ChatPreview() {
  const [showTypingEffect, setShowTypingEffect] = useState(true)
  const [typingSpeed, setTypingSpeed] = useState(20)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How may I help you?',
      variant: 'assistant',
      timestamp: new Date('2024-01-01T09:00:00'),
      isNew: false,
    },
  ])

  const [showSuggestions, setShowSuggestions] = useState(true)
  const [suggestions] = useState([
    'Tell me a fun fact!',
    'How can I improve my productivity?',
    'Suggest a good book to read.',
    'What is the weather like today?',
    'Give me a motivational quote.',
  ])

  const [newMessage, setNewMessage] = useState('')

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
                isNew: true,
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
    <VStack gap={6} w='full' p='padding.block.lg'>
      <Grid columnGap={4} rowGap={4} css={{ gridTemplateColumns: 'auto 1fr' }}>
        <Label css={{ alignSelf: 'end' }}>Show Typing Effect</Label>
        <HStack gap={2}>
          <Switch
            id='typing-effect'
            checked={showTypingEffect}
            onCheckedChange={setShowTypingEffect}
          />
        </HStack>

        <Label css={{ alignSelf: 'end' }}>Typing Speed (ms)</Label>
        <Input size='md' className={css({ w: '80px' })}>
          <Input.Number
            placeholder='Enter a number'
            min={0}
            max={100}
            value={typingSpeed}
            onChange={(e) => setTypingSpeed(Number(e.target.value))}
          />
        </Input>
      </Grid>

      <Box w='full' h='500px'>
        <Chat.Root>
          <Chat.Messages>
            {messages.map((message) => (
              <Chat.Message key={message.id} variant={message.variant}>
                <Chat.Avatar
                  fallback={message.variant === 'user' ? <User size={20} /> : <Bot size={20} />}
                />
                <Chat.Bubble>
                  <Chat.Content
                    showTypingEffect={
                      message.variant === 'assistant' && message.isNew && showTypingEffect
                    }
                    typingSpeed={typingSpeed}
                  >
                    {message.content}
                  </Chat.Content>
                  <Chat.Metadata>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Chat.Metadata>
                </Chat.Bubble>
              </Chat.Message>
            ))}
          </Chat.Messages>

          <Chat.Composer>
            {showSuggestions && (
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
                <Button
                  size='icon'
                  variant='primary'
                  shape='circle'
                  onClick={addMessage}
                  disabled={!newMessage.trim()}
                >
                  <SendHorizontal size={16} />
                </Button>
              </Chat.InputActions>
            </Chat.Input>
          </Chat.Composer>
        </Chat.Root>
      </Box>
    </VStack>
  )
}
