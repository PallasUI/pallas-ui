import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { useFormField } from './useFormField'

const Control = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { formItemId, error } = useFormField()

  return <Slot ref={ref} data-status={error ? 'error' : undefined} id={formItemId} {...props} />
})
Control.displayName = 'Control'

export { Control }
