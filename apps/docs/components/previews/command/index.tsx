import Command from '@/components/ui/command'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

function CommandPreview() {
  return (
    <Command.Root css={{ maxW: '[450px]', minH: '[350px]' }} defaultValue="-">
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
  )
}

export default CommandPreview
