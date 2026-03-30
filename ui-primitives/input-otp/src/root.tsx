import { OTPInput, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = OTPInputProps & {
  dataStatus?: 'error' | 'success' | 'none' | 'warning'
}
export const InputOTPRoot = React.forwardRef<React.ComponentRef<typeof OTPInput>, InputOTPProps>(
  (
    {
      maxLength = 6,
      dataStatus = 'none',
      pattern = REGEXP_ONLY_DIGITS_AND_CHARS,
      placeholder = '-',
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const { containerClassName, ...rest } = props
    return (
      <div
        data-slot="input-otp-root"
        data-status={dataStatus}
        data-disabled={disabled}
        className={className}
      >
        <OTPInput
          maxLength={maxLength}
          ref={ref}
          aria-label="Enter OTP code"
          pattern={pattern}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
      </div>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'
