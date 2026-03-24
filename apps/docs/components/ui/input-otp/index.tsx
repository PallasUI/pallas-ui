import {
  InputOTPGroup as GroupPrimitive,
  InputOTPRoot as RootPrimitive,
  InputOTPSeparator as SeparatorPrimitive,
  InputOTPSlot as SlotPrimitive,
} from '@pallas-ui/input-otp'
import type { InputOTPProps } from '@pallas-ui/input-otp'
import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { type InputOTPVariantProps, inputOTP } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type { ComponentProps } from 'react'
import type React from 'react'

const { withProvider, withContext } = createStyleContext(inputOTP)

// root component
type RootProps = Assign<JsxStyleProps, InputOTPProps>
const InputOTPRoot = withProvider<
  React.ComponentRef<typeof RootPrimitive>,
  RootProps & InputOTPVariantProps
>(RootPrimitive, 'root')

// group component
type GroupProps = Assign<JsxStyleProps, ComponentProps<typeof GroupPrimitive>>
const InputOTPGroup = withContext<React.ComponentRef<typeof GroupPrimitive>, GroupProps>(
  GroupPrimitive,
  'group',
)

// slot component
const InputOTPSlot = withContext<
  React.ComponentRef<typeof SlotPrimitive>,
  React.ComponentProps<typeof SlotPrimitive>
>(SlotPrimitive, 'slot')

// separator component
const InputOTPSep = withContext<
  React.ComponentRef<typeof SeparatorPrimitive>,
  React.ComponentProps<typeof SeparatorPrimitive>
>(SeparatorPrimitive, 'separator')

// compose the InputOTP object
export default {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSep,
}
