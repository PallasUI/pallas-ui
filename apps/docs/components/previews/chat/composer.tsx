'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Label } from '@/components/ui/label'
import Segmented from '@/components/ui/segmented'
import { Box, Grid, VStack } from '@styled-system/jsx'
import { Mic, Plus, SendHorizonal } from 'lucide-react'
import { useState } from 'react'

export default function ChatComposerPositionPreview() {
  const [composerPosition, setComposerPosition] = useState<'bottom' | 'center'>('center')
  const [newMessage, setNewMessage] = useState('')

  const suggestions = [
    'Tell me a fun fact!',
    'How can I improve my productivity?',
    'Suggest a good book to read',
    'What is the weather like today?',
    'Give me a motivational quote',
    'Help me plan my weekend',
    'Recommend a new recipe',
    'Tell me about space exploration',
  ]

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion)
  }

  const renderChat = () => {
    return (
      <Chat.Root>
        <Chat.Composer composerPosition={composerPosition}>
          <Chat.Suggestions suggestionVariant='outlined' suggestionShape='pill'>
            {suggestions.map((suggestion, index) => (
              <Chat.Suggestion key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </Chat.Suggestion>
            ))}
          </Chat.Suggestions>

          <Chat.Input inputLayout='vertical'>
            <Chat.TextArea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder='Type your message...'
            />
            <Chat.InputActions>
              <Button size='icon' variant='text' shape='circle'>
                <Plus size={16} />
              </Button>
              <Button size='icon' variant='text' shape='circle' css={{ marginLeft: 'auto' }}>
                <Mic size={16} />
              </Button>
              <Button size='icon' shape='circle' disabled={!newMessage.trim()}>
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
        <Label htmlFor='composerPosition' css={{ alignSelf: 'end' }}>
          Composer Position
        </Label>
        <Segmented.Root
          value={composerPosition}
          onValueChange={(value) => setComposerPosition(value as 'bottom' | 'center')}
        >
          <Segmented.Option value='bottom'>
            <Segmented.Text>Bottom</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value='center'>
            <Segmented.Text>Center</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>
      </Grid>

      <Box w='full' h='500px'>
        {renderChat()}
      </Box>
    </VStack>
  )
}
