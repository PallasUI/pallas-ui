import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Grid } from '@styled-system/jsx'

export default function TextareaVariantsDemo() {
  return (
    <Grid w="full" gap="2.5">
      <Grid gap="1.5">
        <Label htmlFor="style-outline">Outline</Label>
        <Textarea id="style-outline" variant="outline" placeholder="Outline styling" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="style-underlined">Underlined</Label>
        <Textarea id="style-underlined" variant="underlined" placeholder="Underlined styling" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="style-filled">Filled</Label>
        <Textarea id="style-filled" variant="filled" placeholder="Filled styling" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="style-borderless">Borderless</Label>
        <Textarea id="style-borderless" variant="borderless" placeholder="Borderless styling" />
      </Grid>
    </Grid>
  )
}
