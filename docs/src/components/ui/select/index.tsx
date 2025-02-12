'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '@styled-system/jsx'
import { icon, select } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { Check, ChevronDown } from 'lucide-react'
import * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'

const { withProvider, withContext } = createStyleContext(select)

const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={icon({ dimmed: true })} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
Trigger.displayName = SelectPrimitive.Trigger.displayName

const Viewport = withContext<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  Assign<WithFixedClassName<SelectPrimitive.SelectViewportProps>, JsxStyleProps>
>(SelectPrimitive.Viewport, 'viewport')

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content ref={ref} position={position} data-position={position} {...props}>
      <Viewport data-position={position}>{children}</Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
Content.displayName = SelectPrimitive.Content.displayName

const ItemIndicator = withContext<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  Assign<WithFixedClassName<SelectPrimitive.SelectItemIndicatorProps>, JsxStyleProps>
>(styled(SelectPrimitive.ItemIndicator), 'itemIndicator')

const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} {...props}>
    <ItemIndicator>
      <Check className={icon()} />
    </ItemIndicator>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
Item.displayName = SelectPrimitive.Item.displayName

export type RootProps = WithFixedClassName<ComponentProps<typeof SelectPrimitive.Root>>
export const Root = withProvider<
  React.ElementRef<typeof SelectPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(SelectPrimitive.Root, 'root')

export const Group = withContext<
  React.ElementRef<typeof SelectPrimitive.Group>,
  Assign<WithFixedClassName<SelectPrimitive.SelectGroupProps>, JsxStyleProps>
>(SelectPrimitive.Group, 'group')

export const Value = withContext<
  React.ElementRef<typeof SelectPrimitive.Value>,
  Assign<WithFixedClassName<SelectPrimitive.SelectValueProps>, JsxStyleProps>
>(SelectPrimitive.Value, 'value')

export const SelectTrigger = withContext<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  Assign<WithFixedClassName<SelectPrimitive.SelectTriggerProps>, JsxStyleProps>
>(Trigger, 'trigger')

export const SelectContent = withContext<
  React.ElementRef<typeof SelectPrimitive.Content>,
  Assign<WithFixedClassName<SelectPrimitive.SelectContentProps>, JsxStyleProps>
>(Content, 'content')

export const SelectLabel = withContext<
  React.ElementRef<typeof SelectPrimitive.Label>,
  Assign<WithFixedClassName<SelectPrimitive.SelectLabelProps>, JsxStyleProps>
>(SelectPrimitive.Label, 'label')

export const SelectItem = withContext<
  React.ElementRef<typeof SelectPrimitive.Item>,
  Assign<WithFixedClassName<SelectPrimitive.SelectItemProps>, JsxStyleProps>
>(Item, 'item')

export const SelectSeparator = withContext<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  Assign<WithFixedClassName<SelectPrimitive.SelectSeparatorProps>, JsxStyleProps>
>(SelectPrimitive.Separator, 'separator')

const Select = {
  Root,
  Group,
  Value,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
}

export default Select
