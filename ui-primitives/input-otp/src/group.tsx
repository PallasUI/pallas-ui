import React from 'react'

export const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => <div data-slot="input-otp-group" ref={ref} {...props} />)

InputOTPGroup.displayName = 'InputOTPGroup'
