import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx/stack'
import { Label } from 'react-aria-components'
import Accordion from '~/ui/accordion'

const ITEMS = [
  {
    value: 'item-1',
    title: 'Item 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    value: 'item-2',
    title: 'Item 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    value: 'item-3',
    title: 'Item 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

const meta: Meta<typeof Accordion.Root> = {
  render: (props) => (
    <Accordion.Root collapsible defaultValue="item-1" {...props} type={props.type || 'single'}>
      {ITEMS.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemHeader>
            <Accordion.ItemTrigger>
              {item.title}
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
  title: 'Components/Accordion',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'subtle', 'bordered', 'plain'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default', size: 'md' },
}

export const Variants = () => {
  return (
    <Stack direction="column" gap="8">
      <Stack direction="column" gap="1">
        <Label>Default</Label>
        <Accordion.Root collapsible type="single" size="sm" variant="default" defaultValue="item-1">
          {ITEMS.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.ItemHeader>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              </Accordion.ItemHeader>
              <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
      <Stack direction="column" gap="1">
        <Label>Subtle</Label>
        <Accordion.Root collapsible type="single" size="sm" variant="subtle" defaultValue="item-1">
          {ITEMS.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.ItemHeader>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              </Accordion.ItemHeader>
              <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
      <Stack direction="column" gap="1">
        <Label>Bordered</Label>
        <Accordion.Root
          collapsible
          type="single"
          size="sm"
          variant="bordered"
          defaultValue="item-1"
        >
          {ITEMS.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.ItemHeader>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              </Accordion.ItemHeader>
              <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
      <Stack direction="column" gap="1">
        <Label>Plain</Label>
        <Accordion.Root collapsible type="single" size="sm" variant="plain" defaultValue="item-1">
          {ITEMS.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.ItemHeader>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              </Accordion.ItemHeader>
              <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </Stack>
  )
}

export const Sizes = () => (
  <Stack direction="column" gap="8">
    <Stack direction="column" gap="1">
      <Label>sm</Label>
      <Accordion.Root type="single" collapsible defaultValue="item-1" size="sm">
        {ITEMS.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                {item.title}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
    <Stack direction="column" gap="1">
      <Label>md</Label>
      <Accordion.Root type="single" collapsible defaultValue="item-1" size="md">
        {ITEMS.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                {item.title}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
    <Stack direction="column" gap="1">
      <Label>lg</Label>
      <Accordion.Root type="single" collapsible defaultValue="item-1" size="lg">
        {ITEMS.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                {item.title}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  </Stack>
)

export const Multiple = () => (
  <Accordion.Root type="multiple" defaultValue={['item-1', 'item-2']}>
    {ITEMS.map((item) => (
      <Accordion.Item key={item.value} value={item.value}>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            {item.title}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
)

export const CustomIndicator = () => (
  <Accordion.Root type="single" collapsible defaultValue="item-1">
    {ITEMS.map((item) => (
      <Accordion.Item key={item.value} value={item.value}>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            {item.title}
            <Accordion.ItemIndicator asChild>
              <span>+</span>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
)
