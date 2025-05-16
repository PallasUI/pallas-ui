'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { css } from '@styled-system/css'
import { HStack, VStack } from '@styled-system/jsx'
import React from 'react'
import { ShowcaseCard } from './showcase-card'
export const DatePickerShowcase = () => {
  return (
    <ShowcaseCard
      title="Date Selection"
      description="Select dates for your reservation or appointment"
      //   colSpan={{ base: 1, md: 8 }} // This will make it span 4 columns on md screens
    >
      <VStack gap="gap.component.md">
        <div>
          <Label>Pick a Date</Label>
          <Input>
            <Input.DayPicker id="date" placeholder="Choose a date" />
          </Input>
        </div>

        <div>
          <Label>Number of Guests</Label>
          <Input>
            <Input.Number placeholder="Input Number of Guests" min={1} max={10} />
          </Input>
        </div>

        <HStack mt="2" justify="flex-end">
          <Button variant="primary">Book Reservation</Button>
        </HStack>
      </VStack>
    </ShowcaseCard>
  )
}
