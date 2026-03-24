import { Rail as RailPrimitive } from '@pallas-ui/sidebar'
import type { Assign, JsxStyleProps } from '@styled-system/types'
import { withContext } from './provider'

export const Rail = withContext<
  React.ComponentRef<typeof RailPrimitive>,
  Assign<React.ComponentProps<typeof RailPrimitive>, JsxStyleProps>
>(RailPrimitive, 'rail')
