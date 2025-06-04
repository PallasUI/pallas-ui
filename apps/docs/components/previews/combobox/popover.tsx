import { Button } from '@/components/ui/button'
import Command from '@/components/ui/command'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { useState } from 'react'

type Status = {
  value: string
  label: string
}

function ComboBoxPopoverPreview() {
  const [open, setOpen] = useState(false)
  const [selectedFramework, setSelectedFramework] = useState<Status | null>(null)

  return (
    <HStack>
      <p
        className={css({
          color: '{colors.text.secondary}',
        })}
      >
        Framework
      </p>

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          asChild
          className={css({
            w: 200,
          })}
        >
          <Button
            variant="outlined"
            aria-expanded={open}
            css={{
              color: '{colors.text}',
              display: 'flex',
              justifyContent: 'space-between',
              bg: '{colors.surface.elevated}',
            }}
          >
            {selectedFramework ? <>{selectedFramework.label}</> : <>+ Set framework</>}
          </Button>
        </Popover.Trigger>
        <Popover.Content side="right" align="start" css={{ p: 0, width: 200, bg: 'transparent' }}>
          <Command.Root label="Combobox Menu">
            <Command.Input placeholder="Search framework..." />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Frameworks">
                {frameworks.map((framework) => (
                  <Command.Item
                    key={framework.value}
                    value={framework.value}
                    onSelect={(value) => {
                      setSelectedFramework(
                        frameworks.find((priority) => priority.value === value) || null,
                      )
                      setOpen(false)
                    }}
                  >
                    {framework.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command.Root>
        </Popover.Content>
      </Popover.Root>
    </HStack>
  )
}

export default ComboBoxPopoverPreview

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]
