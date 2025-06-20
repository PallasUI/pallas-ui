'use client'

import { Steps } from '@ark-ui/react/steps'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import * as React from 'react'

import { steps } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'

const { withProvider, withContext } = createStyleContext(steps)

export type RootProps = WithFixedClassName<ComponentProps<typeof Steps.Root>> & {
  size?: 'sm' | 'md' | 'lg'
}

export const Root = withProvider<
  React.ComponentRef<typeof Steps.Root>,
  Assign<RootProps, JsxStyleProps>
>(Steps.Root, 'root')

export const Trigger = withContext<
  React.ComponentRef<typeof Steps.Trigger>,
  Assign<ComponentProps<typeof Steps.Trigger>, JsxStyleProps>
>(Steps.Trigger, 'trigger')

const Content = withContext<
  React.ComponentRef<typeof Steps.Content>,
  Assign<ComponentProps<typeof Steps.Content>, JsxStyleProps>
>(Steps.Content, 'stepContent')

const List = withContext<
  React.ComponentRef<typeof Steps.List>,
  Assign<ComponentProps<typeof Steps.List>, JsxStyleProps>
>(Steps.List, 'list')

const Item = withContext<
  React.ComponentRef<typeof Steps.Item>,
  Assign<ComponentProps<typeof Steps.Item>, JsxStyleProps>
>(Steps.Item, 'item')

export type IndicatorProps = Assign<ComponentProps<typeof Steps.Indicator>, JsxStyleProps> & {
  loading?: boolean
  disabled?: boolean
}

const BaseIndicator = withContext<
  React.ComponentRef<typeof Steps.Indicator>,
  Assign<ComponentProps<typeof Steps.Indicator>, JsxStyleProps>
>(Steps.Indicator, 'indicator')

const Indicator = React.forwardRef<React.ComponentRef<typeof Steps.Indicator>, IndicatorProps>(
  ({ loading, disabled, ...props }, ref) => {
    return (
      <BaseIndicator
        {...props}
        ref={ref}
        data-loading={loading || undefined}
        data-disabled={disabled || undefined}
      />
    )
  },
)
Indicator.displayName = 'Steps.Indicator'

const Separator = withContext<
  React.ComponentRef<typeof Steps.Separator>,
  Assign<ComponentProps<typeof Steps.Separator>, JsxStyleProps>
>(Steps.Separator, 'separator')

const Dialog = {
  Root,
  Trigger,
  Content,
  List,
  Item,
  Indicator,
  Separator,
}

export default Dialog
