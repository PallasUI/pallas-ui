'use client'

import { Box, Flex, HStack } from '@styled-system/jsx'
import { useState } from 'react'
import { ChatMainPreview } from './chat-main-preview'
import { ChatSidebar } from './chat-sidebar-preview'
import { mockChats } from './mock-data'

export default function ChatWithSidebar() {
  const [selectedChat, setSelectedChat] = useState<string>('')
  const [open, setOpen] = useState(true)

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId)
  }

  const handleNewChat = () => {
    setSelectedChat('')
  }

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
        <ChatMainPreview initialMessages={getInitialMessages()} />
      </Flex>
    </HStack>
  )
}
