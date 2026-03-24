import { Footer as FooterPrimitive } from '@pallas-ui/sidebar'
import type { Assign, JsxStyleProps } from '@styled-system/types'
import type React from 'react'
import { withContext } from './provider'

export const Footer = withContext<
  React.ComponentRef<typeof FooterPrimitive>,
  Assign<React.ComponentProps<typeof FooterPrimitive>, JsxStyleProps>
>(FooterPrimitive, 'footer')
