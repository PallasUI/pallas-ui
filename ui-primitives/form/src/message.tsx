import * as React from 'react'
import { useFormField } from './useFormField'

const Message = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message ?? '') : children

    if (!body) {
      return null
    }

    return (
      <p ref={ref} id={formMessageId} data-field-state={error ? 'error' : 'success'} {...props}>
        {body}
      </p>
    )
  },
)

Message.displayName = 'Message'

export { Message }
