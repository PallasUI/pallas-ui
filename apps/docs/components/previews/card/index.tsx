'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Box } from '@styled-system/jsx'

export default function CardPreview() {
  return (
    <Box w="400px">
      <Card.Root>
        <Card.Header>
          <Card.Title>Welcome Back</Card.Title>
          <Card.Description>Here's what's happening with your projects</Card.Description>
        </Card.Header>
        <Card.Body>
          <p>This is a default card with some content.</p>
        </Card.Body>
        <Card.Footer>
          <Button>Action</Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  )
} 