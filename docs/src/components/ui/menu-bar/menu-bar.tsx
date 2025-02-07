'use client'

import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { css, cx } from '@styled-system/css'
import { icon, menubar } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../../utils/style-context'

const { withProvider, withContext } = createStyleContext(menubar)

const ItemIndicator = withContext<
  React.ElementRef<typeof MenubarPrimitive.ItemIndicator>,
  Assign<MenubarPrimitive.MenubarItemIndicatorProps, JsxStyleProps>
>(MenubarPrimitive.ItemIndicator, 'itemIndicator')

const CustomSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  >
    {children}
    <ChevronRight className={icon()} />
  </MenubarPrimitive.SubTrigger>
))
CustomSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const Arrow = withContext<
  React.ElementRef<typeof MenubarPrimitive.Arrow>,
  Assign<MenubarPrimitive.MenubarArrowProps, JsxStyleProps>
>(MenubarPrimitive.Arrow, 'arrow')

const CustomContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ align = 'start', alignOffset = -4, sideOffset = 8, children, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <Arrow />
    </MenubarPrimitive.Content>
  </MenubarPrimitive.Portal>
))
CustomContent.displayName = MenubarPrimitive.Content.displayName

const CustomItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarPrimitive.MenubarItemProps
>(({ ...props }, ref) => <MenubarPrimitive.Item ref={ref} {...props} />)
CustomItem.displayName = MenubarPrimitive.Item.displayName

const CustomCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem ref={ref} checked={checked} {...props}>
    <ItemIndicator>
      <Check className={icon()} />
    </ItemIndicator>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
CustomCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const CustomRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem ref={ref} {...props}>
    <ItemIndicator>
      <Circle className={icon({ size: 'xs', fillCurrent: true })} />
    </ItemIndicator>
    {children}
  </MenubarPrimitive.RadioItem>
))
CustomRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const CustomLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
CustomLabel.displayName = MenubarPrimitive.Label.displayName

export type RootProps = WithFixedClassName<MenubarPrimitive.MenubarProps>

export const Root = withProvider<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  Assign<MenubarPrimitive.MenubarProps, JsxStyleProps>
>(MenubarPrimitive.Root, 'root')

export const Menu = MenubarPrimitive.Menu

export const Group = withContext<
  React.ElementRef<typeof MenubarPrimitive.Group>,
  Assign<MenubarPrimitive.MenubarGroupProps, JsxStyleProps>
>(MenubarPrimitive.Group, 'group')

export const Portal = MenubarPrimitive.Portal

export const SubMenu = MenubarPrimitive.Sub

export const RadioGroup = withContext<
  React.ElementRef<typeof MenubarPrimitive.RadioGroup>,
  Assign<MenubarPrimitive.MenubarRadioGroupProps, JsxStyleProps>
>(MenubarPrimitive.RadioGroup, 'radioGroup')

export const Trigger = withContext<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  Assign<MenubarPrimitive.MenubarTriggerProps, JsxStyleProps>
>(MenubarPrimitive.Trigger, 'trigger')

export const Content = withContext<
  React.ElementRef<typeof CustomContent>,
  Assign<MenubarPrimitive.MenubarContentProps, JsxStyleProps>
>(CustomContent, 'content')

export const SubTrigger = withContext<
  React.ElementRef<typeof CustomSubTrigger>,
  Assign<MenubarPrimitive.MenubarSubTriggerProps, JsxStyleProps>
>(CustomSubTrigger, 'subTrigger')

export const SubContent = withContext<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  Assign<MenubarPrimitive.MenubarSubContentProps, JsxStyleProps>
>(MenubarPrimitive.SubContent, 'subContent')

export const Item = withContext<
  React.ElementRef<typeof CustomItem>,
  Assign<MenubarPrimitive.MenubarItemProps, JsxStyleProps>
>(CustomItem, 'item')

export const CheckboxItem = withContext<
  React.ElementRef<typeof CustomCheckboxItem>,
  Assign<MenubarPrimitive.MenubarCheckboxItemProps, JsxStyleProps>
>(CustomCheckboxItem, 'checkboxItem')

export const RadioItem = withContext<
  React.ElementRef<typeof CustomRadioItem>,
  Assign<MenubarPrimitive.MenubarRadioItemProps, JsxStyleProps>
>(CustomRadioItem, 'radioItem')

export const Label = withContext<
  React.ElementRef<typeof CustomLabel>,
  Assign<MenubarPrimitive.MenubarLabelProps, JsxStyleProps>
>(CustomLabel, 'label')

export const Separator = withContext<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  Assign<MenubarPrimitive.MenubarSeparatorProps, JsxStyleProps>
>(MenubarPrimitive.Separator, 'separator')

const Menubar = {
  Root,
  Menu,
  Group,
  Portal,
  SubMenu,
  RadioGroup,
  Trigger,
  Content,
  SubTrigger,
  SubContent,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
}

export default Menubar
