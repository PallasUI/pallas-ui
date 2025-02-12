import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Spinner } from '../ui/spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
}

export const Sizes = () => (
  <Stack>
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </Stack>
)

export const Colors = () => (
  <Stack>
    <Spinner color="primary" />
    <Spinner color="default" />
  </Stack>
)
