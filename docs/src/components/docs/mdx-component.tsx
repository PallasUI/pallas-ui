import React from 'react'
import {
  CodeBlock,
  CodeInline,
  MDXRenderer,
  parseCodeProps,
  parsePreProps,
} from 'renoun/components'
import { rehypePlugins, remarkPlugins } from 'renoun/mdx'
import { Heading } from '~/components/ui/typography'

export const MDXComponent = ({ value }: { value: string }) => {
  return (
    <MDXRenderer
      value={value}
      rehypePlugins={rehypePlugins}
      remarkPlugins={remarkPlugins}
      components={{
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
              showToolbar={true}
            />
          )
        },
      }}
    />
  )
}
