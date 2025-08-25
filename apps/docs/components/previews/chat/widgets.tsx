'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Label } from '@/components/ui/label'
import Segmented from '@/components/ui/segmented'
import { Switch } from '@/components/ui/switch'
import { Box, VStack, Grid } from '@styled-system/jsx'
import { Bot, Plus, SendHorizonal, User } from 'lucide-react'
import { useState } from 'react'

export default function ChatOptionsPreview() {
  const [optionLayout, setOptionLayout] = useState<'list' | 'grid' | 'inline'>('list')
  const [optionVariant, setOptionVariant] = useState<'default' | 'primary'>('default')
  const [showCheck, setShowCheck] = useState<boolean>(true)
  const [multiple, setMultiple] = useState<boolean>(false)
  const [newMessage, setNewMessage] = useState('')

  const options = [
    {
      group: 'Asian Cuisine',
      items: [
        { value: 'chinese', label: '🥢 Chinese' },
        { value: 'japanese', label: '🍣 Japanese' },
        { value: 'indian', label: '🍛 Indian' },
      ],
    },
    {
      group: 'Western Cuisine',
      items: [
        { value: 'italian', label: '🍝 Italian' },
        { value: 'french', label: '🥖 French' },
        { value: 'mexican', label: '🌮 Mexican' },
      ],
    },
  ]

  const messages = [
    {
      id: '1',
      content: 'Recommend me some food.',
      variant: 'user' as const,
    },
  ]

  const handleOptionSelect = (optionId: string) => {
    console.log('Selected cuisine:', optionId)
  }

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

        <Chat.Message>
          <Chat.Avatar fallback={<Bot size={20} />} />
          <Chat.Bubble>
            Sure! What type of cuisine are you in the mood for today? Whether you're craving
            something spicy, savory, or sweet, we have a variety of cuisines that can satisfy your
            taste buds.
            <Chat.Widget>
              <Chat.WidgetHeader>Choose Your Favorite Cuisine</Chat.WidgetHeader>
              <Chat.WidgetContent>
                <Chat.Options
                  optionLayout={optionLayout}
                  optionVariant={optionVariant}
                  showCheck={showCheck}
                  multiple={multiple}
                  onOptionSelect={handleOptionSelect}
                >
                  {options.map((group) => (
                    <Chat.OptionGroup key={group.group}>
                      <Chat.OptionGroupLabel>{group.group}</Chat.OptionGroupLabel>
                      {group.items.map((option) => (
                        <Chat.Option key={option.value} value={option.value}>
                          {option.label}
                        </Chat.Option>
                      ))}
                    </Chat.OptionGroup>
                  ))}
                </Chat.Options>
              </Chat.WidgetContent>
              <Chat.WidgetActions>
                <Button>Confirm Selection</Button>
              </Chat.WidgetActions>
            </Chat.Widget>
          </Chat.Bubble>
        </Chat.Message>

        <Chat.Input layout="vertical">
          <Chat.TextArea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Tell me about your food preferences..."
          />

          <Chat.InputActions>
            <Button size="icon" variant="text" shape="circle">
              <Plus size={16} />
            </Button>
            <Button
              size="icon"
              shape="circle"
              disabled={!newMessage.trim()}
              css={{ marginLeft: 'auto' }}
            >
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
        <Label htmlFor="option-layout" css={{ alignSelf: 'end' }}>
          Option Layout
        </Label>
        <Segmented.Root
          value={optionLayout}
          onValueChange={(value) => setOptionLayout(value as 'list' | 'grid' | 'inline')}
        >
          <Segmented.Option value="list">
            <Segmented.Text>List</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="grid">
            <Segmented.Text>Grid</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="inline">
            <Segmented.Text>Inline</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>

        <Label htmlFor="option-variant" css={{ alignSelf: 'end' }}>
          Option Variant
        </Label>
        <Segmented.Root
          value={optionVariant}
          onValueChange={(value) => setOptionVariant(value as 'default' | 'primary')}
        >
          <Segmented.Option value="default">
            <Segmented.Text>Default</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="primary">
            <Segmented.Text>Primary</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>

        <Label htmlFor="show-check" css={{ alignSelf: 'end' }}>
          Show Check
        </Label>
        <Switch id="show-check" checked={showCheck} onCheckedChange={setShowCheck} />

        <Label htmlFor="multiple-select" css={{ alignSelf: 'end' }}>
          Multiple Select
        </Label>
        <Switch id="multiple-select" checked={multiple} onCheckedChange={setMultiple} />
      </Grid>

      <Box>{renderChat()}</Box>
    </VStack>
  )
}
