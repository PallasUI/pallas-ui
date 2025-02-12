import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { button } from '@styled-system/recipes'
import { ArrowRight } from 'lucide-react'
import Heading from '~/ui/typography/heading'
import { Button } from '../ui/button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: button.variantMap.variant,
      description: 'The variant of the button',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: button.variantMap.size,
      description: 'The size of the button',
      defaultValue: 'md',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the button is loading',
      defaultValue: false,
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Pallas UI',
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <Heading level={4}>Sizes</Heading>
      <Stack direction="column" align="flex-start">
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </Stack>
    </Stack>
  ),
}

export const ButtonVariants: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <Heading level={4}>Variants</Heading>
      <Stack direction="column" align="flex-start">
        <Button variant="primary">Primary Button</Button>
        <Button variant="default">Default Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="dashed">Dashed Button</Button>
        <Button variant="text">Text Button</Button>
        <Button variant="link">Link Button</Button>
      </Stack>
    </Stack>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <Heading level={4}>Icons</Heading>
      <Stack direction="column" align="flex-start">
        <Button icon={<ArrowRight />}>Icon Button</Button>
      </Stack>
    </Stack>
  ),
}

export const Loading: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <Heading level={4}>Loading</Heading>
      <Stack direction="column" align="flex-start">
        <Button isLoading>Loading Button</Button>
      </Stack>
    </Stack>
  ),
}
