import Accordion from '@/components/ui/accordion'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

const ITEMS = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it styled?', content: 'Yes. It comes with default styles that match the other components\u2019 aesthetic.' },
  { value: 'item-3', title: 'Is it animated?', content: 'Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.' },
]

const VARIANTS = ['default', 'subtle', 'bordered', 'plain'] as const

export default function AccordionVariants() {
  return (
    <Stack gap="8" w="full">
      {VARIANTS.map((variant) => (
        <Stack gap="2" key={variant}>
          <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'capitalize' })}>
            {variant}
          </p>
          <Accordion.Root type="single" collapsible defaultValue="item-1" variant={variant}>
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
        </Stack>
      ))}
    </Stack>
  )
}
