import {
  MenuSubButton as MenuSubButtomPrimitive,
  type MenuSubButtonProps,
  MenuSubItem as MenuSubItemPrimitive,
  MenuSub as MenuSubPrimitive,
} from '@pallas-ui/sidebar'
import type { Assign } from '@pallas-ui/style-context'
import type { JsxStyleProps } from '@styled-system/types'
import type React from 'react'
import { withContext } from './provider'

export const MenuSub = withContext<
  React.ComponentRef<typeof MenuSubPrimitive>,
  Assign<React.ComponentProps<typeof MenuSubPrimitive>, JsxStyleProps>
>(MenuSubPrimitive as any, 'menuSub')

export const MenuSubItem = withContext<
  React.ComponentRef<typeof MenuSubItemPrimitive>,
  Assign<React.ComponentProps<typeof MenuSubItemPrimitive>, JsxStyleProps>
>(MenuSubItemPrimitive as any, 'menuSubItem')

export const MenuSubButton = withContext<
  React.ComponentRef<typeof MenuSubButtomPrimitive>,
  Assign<MenuSubButtonProps, JsxStyleProps>
>(MenuSubButtomPrimitive as any, 'menuSubButton')
