import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '@styled-system/jsx'
import { grid } from '@styled-system/patterns'
import { DecorativeBox } from '../../ui/render-helpers/decorative-box'

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Layout/Grid',
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number' },
      description: 'Number of columns in the grid',
      table: {
        type: { summary: 'number | ResponsiveValue<number>' },
      },
    },
    gap: {
      control: { type: 'number' },
      description: 'Space between grid items',
      table: {
        type: { summary: 'SystemProperties["gap"]' },
      },
    },
    columnGap: {
      control: { type: 'number' },
      description: 'Space between columns',
      table: {
        type: { summary: 'SystemProperties["gap"]' },
      },
    },
    rowGap: {
      control: { type: 'number' },
      description: 'Space between rows',
      table: {
        type: { summary: 'SystemProperties["gap"]' },
      },
    },
    minChildWidth: {
      control: { type: 'text' },
      description: 'Minimum width of child elements',
      table: {
        type: { summary: 'Tokens["sizes"] | Properties["width"]' },
      },
    },
    p: {
      control: { type: 'text' },
      description: 'Padding on all sides',
      table: {
        type: { summary: 'SystemProperties["padding"]' },
      },
    },
    px: {
      control: { type: 'text' },
      description: 'Horizontal padding (left and right)',
      table: {
        type: { summary: 'SystemProperties["paddingInline"]' },
      },
    },
    py: {
      control: { type: 'text' },
      description: 'Vertical padding (top and bottom)',
      table: {
        type: { summary: 'SystemProperties["paddingBlock"]' },
      },
    },
    pt: {
      control: { type: 'text' },
      description: 'Padding top',
      table: {
        type: { summary: 'SystemProperties["paddingTop"]' },
      },
    },
    pr: {
      control: { type: 'text' },
      description: 'Padding right',
      table: {
        type: { summary: 'SystemProperties["paddingRight"]' },
      },
    },
    pb: {
      control: { type: 'text' },
      description: 'Padding bottom',
      table: {
        type: { summary: 'SystemProperties["paddingBottom"]' },
      },
    },
    pl: {
      control: { type: 'text' },
      description: 'Padding left',
      table: {
        type: { summary: 'SystemProperties["paddingLeft"]' },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the grid container',
      table: {
        type: { summary: 'SystemProperties["width"]' },
      },
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Minimum width of the grid container',
      table: {
        type: { summary: 'SystemProperties["minWidth"]' },
      },
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the grid container',
      table: {
        type: { summary: 'SystemProperties["maxWidth"]' },
      },
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the grid container',
      table: {
        type: { summary: 'SystemProperties["height"]' },
      },
    },
    minHeight: {
      control: { type: 'text' },
      description: 'Minimum height of the grid container',
      table: {
        type: { summary: 'SystemProperties["minHeight"]' },
      },
    },
    maxHeight: {
      control: { type: 'text' },
      description: 'Maximum height of the grid container',
      table: {
        type: { summary: 'SystemProperties["maxHeight"]' },
      },
    },
    position: {
      control: { type: 'select', options: ['static', 'relative', 'absolute', 'fixed', 'sticky'] },
      description: 'CSS position property',
      table: {
        type: { summary: 'SystemProperties["position"]' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    columns: 3,
    gap: 4,
  },
  render: (args: { columns: number; gap: number }) => (
    <Grid {...args} className={grid({ columns: args.columns, gap: args.gap })}>
      <DecorativeBox>Item 1</DecorativeBox>
      <DecorativeBox>Item 2</DecorativeBox>
      <DecorativeBox>Item 3</DecorativeBox>
      <DecorativeBox>Item 4</DecorativeBox>
      <DecorativeBox>Item 5</DecorativeBox>
      <DecorativeBox>Item 6</DecorativeBox>
      <DecorativeBox>Item 7</DecorativeBox>
      <DecorativeBox>Item 8</DecorativeBox>
      <DecorativeBox>Item 9</DecorativeBox>
    </Grid>
  ),
}
