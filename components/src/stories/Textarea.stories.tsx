import type { Meta, StoryObj } from '@storybook/react'
import { Grid, Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import { Textarea } from '~/ui/textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Forms/Textarea',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outline', 'underlined', 'filled', 'borderless'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    radii: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    resize: {
      options: ['none', 'vertical', 'horizontal', 'both'],
      control: 'inline-radio',
    },
    'data-status': {
      options: ['default', 'success', 'error', 'warning'],
      control: 'inline-radio',
    },
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Type your message here.' },
}

export const Sizes: Story = {
  render: () => (
    <Grid gap="2.5">
      <Stack align="flex-start" gap="2">
        <Label htmlFor="size-sm">Small</Label>
        <Textarea id="size-sm" size="sm" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="size-md">Medium</Label>
        <Textarea id="size-md" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="size-lg">Large</Label>
        <Textarea id="size-lg" size="lg" placeholder="Type your message here" />
      </Stack>
    </Grid>
  ),
}

export const Variants: Story = {
  render: () => (
    <Grid gap="2.5">
      <Stack align="flex-start" gap="2">
        <Label htmlFor="style-outline">Outline</Label>
        <Textarea id="style-outline" variant="outline" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="style-underlined">Underlined</Label>
        <Textarea id="style-underlined" variant="underlined" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="style-filled">Filled</Label>
        <Textarea id="style-filled" variant="filled" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="style-borderless">Borderless</Label>
        <Textarea id="style-borderless" variant="borderless" placeholder="Type your message here" />
      </Stack>
    </Grid>
  ),
}

export const ValidationStates: Story = {
  render: () => (
    <Grid gap="2.5">
      <Stack align="flex-start" gap="2">
        <Label htmlFor="status-error">Error</Label>
        <Textarea id="status-error" data-status="error" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="status-success">Success</Label>
        <Textarea id="status-success" data-status="success" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="status-warning">Warning</Label>
        <Textarea id="status-warning" data-status="warning" placeholder="Type your message here" />
      </Stack>
    </Grid>
  ),
}

export const BorderRadii: Story = {
  render: () => (
    <Grid gap="2.5">
      <Stack align="flex-start" gap="2">
        <Label htmlFor="radii-sm">Small</Label>
        <Textarea id="radii-sm" radii="sm" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="radii-md">Medium</Label>
        <Textarea id="radii-md" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="radii-lg">Large</Label>
        <Textarea id="radii-lg" radii="lg" placeholder="Type your message here" />
      </Stack>
    </Grid>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Grid gap="2.5">
      <Stack align="flex-start" gap="2">
        <Label htmlFor="disabled-default">Default</Label>
        <Textarea id="disabled-default" placeholder="Type your message here" />
      </Stack>
      <Stack align="flex-start" gap="2">
        <Label htmlFor="disabled-state">Disabled</Label>
        <Textarea id="disabled-state" placeholder="This textarea is disabled" disabled />
      </Stack>
    </Grid>
  ),
}
