import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '@styled-system/jsx'
import { aspectRatio } from '@styled-system/patterns'
import { DecorativeBox } from '../../ui/render-helpers/decorative-box'

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  title: 'Layout/AspectRatio',
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: [1 / 1, 4 / 3, 16 / 9, 21 / 9],
      description: 'The ratio of the aspect ratio',
      defaultValue: 1 / 1,
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { ratio: 16 / 9 },
  render: (args: { ratio: number }) => (
    <DecorativeBox style={{ width: '100px' }} className={aspectRatio({ ratio: args.ratio })} />
  ),
}
