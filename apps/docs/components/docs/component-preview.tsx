'use client'

import { docTabs } from '@/components/common/recipes/doc-tabs'
import { Content, Root, TabList, Trigger } from '@/components/ui/tabs'
import { css } from '@styled-system/css'
import React from 'react'
import { Preview } from './preview'

interface ComponentPreviewProps {
  name: string
  file?: string
  withRecipe?: boolean
  hasRecipe?: boolean
  hasSlotRecipe?: boolean
  children?: React.ReactNode
  noPadding?: boolean
}

export function ComponentPreview({
  name,
  file = 'index',
  withRecipe,
  hasRecipe,
  children,
  noPadding,
}: ComponentPreviewProps) {
  // const nameMap: Record<string, string> = {
  //   accordion: 'accordian',
  // }
  const dirName = name

  const PreviewComponent = React.lazy(() => {
    if (file && file !== 'index') {
      return import(`../previews/${dirName}/${file}`)
        .then((mod) => ({ default: mod.default }))
        .catch(() => {
          console.error(`Failed to load preview file: ${dirName}/${file}`)
          return import('./fallback-preview').then((mod) => ({ default: mod.default }))
        })
    }

    return import(`../previews/${dirName}`)
      .then((mod) => ({ default: mod.default }))
      .catch(() => {
        console.error(`Failed to load preview: ${dirName}`)
        return import('./fallback-preview').then((mod) => ({ default: mod.default }))
      })
  })

  const childrenArray = React.Children.toArray(children)

  const [code, recipe] = childrenArray

  const styles = docTabs({ variant: 'preview', noPadding })

  const previewClassName = css({ padding: noPadding ? '0!' : undefined })

  return (
    <div className={styles.root}>
      <Root defaultValue="preview">
        <TabList className={styles.tabList}>
          <Trigger value="preview" className={styles.trigger}>
            Preview
          </Trigger>

          {code && (
            <Trigger value="code" className={styles.trigger}>
              Code
            </Trigger>
          )}

          {withRecipe && hasRecipe && (
            <Trigger value="recipe" className={styles.trigger}>
              Recipe
            </Trigger>
          )}
        </TabList>

        <Content value="preview" className={styles.content}>
          <Preview className={previewClassName}>
            <React.Suspense
              fallback={
                <div
                  className={css({
                    p: '1',
                    textAlign: 'center',
                    color: 'text.secondary',
                  })}
                >
                  Loading preview...
                </div>
              }
            >
              <PreviewComponent />
            </React.Suspense>
          </Preview>
        </Content>

        {code && (
          <Content value="code" className={styles.content}>
            {code}
          </Content>
        )}

        {withRecipe && hasRecipe && recipe && (
          <Content value="recipe" className={styles.content}>
            {recipe}
          </Content>
        )}
      </Root>
    </div>
  )
}

export function ComponentSource({ name, children }: { name: string; children?: React.ReactNode }) {
  return (
    <div
      className={css({
        width: '100%',
        maxWidth: '100%',
      })}
    >
      {children ? (
        <div
          className={css({
            overflowX: 'auto',
            width: '100%',
          })}
        >
          {children}
        </div>
      ) : (
        <div
          className={css({
            p: '1',
            border: '1px dashed',
            borderColor: 'border.secondary',
            rounded: 'md',
            color: 'text.tertiary',
            bg: 'fill.secondary',
            fontFamily: 'mono',
            fontSize: 'sm',
          })}
        >
          <p>Source code for {name} not available</p>
          <p className={css({ mt: '3', fontSize: 'xs', color: 'text.tertiary' })}>
            This component may be in a different location or the rehype plugin is not configured
            correctly
          </p>
        </div>
      )}
    </div>
  )
}
