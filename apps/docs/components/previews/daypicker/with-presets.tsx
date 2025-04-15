'use client'

import { Button } from '@/components/ui/button'
import { DayPicker } from '@/components/ui/daypicker'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { icon } from '@styled-system/recipes'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

export default function PresetsDayPickerPreview() {
  const [date, setDate] = React.useState<DateRange | undefined>()

  const presets = [
    {
      label: 'Today',
      dates: {
        from: new Date(),
        to: new Date(),
      },
    },
    {
      label: 'Yesterday',
      dates: {
        from: addDays(new Date(), -1),
        to: addDays(new Date(), -1),
      },
    },
    {
      label: 'Last 7 days',
      dates: {
        from: addDays(new Date(), -6),
        to: new Date(),
      },
    },
    {
      label: 'Last 30 days',
      dates: {
        from: addDays(new Date(), -29),
        to: new Date(),
      },
    },
    {
      label: 'Last 90 days',
      dates: {
        from: addDays(new Date(), -89),
        to: new Date(),
      },
    },
  ]

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
        <div className={flex({ direction: 'row' })}>
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              p: '4',
              borderRight: '1px solid',
              borderColor: 'border',
              gap: '2',
            })}
          >
            <h3 className={css({ fontWeight: 'semibold', mb: '2' })}>Presets</h3>
            {presets.map((preset) => (
              <Button
                key={preset.label}
                variant="outlined"
                size="sm"
                onClick={() => setDate(preset.dates)}
                className={css({
                  justifyContent: 'flex-start',
                  fontWeight: 'normal',
                })}
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <DayPicker
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            showOutsideDays
          />
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}
