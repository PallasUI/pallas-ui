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

export const NumberInputVariants = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Basic Number Input</Label>
      <Input size="md">
        <Input.Number placeholder="Enter number" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Disabled</Label>
      <Input size="md">
        <Input.Number placeholder="Enter number" disabled />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Filled</Label>
      <Input size="md" styling="filled">
        <Input.Number placeholder="Enter number" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Underlined</Label>
      <Input size="md" styling="underlined">
        <Input.Number placeholder="Enter number" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Borderless</Label>
      <Input size="md" styling="borderless">
        <Input.Number placeholder="Enter number" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Small</Label>
      <Input size="sm">
        <Input.Number placeholder="Enter number" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Large and Full radii</Label>
      <Input size="lg" radii="full">
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

export const FileInputVariants = () => (
  <Stack align="flex-start" gap="6">
    <h3>Input Sizes</h3>
    <Stack align="flex-start" gap="1">
      <Label>Medium</Label>
      <Input size="md">
        <Input.Text type="file" placeholder="Search..." />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Small</Label>
      <Input size="sm">
        <Input.Text type="file" placeholder="Search..." />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Large</Label>
      <Input size="lg">
        <Input.Text type="file" placeholder="Search..." />
      </Input>
    </Stack>
    <h3>Input Styles</h3>
    <Stack align="flex-start" gap="1">
      <Label>Filled</Label>
      <Input styling="filled">
        <Input.Text type="file" placeholder="Search..." />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Underlined</Label>
      <Input styling="underlined">
        <Input.Text type="file" placeholder="Search..." />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Borderless</Label>
      <Input styling="borderless">
        <Input.Text type="file" placeholder="Search..." />
      </Input>
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

export const InputBorderRadii = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Small</Label>
      <Input size="md" radii="sm">
        <Input.Text placeholder="Enter" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Medium</Label>
      <Input size="md" radii="md">
        <Input.Text placeholder="Enter" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Large</Label>
      <Input size="md" radii="lg">
        <Input.Text placeholder="Enter" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Full</Label>
      <Input size="md" radii="full">
        <Input.Text placeholder="Enter" />
      </Input>
    </Stack>
  </Stack>
)

export const InputStyles = () => (
  <Stack align="flex-start" gap="6">
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

export const StylingVariants = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Outline</Label>
      <Input size="md">
        <Input.Text placeholder="Enter" />
      </Input>
      <Input size="md">
        <Input.Text status="error" placeholder="Error" />
      </Input>
      <Input size="md">
        <Input.Text status="success" placeholder="Success" />
      </Input>
      <Input size="md">
        <Input.Text status="warning" placeholder="Warning" />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>Underlined</Label>
      <Input size="md" styling="underlined">
        <Input.Text placeholder="Enter" />
      </Input>
      <Input size="md" styling="underlined">
        <Input.Text status="error" placeholder="Error" />
      </Input>
      <Input size="md" styling="underlined">
        <Input.Text status="success" placeholder="Success" />
      </Input>
      <Input size="md" styling="underlined">
        <Input.Text status="warning" placeholder="Warning" />
      </Input>
    </Stack>

    <Stack align="flex-start" gap="1">
      <Label>Filled</Label>
      <Input size="md" styling="filled">
        <Input.Text placeholder="Enter" />
      </Input>
      <Input size="md" styling="filled">
        <Input.Text status="error" placeholder="Error" />
      </Input>
      <Input size="md" styling="filled">
        <Input.Text status="success" placeholder="Success" />
      </Input>
      <Input size="md" styling="filled">
        <Input.Text status="warning" placeholder="Warning" />
      </Input>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Borderless</Label>
      <Input size="md" styling="borderless">
        <Input.Text placeholder="Enter" />
      </Input>
      <Input size="md" styling="borderless">
        <Input.Text status="error" placeholder="Error" />
      </Input>
      <Input size="md" styling="borderless">
        <Input.Text status="success" placeholder="Success" />
      </Input>
      <Input size="md" styling="borderless">
        <Input.Text status="warning" placeholder="Warning" />
      </Input>
    </Stack>
  </Stack>
)
