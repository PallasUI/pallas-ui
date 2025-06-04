'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { css } from '@styled-system/css'
import { type CommandVariantProps, command } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon, XIcon } from 'lucide-react'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(command)

export type RootProps = WithFixedClassName<ComponentProps<typeof CommandPrimitive>>

export const Root = withProvider<
  React.ComponentRef<typeof CommandPrimitive>,
  Assign<RootProps, CommandVariantProps & JsxStyleProps>
>(CommandPrimitive, 'root')

export type DialogProps = RootProps &
  ComponentProps<typeof DialogPrimitive.Root> & {
    title?: string
    description?: string
    className?: string
    showCloseButton?: boolean
  }

const CommandDialog = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogProps
>(({ children, title, description, showCloseButton = true, ...props }, ref) => (
  <DialogPrimitive.Root {...props}>
    <div data-slot="dialog-header" className={css({ srOnly: true })}>
      <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
      <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
    </div>
    <DialogPrimitive.Portal data-slot="dialog-portal">
      <DialogPrimitive.Overlay
        data-slot="dialog-overlay"
        className={css({
          bg: 'black/50',
          position: 'fixed',
          inset: 0,
          zIndex: 50,
        })}
      />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        {...props}
        className={css({
          zIndex: 50,
          shadow: 'lg',
          position: 'fixed',
          overflow: 'hidden',
          rounded: '{radii.lg}',
          bg: 'inherit',
          p: 0,
          top: '[50vh]',
          left: '[50vw]',
          transform: 'translate(-50%, -50%)',
          _open: {
            animationStyle: 'modalContentShow',
          },
          _closed: {
            animationStyle: 'modalContentHide',
          },
        })}
        ref={ref}
      >
        <Root type="floating" {...props}>
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close data-slot="dialog-close">
              <XIcon size={20} />
              <span className={css({ srOnly: true })}>Close</span>
            </DialogPrimitive.Close>
          )}
        </Root>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
))

CommandDialog.displayName = DialogPrimitive.Content.displayName

export const Dialog = withProvider<
  React.ComponentRef<typeof DialogPrimitive.Root>,
  Assign<DialogProps, JsxStyleProps>
>(CommandDialog, 'dialog')

const CommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  ComponentProps<typeof CommandPrimitive.Input>
>(({ ...props }) => {
  return (
    <div
      data-slot="command-input-wrapper"
      className={css({
        display: 'flex',
        flexDir: 'row',
        px: '{spacing.padding.inline.sm}',
        py: '{spacing.padding.inline.xs}',
        gap: '{spacing.gap.inline.xs}',
        borderBottom: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '{colors.fill}',
        alignItems: 'center',
      })}
    >
      <SearchIcon
        data-slot="command-input-icon"
        className={`icon +
                  ${css({
                    sz: '1rem',
                    flexShrink: 0,
                    opacity: 0.5,
                    color: '{colors.text}',
                  })}
`}
      />
      <CommandPrimitive.Input {...props} />
    </div>
  )
})

CommandInput.displayName = CommandPrimitive.Input.displayName

export const Input = withContext<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  Assign<ComponentProps<typeof CommandPrimitive.Input>, JsxStyleProps>
>(CommandInput, 'input')

export const List = withContext<
  React.ComponentRef<typeof CommandPrimitive.List>,
  Assign<ComponentProps<typeof CommandPrimitive.List>, JsxStyleProps>
>(CommandPrimitive.List, 'list')

export const Empty = withContext<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  Assign<ComponentProps<typeof CommandPrimitive.Empty>, JsxStyleProps>
>(CommandPrimitive.Empty, 'empty')

export const Group = withContext<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  Assign<ComponentProps<typeof CommandPrimitive.Group>, JsxStyleProps>
>(CommandPrimitive.Group, 'group')

export const Item = withContext<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  Assign<ComponentProps<typeof CommandPrimitive.Item>, JsxStyleProps>
>(CommandPrimitive.Item, 'item')

export const Separator = withContext<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  Assign<ComponentProps<typeof CommandPrimitive.Separator>, JsxStyleProps>
>(CommandPrimitive.Separator, 'separator')

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
