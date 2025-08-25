'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Box } from '@styled-system/jsx'

export default function DefaultCardPreview() {
  return (
    <Box w="400px">
      <Card.Root variant="elevated" size="md">
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card description</Card.Description>
        </Card.Header>
        <Card.Body>
          <p>Card content goes here.</p>
        </Card.Body>
        <Card.Footer>
          <Button>Action</Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  )
} 