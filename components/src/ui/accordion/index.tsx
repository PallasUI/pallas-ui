'use client'

import { createStyleContext } from '@pallas-ui/style-context'
import type { Assign, WithFixedClassName } from '@pallas-ui/style-context'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { Slot } from '@radix-ui/react-slot'
import { type AccordionVariantProps, accordion } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProps = WithFixedClassName<
  ComponentProps<typeof RadixAccordion.Root> & {
    collapsible?: boolean
  }
>
export const Root = withProvider<
  React.ComponentRef<typeof RadixAccordion.Root>,
  Assign<RootProps, AccordionVariantProps>
>(RadixAccordion.Root, 'root')

export const Item = withContext<
  React.ComponentRef<typeof RadixAccordion.Item>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixAccordion.Item>>, JsxStyleProps>
>(RadixAccordion.Item, 'item')

export const ItemHeader = withContext<
  React.ComponentRef<typeof RadixAccordion.Header>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixAccordion.Header>>, JsxStyleProps>
>(RadixAccordion.Header, 'itemHeader')

export const ItemTrigger = withContext<
  React.ComponentRef<typeof RadixAccordion.Trigger>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixAccordion.Trigger>>, JsxStyleProps>
>(RadixAccordion.Trigger, 'itemTrigger')

export const ItemContent = withContext<
  React.ComponentRef<typeof RadixAccordion.Content>,
  Assign<WithFixedClassName<ComponentProps<typeof RadixAccordion.Content>>, JsxStyleProps>
>(RadixAccordion.Content, 'itemContent')

type ItemIndicatorBaseProps = React.ComponentPropsWithoutRef<'span'> & {
  asChild?: boolean
  rotateOnOpen?: boolean
}

const ItemIndicatorBase = React.forwardRef<HTMLSpanElement, ItemIndicatorBaseProps>(
  ({ children, asChild, rotateOnOpen = true, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span'
    return (
      <Comp ref={ref} data-rotate={String(rotateOnOpen)} {...props}>
        {children ?? <ChevronDown />}
      </Comp>
    )
  },
)
ItemIndicatorBase.displayName = 'AccordionItemIndicator'

export const ItemIndicator = withContext<
  HTMLSpanElement,
  Assign<WithFixedClassName<ComponentProps<typeof ItemIndicatorBase>>, JsxStyleProps>
>(ItemIndicatorBase, 'itemIndicator')

const Accordion = {
  Root,
  Item,
  ItemHeader,
  ItemTrigger,
  ItemContent,
  ItemIndicator,
}

export default Accordion
