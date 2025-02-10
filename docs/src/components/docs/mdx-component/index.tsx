'use client'

import { css } from '@styled-system/css'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { components } from './components'

interface MdxProps {
  code: string
}

export function MdxComponent({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div
      className={css({
        // Add code block title styles
        '& [data-rehype-pretty-code-title]': {
          roundedTop: 'lg',
          bg: 'secondary',
          color: 'secondary.foreground',
          mt: '6',
          textStyle: 'xs',
          px: '4',
          py: '2',

          '& + div > pre': {
            roundedTop: '0',
            mt: '0',
          },
        },
      })}
    >
      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
      <Component components={components as any} />
    </div>
  )
}
