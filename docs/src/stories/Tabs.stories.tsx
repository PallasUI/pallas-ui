import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx/stack'
import Tabs from '~/ui/tabs'

const meta: Meta<typeof Tabs.Root> = {
  render: (props) => (
    <Tabs.Root defaultValue="1" {...props}>
      <Tabs.TabList>
        <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  ),
  title: 'Components/Tabs',
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    align: {
      options: ['start', 'center', 'end'],
      control: 'inline-radio',
    },
    position: {
      options: ['top', 'left', 'right', 'bottom'],
      control: 'inline-radio',
    },
    variant: {
      options: ['card', 'simple'],
      control: 'inline-radio',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'md', align: 'start', position: 'top', variant: 'simple' },
}

const TABS = [
  {
    id: '1',
    title: 'Tab 1',
    content: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: '2',
    title: 'Tab 2',
    content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur
      adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam,
      quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet
      consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit.
      Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet
      consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit.
      Quisquam, quos.`,
  },
  {
    id: '3',
    title: 'Tab 3',
    content: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

export const Variants = () => (
  <Stack direction="column" align="flex-start">
    {/* CENTERED - DISABLED */}
    <Tabs.Root defaultValue="1" align="center">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="2" disabled>
          Disabled
        </Tabs.Trigger>
        <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>

    {/* LEFT */}
    <Tabs.Root defaultValue="1" position="left">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Left 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Left 2</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>

    {/* RIGHT - SMALL */}
    <Tabs.Root defaultValue="1" position="right" size="sm">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Small 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Small 2</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>

    {/* BOTTOM - LARGE - END */}
    <Tabs.Root defaultValue="1" position="bottom" size="lg" align="end">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Large 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Large 2</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>

    {/* CARD - LEFT */}
    <Tabs.Root defaultValue="1" variant="card" position="left">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Card 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Card 2</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>

    {/* CARD - RIGHT */}
    <Tabs.Root defaultValue="1" variant="card" position="right">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Card 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Card 2</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>

    {/* CARD - BOTTOM - CENTER - LARGE */}
    <Tabs.Root defaultValue="1" variant="card" position="bottom" size="lg" align="center">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Large 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Large 2</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  </Stack>
)
