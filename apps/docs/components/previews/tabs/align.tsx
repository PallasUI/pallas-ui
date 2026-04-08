'use client'

import Tabs from '@/components/ui/tabs'
import { VStack } from '@styled-system/jsx'

export default function TabsAlignDemo() {
  return (
    <VStack gap="8" w="full">
      <Tabs.Root defaultValue="tab1" align="start">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Start aligned content</Tabs.Content>
        <Tabs.Content value="tab2">Start aligned content</Tabs.Content>
        <Tabs.Content value="tab3">Start aligned content</Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1" align="center">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Center aligned content</Tabs.Content>
        <Tabs.Content value="tab2">Center aligned content</Tabs.Content>
        <Tabs.Content value="tab3">Center aligned content</Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1" align="end">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">End aligned content</Tabs.Content>
        <Tabs.Content value="tab2">End aligned content</Tabs.Content>
        <Tabs.Content value="tab3">End aligned content</Tabs.Content>
      </Tabs.Root>
    </VStack>
  )
}
