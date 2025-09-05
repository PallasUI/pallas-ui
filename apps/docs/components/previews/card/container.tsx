'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Box } from '@styled-system/jsx'

export default function ContainerCardPreview() {
  return (
    <Box w="400px">
      <Card.Root variant="container">
        <Card.Header>
          <Card.Title>Container Card</Card.Title>
          <Card.Description>A subtle container variant with minimal shadow</Card.Description>
        </Card.Header>
        <Card.Body>
          <p>This card uses the container variant for a more subtle appearance.</p>
        </Card.Body>
        <Card.Footer>
          <Button>View Details</Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  )
}
