'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { type RadioGroupVariantProps, radioGroup } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(radioGroup)

const Indicator = withContext<
  React.ComponentRef<typeof RadioGroupPrimitive.Indicator>,
  Assign<WithFixedClassName<RadioGroupPrimitive.RadioGroupIndicatorProps>, JsxStyleProps>
>(RadioGroupPrimitive.Indicator as any, 'indicator')

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children: _children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} {...(props as any)}>
      <Indicator />
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export type RootProps = WithFixedClassName<
  ComponentProps<typeof RadioGroupPrimitive.Root> & RadioGroupVariantProps
>
export const Root = withProvider<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(RadioGroupPrimitive.Root as any, 'root')

export const Item = withContext<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  Assign<WithFixedClassName<RadioGroupPrimitive.RadioGroupItemProps>, JsxStyleProps>
>(RadioGroupItem as any, 'item')

const RadioGroup = {
  Root,
  Item,
}

export default RadioGroup
