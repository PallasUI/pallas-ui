import React from 'react'
import {
  CodeBlock,
  CodeInline,
  PackageInstall,
  parseCodeProps,
  parsePreProps,
} from 'renoun/components'
import type { MDXComponents } from 'renoun/mdx'
import { Heading } from './src/components/ui/typography'

export function useMDXComponents() {
  return {
    h1: ({ children }) => (
      <Heading level={1} css={{ marginBlock: 1 }}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading level={2} css={{ marginBlock: 1 }}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading level={3} css={{ marginBlock: 1 }}>
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading level={4} css={{ marginBlock: 1 }}>
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading level={5} css={{ marginBlock: 1 }}>
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading level={6} css={{ marginBlock: 1 }}>
        {children}
      </Heading>
    ),
    code: (props) => <CodeInline {...parseCodeProps(props)} />,

    pre: (props) => {
      const preProps = parsePreProps(props)
      return (
        <CodeBlock
          //   source={preProps.source}
          language={preProps.language}
          value={preProps.value}
          allowCopy={true}
        />
      )
    },
    PackageInstall: ({ packages }: { packages: string[] }) => {
      return <PackageInstall packages={packages} />
    },
  }
}
