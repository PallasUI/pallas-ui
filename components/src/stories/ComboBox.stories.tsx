import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '~/ui/button'
import Command from '../ui/command'
import Popover from '../ui/popover'

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

const ComboBox = () => {
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

const meta: Meta<typeof ComboBox> = {
  title: 'Forms/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ComboBox>

export const Default: Story = {
  args: {},
}

type Status = {
  value: string
  label: string
}

const ComboBoxPopover = () => {
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

type PopoverStory = StoryObj<typeof ComboBoxPopover>

export const withPopover: PopoverStory = {
  render: () => {
    return <ComboBoxPopover />
  },
}
