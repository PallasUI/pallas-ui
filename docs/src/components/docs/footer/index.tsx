import { css } from '@styled-system/css'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer
      className={css({
        w: 'full',
        color: 'muted.foreground',
        borderTop: 'base',
      })}
    >
      <div
        className={css({
          maxW: '7xl',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1',
          px: '4',
          h: '16',
          mx: 'auto',
          textStyle: 'sm',
          flexDirection: 'column-reverse',
          md: {
            h: '24',
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
        })}
      >
        <span>Copyright &copy; {new Date().getFullYear()}</span>
        <span>
          Made with ❤️ by <Link href="https://twitter.com/nanopx">@nanopx</Link>
        </span>
      </div>
    </footer>
  )
}
