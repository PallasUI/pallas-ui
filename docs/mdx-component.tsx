import React from 'react'
import { CodeBlock, CodeInline, parseCodeProps, parsePreProps } from 'renoun/components'
import type { MDXComponents } from 'renoun/mdx'

export function useMDXComponents() {
  return {
    pre: (props) => {
      // @ts-ignore
      return <CodeBlock {...parsePreProps(props)} />
    },
    code: (props) => {
      return <CodeInline {...parseCodeProps(props)} />
    },
  } satisfies MDXComponents
}
