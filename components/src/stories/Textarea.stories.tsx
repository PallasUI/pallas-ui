import type { Meta } from '@storybook/react'
import { Grid, Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import { Textarea } from '~/ui/textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Forms/Textarea',
  tags: ['autodocs'],
}

export default meta

export const Default = () => <Textarea placeholder="Type your message here." />

export const SizeVariants = () => (
  <Grid gap="2.5">
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Small</Label>
      <Textarea id="message-1" size="sm" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Medium</Label>
      <Textarea id="message-2" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Large</Label>
      <Textarea id="message-2" size="lg" placeholder="Type your message here" />
    </Stack>
  </Grid>
)

export const StylingVariants = () => (
  <Grid gap="2.5">
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Outline</Label>
      <Textarea id="message-1" styling="outline" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Underlined</Label>
      <Textarea id="message-2" styling="underlined" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Filled</Label>
      <Textarea id="message-2" styling="filled" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Borderless</Label>
      <Textarea id="message-2" styling="borderless" placeholder="Type your message here" />
    </Stack>
  </Grid>
)

export const ValidationStates = () => (
  <Grid gap="2.5">
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Error</Label>
      <Textarea id="message-1" data-status="error" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Success</Label>
      <Textarea id="message-1" data-status="success" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Warning</Label>
      <Textarea id="message-1" data-status="warning" placeholder="Type your message here" />
    </Stack>
  </Grid>
)

export const BorderRadii = () => (
  <Grid gap="2.5">
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Small</Label>
      <Textarea id="message-1" radii="sm" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Medium</Label>
      <Textarea id="message-2" placeholder="Type your message here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Large</Label>
      <Textarea id="message-2" radii="lg" placeholder="Type your message here" />
    </Stack>
  </Grid>
)

export const Variants = () => (
  <Grid gap="2.5">
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Message 1</Label>
      <Textarea id="message-1" placeholder="Type Message 1 here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Disabled</Label>
      <Textarea id="message-2" placeholder="This textarea is disabled" disabled />
    </Stack>
  </Grid>
)
