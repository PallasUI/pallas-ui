import Accordion from '@/components/ui/accordion'
import { Plus } from 'lucide-react'

const ITEMS = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it styled?',
    content: 'Yes. It comes with default styles that match the other components\u2019 aesthetic.',
  },
  {
    value: 'item-3',
    title: 'Is it animated?',
    content: 'Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.',
  },
]

export default function AccordionCustomIndicator() {
  return (
    <Accordion.Root type="single" collapsible defaultValue="item-1">
      {ITEMS.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemHeader>
            <Accordion.ItemTrigger>
              {item.title}
              <Accordion.ItemIndicator asChild rotateOnOpen={false}>
                <Plus />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
