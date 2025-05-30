'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cx } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { switchRecipe } from '@styled-system/recipes'
import * as React from 'react'

const BaseSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => {
  const styles = switchRecipe()

  return (
    <SwitchPrimitive.Root className={cx('peer', styles.root, className)} {...props} ref={ref}>
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  )
})
BaseSwitch.displayName = SwitchPrimitive.Root.displayName

export const Switch = styled(BaseSwitch)
