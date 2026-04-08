'use client'

import ScrollArea from '@/components/ui/scroll-area'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}: Pallas UI design system component.`)

export default function ScrollAreaSizesPreview() {
  return (
    <Stack direction="row" gap="8" align="start">
      <Stack direction="column" gap="2">
        <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text.secondary' })}>
          size=&quot;sm&quot;
        </p>
        <ScrollArea.Root size="sm" className={css({ h: '40', w: '52' })}>
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
      </Stack>
      <Stack direction="column" gap="2">
        <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text.secondary' })}>
          size=&quot;md&quot;
        </p>
        <ScrollArea.Root size="md" className={css({ h: '40', w: '52' })}>
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
      </Stack>
    </Stack>
  )
}
