'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Skeleton } from '@/components/ui/skeleton'
import { Bot, Mic, Plus, SendHorizonal, User } from 'lucide-react'
import { useState } from 'react'

interface Message {
  id: string
  content: string
  variant: 'user' | 'assistant'
  timestamp: Date
  isNew: boolean
}

export default function ChatPreview() {
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
                  "This is a sample response. Thank you for your message! I'm here to assist you with any questions or information you need. If you'd like a fun fact, productivity tips, book suggestions, or anything else, just let me know. How can I help you today?",
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
    <Chat.Root>
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

      {showSuggestions && (
        <Chat.Suggestions suggestionVariant="outlined" suggestionShape="pill">
          {suggestions.map((suggestion, index) => (
            <Chat.Suggestion key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </Chat.Suggestion>
          ))}
        </Chat.Suggestions>
      )}

      <Chat.Input layout="vertical">
        <Chat.TextArea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onSend={addMessage}
        />
        <Chat.InputActions>
          <Button size="icon" variant="text" shape="circle">
            <Plus size={16} />
          </Button>
          <Button size="icon" variant="text" shape="circle" css={{ marginLeft: 'auto' }}>
            <Mic size={16} />
          </Button>
          <Button size="icon" shape="circle" onClick={addMessage} disabled={!newMessage.trim()}>
            <SendHorizonal size={16} />
          </Button>
        </Chat.InputActions>
      </Chat.Input>
    </Chat.Root>
  )
}
