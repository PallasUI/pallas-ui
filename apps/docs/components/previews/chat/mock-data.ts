import type { ChatData, ChatHistoryGroup } from './types'

export const mockChats: ChatData[] = [
  {
    id: '1',
    title: 'React Component Help',
    messages: [
      {
        id: '1-1',
        content: 'How to create a custom hook for state management in React?',
        variant: 'user',
        timestamp: new Date('2024-08-27T14:25:00'),
        isNew: false,
      },
      {
        id: '1-2',
        content:
          'Custom hooks are functions that start with "use" and can call other hooks. They help you reuse stateful logic between components.',
        variant: 'assistant',
        timestamp: new Date('2024-08-27T14:25:30'),
        isNew: false,
      },
    ],
  },
  {
    id: '2',
    title: 'TypeScript Question',
    messages: [
      {
        id: '2-1',
        content: 'What is the difference between interface and type in TypeScript?',
        variant: 'user',
        timestamp: new Date('2024-08-27T13:10:00'),
        isNew: false,
      },
      {
        id: '2-2',
        content:
          'Interfaces can be extended and merged, while types are more flexible for unions and computed properties. Both define object shapes.',
        variant: 'assistant',
        timestamp: new Date('2024-08-27T13:10:45'),
        isNew: false,
      },
    ],
  },
  {
    id: '3',
    title: 'API Integration',
    messages: [
      {
        id: '3-1',
        content: 'What are the best practices for handling REST API calls?',
        variant: 'user',
        timestamp: new Date('2024-08-27T11:45:00'),
        isNew: false,
      },
      {
        id: '3-2',
        content:
          'Handle errors properly, show loading states, implement caching, add retry logic, and use TypeScript for type safety.',
        variant: 'assistant',
        timestamp: new Date('2024-08-27T11:45:20'),
        isNew: false,
      },
    ],
  },
  {
    id: '4',
    title: 'CSS Grid Layout',
    messages: [
      {
        id: '4-1',
        content: 'Help me understand CSS Grid.',
        variant: 'user',
        timestamp: new Date('2024-08-26T16:30:00'),
        isNew: false,
      },
      {
        id: '4-2',
        content:
          'CSS Grid is a layout system for creating complex layouts. Use display: grid, define columns and rows, and position items with grid properties.',
        variant: 'assistant',
        timestamp: new Date('2024-08-26T16:30:25'),
        isNew: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Database Design',
    messages: [
      {
        id: '5-1',
        content: 'How to design a relational database schema?',
        variant: 'user',
        timestamp: new Date('2024-08-26T10:15:00'),
        isNew: false,
      },
      {
        id: '5-2',
        content:
          'Start by identifying entities and their relationships. Use normalization to reduce redundancy, define primary and foreign keys, and add appropriate constraints.',
        variant: 'assistant',
        timestamp: new Date('2024-08-26T10:15:40'),
        isNew: false,
      },
    ],
  },
  {
    id: '6',
    title: 'Performance Optimization',
    messages: [
      {
        id: '6-1',
        content: 'Give me some tips for optimizing React application performance.',
        variant: 'user',
        timestamp: new Date('2024-08-20T09:30:00'),
        isNew: false,
      },
      {
        id: '6-2',
        content:
          'Use React.memo to prevent unnecessary re-renders, memoize expensive calculations with useMemo, implement code splitting, and profile your app to identify bottlenecks.',
        variant: 'assistant',
        timestamp: new Date('2024-08-20T09:31:10'),
        isNew: false,
      },
    ],
  },
  {
    id: '7',
    title: 'Authentication Setup',
    messages: [
      {
        id: '7-1',
        content: 'How to implement JWT authentication in a React app?',
        variant: 'user',
        timestamp: new Date('2024-08-19T14:20:00'),
        isNew: false,
      },
      {
        id: '7-2',
        content:
          'Store the JWT token securely, include it in API request headers, protect routes with authentication checks, and implement token refresh for long sessions.',
        variant: 'assistant',
        timestamp: new Date('2024-08-19T14:20:35'),
        isNew: false,
      },
    ],
  },
]

export const mockChatHistory: ChatHistoryGroup[] = [
  {
    label: 'Today',
    items: mockChats.slice(0, 3).map((chat) => ({
      id: chat.id,
      title: chat.title,
      timestamp:
        chat.messages[chat.messages.length - 1]?.timestamp.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }) || '',
      preview: `${chat.messages[chat.messages.length - 1]?.content.substring(0, 100)}`,
    })),
  },
  {
    label: 'Yesterday',
    items: mockChats.slice(3, 5).map((chat) => ({
      id: chat.id,
      title: chat.title,
      timestamp: 'Yesterday',
      preview: `${chat.messages[chat.messages.length - 1]?.content.substring(0, 100)}`,
    })),
  },
  {
    label: 'Last Week',
    items: mockChats.slice(5, 7).map((chat) => ({
      id: chat.id,
      title: chat.title,
      timestamp:
        chat.messages[chat.messages.length - 1]?.timestamp.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        }) || '',
      preview: `${chat.messages[chat.messages.length - 1]?.content.substring(0, 100)}`,
    })),
  },
]
