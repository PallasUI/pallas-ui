import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import Select from '../ui/select'

const meta: Meta<typeof Select.Root> = {
  component: Select.Root,
  title: 'Forms/Select',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Select.Root>
    <Select.Trigger>
      <Select.Value placeholder="Select a fruit" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
)

export const Variants = () => (
  <Stack align="flex-start" gap="4">
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Select a Fruit</Label>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Select a Fruit</Label>
      <Select.Root disabled>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
      </Select.Root>
    </Stack>
  </Stack>
)

export const Sizes = () => (
  <Stack align="flex-start" gap="4">
    <h3>Select Sizes</h3>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Small</Label>
      <Select.Root size="sm">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Medium</Label>
      <Select.Root size="md">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Large</Label>
      <Select.Root size="lg">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
  </Stack>
)

export const Test: StoryObj = {
  render: (_args) => {
    return (
      <>
        <Stack align="flex-start" gap="1">
          <Label htmlFor="terms">Small</Label>
          <Select.Root size="sm">
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="banana">Banana</Select.Item>
                <Select.Item value="blueberry">Blueberry</Select.Item>
                <Select.Item value="grapes">Grapes</Select.Item>
                <Select.Item value="pineapple">Pineapple</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Stack>
        <Stack align="flex-start" gap="1">
          <Label htmlFor="terms">Medium</Label>
          <Select.Root size="md">
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="banana">Banana</Select.Item>
                <Select.Item value="blueberry">Blueberry</Select.Item>
                <Select.Item value="grapes">Grapes</Select.Item>
                <Select.Item value="pineapple">Pineapple</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Stack>
        <Stack align="flex-start" gap="1">
          <Label htmlFor="terms">Large</Label>
          <Select.Root size="lg">
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="banana">Banana</Select.Item>
                <Select.Item value="blueberry">Blueberry</Select.Item>
                <Select.Item value="grapes">Grapes</Select.Item>
                <Select.Item value="pineapple">Pineapple</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Stack>
      </>
    )
  },
}

export const StylingVariants = () => (
  <Stack align="flex-start" gap="4">
    <h3>Select Styling</h3>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Outline</Label>
      <Select.Root styling="outline">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Underlined</Label>
      <Select.Root styling="underlined">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Filled</Label>
      <Select.Root styling="filled">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Borderless</Label>
      <Select.Root styling="borderless">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
  </Stack>
)

export const RadiiVariants = () => (
  <Stack align="flex-start" gap="4">
    <h3>Select Radii</h3>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Small</Label>
      <Select.Root radii="sm">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Medium</Label>
      <Select.Root radii="md">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Large</Label>
      <Select.Root radii="lg">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label htmlFor="terms">Full</Label>
      <Select.Root radii="full">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Stack>
  </Stack>
)
