import { css } from '@styled-system/css'
import { icon } from '@styled-system/recipes'
import { CheckIcon, CopyIcon } from 'lucide-react'
import * as React from 'react'
import { Button, type ButtonProps } from '~/components/ui/button'
import { Content, Root, Trigger } from '~/components/ui/tooltip'

export const copy = (value: string) => {
  navigator.clipboard.writeText(value)
}

export interface CopyButtonProps extends ButtonProps {
  className?: string
  value: string
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  return (
    <Root>
      <Trigger asChild>
        <Button
          size="icon"
          className={className}
          onClick={() => {
            copy(value)
            setHasCopied(true)
            setTimeout(() => {
              setHasCopied(false)
            }, 2000)
          }}
          {...props}
        >
          <span
            className={css({
              srOnly: true,
            })}
          >
            Copy
          </span>
          {hasCopied ? <CheckIcon className={icon()} /> : <CopyIcon className={icon()} />}
        </Button>
      </Trigger>
      <Content>
        <p>Copy</p>
      </Content>
    </Root>
  )
}
