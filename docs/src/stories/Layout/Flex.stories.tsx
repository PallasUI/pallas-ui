import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@styled-system/jsx'
import { DecorativeBox } from '../../ui/render-helpers/decorative-box'

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Layout/Flex',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
      description:
        'Sets the direction of the flex container. Row is horizontal, column is vertical.',
      defaultValue: 'row',
    },
    align: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end'],
      description:
        'Aligns items along the cross-axis (vertically for row, horizontally for column).',
      defaultValue: 'flex-start',
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description:
        'Distributes space along the main axis (horizontally for row, vertically for column).',
      defaultValue: 'flex-start',
    },
    gap: {
      control: { type: 'number' },
      description: 'Sets equal spacing between items in both directions.',
      defaultValue: 0,
    },
    gapX: {
      control: { type: 'number' },
      description: 'Sets horizontal spacing between items.',
      defaultValue: 0,
    },
    gapY: {
      control: { type: 'number' },
      description: 'Sets vertical spacing between items.',
      defaultValue: 0,
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DecorativeBox>Item 1</DecorativeBox>
        <DecorativeBox>Item 2</DecorativeBox>
        <DecorativeBox>Item 3</DecorativeBox>
      </>
    ),
    direction: 'row',
    gap: 4,
  },
}

export const WithChildren: Story = {
  render: () => (
    <Flex>
      <DecorativeBox>Item 1</DecorativeBox>
      <DecorativeBox>Item 2</DecorativeBox>
      <DecorativeBox>Item 3</DecorativeBox>
    </Flex>
  ),
}

export const WithDirection: Story = {
  args: {
    children: (
      <>
        <DecorativeBox>Item 1</DecorativeBox>
        <DecorativeBox>Item 2</DecorativeBox>
        <DecorativeBox>Item 3</DecorativeBox>
      </>
    ),
    direction: 'column',
    gap: 4,
  },
}

export const WithAlign: Story = {
  args: {
    children: (
      <>
        <DecorativeBox style={{ height: '100px', width: '100px' }}>1</DecorativeBox>
        <DecorativeBox style={{ height: '50px', width: '100px' }}>2</DecorativeBox>
        <DecorativeBox style={{ height: '100px', width: '100px' }}>3</DecorativeBox>
      </>
    ),
    align: 'center',
    gap: 4,
  },
}
