'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Flex, VStack } from '@styled-system/jsx'
import Image from 'next/image'

export default function SizesCardPreview() {
  return (
    <Flex direction="row" wrap="wrap" gap="6" align="flex-start">
      <VStack maxW="280px" align="stretch">
        <Card.Root size="sm">
          <Card.Cover>
            <Image
              src="/card-cover.jpeg"
              alt="Small Card Cover"
              width={280}
              height={160}
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
            <Image
              src="/card-cover.jpeg"
              alt="Medium Card Cover"
              width={350}
              height={200}
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
            <Image
              src="/card-cover.jpeg"
              alt="Large Card Cover"
              width={420}
              height={240}
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
