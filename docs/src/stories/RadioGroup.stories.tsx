import type { Meta } from '@storybook/react'
import { HStack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import RadioGroup from '../ui/radio-group'

const meta: Meta<typeof RadioGroup.Root> = {
  component: RadioGroup.Root,
  title: 'Forms/RadioGroup',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <RadioGroup.Root defaultValue="comfortable">
    <HStack gap="2">
      <RadioGroup.Item value="default" id="r1" />
      <Label htmlFor="r1">Default</Label>
    </HStack>
    <HStack gap="2">
      <RadioGroup.Item value="comfortable" id="r2" />
      <Label htmlFor="r2">Comfortable</Label>
    </HStack>
    <HStack gap="2">
      <RadioGroup.Item value="compact" id="r3" />
      <Label htmlFor="r3">Compact</Label>
    </HStack>
  </RadioGroup.Root>
)
