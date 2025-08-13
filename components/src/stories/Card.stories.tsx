import type { Meta, StoryObj } from '@storybook/react'
import { Flex, HStack, VStack } from '@styled-system/jsx'
import Avatar from '../ui/avatar'
import { Button } from '../ui/button'
import { Card } from '../ui/card/index'

const URL = 'https://github.com/nanopx.png'

const meta: Meta<typeof Card.Root> = {
  title: 'Components/Card',
  component: Card.Root,
  argTypes: {
    children: { table: { disable: true } },
    variant: {
      description: 'The variant style of the card',
      control: { type: 'select' },
      options: ['elevated', 'container'],
      defaultValue: 'elevated',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'elevated' },
      },
    },
    size: {
      description: 'The size of the card',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    hoverable: {
      description: 'Enables hover effect with shadow and lift',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      description: 'Shows skeleton loading state instead of content',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card.Root>

export const Default: Story = {
  args: {
    variant: 'elevated',
    size: 'md',
    hoverable: false,
    children: (
      <Card.Header>
        <Card.Title>Welcome Back</Card.Title>
        <Card.Description>Here's what's happening with your projects</Card.Description>
      </Card.Header>
    ),
  },
}

export const ContainerCard: Story = {
  render: () => (
    <Card.Root variant="container" hoverable>
      <Card.Header>
        <Card.Title>Welcome Back</Card.Title>
        <Card.Description>Here's what's happening with your projects</Card.Description>
      </Card.Header>
    </Card.Root>
  ),
}

export const Loading: Story = {
  render: () => (
    <VStack maxW="350px">
      <Card.Root loading />
    </VStack>
  ),
}

export const Sizes = {
  render: () => (
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
  ),
}

export const CardWithAvatar: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
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
    </div>
  ),
}
