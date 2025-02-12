import type { Meta, StoryObj } from '@storybook/react'
import { HStack, Stack } from '@styled-system/jsx'
import { Equal, Grid, List, StretchHorizontal } from 'lucide-react'
import Segmented from '~/ui/segmented'

const meta: Meta<typeof Segmented.Root> = {
  component: Segmented.Root,
  title: 'Components/Segmented',
  tags: ['autodocs'],
  render: (props) => (
    <Segmented.Root defaultValue="1" {...props}>
      <Segmented.Option value="1">Option 1</Segmented.Option>
      <Segmented.Option value="2">Option 2</Segmented.Option>
    </Segmented.Root>
  ),
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    block: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
}

export const Variants = () => (
  <Stack>
    {/* SIZES */}
    <Segmented.Root defaultValue="1" size="sm">
      <Segmented.Option value="1">Small 1</Segmented.Option>
      <Segmented.Option value="2">Option 2</Segmented.Option>
      <Segmented.Option value="3" disabled>
        Disabled
      </Segmented.Option>
    </Segmented.Root>

    <Segmented.Root defaultValue="1">
      <Segmented.Option value="1">Medium 1</Segmented.Option>
      <Segmented.Option value="2">Option 2</Segmented.Option>
      <Segmented.Option value="3" disabled>
        Disabled
      </Segmented.Option>
    </Segmented.Root>

    <Segmented.Root defaultValue="1" size="lg">
      <Segmented.Option value="1">Large 1</Segmented.Option>
      <Segmented.Option value="2">Option 2</Segmented.Option>
      <Segmented.Option value="3" disabled>
        Disabled
      </Segmented.Option>
    </Segmented.Root>

    {/* ICONS */}
    <Segmented.Root defaultValue="1">
      <Segmented.Option value="1">
        <List />
      </Segmented.Option>
      <Segmented.Option value="2">
        <Grid />
      </Segmented.Option>
      <Segmented.Option value="3">
        <StretchHorizontal />
      </Segmented.Option>
    </Segmented.Root>

    <HStack>
      {/* VERTICAL */}
      <Segmented.Root defaultValue="1" orientation="vertical" size="sm">
        <Segmented.Option value="1">Small 1</Segmented.Option>
        <Segmented.Option value="2">Option 2</Segmented.Option>
        <Segmented.Option value="3" disabled>
          Disabled
        </Segmented.Option>
      </Segmented.Root>

      <Segmented.Root defaultValue="1" orientation="vertical">
        <Segmented.Option value="1">Medium 1</Segmented.Option>
        <Segmented.Option value="2">Option 2</Segmented.Option>
        <Segmented.Option value="3" disabled>
          Disabled
        </Segmented.Option>
      </Segmented.Root>

      <Segmented.Root defaultValue="1" orientation="vertical" size="lg">
        <Segmented.Option value="1">Large 1</Segmented.Option>
        <Segmented.Option value="2">Option 2</Segmented.Option>
        <Segmented.Option value="3" disabled>
          Disabled
        </Segmented.Option>
      </Segmented.Root>

      <Segmented.Root defaultValue="1" orientation="vertical">
        <Segmented.Option value="1" css={{ justifyContent: 'start' }}>
          <List /> List
        </Segmented.Option>
        <Segmented.Option value="2" css={{ justifyContent: 'start' }}>
          <Grid /> Grid
        </Segmented.Option>
        <Segmented.Option value="3">
          <StretchHorizontal /> Stack
        </Segmented.Option>
      </Segmented.Root>
    </HStack>

    {/* BLOCK */}
    <Segmented.Root defaultValue="1" block>
      <Segmented.Option value="1">Option 1</Segmented.Option>
      <Segmented.Option value="2">Option 2</Segmented.Option>
      <Segmented.Option value="3">
        <Segmented.Text>
          Option 3 LLOOOoooooooooooooooOOOOOOOOOOOOOOooooooooooONNNNGGGG TEXT
        </Segmented.Text>
      </Segmented.Option>
    </Segmented.Root>

    {/* TEXT COMPONENT */}
    <Segmented.Root defaultValue="1" orientation="vertical" css={{ width: 200 }}>
      <Segmented.Option value="1">Option 1</Segmented.Option>
      <Segmented.Option value="2">Option 2</Segmented.Option>
      <Segmented.Option value="3">
        <div>
          <Equal />
        </div>
        <Segmented.Text>
          Option 3 LLOOOoooooooooooooooOOOOOOOOOOOOOOooooooooooONNNNGGGG TEXT
        </Segmented.Text>
      </Segmented.Option>
    </Segmented.Root>
  </Stack>
)

// function onClickOption(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   const target = e.target as HTMLDivElement
//   const children = target.parentElement?.children
//   if (!children || children.length === 1) return
//   for (let index = 0; index < children.length; index++) {
//     children[index].removeAttribute('data-selected')
//   }
//   target.setAttribute('data-selected', 'true')
// }
