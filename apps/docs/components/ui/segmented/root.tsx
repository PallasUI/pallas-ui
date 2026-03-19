import { createStyleContext } from '@pallas-ui/style-context'
import * as Tabs from '@radix-ui/react-tabs'
import { segmented } from '@styled-system/recipes'
import type { RootProps } from '.'

export const { withProvider, withContext } = createStyleContext(segmented)

const Component = withProvider<React.ElementRef<typeof Tabs.Root>, RootProps>(Tabs.Root as any, 'root')

export const Root = ({ children, ...props }: RootProps) => {
  return (
    <Component {...(props as any)} asChild>
      <Tabs.List>{children}</Tabs.List>
    </Component>
  )
}
