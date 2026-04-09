'use client'

import ScrollArea from '@/components/ui/scroll-area'
import { css } from '@styled-system/css'

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}: Pallas UI design system component.`)

export default function ScrollAreaPreview() {
  return (
    <ScrollArea.Root
      className={css({ h: '48', w: '80' })}
    >
      <ScrollArea.Viewport>
        <div className={css({ p: '4' })}>
          {items.map((item) => (
            <p key={item} className={css({ mb: '2', fontSize: 'sm', color: 'text.secondary' })}>
              {item}
            </p>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
