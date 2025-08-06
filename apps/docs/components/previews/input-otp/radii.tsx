import InputOTP from '@/components/ui/input-otp'
import { Box, Stack } from '@styled-system/jsx'
import { maxLength } from '.'

export default function ShapesExample() {
  return (
    <Stack align="flex-start" gap="4">
      <Stack align="flex-start" gap="2">
        <Box mb={2}>Small</Box>
        <InputOTP.Root maxLength={maxLength} radii="sm">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="2">
        <Box mb={2}>Medium</Box>
        <InputOTP.Root maxLength={maxLength}>
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="2">
        <Box mb={2}>Large</Box>
        <InputOTP.Root maxLength={maxLength} radii="lg">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="2">
        <Box mb={2}>Full</Box>
        <InputOTP.Root maxLength={maxLength} radii="full">
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
