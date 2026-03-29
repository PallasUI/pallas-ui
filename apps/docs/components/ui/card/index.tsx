'use client'

import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { type CardVariantProps, card } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import { Skeleton } from '../skeleton'

const { withProvider, withContext } = createStyleContext(card)

type CardRootProviderProps = Assign<
  React.ComponentPropsWithoutRef<'div'>,
  CardVariantProps & JsxStyleProps
>

const CardRootPrimitive = withProvider<HTMLDivElement, CardRootProviderProps>('div', 'root')

const CardCover = withContext<HTMLDivElement, Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>>(
  'div',
  'cover',
)
CardCover.displayName = 'Card.Cover'

const CardHeader = withContext<HTMLDivElement, Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>>(
  'div',
  'header',
)
CardHeader.displayName = 'Card.Header'

const CardBody = withContext<HTMLDivElement, Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>>(
  'div',
  'body',
)
CardBody.displayName = 'Card.Body'

const CardFooter = withContext<HTMLDivElement, Assign<React.ComponentPropsWithoutRef<'div'>, JsxStyleProps>>(
  'div',
  'footer',
)
CardFooter.displayName = 'Card.Footer'

const CardTitle = withContext<
  HTMLHeadingElement,
  Assign<React.ComponentPropsWithoutRef<'h3'>, JsxStyleProps>
>('h3', 'title')
CardTitle.displayName = 'Card.Title'

const CardDescription = withContext<
  HTMLParagraphElement,
  Assign<React.ComponentPropsWithoutRef<'p'>, JsxStyleProps>
>('p', 'description')
CardDescription.displayName = 'Card.Description'

const CardSkeletonSlot = withContext<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>('div', 'skeleton')
CardSkeletonSlot.displayName = 'Card.Skeleton'

const CardSkeletonContent: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const skeletonHeights = {
    sm: { title: '14px', desc: '12px', body: '12px' },
    md: { title: '16px', desc: '14px', body: '14px' },
    lg: { title: '18px', desc: '16px', body: '16px' },
  }

  const heights = skeletonHeights[size]

  return (
    <>
      <Skeleton style={{ width: '100%', height: heights.title }} />
      <Skeleton style={{ width: '100%', height: heights.desc }} />
      <Skeleton style={{ width: '85%', height: heights.body }} />
      <Skeleton style={{ width: '60%', height: heights.body }} />
    </>
  )
}
CardSkeletonContent.displayName = 'Card.SkeletonContent'

export interface CardRootProps extends CardRootProviderProps {
  loading?: boolean
}

const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  ({ loading = false, children, ...props }, ref) => {
    const [variantProps] = card.splitVariantProps(props)
    const raw = variantProps.size ?? 'md'
    const size: 'sm' | 'md' | 'lg' =
      raw === 'sm' || raw === 'md' || raw === 'lg' ? raw : 'md'

    return (
      <CardRootPrimitive ref={ref} {...props}>
        {loading ? (
          <CardSkeletonSlot>
            <CardSkeletonContent size={size} />
          </CardSkeletonSlot>
        ) : (
          children
        )}
      </CardRootPrimitive>
    )
  },
)
CardRoot.displayName = 'Card.Root'

export const Card = {
  Root: CardRoot,
  Cover: CardCover,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
}
