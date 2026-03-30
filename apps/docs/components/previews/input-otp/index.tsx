import InputOTP from '@/components/ui/input-otp'
import { Stack } from '@styled-system/jsx'

export const maxLength = 6

export default function Example() {
  return (
    <Stack align="flex-start" gap="1">
      <InputOTP.Root maxLength={maxLength}>
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
  )
}
