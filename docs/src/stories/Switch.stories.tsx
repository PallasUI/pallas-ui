import type { Meta } from '@storybook/react'
import { Grid, HStack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import { Switch } from '~/ui/switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Forms/Switch',
  tags: ['autodocs'],
}

export default meta

export const Default = () => <Switch />

export const Variants = () => (
  <Grid gap="2.5">
    <HStack gap="2">
      <Switch id="airplane-mode-2" disabled />
      <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
    </HStack>
    <HStack gap="2">
      <Switch id="airplane-mode-3" checked disabled />
      <Label htmlFor="airplane-mode-3">Airplane Mode</Label>
    </HStack>
  </Grid>
)
