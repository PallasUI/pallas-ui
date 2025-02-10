import { Grid, HStack } from '@styled-system/jsx'
import { Label } from '~/components/ui/label'
import { Switch } from '~/components/ui/switch'

export default function Example() {
  return (
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
}
