import Accordion from '@/components/ui/accordion'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

export default function AccordionSizes() {
  return (
    <Stack gap="8" w="full">
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'uppercase' })}>
          sm
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" size="sm">
          <Accordion.Item value="item-1">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it accessible?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it styled?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It comes with default styles that match the other components\u2019 aesthetic.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'uppercase' })}>
          md
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" size="md">
          <Accordion.Item value="item-1">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it accessible?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it styled?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It comes with default styles that match the other components\u2019 aesthetic.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'uppercase' })}>
          lg
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" size="lg">
          <Accordion.Item value="item-1">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it accessible?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it styled?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It comes with default styles that match the other components\u2019 aesthetic.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
    </Stack>
  )
}
