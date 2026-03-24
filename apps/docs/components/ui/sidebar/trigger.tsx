import { Trigger as TriggerPrimitive } from '@pallas-ui/sidebar'
import { css, cx } from '@styled-system/css'
import { button } from '@styled-system/recipes'
import type { Assign } from '@styled-system/types'
import React from 'react'
import type { ButtonProps } from '../button'
import { withContext } from './provider'

type TriggerProps = Assign<React.ComponentProps<typeof TriggerPrimitive>, ButtonProps>

const TriggerStyled = withContext<React.ComponentRef<typeof TriggerPrimitive>, TriggerProps>(
  TriggerPrimitive,
  'trigger',
)

export const Trigger = React.forwardRef<React.ComponentRef<typeof TriggerPrimitive>, TriggerProps>(
  (props, ref) => {
    const [buttonProps, { className, children, ...restProps }] = button.splitVariantProps(props)
    return (
      <TriggerStyled
        ref={ref}
        className={cx(button({ variant: 'text', ...buttonProps }), className)}
        {...restProps}
      >
        {children}
        <span className={css({ srOnly: true })}>Toggle Sidebar</span>
      </TriggerStyled>
    )
  },
)
Trigger.displayName = 'SidebarTrigger'
