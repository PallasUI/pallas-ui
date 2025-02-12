import type { Meta } from '@storybook/react'
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
