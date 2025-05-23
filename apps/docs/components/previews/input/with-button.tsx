import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <Stack direction="row" w="full" maxW="sm" align="center" gap="2">
      <div className={css({ flex: 1 })}>
        <Input>
          <Input.Text id="email" placeholder="Email" />
        </Input>
      </div>
      <Button type="submit">Subscribe</Button>
    </Stack>
  )
}
