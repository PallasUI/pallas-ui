import { Slot } from '@radix-ui/react-slot'
import React from 'react'

export const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<'ul'>>(
  (props, ref) => <ul ref={ref} data-sidebar="menu" {...props} />,
)
SidebarMenu.displayName = 'SidebarMenu'

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>((props, ref) => <li ref={ref} data-sidebar="menu-item" {...props} />)
SidebarMenuItem.displayName = 'SidebarMenuItem'

export type MenuButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ asChild = false, isActive = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} data-sidebar="menu-button" data-active={isActive} {...props} />
  },
)
SidebarMenuButton.displayName = 'SidebarMenuButton'

export type MenuActionProps = React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}

export const SidebarMenuAction = React.forwardRef<HTMLButtonElement, MenuActionProps>(
  ({ asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp ref={ref} data-sidebar="menu-action" data-showonhover={showOnHover} {...props} />
    )
  },
)
SidebarMenuAction.displayName = 'SidebarMenuAction'

export const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => <div ref={ref} data-sidebar="menu-badge" {...props} />)
SidebarMenuBadge.displayName = 'SidebarMenuBadge'

export const Menu = SidebarMenu
export const MenuItem = SidebarMenuItem
export const MenuButton = SidebarMenuButton
export const MenuAction = SidebarMenuAction
export const MenuBadge = SidebarMenuBadge
