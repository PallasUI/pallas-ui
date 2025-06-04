import Command from '@/components/ui/command'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { useEffect, useState } from 'react'

function CommandDialogPreview() {
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
    <HStack css={{ justifyContent: 'center' }}>
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
      <Command.Dialog open={open} onOpenChange={setOpen}>
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
    </HStack>
  )
}

export default CommandDialogPreview
