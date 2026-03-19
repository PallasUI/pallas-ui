import {
  GroupAction as GroupActionPrimitive,
  GroupContent as GroupContentPrimitive,
  GroupLabel as GroupLabelPrimitive,
  Group as GroupPrimitive,
  type SidebarGroupActionProps,
  type SidebarGroupLabelProps,
} from '@pallas-ui/sidebar'
import { cx } from '@styled-system/css'
import { button } from '@styled-system/recipes'
import type { Assign, JsxStyleProps } from '@styled-system/types'
import React from 'react'
import type { ButtonProps } from '../button'
import { withContext } from './provider'

export const Group = withContext<
  React.ComponentRef<typeof GroupPrimitive>,
  Assign<React.ComponentProps<typeof GroupPrimitive>, JsxStyleProps>
>(GroupPrimitive as any, 'group')

export const GroupLabel = withContext<
  React.ComponentRef<typeof GroupLabelPrimitive>,
  Assign<SidebarGroupLabelProps, JsxStyleProps>
>(GroupLabelPrimitive as any, 'groupLabel')

type ActionButtonProps = Assign<SidebarGroupActionProps, ButtonProps>
const GroupActionStyled = withContext<
  React.ComponentRef<typeof GroupActionPrimitive>,
  ActionButtonProps
>(GroupActionPrimitive as any, 'groupAction')

export const GroupAction = React.forwardRef<
  React.ComponentRef<typeof GroupActionStyled>,
  ActionButtonProps
>((props, ref) => {
  const [buttonProps, { className, ...rest }] = button.splitVariantProps(props)
  return <GroupActionStyled ref={ref} className={cx(button(buttonProps), className)} {...(rest as any)} />
})

export const GroupContent = withContext<
  React.ComponentRef<typeof GroupContentPrimitive>,
  Assign<SidebarGroupLabelProps, JsxStyleProps>
>(GroupContentPrimitive as any, 'groupContent')
