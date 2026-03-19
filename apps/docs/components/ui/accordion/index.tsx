'use client'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { type AccordionVariantProps, accordion } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProps = WithFixedClassName<
  ComponentProps<typeof RadixAccordion.Root> & {
    collapsible?: boolean
  }
>

export const Root = withProvider<
  React.ComponentRef<typeof RadixAccordion.Root>,
  Assign<RootProps, AccordionVariantProps & JsxStyleProps>
  // @ts-expect-error - Radix Accordion primitive incompatible with style-context ElementType (React 19)
>(RadixAccordion.Root, 'root')

export const Item = withContext<
  React.ComponentRef<typeof RadixAccordion.Item>,
  Assign<ComponentProps<typeof RadixAccordion.Item>, JsxStyleProps>
  // @ts-expect-error - Radix Accordion primitive incompatible with style-context ElementType (React 19)
>(RadixAccordion.Item, 'item')

export const ItemHeader = withContext<
  React.ComponentRef<typeof RadixAccordion.Header>,
  Assign<ComponentProps<typeof RadixAccordion.Header>, JsxStyleProps>
  // @ts-expect-error - Radix Accordion primitive incompatible with style-context ElementType (React 19)
>(RadixAccordion.Header, 'itemHeader')

export const ItemTrigger = withContext<
  React.ComponentRef<typeof RadixAccordion.Trigger>,
  Assign<ComponentProps<typeof RadixAccordion.Trigger>, JsxStyleProps>
  // @ts-expect-error - Radix Accordion primitive incompatible with style-context ElementType (React 19)
>(RadixAccordion.Trigger, 'itemTrigger')

export const ItemContent = withContext<
  React.ComponentRef<typeof RadixAccordion.Content>,
  Assign<ComponentProps<typeof RadixAccordion.Content>, JsxStyleProps>
  // @ts-expect-error - Radix Accordion primitive incompatible with style-context ElementType (React 19)
>(RadixAccordion.Content, 'itemContent')

const Accordion = {
  Root,
  Item,
  ItemHeader,
  ItemTrigger,
  ItemContent,
}

export default Accordion
