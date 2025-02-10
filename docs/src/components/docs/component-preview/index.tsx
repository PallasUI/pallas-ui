import { css } from '@styled-system/css'
import * as React from 'react'
import { LoadingText } from '~/components/docs/loading-text'
import { Preview } from '~/components/docs/preview'
import { Tab, Tabs } from '~/components/docs/tabs'

export interface ComponentPreviewProps {
  name: string
  file?: string
  withRecipe?: boolean
  hasRecipe?: boolean
  hasSlotRecipe?: boolean
  children: React.ReactNode
}

// const getExampleComponent = ({ name, file = 'index' }: { name: string; file?: string }) =>
//   React.lazy(() => import(`@/components/previews/${name}/${file}.tsx`))

export const ComponentPreview = ({
  name,
  file,
  withRecipe,
  hasRecipe,
  hasSlotRecipe,
  children,
}: ComponentPreviewProps) => {
  // const Example = getExampleComponent({ name, file })

  const [code, recipe1, recipe2] = React.Children.toArray(children)

  const items = ['Preview', 'Code']

  if (withRecipe && hasRecipe) {
    items.push('Recipe')
  }

  if (withRecipe && hasSlotRecipe) {
    items.push('Slot Recipe')
  }

  return (
    <Tabs items={items}>
      <Tab>
        <Preview className={css({ mt: '6', mb: '4' })}>
          <React.Suspense fallback={<LoadingText />}>{/* <Example /> */}</React.Suspense>
        </Preview>
      </Tab>
      <Tab>{code}</Tab>
      {withRecipe && !!recipe1 && <Tab>{recipe1}</Tab>}
      {withRecipe && !!recipe2 && <Tab>{recipe2}</Tab>}
    </Tabs>
  )
}
