export interface Message {
  id: string
  content: string
  variant: 'user' | 'assistant'
  timestamp: Date
  isNew: boolean
}

export interface ChatData {
  id: string
  title: string
  messages: Message[]
}

export interface ChatPreviewProps {
  initialMessages?: Message[]
}

export interface ChatHistoryItem {
  id: string
  title: string
  timestamp: string
  preview: string
  isActive?: boolean
}

export interface ChatHistoryGroup {
  label: string
  items: ChatHistoryItem[]
}

export interface ChatHistoryGroupProps {
  group: ChatHistoryGroup
  selectedChat: string
  onChatSelect: (chatId: string) => void
}

export interface ChatSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedChat: string
  onChatSelect: (chatId: string) => void
  onNewChat: () => void
}
