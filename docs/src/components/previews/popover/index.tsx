'use client'

import { Button } from '~/components/ui/button'
import Popover from '~/components/ui/popover'

export default function Example() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos.
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
