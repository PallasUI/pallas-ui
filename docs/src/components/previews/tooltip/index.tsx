import { Button } from '~/components/ui/button'
import Tooltip from '~/components/ui/tooltip'

export default function Example() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Button>Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={5}>Tooltip content</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
