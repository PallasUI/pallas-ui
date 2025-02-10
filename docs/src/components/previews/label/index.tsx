import { css } from '@styled-system/css'
import { Checkbox } from '~/components/ui/checkbox'
import { Label } from '~/components/ui/label'

export default function Example() {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', spaceX: '2' })}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
