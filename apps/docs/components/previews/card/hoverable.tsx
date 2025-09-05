'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Box } from '@styled-system/jsx'

export default function HoverableCardPreview() {
  return (
    <Box w="400px">
      <Card.Root hoverable>
        <Card.Header>
          <Card.Title>Hoverable Card</Card.Title>
          <Card.Description>Try hovering over this card to see the effect</Card.Description>
        </Card.Header>
        <Card.Body>
          <p>This card has the hoverable prop enabled, which adds a subtle lift and shadow effect on hover.</p>
        </Card.Body>
        <Card.Footer>
          <Button>Interact</Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  )
} 