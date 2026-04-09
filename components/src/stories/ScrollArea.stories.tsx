import type { Meta, StoryObj } from '@storybook/react'
import { scrollArea } from '@styled-system/recipes'
import { Stack } from '@styled-system/jsx'
import ScrollArea from '~/ui/scroll-area'

const meta: Meta<typeof ScrollArea.Root> = {
  component: ScrollArea.Root,
  title: 'Components/ScrollArea',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: scrollArea.variantMap.size,
      description: 'Thickness of the scrollbar track and thumb',
      defaultValue: 'md',
    },
    layout: {
      control: { type: 'select' },
      options: scrollArea.variantMap.layout,
      description: 'Whether the scrollbar overlays content or reserves space beside it',
      defaultValue: 'overlay',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const LONG_TEXT = Array.from(
  { length: 20 },
  (_, i) => `Item ${i + 1}: Pallas UI design system component.`,
).join('\n')

export const Default: Story = {
  args: {
    size: 'md',
    layout: 'overlay',
  },
  render: (args) => (
    <ScrollArea.Root {...args} style={{ height: '200px', width: '350px' }}>
      <ScrollArea.Viewport>
        <div style={{ padding: '16px', whiteSpace: 'pre-line' }}>{LONG_TEXT}</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
}

export const Horizontal: Story = {
  args: {
    size: 'md',
    layout: 'overlay',
  },
  render: (args) => (
    <ScrollArea.Root {...args} style={{ height: '150px', width: '350px' }}>
      <ScrollArea.Viewport>
        <div style={{ display: 'flex', gap: '16px', padding: '16px', width: 'max-content' }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '120px',
                height: '80px',
                background: 'var(--colors-primary-bg)',
                borderRadius: 'var(--radii-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Card {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={8}>
      <Stack direction="column" gap={2}>
        <span>size="sm"</span>
        <ScrollArea.Root size="sm" style={{ height: '150px', width: '200px' }}>
          <ScrollArea.Viewport>
            <div style={{ padding: '16px', whiteSpace: 'pre-line' }}>{LONG_TEXT}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Stack>
      <Stack direction="column" gap={2}>
        <span>size="md"</span>
        <ScrollArea.Root size="md" style={{ height: '150px', width: '200px' }}>
          <ScrollArea.Viewport>
            <div style={{ padding: '16px', whiteSpace: 'pre-line' }}>{LONG_TEXT}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Stack>
    </Stack>
  ),
}

export const Layouts: Story = {
  render: () => (
    <Stack direction="row" gap={8}>
      <Stack direction="column" gap={2}>
        <span>layout="overlay"</span>
        <ScrollArea.Root layout="overlay" style={{ height: '150px', width: '200px' }}>
          <ScrollArea.Viewport>
            <div style={{ padding: '16px', whiteSpace: 'pre-line' }}>{LONG_TEXT}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Stack>
      <Stack direction="column" gap={2}>
        <span>layout="inset"</span>
        <ScrollArea.Root layout="inset" style={{ height: '150px', width: '200px' }}>
          <ScrollArea.Viewport>
            <div style={{ padding: '16px', whiteSpace: 'pre-line' }}>{LONG_TEXT}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Stack>
    </Stack>
  ),
}
