'use client'

import { css, cx } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { button, datepicker, icon } from '@styled-system/recipes'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import type * as React from 'react'
import { DayPicker as DayPickerBase } from 'react-day-picker'

type DatePickerBaseProps = React.ComponentProps<typeof DayPickerBase>

interface ChevronProps {
  className?: string
  disabled?: boolean
  orientation?: 'up' | 'down' | 'left' | 'right'
  size?: number
}

function BaseDatePicker({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DatePickerBaseProps) {
  const { root, button_previous, button_next, day, ...rest } = datepicker()

  const Chevron = ({ className, disabled, orientation = 'right', size = 24 }: ChevronProps) => {
    const iconMap = {
      up: ChevronUp,
      down: ChevronDown,
      left: ChevronLeft,
      right: ChevronRight,
    }

    const IconComponent = iconMap[orientation]

    return (
      <IconComponent
        className={cx(icon(), className, disabled && 'opacity-50')}
        width={size}
        height={size}
      />
    )
  }
  const buttonPadding = css({
    px: '0',
    py: '0',
  })
  return (
    <DayPickerBase
      className={cx(root, className)}
      classNames={{
        ...rest,
        button_previous: cx(
          button_previous,
          button({ variant: 'outlined', size: 'sm' }),
          buttonPadding,
        ),
        button_next: cx(button_next, button({ variant: 'outlined', size: 'sm' }), buttonPadding),
        day: cx(day, buttonPadding),
        ...classNames,
      }}
      components={{
        Chevron,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}
BaseDatePicker.displayName = 'DatePicker'

export const DatePicker = styled(BaseDatePicker)
export type DatePickerProps = React.ComponentProps<typeof DatePicker>
