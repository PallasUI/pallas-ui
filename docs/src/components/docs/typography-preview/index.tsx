import { css } from '@styled-system/css'
import * as React from 'react'
import { LoadingText } from '~/components/docs/loading-text'
import { Preview } from '~/components/docs/preview'
import { Tab, Tabs } from '~/components/docs/tabs'
import Example from '~/components/previews/typography'

export interface TypographyPreviewProps {
  type: string
  withTextStyle?: boolean
  children: React.ReactNode
}

export const TypographyPreview = ({ type, children }: TypographyPreviewProps) => {
  const [recipe] = React.Children.toArray(children)

  return (
    <Tabs items={['Preview', 'Recipe']}>
      <Tab>
        <Preview className={css({ mt: '6', mb: '4' })}>
          <React.Suspense fallback={<LoadingText />}>
            <Example />
          </React.Suspense>
        </Preview>
      </Tab>
      <Tab>{recipe}</Tab>
    </Tabs>
  )
}
