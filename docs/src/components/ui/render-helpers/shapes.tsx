//add shapes from styled-system/jsx

import { css } from '@styled-system/css'
import type { CircleProps } from '@styled-system/jsx'
import { Circle } from '@styled-system/jsx'
import type { SquareProps } from '@styled-system/jsx'
import { Square } from '@styled-system/jsx'

//add background primary and add 100px width and height
export const CircleRender = (props: CircleProps) => (
  <Circle
    {...props}
    className={css({
      width: '100px',
      height: '100px',
      backgroundColor: '{colors.primary}',
    })}
  />
)

//add background primary and add 100px width and height
export const SquareRender = (props: SquareProps) => (
  <Square
    {...props}
    className={css({
      width: '100px',
      height: '100px',
      backgroundColor: '{colors.primary}',
    })}
  />
)
