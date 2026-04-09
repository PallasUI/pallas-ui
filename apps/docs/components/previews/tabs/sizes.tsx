'use client'

import Tabs from '@/components/ui/tabs'
import { VStack } from '@styled-system/jsx'

export default function TabsSizesDemo() {
  return (
    <VStack gap="8" w="full">
      <Tabs.Root defaultValue="tab1" size="sm">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Small tab content</Tabs.Content>
        <Tabs.Content value="tab2">Small tab content</Tabs.Content>
        <Tabs.Content value="tab3">Small tab content</Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1" size="md">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Medium tab content</Tabs.Content>
        <Tabs.Content value="tab2">Medium tab content</Tabs.Content>
        <Tabs.Content value="tab3">Medium tab content</Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1" size="lg">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Large tab content</Tabs.Content>
        <Tabs.Content value="tab2">Large tab content</Tabs.Content>
        <Tabs.Content value="tab3">Large tab content</Tabs.Content>
      </Tabs.Root>
    </VStack>
  )
}
