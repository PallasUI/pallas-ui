import Sidebar from '@/components/ui/sidebar'
import { Box } from '@styled-system/jsx'
import { PanelLeft } from 'lucide-react'
import { Footer, Header, PageContent, SidebarContentGroup } from '.'

export default function Default() {
  return (
    <Box h="50vh" w="full">
      <Sidebar.Provider>
        <Sidebar.Root variant="floating" style={{ position: 'absolute' }}>
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

        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <PageContent />
        </main>
      </Sidebar.Provider>
    </Box>
  )
}
