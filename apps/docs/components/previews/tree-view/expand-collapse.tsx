'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'
import { HStack, Stack } from '@styled-system/jsx'
import { ChevronRight, File, Folder } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
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

const allBranchIds = ['src', 'src/components', 'public']

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

export default function ExpandCollapsePreview() {
  const [expandedValue, setExpandedValue] = useState<string[]>(['src'])

  return (
    <Stack w="320px" gap={4}>
      <HStack gap={2}>
        <Button size="sm" variant="outline" onClick={() => setExpandedValue(allBranchIds)}>
          Expand All
        </Button>
        <Button size="sm" variant="outline" onClick={() => setExpandedValue([])}>
          Collapse All
        </Button>
      </HStack>

      <TreeView.Root
        collection={collection as TreeCollection}
        expandedValue={expandedValue}
        onExpandedChange={(d) => setExpandedValue(d.expandedValue)}
      >
        <TreeView.Label>Project Files</TreeView.Label>
        <TreeView.Tree>
          {rootChildren.map((node, i) => (
            <TreeNode key={node.id} node={node} indexPath={[i]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </Stack>
  )
}
