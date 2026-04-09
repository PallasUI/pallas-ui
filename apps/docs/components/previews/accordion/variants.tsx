import Accordion from '@/components/ui/accordion'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

export default function AccordionVariants() {
  return (
    <Stack gap="8" w="full">
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'capitalize' })}>
          default
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" variant="default">
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
          <Accordion.Item value="item-3">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it animated?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'capitalize' })}>
          subtle
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" variant="subtle">
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
          <Accordion.Item value="item-3">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it animated?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'capitalize' })}>
          bordered
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" variant="bordered">
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
          <Accordion.Item value="item-3">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it animated?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
      <Stack gap="2">
        <p className={css({ textStyle: 'sm', fontWeight: 'medium', color: 'text.tertiary', textTransform: 'capitalize' })}>
          plain
        </p>
        <Accordion.Root type="single" collapsible defaultValue="item-1" variant="plain">
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
          <Accordion.Item value="item-3">
            <Accordion.ItemHeader>
              <Accordion.ItemTrigger>
                Is it animated?
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>Yes. It uses CSS keyframe animations that respect prefers-reduced-motion.</Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Stack>
    </Stack>
  )
}
