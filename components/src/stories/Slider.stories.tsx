import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from 'react-aria-components'
import { Slider } from '../ui/slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Forms/Slider',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
  },
}

export const Disabled = () => (
  <Stack>
    <Stack gap="7">
      <Stack>
        <Slider
          thumbSize="sm"
          trackSize="sm"
          defaultValue={[25]}
          max={100}
          min={0}
          step={1}
          disabled
        />
      </Stack>
      <Stack>
        <Slider
          thumbSize="md"
          trackSize="md"
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          disabled
        />
      </Stack>
      <Stack>
        <Slider
          thumbSize="lg"
          trackSize="lg"
          defaultValue={[75]}
          max={100}
          min={0}
          step={1}
          disabled
        />
      </Stack>
    </Stack>
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Label>Thumb size</Label>
    <Stack gap="7">
      <Stack>
        <Slider thumbSize="sm" defaultValue={[25]} max={100} min={0} step={1} />
      </Stack>
      <Stack>
        <Slider thumbSize="md" defaultValue={[50]} max={100} min={0} step={1} />
      </Stack>
      <Stack>
        <Slider thumbSize="lg" defaultValue={[75]} max={100} min={0} step={1} />
      </Stack>
    </Stack>
    <Label>Track size</Label>
    <Stack gap="7">
      <Stack>
        <Slider trackSize="sm" defaultValue={[25]} max={100} min={0} step={1} />
      </Stack>
      <Stack>
        <Slider trackSize="md" defaultValue={[50]} max={100} min={0} step={1} />
      </Stack>
      <Stack>
        <Slider trackSize="lg" defaultValue={[75]} max={100} min={0} step={1} />
      </Stack>
    </Stack>
    <Label>Both</Label>
    <Stack gap="7">
      <Stack>
        <Slider thumbSize="sm" trackSize="sm" defaultValue={[25]} max={100} min={0} step={1} />
      </Stack>
      <Stack>
        <Slider thumbSize="md" trackSize="md" defaultValue={[50]} max={100} min={0} step={1} />
      </Stack>
      <Stack>
        <Slider thumbSize="lg" trackSize="lg" defaultValue={[75]} max={100} min={0} step={1} />
      </Stack>
    </Stack>
  </Stack>
)
