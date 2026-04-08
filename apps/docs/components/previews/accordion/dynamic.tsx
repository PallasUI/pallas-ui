import Accordion from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'

export default function AccordionDynamicPreview() {
  const items = [
    {
      id: 'item-1',
      title: 'How is the accordion accessible?',
      content:
        'The accordion follows WAI-ARIA patterns for keyboard navigation and screen reader support. It uses proper ARIA attributes and focuses management.',
    },
    {
      id: 'item-2',
      title: 'Can I customize the styling?',
      content:
        'Yes! The component is built with styling flexibility in mind. You can use inline styles, CSS classes, or integrate with your design system.',
    },
    {
      id: 'item-3',
      title: 'How to control the accordion programmatically?',
      content:
        'The accordion can be controlled using React state with the value and onValueChange props. This enables integration with other parts of your UI.',
    },
    {
      id: 'item-4',
      title: 'Can I have multiple panels open?',
      content:
        'Yes, by setting type="multiple", multiple accordion items can be expanded simultaneously.',
    },
  ]

  return (
    <Accordion.Root type="multiple" css={{ width: '100%', border: '0' }}>
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.ItemHeader>
            {item.title}
            <Accordion.ItemTrigger>
              <ChevronDown />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
