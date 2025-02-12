import type { Meta, StoryObj } from '@storybook/react'
import { Circle } from '@styled-system/jsx'
import { CircleRender } from '~/ui/render-helpers/shapes'
import { SquareRender } from '~/ui/render-helpers/shapes'

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Layout/Shapes',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SquareRender />,
}

export const Circles: Story = {
  render: () => <CircleRender />,
}

export const Squares: Story = {
  render: () => <SquareRender />,
}
