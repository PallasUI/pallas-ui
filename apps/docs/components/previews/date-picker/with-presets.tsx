'use client'

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import Popover from '@/components/ui/popover'
import Select from '@/components/ui/select'
import { css } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { icon } from '@styled-system/recipes'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

const Box = styled('div', {
  base: {
    borderRadius: 'md',
    border: 'base',
  },
})

export default function Example() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="outlined"
          className={css({
            width: '280px',
            justifyContent: 'flex-start',
            textAlign: 'left',
            fontWeight: 'normal',
            color: !date ? 'text.muted' : undefined,
          })}
        >
          <CalendarIcon className={icon()} />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content
        css={{
          display: 'flex',
          width: 'auto',
          flexDirection: 'column',
          gap: '2',
          padding: '2',
        }}
      >
        <Select.Root
          onValueChange={(value) => setDate(addDays(new Date(), Number.parseInt(value)))}
        >
          <Select.Trigger>
            <Select.Value placeholder="Select" />
          </Select.Trigger>
          <Select.Content position="popper">
            <Select.Item value="0">Today</Select.Item>
            <Select.Item value="1">Tomorrow</Select.Item>
            <Select.Item value="3">In 3 days</Select.Item>
            <Select.Item value="7">In a week</Select.Item>
          </Select.Content>
        </Select.Root>
        <Box>
          <DatePicker mode="single" selected={date} onSelect={setDate} />
        </Box>
      </Popover.Content>
    </Popover.Root>
  )
}
