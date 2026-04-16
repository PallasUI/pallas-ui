'use client'

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { icon } from '@styled-system/recipes'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

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
      <Popover.Content css={{ width: 'auto', padding: 0 }}>
        <DatePicker mode="single" selected={date} onSelect={setDate} initialFocus />
      </Popover.Content>
    </Popover.Root>
  )
}
