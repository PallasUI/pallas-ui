import Accordion from '@/components/ui/accordion'
import Segmented from '@/components/ui/segmented'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AccordionControlledPreview() {
  const [value, setValue] = useState<string | undefined>('item-1')

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Segmented.Root value={value || ''} onValueChange={setValue}>
          <Segmented.Option value="item-1">
            <Segmented.Text>Item 1</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="item-2">
            <Segmented.Text>Item 2</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="">
            <Segmented.Text>Collapse All</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>
      </div>

      <Accordion.Root
        type="single"
        collapsible={true}
        value={value}
        onValueChange={setValue}
        css={{ width: '100%', border: '0' }}
      >
        <Accordion.Item value="item-1">
          <Accordion.ItemHeader>
            Controlled Item 1
            <Accordion.ItemTrigger>
              <ChevronDown />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>
            This accordion is controlled with React state. Use the segmented control above to manage
            it.
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.ItemHeader>
            Controlled Item 2
            <Accordion.ItemTrigger>
              <ChevronDown />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>
            State management allows programmatic control of the accordion.
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
