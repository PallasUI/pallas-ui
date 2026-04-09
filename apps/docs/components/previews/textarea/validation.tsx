import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Grid } from '@styled-system/jsx'

export default function TextareaValidationDemo() {
  return (
    <Grid w="full" gap="2.5">
      <Grid gap="1.5">
        <Label htmlFor="status-error">Error</Label>
        <Textarea id="status-error" data-status="error" placeholder="Something went wrong" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="status-success">Success</Label>
        <Textarea id="status-success" data-status="success" placeholder="Looks good!" />
      </Grid>
      <Grid gap="1.5">
        <Label htmlFor="status-warning">Warning</Label>
        <Textarea id="status-warning" data-status="warning" placeholder="Check this field" />
      </Grid>
    </Grid>
  )
}
