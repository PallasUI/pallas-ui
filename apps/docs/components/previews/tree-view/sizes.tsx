'use client'

import type { TreeCollection } from '@ark-ui/react/tree-view'

import TreeView, { createTreeCollection } from '@/components/ui/tree-view'
import { css } from '@styled-system/css'
import { ChevronRight, File, Folder } from 'lucide-react'

interface FileNode {
  id: string
  name: string
  children?: FileNode[]
}

const collection = createTreeCollection<FileNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
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

export default function TreeViewSizesPreview() {
  return (
    <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '8', flexWrap: 'wrap' })}>
      <TreeView.Root
        collection={collection as TreeCollection}
        size="xs"
        defaultExpandedValue={['src']}
      >
        <TreeView.Label>Size: xs</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
      <TreeView.Root
        collection={collection as TreeCollection}
        size="sm"
        defaultExpandedValue={['src']}
      >
        <TreeView.Label>Size: sm</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
      <TreeView.Root
        collection={collection as TreeCollection}
        size="md"
        defaultExpandedValue={['src']}
      >
        <TreeView.Label>Size: md</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  )
}
