import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import Command from '../ui/command'

const meta: Meta<typeof Command.Root> = {
  title: 'Forms/Command',
  component: Command.Root,
  tags: ['autodocs'],
  render: (args) => (
    <Command.Root {...args} css={{ maxW: '[450px]', minH: '[350px]' }}>
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>
            <Calendar />
            <span>Calendar</span>
          </Command.Item>
          <Command.Item>
            <Smile />
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item disabled>
            <Calculator />
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item>
            <User />
            <span>Profile</span>
          </Command.Item>
          <Command.Item>
            <CreditCard />
            <span>Billing</span>
          </Command.Item>
          <Command.Item>
            <Settings />
            <span>Settings</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Root>
  ),
  args: {
    css: {
      md: {
        minW: '300px',
        minH: '350px',
      },
    },
  },
  decorators: (Story) => {
    return (
      <div
        className={css({
          w: 'full',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Story />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof Command.Root>

export const Default: Story = {}

const CommandDialog = () => {}

type DialogStory = StoryObj<typeof CommandDialog>

export const Dialog: DialogStory = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener('keydown', down)
      return () => document.removeEventListener('keydown', down)
    }, [])
    return (
      <>
        <p
          className={css({
            color: '{colors.text.secondary}',
            fontSize: 'sm',
          })}
        >
          Press{' '}
          <kbd
            className={css({
              bg: '{colors.primary.bg}',
              display: 'inline-flex',
              h: 5,
              alignItems: 'center',
              gap: 1,
              rounded: 'md',
              px: 1.5,
              fontFamily: 'mono',
              fontSize: 'sm',
              opacity: 1,
            })}
          >
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
        <Command.Dialog {...args} open={open} onOpenChange={setOpen}>
          <Command.Input placeholder="Type a command or search..." />
          <Command.List css={{ w: '[450px]' }}>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
              <Command.Item>
                <Calendar />
                <span>Calendar</span>
              </Command.Item>
              <Command.Item>
                <Smile />
                <span>Search Emoji</span>
              </Command.Item>
              <Command.Item disabled>
                <Calculator />
                <span>Calculator</span>
              </Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Settings">
              <Command.Item>
                <User />
                <span>Profile</span>
              </Command.Item>
              <Command.Item>
                <CreditCard />
                <span>Billing</span>
              </Command.Item>
              <Command.Item>
                <Settings />
                <span>Settings</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Dialog>
      </>
    )
  },
  decorators: (Story) => {
    return (
      <HStack css={{ justifyContent: 'center' }}>
        <Story />
      </HStack>
    )
  },
}
