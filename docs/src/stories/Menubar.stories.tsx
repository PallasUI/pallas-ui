import type { Meta } from '@storybook/react'
import Menubar from '~/ui/menu-bar/menu-bar'

const meta: Meta<typeof Menubar.Root> = {
  component: Menubar.Root,
  title: 'Components/Menubar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Default = () => (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Label>File Operations</Menubar.Label>
        <Menubar.Item>New Tab</Menubar.Item>
        <Menubar.Item>New Window</Menubar.Item>
        <Menubar.Item disabled>New Incognito Window</Menubar.Item>
        <Menubar.Separator />
        <Menubar.SubMenu>
          <Menubar.SubTrigger>Share</Menubar.SubTrigger>
          <Menubar.SubContent>
            <Menubar.Label>Share Options</Menubar.Label>
            <Menubar.Item>Email link</Menubar.Item>
            <Menubar.Item>Messages</Menubar.Item>
            <Menubar.Item>Notes</Menubar.Item>
          </Menubar.SubContent>
        </Menubar.SubMenu>
        <Menubar.Separator />
        <Menubar.Item>Print...</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>

    <Menubar.Menu>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Group>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
        </Menubar.Group>
        <Menubar.Separator />
        <Menubar.SubMenu>
          <Menubar.SubTrigger>Find</Menubar.SubTrigger>
          <Menubar.SubContent>
            <Menubar.Item>Search the web</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Find...</Menubar.Item>
            <Menubar.Item>Find Next</Menubar.Item>
            <Menubar.Item>Find Previous</Menubar.Item>
          </Menubar.SubContent>
        </Menubar.SubMenu>
        <Menubar.Separator />
        <Menubar.Group>
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Group>
      </Menubar.Content>
    </Menubar.Menu>

    <Menubar.Menu>
      <Menubar.Trigger>View</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Label>Display Options</Menubar.Label>
        <Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
        <Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
        <Menubar.Separator />
        <Menubar.Group>
          <Menubar.Item>Reload</Menubar.Item>
          <Menubar.Item disabled>Force Reload</Menubar.Item>
        </Menubar.Group>
        <Menubar.Separator />
        <Menubar.Item>Toggle Fullscreen</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Hide Sidebar</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>

    <Menubar.Menu>
      <Menubar.Trigger>Profiles</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Label>Select Profile</Menubar.Label>
        <Menubar.RadioGroup value="benoit">
          <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
          <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
          <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
        </Menubar.RadioGroup>
        <Menubar.Separator />
        <Menubar.Group>
          <Menubar.Item>Edit...</Menubar.Item>
          <Menubar.Item>Add Profile...</Menubar.Item>
        </Menubar.Group>
      </Menubar.Content>
    </Menubar.Menu>
  </Menubar.Root>
)
