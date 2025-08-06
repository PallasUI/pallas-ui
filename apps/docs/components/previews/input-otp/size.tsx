import InputOTP from '@/components/ui/input-otp'
import { Box, Stack } from '@styled-system/jsx'
import { maxLength } from '.'

export default function SizesExample() {
  return (
    <Stack align="flex-start" gap="4">
      <Stack align="flex-start" gap="2">
        <Box mb={2}>Small</Box>
        <InputOTP.Root maxLength={maxLength} slotSize="sm">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="2">
        <Box mb={2}>Medium</Box>
        <InputOTP.Root maxLength={maxLength} slotSize="md">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="2">
        <Box mb={2}>Large</Box>
        <InputOTP.Root maxLength={maxLength} slotSize="lg">
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
