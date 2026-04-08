'use client'

import Tabs from '@/components/ui/tabs'
import { VStack } from '@styled-system/jsx'

export default function TabsPositionsDemo() {
  return (
    <VStack gap="8" w="full">
      <Tabs.Root defaultValue="tab1" position="top">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
        <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
      </Tabs.Root>
      <Tabs.Root defaultValue="tab1" position="bottom">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
        <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1" position="left">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
        <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultValue="tab1" position="right">
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
        <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
      </Tabs.Root>
    </VStack>
  )
}
