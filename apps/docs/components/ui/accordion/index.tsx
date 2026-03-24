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
>(RadixAccordion.Root, 'root')

export const Item = withContext<
  React.ComponentRef<typeof RadixAccordion.Item>,
  Assign<ComponentProps<typeof RadixAccordion.Item>, JsxStyleProps>
>(RadixAccordion.Item, 'item')

export const ItemHeader = withContext<
  React.ComponentRef<typeof RadixAccordion.Header>,
  Assign<ComponentProps<typeof RadixAccordion.Header>, JsxStyleProps>
>(RadixAccordion.Header, 'itemHeader')

export const ItemTrigger = withContext<
  React.ComponentRef<typeof RadixAccordion.Trigger>,
  Assign<ComponentProps<typeof RadixAccordion.Trigger>, JsxStyleProps>
>(RadixAccordion.Trigger, 'itemTrigger')

export const ItemContent = withContext<
  React.ComponentRef<typeof RadixAccordion.Content>,
  Assign<ComponentProps<typeof RadixAccordion.Content>, JsxStyleProps>
>(RadixAccordion.Content, 'itemContent')

const Accordion = {
  Root,
  Item,
  ItemHeader,
  ItemTrigger,
  ItemContent,
}

export default Accordion
