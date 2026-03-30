'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { cx } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { type SliderVariantProps, slider } from '@styled-system/recipes'
import * as React from 'react'

const BaseSlider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & SliderVariantProps
>(({ className, thumbSize, trackSize, ...props }, ref) => {
  const styles = slider({ thumbSize, trackSize })

  return (
    <SliderPrimitive.Root ref={ref} className={cx(styles.root, className)} {...props}>
      <SliderPrimitive.Track className={cx(styles.track, className)}>
        <SliderPrimitive.Range className={cx(styles.range, className)} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={cx(styles.thumb, className)} />
    </SliderPrimitive.Root>
  )
})
BaseSlider.displayName = SliderPrimitive.Root.displayName

export const Slider = styled(BaseSlider)
