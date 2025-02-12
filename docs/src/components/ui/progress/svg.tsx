import type { HTMLStyledProps } from '@styled-system/types'
import { useProgressContext } from './context'

export const SVG = (props: HTMLStyledProps<'svg'>) => {
  const { height, width } = useProgressContext()

  return <svg viewBox={`0 0 ${width} ${height}`} fill="none" {...props} />
}
