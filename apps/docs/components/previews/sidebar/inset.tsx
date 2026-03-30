import Sidebar from '@/components/ui/sidebar'
import { PanelLeft } from 'lucide-react'
import { Footer, Header, SidebarContentGroup } from '.'

export default function Inset() {
  return (
    <>
      <Sidebar.Provider>
        <Sidebar.Root variant="inset" side="left" collapsible="none">
          <Sidebar.Header>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg" asChild>
                  <Header />
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Header>

          <Sidebar.Separator />

          <Sidebar.Content>
            <SidebarContentGroup />
          </Sidebar.Content>

          <Sidebar.Footer>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg" asChild>
                  <Footer />
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Footer>

          <Sidebar.Rail />
        </Sidebar.Root>

        <main>
          <Sidebar.Trigger>
            <PanelLeft size={16} />
          </Sidebar.Trigger>
        </main>
      </Sidebar.Provider>
    </>
  )
}
