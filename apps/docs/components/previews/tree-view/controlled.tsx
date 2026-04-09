'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'
import { HStack, Stack, VStack } from '@styled-system/jsx'
import { ChevronRight, File, Folder } from 'lucide-react'
import { useState } from 'react'

import { Paragraph } from '@/components/ui/typography'
import TreeView, { createTreeCollection } from '@/components/ui/tree-view'

interface FileNode {
  id: string
  name: string
  children?: FileNode[]
}

const collection = createTreeCollection<FileNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  nodeToChildren: (node) => node.children ?? [],
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'src',
        name: 'src',
        children: [
          {
            id: 'src/components',
            name: 'components',
            children: [
              { id: 'src/components/button', name: 'Button.tsx' },
              { id: 'src/components/input', name: 'Input.tsx' },
            ],
          },
          { id: 'src/index', name: 'index.tsx' },
        ],
      },
      {
        id: 'public',
        name: 'public',
        children: [{ id: 'public/favicon', name: 'favicon.ico' }],
      },
      { id: 'package', name: 'package.json' },
    ],
  },
})

function TreeNode({ node, indexPath }: { node: FileNode; indexPath: number[] }) {
  return (
    <TreeView.NodeProvider node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchTrigger>
              <TreeView.BranchIndicator>
                <ChevronRight size={14} />
              </TreeView.BranchIndicator>
            </TreeView.BranchTrigger>
            <Folder size={14} style={{ flexShrink: 0 }} />
            <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            {node.children.map((child, i) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, i]} />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <File size={14} style={{ flexShrink: 0 }} />
          <TreeView.ItemText>{node.name}</TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}

const rootChildren = collection.rootNode.children ?? []

export default function ControlledPreview() {
  const [expandedValue, setExpandedValue] = useState<string[]>(['src'])
  const [selectedValue, setSelectedValue] = useState<string[]>([])

  return (
    <VStack gap={4} align="flex-start" w="320px">
      <HStack gap={6} w="full">
        <Stack gap={1}>
          <Paragraph size="compact" textStyle="bold">Expanded</Paragraph>
          <Paragraph size="compact">
            {expandedValue.length ? expandedValue.join(', ') : 'none'}
          </Paragraph>
        </Stack>
        <Stack gap={1}>
          <Paragraph size="compact" textStyle="bold">Selected</Paragraph>
          <Paragraph size="compact">
            {selectedValue.length ? selectedValue.join(', ') : 'none'}
          </Paragraph>
        </Stack>
      </HStack>

      <TreeView.Root
        collection={collection as TreeCollection}
        expandedValue={expandedValue}
        onExpandedChange={(d) => setExpandedValue(d.expandedValue)}
        selectedValue={selectedValue}
        onSelectionChange={(d) => setSelectedValue(d.selectedValue)}
      >
        <TreeView.Label>Project Files</TreeView.Label>
        <TreeView.Tree>
          {rootChildren.map((node, i) => (
            <TreeNode key={node.id} node={node} indexPath={[i]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </VStack>
  )
}
