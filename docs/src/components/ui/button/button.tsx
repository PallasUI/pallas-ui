import { css, cx } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { type ButtonVariantProps, button, icon, spinner } from '@styled-system/recipes'
import React from 'react'

type ButtonProps = ButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
    icon?: React.ReactNode
  }

const Spinner = styled('div', spinner)
const IconWrapper = styled('span', icon)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, isLoading, disabled, icon, variant, size, width, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cx(button({ variant, size, width }), className)}
        {...props}
      >
        <span className={css({ display: 'flex', alignItems: 'center', pl: 2, pr: 1 })}>
          {isLoading && <Spinner size="sm" />}
          {icon && <IconWrapper size="sm">{icon}</IconWrapper>}
          {children}
        </span>
      </button>
    )
  },
)

Button.displayName = 'Button'
