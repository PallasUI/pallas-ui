# Sidebar

A flexible and accessible sidebar navigation component built with Radix UI primitives.

## Features

- Accessible navigation structure
- Customizable separator
- Support for links and current page indicators
- Ellipsis for truncated paths
- TypeScript support
- Follows Radix UI patterns

## Installation

```bash
npm install @your-scope/sidebar
```

## Usage

```tsx
import Sidebar from '@your-scope/sidebar'

function Example() {
  return (
    <Sidebar.Provider>
      <Sidebar.Root>
         <Sidebar.Header></Sidebar.Header>
         <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel></Sidebar.GroupLabel>
              <Sidebar.GroupAction></Sidebar.GroupAction>
              <Sidebar.GroupContent>
                <Sidebar.Menu>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton></Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton></Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton></Sidebar.MenuButton>
                    <Sidebar.MenuSub>
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton></Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton></Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton></Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                    </Sidebar.MenuSub>
                  </Sidebar.MenuItem>
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
         </Sidebar.Content>
         <Sidebar.Footer></Sidebar.Footer>
      </Sidebar.Root>
    </Sidebar.Provider>
  )
}
```

## Components

Provider,
  Root,
  Content,
  Inset,
  Header,
  Footer,
  Group,
  GroupAction,
  GroupContent,
  GroupLabel,
  Menu,
  MenuAction,
  MenuBadge,
  MenuButton,
  MenuItem,
  MenuSub,
  MenuSubButton,
  MenuSubItem,
  Rail,
  Separator,
  Trigger,
  useSidebar,

- `Sidebar.Provider` - The provider element
- `Sidebar.Root` - The root element
- `Sidebar.Inset` - The wrapper element for sidebar siblings in 'inset' variant
- `Sidebar.Content` - The content wrapper element
- `Sidebar.Header` - The header wrapper element
- `Sidebar.Footer` - The footer wrapper element

- `Sidebar.Group` - The group wrapper element
- `Sidebar.GroupLabel` - The group label element
- `Sidebar.GroupAction` - The group action element
- `Sidebar.GroupContent` - The group content wrapper element

- `Sidebar.Menu` - The menu wrapper element
- `Sidebar.MenuItem` - The menu item element
- `Sidebar.MenuButton` - The menu button element
- `Sidebar.MenuAction` - The menu action element
- `Sidebar.MenuBadge` - The menu badge element

- `Sidebar.MenuSub` - The sub menu wrapper element
- `Sidebar.MenuSubItem` - The sub menu item element
- `Sidebar.MenuSubButton` - The sub menu button element

- `Sidebar.Trigger` - The trigger element for toggle
- `Sidebar.Rail` - The rail element for toggle
- `Sidebar.useSidebar` - The hook to control toggle manually

## Accessibility

The component follows WAI-ARIA patterns for sidebar navigation:
- Uses semantic HTML elements (`ul`, `li`, `a`)
- Includes proper ARIA labels and roles
- Maintains keyboard navigation support
- Provides screen reader friendly structure

## License

MIT
