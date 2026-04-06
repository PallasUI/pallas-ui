import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Grid } from '@styled-system/jsx'

export default function TextareaRadiiDemo() {
  return (
    <Grid w="full" gap="2.5">
      <Grid gap="1.5">
        <Label htmlFor="radii-sm">Small</Label>
        <Textarea id="radii-sm" radii="sm" placeholder="Small border radius" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="radii-md">Medium</Label>
        <Textarea id="radii-md" placeholder="Medium border radius" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="radii-lg">Large</Label>
        <Textarea id="radii-lg" radii="lg" placeholder="Large border radius" />
      </Grid>
    </Grid>
  )
}
