import * as React from 'react'

import type * as LabelPrimitive from '@radix-ui/react-label'

import { Label as RadixLabel } from '@radix-ui/react-label'
import { useFormField } from './useFormField'

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <RadixLabel
      ref={ref}
      data-field-state={error ? 'error' : 'success'}
      htmlFor={formItemId}
      {...props}
    />
  )
})

Label.displayName = 'Label'

export { Label }
