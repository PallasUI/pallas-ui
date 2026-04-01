'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'
import { Stack } from '@styled-system/jsx'
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
  isNodeDisabled: (node) => node.id === 'src/input' || node.id === 'readme',
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'src',
        name: 'src',
        children: [
          { id: 'src/button', name: 'Button.tsx' },
          { id: 'src/input', name: 'Input.tsx' },
        ],
      },
      { id: 'readme', name: 'README.md' },
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

export default function DisabledPreview() {
  return (
    <Stack w="320px">
      <TreeView.Root
        collection={collection as TreeCollection}
        defaultExpandedValue={['src']}
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
