import type React from 'react'

export const InputOTPSeparator = ({ ...props }: React.ComponentProps<'div'>) => {
  return (
    <div data-slot="input-otp-separator" {...props}>
      {' '}
      –{' '}
    </div>
  )
}
