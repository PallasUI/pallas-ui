import { Header as HeaderPrimitive } from '@pallas-ui/sidebar'
import type { Assign } from '@pallas-ui/style-context'
import type { JsxStyleProps } from '@styled-system/types'
import type React from 'react'
import { withContext } from './provider'

export const Header = withContext<
  React.ComponentRef<typeof HeaderPrimitive>,
  Assign<React.ComponentProps<typeof HeaderPrimitive>, JsxStyleProps>
>(HeaderPrimitive, 'header')
