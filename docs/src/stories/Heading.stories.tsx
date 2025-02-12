import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Heading, Paragraph } from '../ui/typography'

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
  subcomponents: {},
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Pallas UI',
  },
}

export const Variants = () => (
  <Stack>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
    <Heading level={6}>Heading 6</Heading>
  </Stack>
)
