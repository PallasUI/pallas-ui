'use client'
import * as CarouselPrimitive from '@pallas-ui/carousel'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { cx } from '@styled-system/css'
import { type CarouselVariantProps, button, carousel } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import type { ButtonProps } from '../button'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProps = Assign<
  WithFixedClassName<CarouselPrimitive.CarouselRootProps>,
  JsxStyleProps & CarouselVariantProps
>

export type PreviousProps = Assign<
  ComponentProps<typeof CarouselPrimitive.Previous>,
  JsxStyleProps & ButtonProps
>

export type NextProps = Assign<
  ComponentProps<typeof CarouselPrimitive.Next>,
  JsxStyleProps & ButtonProps
>

export const Root = withProvider<React.ComponentRef<typeof CarouselPrimitive.Root>, RootProps>(
  CarouselPrimitive.Root as any,
  'root',
)

export const List = withContext<
  React.ComponentRef<typeof CarouselPrimitive.List>,
  Assign<ComponentProps<typeof CarouselPrimitive.List>, JsxStyleProps>
>(CarouselPrimitive.List as any, 'list')

export const Item = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Item>,
  Assign<ComponentProps<typeof CarouselPrimitive.Item>, JsxStyleProps>
>(CarouselPrimitive.Item as any, 'item')

const PreviousButton = React.forwardRef<
  React.ComponentRef<typeof CarouselPrimitive.Previous>,
  PreviousProps
>((props, ref) => {
  const [buttonProps, { className, children, ...restProps }] = button.splitVariantProps(props)
  return (
    <CarouselPrimitive.Previous
      ref={ref}
      className={cx(button({ variant: 'text', ...buttonProps }), className)}
      {...(restProps as any)}
    >
      {children}
    </CarouselPrimitive.Previous>
  )
})

export const Previous = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Previous>,
  PreviousProps
>(PreviousButton as any, 'previous')

const NextButton = React.forwardRef<
  React.ComponentRef<typeof CarouselPrimitive.Next>,
  PreviousProps
>((props, ref) => {
  const [buttonProps, { className, children, ...restProps }] = button.splitVariantProps(props)
  return (
    <CarouselPrimitive.Next
      ref={ref}
      className={cx(button({ variant: 'text', ...buttonProps }), className)}
      {...(restProps as any)}
    >
      {children}
    </CarouselPrimitive.Next>
  )
})

export const Next = withContext<React.ComponentRef<typeof CarouselPrimitive.Next>, NextProps>(
  NextButton as any,
  'next',
)

export const Dots = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Dots>,
  Assign<ComponentProps<typeof CarouselPrimitive.Dots>, JsxStyleProps>
>(CarouselPrimitive.Dots as any, 'dots')

export const Dot = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Dot>,
  Assign<CarouselPrimitive.CarouselDotProps, JsxStyleProps>
>(CarouselPrimitive.Dot as any, 'dot')

const Carousel = {
  Root,
  List,
  Item,
  Previous,
  Next,
  Dots,
  Dot,
  useCarousel: CarouselPrimitive.useCarousel,
}

export default Carousel
