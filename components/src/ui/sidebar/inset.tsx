import { Inset as InsetPrimitive } from '@pallas-ui/sidebar'
import type { Assign, JsxStyleProps } from '@styled-system/types'
import type React from 'react'
import { withContext } from './provider'

export const Inset = withContext<
  React.ComponentRef<'main'>,
  Assign<React.ComponentProps<typeof InsetPrimitive>, JsxStyleProps>
>(InsetPrimitive, 'inset')
