import type { Meta } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Search } from 'lucide-react'
import { Label } from '~/ui/label'
import { Input } from '../ui/input'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Forms/Input',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Basic Text Input</Label>
      <Input size="md">
        <Input.Text placeholder="Enter text here" />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>Number Input</Label>
      <Input size="md">
        <Input.Number placeholder="Enter number" />
      </Input>
    </Stack>
  </Stack>
)

export const TextInputVariants = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Text Input with Character Count</Label>
      <Input size="md">
        <Input.Text maxLength={20} showCount placeholder="Max 20 characters" />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>Text Input with Formatter (Uppercase)</Label>
      <Input size="md">
        <Input.Text
          formatter={(value) => value.toUpperCase()}
          placeholder="Will convert to uppercase"
        />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>Text Input with Validation States</Label>
      <Stack gap="3">
        <Input size="md">
          <Input.Text status="success" placeholder="Success state" />
        </Input>
        <Input size="md">
          <Input.Text status="error" placeholder="Error state" />
        </Input>
        <Input size="md">
          <Input.Text status="warning" placeholder="Warning state" />
        </Input>
      </Stack>
    </Stack>
  </Stack>
)

export const InputSizes = () => (
  <Stack align="flex-start" gap="6">
    <h3>Input Sizes</h3>
    <Stack align="flex-start" gap="3">
      <Stack align="flex-start" gap="1">
        <Label>Small</Label>
        <Input size="sm">
          <Input.Text placeholder="Small input" />
        </Input>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Label>Medium</Label>
        <Input size="md">
          <Input.Text placeholder="Medium input" />
        </Input>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Label>Large</Label>
        <Input size="lg">
          <Input.Text placeholder="Large input" />
        </Input>
      </Stack>
    </Stack>
  </Stack>
)

export const InputStyles = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Rounded Input</Label>
      <Input size="md" shape="rounded">
        <Input.Text placeholder="Rounded input" />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>With Icon Prefix</Label>
      <Input size="md">
        <Input.Prefix>
          <Search size={16} />
        </Input.Prefix>
        <Input.Text placeholder="Search..." />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>Disabled Input</Label>
      <Input size="md">
        <Input.Text disabled placeholder="Disabled input" />
      </Input>
    </Stack>
  </Stack>
)

export const InputDayPicker = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Day Picker</Label>
      <Input size="md">
        <Input.DayPicker />
      </Input>
    </Stack>
  </Stack>
)
