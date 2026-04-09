import Accordion from '@/components/ui/accordion'

export default function AccordionMultiple() {
  return (
    <Accordion.Root type="multiple" defaultValue={['1', '2']}>
      <Accordion.Item value={'1'}>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it accessible?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value={'2'}>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it styled?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          Yes. It comes with default styles that match the other components\u2019 aesthetic.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value={'3'}>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it animated?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
