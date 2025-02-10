import { Flex } from '@styled-system/jsx'
import { Checkbox } from '~/components/ui/checkbox'
import { Label } from '~/components/ui/label'

export default function Example() {
  return (
    <Flex align="center" gap="2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </Flex>
  )
}
