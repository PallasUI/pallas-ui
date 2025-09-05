import { cx } from '@styled-system/css'
import { type CardVariantProps, card } from '@styled-system/recipes'
import React, { createContext, useContext, useMemo } from 'react'
import { Skeleton } from '../skeleton'

const CardVariantContext = createContext<CardVariantProps>({
  size: 'md',
  variant: 'elevated',
  hoverable: false,
})

const useCardVariant = () => useContext(CardVariantContext)

interface CardCoverProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardCover = React.forwardRef<HTMLDivElement, CardCoverProps>(
  ({ children, className, ...props }, ref) => {
    const variantProps = useCardVariant()
    const slots = card(variantProps)
    return (
      <div ref={ref} className={cx(slots.cover, className)} {...props}>
        {children}
      </div>
    )
  },
)

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const variantProps = useCardVariant()
    const slots = card(variantProps)
    return (
      <div ref={ref} className={cx(slots.header, className)} {...props}>
        {children}
      </div>
    )
  },
)

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    const variantProps = useCardVariant()
    const slots = card(variantProps)
    return (
      <div ref={ref} className={cx(slots.body, className)} {...props}>
        {children}
      </div>
    )
  },
)

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    const variantProps = useCardVariant()
    const slots = card(variantProps)
    return (
      <div ref={ref} className={cx(slots.footer, className)} {...props}>
        {children}
      </div>
    )
  },
)

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => {
    const variantProps = useCardVariant()
    const slots = card(variantProps)
    return (
      <h3 ref={ref} className={cx(slots.title, className)} {...props}>
        {children}
      </h3>
    )
  },
)

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    const variantProps = useCardVariant()
    const slots = card(variantProps)
    return (
      <p ref={ref} className={cx(slots.description, className)} {...props}>
        {children}
      </p>
    )
  },
)

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

export interface CardRootProps extends React.HTMLAttributes<HTMLDivElement>, CardVariantProps {
  children?: React.ReactNode
  cover?: React.ReactNode
  hoverable?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'elevated' | 'container'
  loading?: boolean
}

const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  (
    {
      children,
      cover,
      hoverable = false,
      size = 'md',
      variant = 'elevated',
      loading = false,
      className,
      ...props
    },
    ref,
  ) => {
    // Memoize variant props so context value stable
    const variantProps = useMemo(() => ({ size, hoverable, variant }), [size, hoverable, variant])
    const slots = card(variantProps)

    return (
      <CardVariantContext.Provider value={variantProps}>
        <div ref={ref} className={cx(slots.root, className)} {...props}>
          {loading ? (
            <div className={slots.skeleton}>
              <CardSkeletonContent size={size} />
            </div>
          ) : (
            <>
              {cover && <div className={slots.cover}>{cover}</div>}
              {children}
            </>
          )}
        </div>
      </CardVariantContext.Provider>
    )
  },
)

CardRoot.displayName = 'Card.Root'
CardHeader.displayName = 'Card.Header'
CardBody.displayName = 'Card.Body'
CardFooter.displayName = 'Card.Footer'
CardTitle.displayName = 'Card.Title'
CardDescription.displayName = 'Card.Description'
CardCover.displayName = 'Card.Cover'

export const Card = {
  Root: CardRoot,
  Cover: CardCover,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
}
