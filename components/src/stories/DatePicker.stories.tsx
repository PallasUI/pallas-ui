import type { Meta } from '@storybook/react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { DatePicker } from '~/ui/datepicker'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Forms/DatePicker',
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  const [selected, setSelected] = useState<Date | undefined>(undefined)
  return <DatePicker mode="single" selected={selected} onSelect={setSelected} />
}

export const Range = () => {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined)
  return <DatePicker mode="range" selected={selected} onSelect={setSelected} />
}
