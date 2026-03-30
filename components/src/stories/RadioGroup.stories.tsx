import type { Meta } from '@storybook/react'
import { HStack, Stack } from '@styled-system/jsx'
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
      <RadioGroup.Item value="compact" id="r3" disabled />
      <Label htmlFor="r3">Compact</Label>
    </HStack>
  </RadioGroup.Root>
)

export const SizeVariants = () => (
  <Stack>
    <Stack>
      <RadioGroup.Root defaultValue="small" size="sm">
        <Label>Small </Label>
        <HStack gap="2">
          <RadioGroup.Item value="small" id="sm1" />
          <Label htmlFor="sm1">One</Label>
        </HStack>
        <HStack gap="2">
          <RadioGroup.Item value="med" id="md1" />
          <Label htmlFor="md1">Two</Label>
        </HStack>
        <HStack gap="2">
          <RadioGroup.Item value="large" id="lg1" />
          <Label htmlFor="lg1">Three</Label>
        </HStack>
      </RadioGroup.Root>
    </Stack>
    <Stack>
      <RadioGroup.Root defaultValue="small" size="md">
        <Label>Medium </Label>
        <HStack gap="2">
          <RadioGroup.Item value="small" id="sm2" />
          <Label htmlFor="sm2">One</Label>
        </HStack>
        <HStack gap="2">
          <RadioGroup.Item value="med" id="md2" />
          <Label htmlFor="md2">Two</Label>
        </HStack>
        <HStack gap="2">
          <RadioGroup.Item value="large" id="lg2" />
          <Label htmlFor="lg2">Three</Label>
        </HStack>
      </RadioGroup.Root>
    </Stack>
    <Stack>
      <RadioGroup.Root defaultValue="small" size="lg">
        <Label>Large </Label>
        <HStack gap="2">
          <RadioGroup.Item value="small" id="sm3" />
          <Label htmlFor="sm3">One</Label>
        </HStack>
        <HStack gap="2">
          <RadioGroup.Item value="med" id="md3" />
          <Label htmlFor="md3">Two</Label>
        </HStack>
        <HStack gap="2">
          <RadioGroup.Item value="large" id="lg3" />
          <Label htmlFor="lg3">Three</Label>
        </HStack>
      </RadioGroup.Root>
    </Stack>
  </Stack>
)
