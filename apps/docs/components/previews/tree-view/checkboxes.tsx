'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'
import { Stack } from '@styled-system/jsx'
import { ChevronRight } from 'lucide-react'

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
            <TreeView.NodeCheckbox>
              <TreeView.NodeCheckboxIndicator indeterminate="−">✓</TreeView.NodeCheckboxIndicator>
            </TreeView.NodeCheckbox>
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
          <TreeView.NodeCheckbox>
            <TreeView.NodeCheckboxIndicator>✓</TreeView.NodeCheckboxIndicator>
          </TreeView.NodeCheckbox>
          <TreeView.ItemText>{node.name}</TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}

const rootChildren = collection.rootNode.children ?? []

export default function CheckboxesPreview() {
  return (
    <Stack w="320px">
      <TreeView.Root
        collection={collection as TreeCollection}
        defaultCheckedValue={[]}
        defaultExpandedValue={['src', 'src/components', 'public']}
      >
        <TreeView.Label>Select Files</TreeView.Label>
        <TreeView.Tree>
          {rootChildren.map((node, i) => (
            <TreeNode key={node.id} node={node} indexPath={[i]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </Stack>
  )
}
