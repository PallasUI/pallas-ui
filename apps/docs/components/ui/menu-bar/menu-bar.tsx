'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { css, cx } from '@styled-system/css'
import { icon, menubar } from '@styled-system/recipes'
import type { HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(menubar)

const ItemIndicator = withContext<
  React.ComponentRef<typeof MenubarPrimitive.ItemIndicator>,
  Assign<MenubarPrimitive.MenubarItemIndicatorProps, JsxStyleProps>
>(MenubarPrimitive.ItemIndicator, 'itemIndicator')

const CustomSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
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
    <ChevronRight className={icon({ left: 'auto' })} />
  </MenubarPrimitive.SubTrigger>
))
CustomSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

type CustomSubTriggerProps = React.ComponentPropsWithoutRef<typeof CustomSubTrigger>

const Arrow = withContext<
  React.ComponentRef<typeof MenubarPrimitive.Arrow>,
  Assign<MenubarPrimitive.MenubarArrowProps, JsxStyleProps>
>(MenubarPrimitive.Arrow, 'arrow')

const CustomContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
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
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  MenubarPrimitive.MenubarItemProps & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <MenubarPrimitive.Item
    className={cx(insetLeft && css({ pl: '8' }), className)}
    ref={ref}
    {...props}
  />
))
CustomItem.displayName = MenubarPrimitive.Item.displayName

type CustomItemProps = React.ComponentPropsWithoutRef<typeof CustomItem>
const CustomCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
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
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
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
  React.ComponentRef<typeof MenubarPrimitive.Label>,
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
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  Assign<MenubarPrimitive.MenubarProps, JsxStyleProps>
>(MenubarPrimitive.Root, 'root')

export const Menu: React.FC<MenubarPrimitive.MenubarMenuProps> = MenubarPrimitive.Menu //not doing this was giving error

export const Group = withContext<
  React.ComponentRef<typeof MenubarPrimitive.Group>,
  Assign<MenubarPrimitive.MenubarGroupProps, JsxStyleProps>
>(MenubarPrimitive.Group, 'group')

export const Portal: React.FC<MenubarPrimitive.MenubarPortalProps> = MenubarPrimitive.Portal //not doing this was giving error

export const SubMenu: React.FC<MenubarPrimitive.MenubarSubProps> = MenubarPrimitive.Sub //not doing this was giving error

export const RadioGroup = withContext<
  React.ComponentRef<typeof MenubarPrimitive.RadioGroup>,
  Assign<MenubarPrimitive.MenubarRadioGroupProps, JsxStyleProps>
>(MenubarPrimitive.RadioGroup, 'radioGroup')

export const Trigger = withContext<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  Assign<MenubarPrimitive.MenubarTriggerProps, JsxStyleProps>
>(MenubarPrimitive.Trigger, 'trigger')

export const Content = withContext<
  React.ComponentRef<typeof CustomContent>,
  Assign<MenubarPrimitive.MenubarContentProps, JsxStyleProps>
>(CustomContent, 'content')

export const SubTrigger = withContext<
  React.ComponentRef<typeof CustomSubTrigger>,
  Assign<CustomSubTriggerProps, JsxStyleProps>
>(CustomSubTrigger, 'subTrigger')

export const SubContent = withContext<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  Assign<MenubarPrimitive.MenubarSubContentProps, JsxStyleProps>
>(MenubarPrimitive.SubContent, 'subContent')

export const Item = withContext<
  React.ComponentRef<typeof CustomItem>,
  Assign<CustomItemProps, JsxStyleProps>
>(CustomItem, 'item')

export const CheckboxItem = withContext<
  React.ComponentRef<typeof CustomCheckboxItem>,
  Assign<MenubarPrimitive.MenubarCheckboxItemProps, JsxStyleProps>
>(CustomCheckboxItem, 'checkboxItem')

export const RadioItem = withContext<
  React.ComponentRef<typeof CustomRadioItem>,
  Assign<MenubarPrimitive.MenubarRadioItemProps, JsxStyleProps>
>(CustomRadioItem, 'radioItem')

export const Label = withContext<
  React.ComponentRef<typeof CustomLabel>,
  Assign<MenubarPrimitive.MenubarLabelProps, JsxStyleProps>
>(CustomLabel, 'label')

export const Separator = withContext<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  Assign<MenubarPrimitive.MenubarSeparatorProps, JsxStyleProps>
>(MenubarPrimitive.Separator, 'separator')

export const Shortcut = withContext<React.ComponentRef<'span'>, HTMLStyledProps<'span'>>(
  'span',
  'shortcut',
)

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
  Shortcut,
}

export default Menubar
