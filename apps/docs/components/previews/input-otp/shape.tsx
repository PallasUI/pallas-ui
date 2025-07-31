import InputOTP from '@/components/ui/input-otp'
import { Box, Stack } from '@styled-system/jsx'
import { maxLength } from '.'

export default function ShapesExample() {
  return (
    <Stack align="flex-start" gap="4">
      <Stack align="flex-start" gap="2">
        <Box mb={2}>Default</Box>
        <InputOTP.Root maxLength={maxLength}>
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="2">
        <Box mb={2}>Rounded</Box>
        <InputOTP.Root maxLength={maxLength} shape="rounded">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    </Stack>
  )
}
