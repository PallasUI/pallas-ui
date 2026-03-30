import { Input } from '@/components/ui/input'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <Stack w="full" maxW="sm" align="flex-start" gap="4">
      <Stack w="full" align="flex-start" gap="2">
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium' })}>Size Variants</h3>
        <Stack w="full" align="flex-start" gap="2">
          <Input size="sm">
            <Input.Text placeholder="Small input" />
          </Input>
          <Input size="md">
            <Input.Text placeholder="Medium input" />
          </Input>
          <Input size="lg">
            <Input.Text placeholder="Large input" />
          </Input>
        </Stack>
      </Stack>

      <Stack w="full" align="flex-start" gap="2">
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium' })}>Radii Variants</h3>
        <Stack w="full" align="flex-start" gap="2">
          <Input radii="sm">
            <Input.Text placeholder="Small" />
          </Input>
          <Input>
            <Input.Text placeholder="Medium" />
          </Input>
          <Input radii="lg">
            <Input.Text placeholder="Large" />
          </Input>
          <Input radii="full">
            <Input.Text placeholder="Full" />
          </Input>
        </Stack>
      </Stack>

      <Stack w="full" align="flex-start" gap="2">
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium' })}>Status Variants</h3>
        <Stack w="full" align="flex-start" gap="2">
          <Input size="md">
            <Input.Text status="success" placeholder="Success state" />
          </Input>
          <Input size="md">
            <Input.Text status="error" placeholder="Error state" />
          </Input>
          <Input size="md">
            <Input.Text status="warning" placeholder="Warning state" />
          </Input>
        </Stack>
      </Stack>
    </Stack>
  )
}
