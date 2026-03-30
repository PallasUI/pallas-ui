'use client'

import Accordion from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heading, Paragraph } from '@/components/ui/typography'
import { MDXContent } from '@content-collections/mdx/react'
import { css, cx } from '@styled-system/css'
import { HashIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { typographyTable, typographyTableContainer } from '../common/recipes/table'
import { ComponentPreview, ComponentSource } from './component-preview'
import { ContentContainer } from './content-container'
import { CopyButton } from './copy-button'
import { InstallTabs } from './install-tabs'
import { PackageTabs } from './package-tabs'
import { Section } from './section'
import { Steps } from './steps'
import { ColorPalette } from './theme/color-palette'
import { SizeBox, SpacingBox } from './theme/size-box'

interface MdxComponentProps {
  code: string
}

function HeadingAnchor({ id, level }: { id?: string; level: 1 | 2 | 3 | 4 }) {
  if (!id) return null

  return (
    <Link
      aria-label="Link to section"
      href={`#${id}`}
      className={css({
        display: 'inline-block',
        rounded: 'md',
        mx: level > 2 ? '1' : '2',
        color: 'text.tertiary',
        opacity: '0',
        transition: 'opacity 0.2s',
        _groupHover: { opacity: 1 },
        _hover: { color: 'text.secondary' },
      })}
    >
      <HashIcon
        className={css({
          h: level === 1 ? 'icon.md' : level === 2 ? 'icon.sm' : 'icon.sm',
          w: level === 1 ? 'icon.md' : level === 2 ? 'icon.sm' : 'icon.sm',
        })}
      />
    </Link>
  )
}

function CustomLink({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className={css({
          color: 'primary',
          fontWeight: 'medium',
          textDecoration: 'none',
          _hover: { textDecoration: 'underline' },
        })}
      />
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={css({
        color: 'primary',
        fontWeight: 'medium',
        textDecoration: 'none',
        _hover: { textDecoration: 'underline' },
      })}
    />
  )
}

type HeadingDomRest = Omit<React.HTMLAttributes<HTMLHeadingElement>, 'id' | 'children' | 'color'>

/** MDX may set `color` on headings; strip it so `Heading` controls color. */
function mdHeadingFieldProps(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const { id, children, ...spread } = props
  const rest = { ...spread }
  delete (rest as { color?: unknown }).color
  return { id, children, rest: rest as HeadingDomRest }
}

function extractCodeString(children: React.ReactNode): string {
  // Handle undefined or null
  if (!children) return ''

  // Handle string directly
  if (typeof children === 'string') {
    return children
  }

  // Handle arrays of children
  if (Array.isArray(children)) {
    return children.map((child) => extractCodeString(child)).join('')
  }

  // Handle React elements
  if (React.isValidElement(children)) {
    const props = children.props as Record<string, unknown>

    // If the element has props.children, extract from there
    if ('children' in props && props.children !== undefined) {
      return extractCodeString(props.children as React.ReactNode)
    }

    // If the element has a 'value' prop (like in some code highlighting components)
    if ('value' in props && typeof props.value === 'string') {
      return props.value
    }
  }

  // Return empty string for other cases
  return ''
}

function CodeBlock(props: React.HTMLAttributes<HTMLPreElement>) {
  const { className, children } = props
  const codeString = extractCodeString(children as React.ReactNode)

  return (
    <div
      className={css({
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
      })}
    >
      <pre
        className={cx(
          css({
            px: '5',
            py: '6',
            rounded: 'md',
            bg: '#1E1E1E',
            color: 'text.secondary',
            border: '1px solid',
            borderColor: 'border',
            overflow: 'auto',
            width: '100%',
            maxWidth: '100%',
          }),
          className,
        )}
      >
        <code
          className={css({
            fontFamily: 'mono',
            fontSize: 'sm',
            fontWeight: 'normal',
            whiteSpace: 'pre',
            overflowWrap: 'normal',
            color: 'text.primary',
            display: 'block',
          })}
        >
          {children}
        </code>
      </pre>

      {/* Only add the copy button if we have content to copy */}
      {codeString && <CopyButton value={codeString} />}
    </div>
  )
}

const components = {
  ContentContainer,
  Section,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const { id, children, rest } = mdHeadingFieldProps(props)
    return (
      <div className={css({ position: 'relative', _groupHover: { '& a': { opacity: 1 } } })}>
        <Heading
          id={id}
          level={1}
          color="default"
          css={{
            mt: '3',
            mb: '2',
            scrollMargin: '24',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '5xl',
          }}
          {...rest}
        >
          <span>{children}</span>
          <HeadingAnchor id={id} level={1} />
        </Heading>
      </div>
    )
  },
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const { id, children, rest } = mdHeadingFieldProps(props)
    return (
      <div className={css({ position: 'relative', _groupHover: { '& a': { opacity: 1 } } })}>
        <Heading
          id={id}
          level={2}
          color="default"
          css={{
            mt: '6',
            mb: '2',
            scrollMargin: '24',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '3xl',
          }}
          {...rest}
        >
          <span>{children}</span>
          <HeadingAnchor id={id} level={2} />
        </Heading>
      </div>
    )
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const { id, children, rest } = mdHeadingFieldProps(props)
    return (
      <div className={css({ position: 'relative', _groupHover: { '& a': { opacity: 1 } } })}>
        <Heading
          id={id}
          level={3}
          color="default"
          css={{
            mt: '3',
            mb: '1',
            scrollMargin: '24',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '2xl',
          }}
          {...rest}
        >
          <span className={css({ mr: '3' })}>{children}</span>
          <HeadingAnchor id={id} level={3} />
        </Heading>
      </div>
    )
  },
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const { id, children, rest } = mdHeadingFieldProps(props)
    return (
      <div className={css({ position: 'relative', _groupHover: { '& a': { opacity: 1 } } })}>
        <Heading
          id={id}
          level={4}
          color="default"
          css={{
            my: '2',
            scrollMargin: '24',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '500',
            fontSize: 'xl',
          }}
          {...rest}
        >
          <span>{children}</span>
          <HeadingAnchor id={id} level={4} />
        </Heading>
      </div>
    )
  },
  a: CustomLink,
  p: (props: React.HTMLAttributes<HTMLParagraphElement> & { variant?: string }) => {
    const rest = { ...props }
    delete rest.variant
    delete (rest as { color?: unknown }).color
    type ParagraphDomRest = Omit<
      React.HTMLAttributes<HTMLParagraphElement>,
      'variant' | 'color'
    >
    return (
      <Paragraph
        css={{
          fontSize: 'md',
          lineHeight: 'relaxed',
        }}
        {...(rest as ParagraphDomRest)}
      />
    )
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={css({
        my: '1',
        ml: '1',
        listStyleType: 'disc',
        '& li': { m: '3' },
        color: 'text',
      })}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={css({
        my: '1',
        ml: '1',
        listStyleType: 'decimal',
        '& li': { m: '3' },
        color: 'text',
      })}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={css({ color: 'text' })} {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <CodeBlock {...props} />,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cx(
        css({
          mx: '0.5',
          position: 'relative',
          rounded: 'sm',
          px: '0.4rem',
          py: '0.3rem',
          fontSize: 'sm',
          fontWeight: 'semibold',
          color: '#171717',
          textWrap: 'nowrap',
          bg: 'fill.tertiary',
        }),
        className,
      )}
      {...props}
    />
  ),
  inlineCode: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cx(
        css({
          mx: '0.5',
          position: 'relative',
          rounded: 'sm',
          bg: 'fill.tertiary',
          px: '0.3rem',
          py: '0.2rem',
          fontSize: 'sm',
          fontWeight: 'semibold',
          color: '#171717',
          textWrap: 'nowrap',
        }),
        className,
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className={typographyTableContainer()}>
      <table className={cx(typographyTable(), className)} {...props} />
    </div>
  ),

  Accordion,
  Badge,
  Button,
  ComponentPreview,
  ComponentSource,
  Steps,
  PackageTabs,
  InstallTabs,
  ColorPalette,
  SizeBox,
  SpacingBox,
  Paragraph,
}

export function MdxComponent({ code }: MdxComponentProps) {
  if (!code) {
    return (
      <div
        className={css({
          p: '10',
          border: '1px solid',
          borderColor: 'error.border',
          bg: 'error.bg',
          color: 'error.text',
          rounded: 'md',
        })}
      >
        <p>No content available</p>
      </div>
    )
  }

  return (
    <div
      data-mdx-content="true"
      className={css({
        width: '100%',
        position: 'relative',
      })}
    >
      {/* @ts-expect-error - MDXContent has incompatible component types with our components object */}
      <MDXContent code={code} components={components} />
    </div>
  )
}