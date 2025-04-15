'use client'

import { DayPicker } from '@/components/ui/daypicker'
import { format } from 'date-fns'
import * as React from 'react'
import { css } from '@styled-system/css'

export default function DayPickerPreview() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays
        className={css({ mx: 'auto' })}
      />
      {date && (
        <p className={css({ textAlign: 'center' })}>
          You selected: {format(date, 'PPP')}
        </p>
      )}
    </div>
  )
}