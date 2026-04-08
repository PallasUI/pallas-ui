import Accordion from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'

export default function AccordionMultiplePreview() {
  return (
    <Accordion.Root type="multiple" style={{ width: '100%', border: '0' }}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          Is it accessible?
          <Accordion.ItemTrigger>
            <ChevronDown />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          Is it styled?
          <Accordion.ItemTrigger>
            <ChevronDown />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          Is it animated?
          <Accordion.ItemTrigger>
            <ChevronDown />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
