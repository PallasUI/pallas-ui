import {
  MenuAction as MenuActionPrimitive,
  type MenuActionProps,
  MenuBadge as MenuBadgePrimitive,
  MenuButton as MenuButtonPrimitive,
  type MenuButtonProps,
  MenuItem as MenuItemPrimitive,
  Menu as MenuPrimitive,
  useSidebar,
} from '@pallas-ui/sidebar'
import type { Assign } from '@pallas-ui/style-context'
import { Slot } from '@radix-ui/react-slot'
import { cx } from '@styled-system/css'
import { button } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import React from 'react'
import type { ButtonProps } from '../button'
import Tooltip from '../tooltip/tooltip'
import { withContext } from './provider'

export const Menu = withContext<
  React.ComponentRef<typeof MenuPrimitive>,
  Assign<React.ComponentProps<typeof MenuPrimitive>, JsxStyleProps>
>(MenuPrimitive as any, 'menu')

type MenuItemProps = Assign<React.ComponentProps<typeof MenuItemPrimitive>, JsxStyleProps>
const MenuItemStyled = withContext<React.ComponentRef<typeof MenuItemPrimitive>, MenuItemProps>(
  MenuItemPrimitive as any,
  'menuItem',
)
export const MenuItem = React.forwardRef<
  React.ComponentRef<typeof MenuItemPrimitive>,
  MenuItemProps
>(({ className, ...props }, ref) => (
  <MenuItemStyled ref={ref} className={cx('group/menu-item', className)} {...(props as any)} />
))

// const sidebarMenuButtonVariants = cva({
//   variants: {
// variant: {
//   default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
//   outline:
//     'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
// },
// size: {
//   default: "h-8 text-sm",
//   sm: "h-7 text-xs",
//   lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
// },
//     variant: {
//       default: {
//         _hover: {
//           bg: 'sidebar-accent',
//           color: 'sidebar-accent-foreground',
//         },
//       },
//       outline: {
//         bg: 'background',
//         boxShadow: '0 0 0 1px hsl(var(--sidebar-border))',
//         _hover: {
//           bg: 'sidebar-accent',
//           color: 'sidebar-accent-foreground',
//           boxShadow: '0 0 0 1px hsl(var(--sidebar-accent))',
//         },
//       },
//     },
//     size: {
//       default: {
//         height: '{sizes.lg}',
//         fontSize: '{fontSizes.sm}',
//       },
//       sm: {
//         height: '{sizes.sm}',
//         fontSize: '{fontSizes.xs}',
//       },
//       lg: {
//         height: '{sizes.md}',
//         fontSize: '{fontSizes.md}',
//         'group-data-[collapsible=icon]': {
//           padding: '0!',
//         },
//       },
//     },
//   },
//   defaultVariants: {
//     variant: 'default',
//     size: 'default',
//   },
// })

type SidebarMenuButtonProps = Assign<MenuButtonProps, ButtonProps> & {
  tooltip?: string | React.ComponentProps<typeof Tooltip.Content>
}
const MenuButtonStyled = withContext<
  React.ComponentRef<typeof MenuButtonPrimitive>,
  SidebarMenuButtonProps
>(MenuButtonPrimitive as any, 'menuButton')

export const MenuButton = React.forwardRef<
  React.ComponentRef<typeof MenuButtonPrimitive>,
  SidebarMenuButtonProps
>((props, ref) => {
  let [buttonProps, { asChild = false, isActive = false, tooltip, className, ...rest }] =
    button.splitVariantProps(props)
  const Comp = asChild ? Slot : MenuButtonStyled
  const { isMobile, state } = useSidebar()

  const Button = (
    <Comp
      ref={ref}
      className={cx('menu-button', button({ variant: 'text', ...buttonProps }), className)}
      {...(rest as any)}
    />
  )

  if (!tooltip) {
    return Button
  }

  const tooltipContentProps = typeof tooltip === 'string' ? { children: tooltip } : tooltip

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{Button}</Tooltip.Trigger>
      <Tooltip.Content
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltipContentProps}
      />
    </Tooltip.Root>
  )
})

type SidebarMenuActionProps = Assign<MenuActionProps, ButtonProps>
const SidebarMenuActionStyled = withContext<
  React.ComponentRef<typeof MenuActionPrimitive>,
  SidebarMenuActionProps
>(MenuActionPrimitive as any, 'menuAction')
export const MenuAction = React.forwardRef<
  React.ComponentRef<typeof MenuActionPrimitive>,
  SidebarMenuActionProps
>((props, ref) => {
  const [buttonVariantProps, { className, ...rest }] = button.splitVariantProps(props)
  return (
    <SidebarMenuActionStyled
      ref={ref}
      className={cx(button(buttonVariantProps), className)}
      {...(rest as any)}
    />
  )
})

export const MenuBadge = withContext<
  React.ComponentRef<typeof MenuBadgePrimitive>,
  Assign<React.ComponentProps<typeof MenuBadgePrimitive>, JsxStyleProps>
>(MenuBadgePrimitive as any, 'menuBadge')
