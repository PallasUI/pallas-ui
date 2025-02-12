import type { Meta } from '@storybook/react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { DayPicker } from '~/ui/daypicker'

const meta: Meta<typeof DayPicker> = {
  component: DayPicker,
  title: 'Forms/DayPicker',
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  const [selected, setSelected] = useState<Date | undefined>(undefined)
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />
}

export const Range = () => {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined)
  return <DayPicker mode="range" selected={selected} onSelect={setSelected} />
}
