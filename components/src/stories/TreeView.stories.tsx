import type { Meta, StoryObj } from '@storybook/react'
import { HStack, Stack, VStack } from '@styled-system/jsx'
import { ChevronRight, File, Folder } from 'lucide-react'
import { useState } from 'react'

import type { TreeCollection } from '@ark-ui/react/tree-view'

import { Button } from '~/ui/button'
import TreeView, { createTreeCollection } from '~/ui/tree-view'
import { Paragraph } from '~/ui/typography'

// ---------------------------------------------------------------------------
// Sample data types
// ---------------------------------------------------------------------------

interface FileNode {
  label: string
  value: string
  disabled?: boolean
  children?: FileNode[]
}

// ---------------------------------------------------------------------------
// Shared collections
// ---------------------------------------------------------------------------

const basicCollection = createTreeCollection<FileNode>({
  rootNode: {
    label: 'Root',
    value: 'root',
    children: [
      {
        label: 'src',
        value: 'src',
        children: [
          {
            label: 'components',
            value: 'src/components',
            children: [
              { label: 'Button.tsx', value: 'src/components/Button.tsx' },
              { label: 'Input.tsx', value: 'src/components/Input.tsx' },
            ],
          },
          { label: 'index.tsx', value: 'src/index.tsx' },
        ],
      },
      {
        label: 'public',
        value: 'public',
        children: [
          { label: 'favicon.ico', value: 'public/favicon.ico' },
          { label: 'logo.svg', value: 'public/logo.svg' },
        ],
      },
      { label: 'package.json', value: 'package.json' },
    ],
  },
  nodeToValue: (node) => node.value,
  nodeToString: (node) => node.label,
  nodeToChildren: (node) => node.children ?? [],
})

// ---------------------------------------------------------------------------
// Recursive node renderer helpers
// Every node (branch AND leaf) must be wrapped in TreeView.NodeProvider.
// indexPath must be the full path from root to this node.
// ---------------------------------------------------------------------------

function renderNode(
  node: FileNode,
  indexPath: number[],
  opts: { showGuide?: boolean } = {},
): React.ReactNode {
  return (
    <TreeView.NodeProvider key={node.value} node={node} indexPath={indexPath}>
      {node.children && node.children.length > 0 ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchTrigger>
              <TreeView.BranchIndicator>
                <ChevronRight size={14} />
              </TreeView.BranchIndicator>
            </TreeView.BranchTrigger>
            <Folder size={14} style={{ flexShrink: 0 }} />
            <TreeView.BranchText>{node.label}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            {opts.showGuide && <TreeView.BranchIndentGuide />}
            {node.children.map((child, i) => renderNode(child, [...indexPath, i], opts))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <File size={14} style={{ flexShrink: 0 }} />
          <TreeView.ItemText>{node.label}</TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}

function renderNodes(nodes: FileNode[], opts: { showGuide?: boolean } = {}) {
  return nodes.map((node, i) => renderNode(node, [i], opts))
}

const rootChildren = basicCollection.rootNode.children ?? []

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof TreeView.Root> = {
  component: TreeView.Root,
  title: 'Components/TreeView',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md'],
      description: 'Size of the tree view',
    },
    variant: {
      control: { type: 'select' },
      options: ['subtle', 'outline', 'solid'],
      description: 'Visual variant of the tree view',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

// ---------------------------------------------------------------------------
// 1. Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    size: 'sm',
    variant: 'subtle',
  },
  render: (args) => (
    <TreeView.Root
      collection={basicCollection as TreeCollection}
      size={args['size']}
      variant={args['variant']}
      defaultExpandedValue={['src', 'src/components']}
    >
      <TreeView.Label>File Explorer</TreeView.Label>
      <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
    </TreeView.Root>
  ),
}

// ---------------------------------------------------------------------------
// 2. Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <HStack gap={8} align="flex-start">
      <VStack gap={2} align="flex-start">
        <Paragraph textStyle="bold">XS</Paragraph>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          size="xs"
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>File Explorer</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
      <VStack gap={2} align="flex-start">
        <Paragraph textStyle="bold">SM</Paragraph>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          size="sm"
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>File Explorer</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
      <VStack gap={2} align="flex-start">
        <Paragraph textStyle="bold">MD</Paragraph>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          size="md"
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>File Explorer</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
    </HStack>
  ),
}

// ---------------------------------------------------------------------------
// 3. Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <HStack gap={8} align="flex-start">
      <VStack gap={2} align="flex-start">
        <Paragraph textStyle="bold">Subtle</Paragraph>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          variant={'subtle'}
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>File Explorer</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
      <VStack gap={2} align="flex-start">
        <Paragraph textStyle="bold">Outline</Paragraph>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          variant={'outline'}
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>File Explorer</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
      <VStack gap={2} align="flex-start">
        <Paragraph textStyle="bold">Solid</Paragraph>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          variant={'solid'}
          defaultExpandedValue={['src']}
        >
          <TreeView.Label>File Explorer</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
    </HStack>
  ),
}

// ---------------------------------------------------------------------------
// 4. WithIndentGuides
// ---------------------------------------------------------------------------

export const WithIndentGuides: Story = {
  render: () => (
    <TreeView.Root
      collection={basicCollection as TreeCollection}
      defaultExpandedValue={['src', 'src/components', 'public']}
    >
      <TreeView.Label>File Explorer (with indent guides)</TreeView.Label>
      <TreeView.Tree>{renderNodes(rootChildren, { showGuide: true })}</TreeView.Tree>
    </TreeView.Root>
  ),
}

// ---------------------------------------------------------------------------
// 5. WithCheckboxes (multiple selection)
// ---------------------------------------------------------------------------

export const WithCheckboxes: Story = {
  render: () => {
    const renderCheckboxNode = (node: FileNode, indexPath: number[]): React.ReactNode => (
      <TreeView.NodeProvider key={node.value} node={node} indexPath={indexPath}>
        {node.children && node.children.length > 0 ? (
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
              <TreeView.BranchText>{node.label}</TreeView.BranchText>
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              {node.children.map((child, i) => renderCheckboxNode(child, [...indexPath, i]))}
            </TreeView.BranchContent>
          </TreeView.Branch>
        ) : (
          <TreeView.Item>
            <TreeView.NodeCheckbox>
              <TreeView.NodeCheckboxIndicator>✓</TreeView.NodeCheckboxIndicator>
            </TreeView.NodeCheckbox>
            <TreeView.ItemText>{node.label}</TreeView.ItemText>
          </TreeView.Item>
        )}
      </TreeView.NodeProvider>
    )

    return (
      <Stack w="320px">
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          defaultCheckedValue={[]}
          defaultExpandedValue={['src', 'src/components', 'public']}
        >
          <TreeView.Label>Select files</TreeView.Label>
          <TreeView.Tree>
            {rootChildren.map((node, i) => renderCheckboxNode(node, [i]))}
          </TreeView.Tree>
        </TreeView.Root>
      </Stack>
    )
  },
}

// ---------------------------------------------------------------------------
// 6. Disabled
// ---------------------------------------------------------------------------

const disabledCollection = createTreeCollection<FileNode>({
  rootNode: {
    label: 'Root',
    value: 'root',
    children: [
      {
        label: 'src',
        value: 'src',
        children: [
          { label: 'Button.tsx', value: 'src/Button.tsx' },
          { label: 'Input.tsx (disabled)', value: 'src/Input.tsx', disabled: true },
        ],
      },
      { label: 'README.md (disabled)', value: 'README.md', disabled: true },
      { label: 'package.json', value: 'package.json' },
    ],
  },
  nodeToValue: (node) => node.value,
  nodeToString: (node) => node.label,
  nodeToChildren: (node) => node.children ?? [],
  isNodeDisabled: (node) => node.value === 'src/Input.tsx' || node.value === 'README.md',
})

const disabledRootChildren = disabledCollection.rootNode.children ?? []

export const Disabled: Story = {
  render: () => (
    <TreeView.Root collection={disabledCollection as TreeCollection} defaultExpandedValue={['src']}>
      <TreeView.Label>File Explorer (some nodes disabled)</TreeView.Label>
      <TreeView.Tree>{renderNodes(disabledRootChildren)}</TreeView.Tree>
    </TreeView.Root>
  ),
}

// ---------------------------------------------------------------------------
// 7. Controlled
// ---------------------------------------------------------------------------

export const Controlled: Story = {
  render: () => {
    const [expandedValue, setExpandedValue] = useState<string[]>(['src'])
    const [selectedValue, setSelectedValue] = useState<string[]>([])

    return (
      <VStack gap={4} align="flex-start" w="100%">
        <HStack gap={4}>
          <Stack>
            <Paragraph size="compact">Expanded: {expandedValue.join(', ') || 'none'}</Paragraph>
            <Paragraph size="compact">Selected: {selectedValue.join(', ') || 'none'}</Paragraph>
          </Stack>
        </HStack>

        <TreeView.Root
          collection={basicCollection as TreeCollection}
          expandedValue={expandedValue}
          onExpandedChange={(d) => setExpandedValue(d.expandedValue)}
          selectedValue={selectedValue}
          onSelectionChange={(d) => setSelectedValue(d.selectedValue)}
        >
          <TreeView.Label>Controlled Tree</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </VStack>
    )
  },
}

// ---------------------------------------------------------------------------
// 8. Nested (deeply nested data)
// ---------------------------------------------------------------------------

const deepCollection = createTreeCollection<FileNode>({
  rootNode: {
    label: 'Root',
    value: 'root',
    children: [
      {
        label: 'level-1-a',
        value: 'l1a',
        children: [
          {
            label: 'level-2-a',
            value: 'l2a',
            children: [
              {
                label: 'level-3-a',
                value: 'l3a',
                children: [
                  { label: 'deep-file-1.ts', value: 'l3a/file1.ts' },
                  { label: 'deep-file-2.ts', value: 'l3a/file2.ts' },
                ],
              },
            ],
          },
          { label: 'file-at-l2.ts', value: 'l2/file.ts' },
        ],
      },
      {
        label: 'level-1-b',
        value: 'l1b',
        children: [{ label: 'another-file.ts', value: 'l1b/file.ts' }],
      },
    ],
  },
  nodeToValue: (node) => node.value,
  nodeToString: (node) => node.label,
  nodeToChildren: (node) => node.children ?? [],
})

const deepRootChildren = deepCollection.rootNode.children ?? []

// ---------------------------------------------------------------------------
// 9. ExpandCollapse
// ---------------------------------------------------------------------------

export const ExpandCollapse: Story = {
  render: () => {
    const allBranchIds = ['src', 'src/components', 'public']
    const [expandedValue, setExpandedValue] = useState<string[]>(['src'])

    return (
      <Stack gap={4} w="320px">
        <HStack gap={2}>
          <Button size="sm" variant="outlined" onClick={() => setExpandedValue(allBranchIds)}>
            Expand All
          </Button>
          <Button size="sm" variant="outlined" onClick={() => setExpandedValue([])}>
            Collapse All
          </Button>
        </HStack>
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          expandedValue={expandedValue}
          onExpandedChange={(d) => setExpandedValue(d.expandedValue)}
        >
          <TreeView.Label>Project Files</TreeView.Label>
          <TreeView.Tree>{renderNodes(rootChildren)}</TreeView.Tree>
        </TreeView.Root>
      </Stack>
    )
  },
}

// ---------------------------------------------------------------------------
// 10. Renaming
// ---------------------------------------------------------------------------

export const Renaming: Story = {
  render: () => {
    const renderRenameNode = (node: FileNode, indexPath: number[]): React.ReactNode => (
      <TreeView.NodeProvider key={node.value} node={node} indexPath={indexPath}>
        {node.children && node.children.length > 0 ? (
          <TreeView.Branch>
            <TreeView.BranchControl>
              <TreeView.BranchTrigger>
                <TreeView.BranchIndicator>
                  <ChevronRight size={14} />
                </TreeView.BranchIndicator>
              </TreeView.BranchTrigger>
              <Folder size={14} style={{ flexShrink: 0 }} />
              <TreeView.BranchText>{node.label}</TreeView.BranchText>
              <TreeView.NodeRenameInput />
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              {node.children.map((child, i) => renderRenameNode(child, [...indexPath, i]))}
            </TreeView.BranchContent>
          </TreeView.Branch>
        ) : (
          <TreeView.Item>
            <File size={14} style={{ flexShrink: 0 }} />
            <TreeView.ItemText>{node.label}</TreeView.ItemText>
            <TreeView.NodeRenameInput />
          </TreeView.Item>
        )}
      </TreeView.NodeProvider>
    )

    return (
      <Stack w="320px">
        <TreeView.Root
          collection={basicCollection as TreeCollection}
          defaultExpandedValue={['src']}
          canRename={() => true}
        >
          <TreeView.Label>Project Files (Press F2 to rename)</TreeView.Label>
          <TreeView.Tree>{rootChildren.map((n, i) => renderRenameNode(n, [i]))}</TreeView.Tree>
        </TreeView.Root>
      </Stack>
    )
  },
}

export const Nested: Story = {
  render: () => (
    <TreeView.Root
      collection={deepCollection as TreeCollection}
      defaultExpandedValue={['l1a', 'l2a', 'l3a', 'l1b']}
    >
      <TreeView.Label>Deeply Nested Tree</TreeView.Label>
      <TreeView.Tree>{renderNodes(deepRootChildren)}</TreeView.Tree>
    </TreeView.Root>
  ),
}
