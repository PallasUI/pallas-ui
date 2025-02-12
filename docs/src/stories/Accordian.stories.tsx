import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { ChevronDown } from 'lucide-react'
import Accordian from '~/ui/accordian/accordian'

const meta: Meta<typeof Accordian.Root> = {
  component: Accordian.Root,
  title: 'Components/Accordian',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Accordian.Root type="single" collapsible={true} defaultValue={'0'}>
    <Accordian.Item value="0">
      <Accordian.ItemHeader>
        Accordian Header
        <Accordian.ItemTrigger>
          <ChevronDown />
        </Accordian.ItemTrigger>
      </Accordian.ItemHeader>
      <Accordian.ItemContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Accordian.ItemContent>
    </Accordian.Item>
  </Accordian.Root>
)
