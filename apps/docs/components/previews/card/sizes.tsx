'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Flex, VStack } from '@styled-system/jsx'

export default function SizesCardPreview() {
  return (
    <Flex direction="row" wrap="wrap" gap="6" align="flex-start">
      <VStack maxW="280px" align="stretch">
        <Card.Root size="sm">
          <Card.Cover>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=280&h=160&fit=crop"
              alt="Small Card Cover"
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
          </Card.Cover>
          <Card.Header>
            <Card.Title>Small Card</Card.Title>
            <Card.Description>Compact size with cover image</Card.Description>
          </Card.Header>
          <Card.Body>
            <p>Some content in a small card.</p>
          </Card.Body>
          <Card.Footer>
            <Button size="sm">Action</Button>
          </Card.Footer>
        </Card.Root>
      </VStack>

      <VStack maxW="350px" align="stretch">
        <Card.Root size="md">
          <Card.Cover>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=350&h=200&fit=crop"
              alt="Medium Card Cover"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </Card.Cover>
          <Card.Header>
            <Card.Title>Medium Card</Card.Title>
            <Card.Description>Default size with cover image</Card.Description>
          </Card.Header>
          <Card.Body>
            <p>Content in medium card with more space.</p>
          </Card.Body>
          <Card.Footer>
            <Button>Action</Button>
          </Card.Footer>
        </Card.Root>
      </VStack>

      <VStack maxW="420px" align="stretch">
        <Card.Root size="lg">
          <Card.Cover>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=420&h=240&fit=crop"
              alt="Large Card Cover"
              style={{ width: '100%', height: '240px', objectFit: 'cover' }}
            />
          </Card.Cover>
          <Card.Header>
            <Card.Title>Large Card</Card.Title>
            <Card.Description>Spacious size with cover image</Card.Description>
          </Card.Header>
          <Card.Body>
            <p>Content in large card with more breathing room.</p>
          </Card.Body>
          <Card.Footer>
            <Button size="lg">Action</Button>
          </Card.Footer>
        </Card.Root>
      </VStack>
    </Flex>
  )
} 