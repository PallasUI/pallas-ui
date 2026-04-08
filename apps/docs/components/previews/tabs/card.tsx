'use client'

import Tabs from '@/components/ui/tabs'

export default function TabsCardDemo() {
  return (
    <Tabs.Root defaultValue="tab1" variant="card">
      <Tabs.TabList>
        <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
      </Tabs.TabList>
      <Tabs.Content value="tab1">
        Overview content goes here.
      </Tabs.Content>
      <Tabs.Content value="tab2">
        Analytics content goes here.
      </Tabs.Content>
      <Tabs.Content value="tab3">
        Settings content goes here.
      </Tabs.Content>
    </Tabs.Root>
  )
}
