'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'
import { HStack, VStack } from '@styled-system/jsx'
import { ChevronRight, File, Folder } from 'lucide-react'

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
          { id: 'src/index', name: 'index.tsx' },
          { id: 'src/app', name: 'app.tsx' },
        ],
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

export default function VariantsPreview() {
  return (
    <HStack gap={8} align="flex-start">
      <VStack gap={2} align="flex-start">
        <TreeView.Root
          collection={collection as TreeCollection}
          variant={'subtle'}
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>Subtle</TreeView.Label>
          <TreeView.Tree>
            {rootChildren.map((node, i) => (
              <TreeNode key={node.id} node={node} indexPath={[i]} />
            ))}
          </TreeView.Tree>
        </TreeView.Root>
      </VStack>
      <VStack gap={2} align="flex-start">
        <TreeView.Root
          collection={collection as TreeCollection}
          variant={'outline'}
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>Outline</TreeView.Label>
          <TreeView.Tree>
            {rootChildren.map((node, i) => (
              <TreeNode key={node.id} node={node} indexPath={[i]} />
            ))}
          </TreeView.Tree>
        </TreeView.Root>
      </VStack>
      <VStack gap={2} align="flex-start">
        <TreeView.Root
          collection={collection as TreeCollection}
          variant={'solid'}
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>Solid</TreeView.Label>
          <TreeView.Tree>
            {rootChildren.map((node, i) => (
              <TreeNode key={node.id} node={node} indexPath={[i]} />
            ))}
          </TreeView.Tree>
        </TreeView.Root>
      </VStack>
    </HStack>
  )
}
