'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { accordian } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../../utils/style-context'

const { withProvider, withContext } = createStyleContext(accordian)

export type RootProps = WithFixedClassName<ComponentProps<typeof Accordion.Root>>
export const Root = withProvider<
  React.ElementRef<typeof Accordion.Root>,
  Assign<RootProps, JsxStyleProps>
>(Accordion.Root, 'root')

export const Item = withContext<
  React.ElementRef<typeof Accordion.Item>,
  Assign<ComponentProps<typeof Accordion.Item>, JsxStyleProps>
>(Accordion.Item, 'item')

export const ItemHeader = withContext<
  React.ElementRef<typeof Accordion.Header>,
  Assign<ComponentProps<typeof Accordion.Header>, JsxStyleProps>
>(Accordion.Header, 'itemHeader')

export const ItemTrigger = withContext<
  React.ElementRef<typeof Accordion.Trigger>,
  Assign<ComponentProps<typeof Accordion.Trigger>, JsxStyleProps>
>(Accordion.Trigger, 'itemTrigger')

export const ItemContent = withContext<
  React.ElementRef<typeof Accordion.Content>,
  Assign<ComponentProps<typeof Accordion.Content>, JsxStyleProps>
>(Accordion.Content, 'itemContent')

const Accordian = {
  Root,
  Item,
  ItemHeader,
  ItemTrigger,
  ItemContent,
}

export default Accordian
