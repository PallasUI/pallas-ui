import { Separator as SeparatorPrimitive } from '@pallas-ui/sidebar'
import { cx } from '@styled-system/css'
import { type SeparatorVariantProps, separator } from '@styled-system/recipes'
import { withContext } from './provider'

type SideSeparatorProps = React.ComponentProps<typeof SeparatorPrimitive> & SeparatorVariantProps

const SeparatorStyled = withContext<
  React.ComponentRef<typeof SeparatorPrimitive>,
  SideSeparatorProps
>(SeparatorPrimitive, 'separator')

export const Separator = (props: SideSeparatorProps) => {
  const [separatorProps, { className, ...rest }] = separator.splitVariantProps(props)
  return <SeparatorStyled className={cx(separator(separatorProps), className)} {...rest} />
}
