'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { css, cx } from '@styled-system/css'
import { hstack } from '@styled-system/patterns'
import { type CommandVariantProps, command, dialog, icon } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon, XIcon } from 'lucide-react'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(command)

const CommandContext = React.createContext<{
  isModal?: boolean
} | null>(null)

const useCommandContext = () => {
  const context = React.useContext(CommandContext)
  if (!context) {
    throw new Error('useCommandContext must be used within Command.Root')
  }
  return context
}

export type RootProps = WithFixedClassName<ComponentProps<typeof CommandPrimitive>>

const CustomRoot = React.forwardRef<React.ComponentRef<typeof CommandPrimitive>, RootProps>(
  ({ className, ...props }, ref) => {
    const { root } = command()
    return (
      <CommandContext.Provider value={{ isModal: false }}>
        <CommandPrimitive ref={ref} className={cx(root, className)} {...props} />
      </CommandContext.Provider>
    )
  },
)

CustomRoot.displayName = 'CustomRoot'
export const Root = withProvider<
  React.ComponentRef<typeof CommandPrimitive>,
  Assign<RootProps, JsxStyleProps>
>(CustomRoot as any, 'root')

const ModalRoot = withProvider<
  React.ComponentRef<typeof CommandPrimitive>,
  Assign<RootProps, CommandVariantProps & JsxStyleProps>
>(CommandPrimitive as any, 'root')

export type DialogProps = RootProps &
  ComponentProps<typeof DialogPrimitive.Root> & {
    title?: string
    description?: string
    className?: string
    showCloseButton?: boolean
  }

const dialogStyles = dialog()

const CommandDialog = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogProps
>(({ children, title, description, showCloseButton = true, ...props }, ref) => (
  <DialogPrimitive.Root className={dialogStyles.root} {...props}>
    <div data-slot="command-dialog-header" className={dialogStyles.header}>
      <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
      <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
    </div>
    <DialogPrimitive.Portal data-slot="dialog-portal">
      <DialogPrimitive.Overlay
        data-slot="command-dialog-overlay"
        className={dialogStyles.overlay}
      />
      <DialogPrimitive.Content
        data-slot="command-dialog-content"
        {...props}
        className={dialogStyles.content}
        ref={ref}
      >
        <CommandContext.Provider value={{ isModal: true }}>
          <ModalRoot type="floating" {...(props as any)}>
            {children}
            {showCloseButton && (
              <DialogPrimitive.Close
                data-slot="command-dialog-close"
                onKeyDown={({ code }) => {
                  if (code === 'Enter') props.onOpenChange?.(false)
                }}
              >
                <XIcon className={icon({ size: 'xl' })} />
                <span className={css({ srOnly: true })}>Close</span>
              </DialogPrimitive.Close>
            )}
          </ModalRoot>
        </CommandContext.Provider>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
))

CommandDialog.displayName = 'CommandDialog'
export const Dialog = withProvider<
  React.ComponentRef<typeof DialogPrimitive.Root>,
  Assign<DialogProps, JsxStyleProps>
>(CommandDialog as any, 'dialog')

const CommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  ComponentProps<typeof CommandPrimitive.Input>
>(({ ...props }, ref) => {
  const { isModal } = useCommandContext()
  return (
    <div className={hstack()} data-slot="command-input-wrapper">
      <SearchIcon data-slot="command-input-icon" className={icon({ dimmed: true })} />
      <CommandPrimitive.Input {...(props as any)} ref={ref} autoFocus={isModal} />
    </div>
  )
})

CommandInput.displayName = CommandPrimitive.Input.displayName

export const Input = withContext<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  Assign<ComponentProps<typeof CommandPrimitive.Input>, JsxStyleProps>
>(CommandInput as any, 'input')

export const List = withContext<
  React.ComponentRef<typeof CommandPrimitive.List>,
  Assign<ComponentProps<typeof CommandPrimitive.List>, JsxStyleProps>
>(CommandPrimitive.List as any, 'list')

export const Empty = withContext<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  Assign<ComponentProps<typeof CommandPrimitive.Empty>, JsxStyleProps>
>(CommandPrimitive.Empty as any, 'empty')

export const Group = withContext<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  Assign<ComponentProps<typeof CommandPrimitive.Group>, JsxStyleProps>
>(CommandPrimitive.Group as any, 'group')

export const ItemIndicator = withContext<
  React.ComponentRef<'div'>,
  Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>
>('div', 'itemIndicator')

const CustomItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  ComponentProps<typeof CommandPrimitive.Item> & {
    icon?: React.ReactNode
  }
>(({ children, icon = false, ...props }, ref) => {
  return (
    <CommandPrimitive.Item ref={ref} {...props}>
      {icon && <ItemIndicator>{icon}</ItemIndicator>}
      {children}
    </CommandPrimitive.Item>
  )
})

CustomItem.displayName = CommandPrimitive.Item.displayName

export const Item = withContext<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  Assign<
    ComponentProps<typeof CommandPrimitive.Item> & {
      icon?: React.ReactNode
    },
    JsxStyleProps
  >
>(CustomItem as any, 'item')

export const Separator = withContext<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  Assign<ComponentProps<typeof CommandPrimitive.Separator>, JsxStyleProps>
>(CommandPrimitive.Separator as any, 'separator')

const Command = {
  Root,
  Dialog,
  Input,
  List,
  Empty,
  Group,
  Item,
  Separator,
}

export default Command
