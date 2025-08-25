'use client'

import { Card } from '@/components/ui/card'
import Avatar from '@/components/ui/avatar'
import { Box, HStack, VStack } from '@styled-system/jsx'

const URL = 'https://github.com/nanopx.png'

export default function WithAvatarCardPreview() {
  return (
    <Box w="400px">
      <Card.Root variant="elevated">
        <Card.Header>
          <HStack gap="4" align="center">
            <Avatar.Root>
              <Avatar.Image src={URL} />
              <Avatar.Fallback>AR</Avatar.Fallback>
            </Avatar.Root>
            <VStack gap="1">
              <Card.Title>Alex Johnson</Card.Title>
              <Card.Description>Product Owner</Card.Description>
            </VStack>
          </HStack>
        </Card.Header>
      </Card.Root>
    </Box>
  )
} 