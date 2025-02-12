import { css } from '@styled-system/css'
import { Box, type BoxProps } from '@styled-system/jsx'

export const DecorativeBox = (props: BoxProps) => (
  <Box
    {...props}
    className={css({
      p: 4,
      h: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      backgroundClip: 'padding-box',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      borderRadius: 'md',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
    })}
  />
)
