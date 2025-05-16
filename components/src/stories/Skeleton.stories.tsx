import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@styled-system/jsx'
import { Skeleton } from '../ui/skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex align="center" gap="4">
      <Skeleton css={{ width: '10', height: '10' }} {...args} />
      <Flex direction="column" gap="2">
        <Skeleton css={{ width: '250px', height: '4' }} {...args} />
        <Skeleton css={{ width: '200px', height: '4' }} {...args} />
      </Flex>
    </Flex>
  ),
}
