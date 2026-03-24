import { Provider as ProviderPrimitive, type SidebarProviderProps } from '@pallas-ui/sidebar'
import { createStyleContext } from '@pallas-ui/style-context'
import { cx } from '@styled-system/css'
import { sidebar } from '@styled-system/recipes'
import type { Assign, JsxStyleProps } from '@styled-system/types'
import React from 'react'
import Tooltip from '../tooltip/tooltip'

export const { withProvider, withContext } = createStyleContext(sidebar)

const ProviderStyled = withProvider<
  React.ComponentRef<typeof ProviderPrimitive>,
  Assign<SidebarProviderProps, JsxStyleProps>
>(ProviderPrimitive, 'provider')

export const Provider = React.forwardRef<
  React.ComponentRef<typeof ProviderStyled>,
  SidebarProviderProps
>(({ className, style, children, ...props }, ref) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <ProviderStyled className={cx('group/sidebar-wrapper', className)} ref={ref} {...props}>
        {children}
      </ProviderStyled>
    </Tooltip.Provider>
  )
})
