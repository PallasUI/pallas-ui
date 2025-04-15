'use client'

import { Button } from '@/components/ui/button'
import { DayPicker } from '@/components/ui/daypicker'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'
import { icon } from '@styled-system/recipes'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

export default function RangeDayPickerPreview() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="outlined"
          className={css({
            width: '300px',
            justifyContent: 'flex-start',
            textAlign: 'left',
            fontWeight: 'normal',
            color: !date ? 'text.muted' : undefined,
          })}
        >
          <CalendarIcon className={icon()} />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
              </>
            ) : (
              format(date.from, 'LLL dd, y')
            )
          ) : (
            <span>Pick a date range</span>
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Content className={css({ width: 'auto', p: '0' })}>
        <DayPicker
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          showOutsideDays
        />
      </Popover.Content>
    </Popover.Root>
  )
}
