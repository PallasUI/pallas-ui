import { Button } from '@/components/ui/button'
import Command from '@/components/ui/command'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

function ComboBoxPreview() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        asChild
        className={css({
          w: 200,
        })}
      >
        <Button
          variant="outlined"
          icon={<ChevronsUpDown className="opacity-50" />}
          aria-expanded={open}
          css={{
            color: '{colors.text}',
            display: 'flex',
            justifyContent: 'space-between',
            bg: '{colors.surface.elevated}',
          }}
        >
          <span className={css({ lineHeight: 1 })}>
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : 'Select framework...'}
          </span>
        </Button>
      </Popover.Trigger>
      <Popover.Content css={{ p: 0, width: 200, bg: 'transparent' }}>
        <Command.Root label="Combobox Menu">
          <Command.Input placeholder="Search framework..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Frameworks">
              {frameworks.map((framework) => (
                <Command.Item
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={css({
                      ml: 'auto',
                      opacity: value === framework.value ? 1 : 0,
                    })}
                  />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  )
}

export default ComboBoxPreview

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
