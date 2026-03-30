import { OTPInputContext } from 'input-otp'
import React from 'react'

const useOTPContext = () => {
  const context = React.useContext(OTPInputContext)
  if (!context) {
    throw new Error('InputOTP subcomponents must be used within an InputOTP component')
  }
  return context
}

const SlotCaret = () => {
  return (
    <div data-slot="input-otp-caret" aria-hidden="true">
      {' '}
      |{' '}
    </div>
  )
}

const SlotChar = ({
  char,
  isActive,
  placeholderChar,
}: { char?: string | null; isActive?: boolean; placeholderChar?: string }) => {
  if (char || isActive) {
    return <div data-slot="input-otp-char">{char}</div>
  }
  return <div data-slot="input-otp-placeholder">{placeholderChar}</div>
}

export const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const OTPcontext = useOTPContext()
  const currentSlot = OTPcontext.slots[index]
  if (!currentSlot) return null
  const { char, hasFakeCaret, isActive } = currentSlot
  const { placeholderChar } = OTPcontext.slots[0] ?? currentSlot

  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      data-active={isActive || undefined}
      className={className}
      {...props}
    >
      <SlotChar char={char} isActive={isActive} placeholderChar={placeholderChar ?? undefined} />
      {hasFakeCaret && <SlotCaret />}
    </div>
  )
})

InputOTPSlot.displayName = 'InputOTPSlot'
