'use client'

import Modal from '~/components/ui/modal'

export default function Example() {
  return (
    <Modal.Root>
      <Modal.Trigger>Open</Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Are you absolutely sure?</Modal.Title>
          <Modal.Description>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Cancel>Cancel</Modal.Cancel>
          <Modal.Action>Continue</Modal.Action>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
}
