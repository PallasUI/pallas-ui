'use client'

import ScrollArea from '@/components/ui/scroll-area'
import { css } from '@styled-system/css'

const cards = Array.from({ length: 15 }, (_, i) => `Card ${i + 1}`)

export default function ScrollAreaHorizontalPreview() {
  return (
    <ScrollArea.Root
      className={css({ h: '36', w: '80' })}
    >
      <ScrollArea.Viewport>
        <div className={css({ display: 'flex', gap: '3', p: '4', w: 'max-content' })}>
          {cards.map((card) => (
            <div
              key={card}
              className={css({
                flexShrink: '0',
                w: '28',
                h: '20',
                bg: 'bg.subtle',
                borderRadius: 'md',
                border: '1px solid',
                borderColor: 'border',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'sm',
                color: 'text.secondary',
              })}
            >
              {card}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}
