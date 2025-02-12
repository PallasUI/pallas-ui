import type { Meta } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Button } from '~/ui/button'
import Tooltip from '~/ui/tooltip/tooltip'
import { Heading } from '~/ui/typography'

const meta: Meta<typeof Tooltip.Root> = {
  component: Tooltip.Root,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content sideOffset={5}>Tooltip content</Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
)

const tooltipVariantsWithSides = [
  {
    triggerText: 'Top',
    position: 'top',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Bottom',
    position: 'bottom',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Left',
    position: 'left',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Right',
    position: 'right',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

const tooltipVariantsWithAligns = [
  {
    triggerText: 'Start',
    align: 'start',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Center',
    align: 'center',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'End',
    align: 'end',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

type Side = 'top' | 'bottom' | 'left' | 'right'
type Align = 'start' | 'center' | 'end'

export const Variants = () => (
  <Stack>
    <Heading level={4}>Side</Heading>
    <Stack direction="row" gap={4} css={{ maxWidth: 200 }}>
      {tooltipVariantsWithSides.map((item) => (
        <Tooltip.Provider key={item.triggerText}>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>{item.triggerText}</Button>
            </Tooltip.Trigger>
            <Tooltip.Content sideOffset={5} side={item.position as Side}>
              {item.content}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </Stack>
    <Heading level={4}>Align</Heading>
    <Stack direction="row" gap={4} css={{ maxWidth: 200 }}>
      {tooltipVariantsWithAligns.map((item) => (
        <Tooltip.Provider key={item.triggerText}>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button>{item.triggerText}</Button>
            </Tooltip.Trigger>
            <Tooltip.Content align={item.align as Align} sideOffset={5}>
              {item.content}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </Stack>
  </Stack>
)
