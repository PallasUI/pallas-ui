'use client'

import { DatePicker } from '@/components/ui/datepicker'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import { addDays } from 'date-fns'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const DatePickerShowcase = () => {
  const today = new Date()
  const defaultSelected = {
    from: today,
    to: addDays(today, 5),
  }

  return (
    <ShowcaseCard
      title="Date Selection"
      description="Select dates for your reservation or appointment"
    >
      <Box>
        <DatePicker
          mode="range"
          defaultMonth={today}
          selected={defaultSelected}
          numberOfMonths={1}
          className={css({
            mx: 'auto',
            bg: 'white',
            p: '2',
            borderRadius: 'md',
            border: '1px solid',
            borderColor: 'border',
            boxShadow: 'sm',
          })}
        />
      </Box>
    </ShowcaseCard>
  )
}
