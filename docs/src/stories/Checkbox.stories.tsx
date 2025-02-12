import type { Meta } from '@storybook/react'
import { Grid, HStack } from '@styled-system/jsx'
import { Checkbox } from '~/ui/checkbox'
import { Label } from '~/ui/label'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Forms/Checkbox',
  tags: ['autodocs'],
}

export default meta

export const Default = () => <Checkbox />

export const Variants = () => (
  <Grid gap="2.5">
    <HStack gap="2">
      <Checkbox id="checkbox-1" />
      <Label htmlFor="checkbox-1">Checkbox 1</Label>
    </HStack>
    <HStack gap="2">
      <Checkbox id="checkbox-2" checked />
      <Label htmlFor="checkbox-2">Checkbox 2</Label>
    </HStack>
    <HStack gap="2">
      <Checkbox id="checkbox-3" disabled />
      <Label htmlFor="checkbox-3">Checkbox 3</Label>
    </HStack>
  </Grid>
)
