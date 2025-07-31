import InputOTP from '@/components/ui/input-otp'
import { Box, Stack } from '@styled-system/jsx'
import { maxLength } from '.'

export default function WarningExample() {
  return (
    <Stack align="flex-start" gap="4">
      <Stack align="flex-start" gap="1">
        <Box mb={2}>Outline</Box>
        <InputOTP.Root maxLength={maxLength} styling="outline" dataStatus="warning">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Filled</Box>
        <InputOTP.Root maxLength={maxLength} styling="filled" dataStatus="warning">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Underlined</Box>
        <InputOTP.Root maxLength={maxLength} styling="underlined" dataStatus="warning">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Borderless</Box>
        <InputOTP.Root maxLength={maxLength} styling="borderless" dataStatus="warning">
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
