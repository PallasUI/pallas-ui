import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { cx } from '@styled-system/css'
import { type SheetVariantProps, button, sheet } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import { forwardRef } from 'react'
import { type DialogProps, Drawer as SheetPrimitive } from 'vaul'
import type { ButtonProps } from '../button'

const { withProvider, withContext } = createStyleContext(sheet)

export type RootProps = Assign<
  WithFixedClassName<Omit<DialogProps, 'direction'>>,
  SheetVariantProps & JsxStyleProps
>

export const Root = withProvider<React.ComponentRef<typeof SheetPrimitive.Root>, RootProps>(
  SheetPrimitive.Root,
  'root',
)

export const NestedRoot = withProvider<
  React.ComponentRef<typeof SheetPrimitive.NestedRoot>,
  RootProps
>(SheetPrimitive.NestedRoot, 'nestedRoot')

export const Overlay = withContext<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Overlay>, JsxStyleProps>
>(SheetPrimitive.Overlay, 'overlay')

const TriggerComponent = withContext<
  React.ComponentRef<typeof SheetPrimitive.Trigger>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Trigger>, JsxStyleProps & ButtonProps>
>(SheetPrimitive.Trigger, 'trigger')

export const Trigger = forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Trigger>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Trigger>, JsxStyleProps & ButtonProps>
>((props, ref) => {
  const [buttonProps, { className, ...rest }] = button.splitVariantProps(props)
  return (
    <TriggerComponent ref={ref} className={cx(button(buttonProps), className)} {...rest} />
  )
})

Trigger.displayName = 'Trigger'
export const Handle = withContext<
  React.ComponentRef<typeof SheetPrimitive.Handle>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Handle>, JsxStyleProps>
>(SheetPrimitive.Handle, 'handle')

export const Content = withContext<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Content>, JsxStyleProps>
>(SheetPrimitive.Content, 'content')

export const Title = withContext<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Title>, JsxStyleProps>
>(SheetPrimitive.Title, 'title')

export const Description = withContext<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Description>, JsxStyleProps>
>(SheetPrimitive.Description, 'description')

export const Close = withContext<
  React.ComponentRef<typeof SheetPrimitive.Close>,
  Assign<React.ComponentProps<typeof SheetPrimitive.Close>, JsxStyleProps>
>(SheetPrimitive.Close, 'close')

const SheetHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
SheetHeader.displayName = 'SheetHeader'

export const Header = withContext<
  React.ComponentRef<typeof SheetHeader>,
  Assign<React.ComponentProps<typeof SheetHeader>, JsxStyleProps>
>(SheetHeader, 'header')

const SheetFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
SheetFooter.displayName = 'SheetFooter'

export const Footer = withContext<
  React.ComponentRef<typeof SheetFooter>,
  Assign<React.ComponentProps<typeof SheetFooter>, JsxStyleProps>
>(SheetFooter, 'footer')

const Sheet = {
  Root,
  NestedRoot,
  Portal: SheetPrimitive.Portal,
  Overlay,
  Handle,
  Content,
  Title,
  Description,
  Close,
  Trigger,
  Header,
  Footer,
}

export default Sheet
