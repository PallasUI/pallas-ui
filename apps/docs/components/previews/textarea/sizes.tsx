import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Grid } from '@styled-system/jsx'

export default function TextareaSizesDemo() {
  return (
    <Grid w="full" gap="2.5">
      <Grid gap="1.5">
        <Label htmlFor="size-sm">Small</Label>
        <Textarea id="size-sm" size="sm" placeholder="Small textarea" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="size-md">Medium</Label>
        <Textarea id="size-md" placeholder="Medium textarea" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="size-lg">Large</Label>
        <Textarea id="size-lg" size="lg" placeholder="Large textarea" />
      </Grid>
    </Grid>
  )
}
