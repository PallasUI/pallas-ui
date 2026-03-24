import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import type { PopoverContentProps } from '@radix-ui/react-popover'
import { cx } from '@styled-system/css'
import { type ComboboxVariantProps, combobox } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { useCommandState } from 'cmdk'
import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button'
import * as CommandPrimitive from '../command'
import * as PopoverPrimitive from '../popover'

const { withProvider, withContext } = createStyleContext(combobox)

export type RootProps = WithFixedClassName<PopoverPrimitive.RootProps>

const ComboboxContext = React.createContext<{
  dataStatus?: 'error' | 'success' | 'warning'
  disabled?: boolean
} | null>(null)

const useComboboxContext = () => {
  const context = React.useContext(ComboboxContext)
  if (!context) {
    throw new Error('useComboboxContext must be used within Combobox.Root')
  }
  return context
}

const CustomRoot = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Root>,
  RootProps &
    ComboboxVariantProps & { 'data-status'?: 'error' | 'success' | 'warning'; disabled?: boolean }
>(({ className, 'data-status': dataStatus, ...props }, ref) => {
  const { root } = combobox()
  return (
    <ComboboxContext.Provider value={{ dataStatus, disabled: props.disabled }}>
      <PopoverPrimitive.Root ref={ref} className={cx(root, className)} {...props} />
    </ComboboxContext.Provider>
  )
})

export const Root = withProvider<
  React.ComponentRef<typeof PopoverPrimitive.Root>,
  Assign<
    RootProps,
    ComboboxVariantProps & {
      'data-status'?: 'error' | 'success' | 'warning'
      disabled?: boolean
    } & JsxStyleProps
  >
>(CustomRoot as any, 'root')

const CustomTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Trigger>,
  Omit<ComponentProps<typeof PopoverPrimitive.Trigger>, 'disabled'> & {
    icon?: React.ReactElement
    placeholder?: string
  }
>(({ children, placeholder, ...props }, ref) => {
  const { dataStatus, disabled } = useComboboxContext()
  return (
    <PopoverPrimitive.Trigger ref={ref} asChild {...props} disabled={disabled}>
      <Button
        icon={props.icon ?? <ChevronsUpDown />}
        iconPosition="end"
        variant="outlined"
        asChild={props.asChild ?? false}
        data-status={dataStatus}
      >
        <span>{children ? children : <span data-placeholder="">{placeholder}</span>}</span>
      </Button>
    </PopoverPrimitive.Trigger>
  )
})
export const Trigger = withContext<
  React.ComponentRef<typeof PopoverPrimitive.Trigger>,
  Assign<
    ComponentProps<typeof PopoverPrimitive.Trigger> & {
      icon?: React.ReactNode
      placeholder?: string
    },
    JsxStyleProps
  >
>(CustomTrigger as any, 'trigger')

const CustomEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  ComponentProps<typeof CommandPrimitive.Empty>
>(({ children, ...props }, ref) => {
  const search = useCommandState((state) => state.search)
  return (
    <CommandPrimitive.Empty ref={ref} {...props}>
      {children ?? `No results found for "${search}"`}
    </CommandPrimitive.Empty>
  )
})

export const CustomContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps & {
    placeholder?: string
    emptyState?: React.ReactNode
  }
>(({ children, placeholder = 'Search items', emptyState, ...props }, ref) => {
  return (
    <PopoverPrimitive.Content ref={ref} {...(props as any)} data-slot="combobox-content">
      <CommandPrimitive.Root>
        <CommandPrimitive.Input placeholder={placeholder} />
        <CommandPrimitive.List>
          {emptyState ? <CustomEmpty>{emptyState}</CustomEmpty> : <CustomEmpty />}
          {children}
        </CommandPrimitive.List>
      </CommandPrimitive.Root>
    </PopoverPrimitive.Content>
  )
})

CustomContent.displayName = CommandPrimitive.List.displayName

export const Content = withContext<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  Assign<
    PopoverContentProps & {
      placeholder?: string
      emptyState?: string
    },
    JsxStyleProps
  >
>(CustomContent as any, 'content')

export const Input = withContext<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  Assign<ComponentProps<typeof CommandPrimitive.Input>, JsxStyleProps>
>(CommandPrimitive.Input as any, 'input')

export const Group = withContext<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  Assign<ComponentProps<typeof CommandPrimitive.Group>, JsxStyleProps>
>(CommandPrimitive.Group as any, 'group')

export const ItemIndicator = withContext<
  React.ComponentRef<'div'>,
  Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>
>('div', 'itemIndicator')

export const Item = withContext<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  Assign<
    ComponentProps<typeof CommandPrimitive.Item> & {
      selected?: boolean
    },
    JsxStyleProps
  >
>(CommandPrimitive.Item as any, 'item')

export const Separator = withContext<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  Assign<ComponentProps<typeof CommandPrimitive.Separator>, JsxStyleProps>
>(CommandPrimitive.Separator as any, 'separator')

const Combobox = {
  Root,
  Trigger,
  Content,
  Input,
  Group,
  Item,
  Separator,
}

export default Combobox
