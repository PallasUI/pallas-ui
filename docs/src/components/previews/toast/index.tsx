'use client'

import { X } from 'lucide-react'
import { Button } from '~/components/ui/button'
import Toast, { Provider, Viewport } from '~/components/ui/toast'

export default function Example() {
  return (
    <Provider>
      <Viewport />
      <Toast.Root open={true}>
        <Toast.Title>Scheduled: Catch up</Toast.Title>
        <Toast.Description>Friday, February 10, 2023 at 5:57 PM</Toast.Description>
        <Toast.Close asChild>
          <Button variant="text" aria-label="Close">
            <X aria-hidden size={20} />
          </Button>
        </Toast.Close>
      </Toast.Root>
    </Provider>
  )
}
