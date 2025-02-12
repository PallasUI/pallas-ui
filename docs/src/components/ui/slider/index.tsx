'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { cx } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { slider } from '@styled-system/recipes'
import * as React from 'react'

const BaseSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const styles = slider()

  return (
    <SliderPrimitive.Root ref={ref} className={cx(styles.root, className)} {...props}>
      <SliderPrimitive.Track className={styles.track}>
        <SliderPrimitive.Range className={styles.range} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles.thumb} />
    </SliderPrimitive.Root>
  )
})
BaseSlider.displayName = SliderPrimitive.Root.displayName

export const Slider = styled(BaseSlider)
