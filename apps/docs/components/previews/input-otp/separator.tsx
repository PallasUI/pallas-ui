import InputOTP from '@/components/ui/input-otp'
import { Stack } from '@styled-system/jsx'
import { maxLength } from '.'

export default function SeparatorExample() {
  return (
    <Stack align="flex-start" gap="6">
      <Stack align="flex-start" gap="1">
        <InputOTP.Root maxLength={maxLength}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    </Stack>
  )
}
