'use client'

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { icon } from '@styled-system/recipes'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

const Grid = styled('div', {
  base: {
    display: 'grid',
    gap: '2',
  },
})

export default function Example() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <Grid>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            id="date"
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
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Content css={{ width: 'auto', padding: 0, alignItems: 'start' }}>
          <DatePicker
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </Popover.Content>
      </Popover.Root>
    </Grid>
  )
}
