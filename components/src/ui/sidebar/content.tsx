import { Content as ContentPrimitive } from '@pallas-ui/sidebar'
import type { Assign } from '@pallas-ui/style-context'
import type { JsxStyleProps } from '@styled-system/types'
import type React from 'react'
import { withContext } from './provider'

export const Content = withContext<
  React.ComponentRef<typeof ContentPrimitive>,
  Assign<React.ComponentProps<typeof ContentPrimitive>, JsxStyleProps>
>(ContentPrimitive, 'content')
