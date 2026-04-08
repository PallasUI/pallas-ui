'use client'

import Accordion from '@/components/ui/accordion'
import { useState } from 'react'

const ITEMS = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it styled?', content: 'Yes. It comes with default styles that match the other components\u2019 aesthetic.' },
  { value: 'item-3', title: 'Is it animated?', content: 'Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.' },
]

export default function AccordionControlled() {
  const [value, setValue] = useState('item-1')

  return (
    <Accordion.Root type="single" collapsible value={value} onValueChange={setValue}>
      {ITEMS.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemHeader>
            <Accordion.ItemTrigger>
              {item.title}
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
