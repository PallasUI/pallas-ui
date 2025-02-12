'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { radioGroup } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { Circle } from 'lucide-react'
import * as React from 'react'
import type { Assign } from '~/utils/types'
import type { WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

const Indicator = withContext<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  Assign<WithFixedClassName<RadioGroupPrimitive.RadioGroupIndicatorProps>, JsxStyleProps>
>(RadioGroupPrimitive.Indicator, 'indicator')

const Icon = withContext<
  React.ElementRef<typeof Circle>,
  Assign<ComponentProps<typeof Circle>, JsxStyleProps>
>(Circle, 'icon')

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children: _children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} {...props}>
      <Indicator />
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export type RootProps = WithFixedClassName<ComponentProps<typeof RadioGroupPrimitive.Root>>
export const Root = withProvider<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(RadioGroupPrimitive.Root, 'root')

export const Item = withContext<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  Assign<WithFixedClassName<RadioGroupPrimitive.RadioGroupItemProps>, JsxStyleProps>
>(RadioGroupItem, 'item')

const RadioGroup = {
  Root,
  Item,
}

export default RadioGroup
