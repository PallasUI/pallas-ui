import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Badge } from '../ui/badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Pallas UI',
  },
}

export const Variants = () => (
  <Stack align="flex-start">
    <Badge variant="default" css={{ width: '{sizes.md}' }}>
      Pallas UI
    </Badge>
    <Badge variant="primary">Pallas UI</Badge>
    <Badge variant="error">Pallas UI</Badge>
  </Stack>
)
