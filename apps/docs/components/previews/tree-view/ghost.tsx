'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'

import TreeView, { createTreeCollection } from '@/components/ui/tree-view'
import { Stack } from '@styled-system/jsx'
import { ChevronRight, File, Folder } from 'lucide-react'

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
            {node.children.map((child, index) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
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

export default function TreeViewSolidPreview() {
  return (
    <Stack w="320px">
      <TreeView.Root
        collection={collection as TreeCollection}
        variant="solid"
        defaultExpandedValue={['src']}
      >
        <TreeView.Label>Project Files</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </Stack>
  )
}
