import { css } from '@styled-system/css'
import { Loader2 } from 'lucide-react'

export const LoadingText = () => (
  <div
    className={css({
      textStyle: 'sm',
      color: 'muted.foreground',
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    })}
  >
    <Loader2
      className={css({
        height: '4',
        width: '4',
        animation: 'spin',
      })}
    />
    Loading...
  </div>
)
