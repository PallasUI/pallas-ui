'use client'

import { TreeView } from '@ark-ui/react/tree-view'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import type { ComponentRef } from 'react'

import { type TreeViewVariantProps, treeView } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'

const { withProvider, withContext } = createStyleContext(treeView)

export type RootProps = WithFixedClassName<ComponentProps<typeof TreeView.Root>>

const Root = withProvider<
  ComponentRef<typeof TreeView.Root>,
  Assign<RootProps, TreeViewVariantProps & JsxStyleProps>
>(TreeView.Root, 'root')

const Label = withContext<
  ComponentRef<typeof TreeView.Label>,
  Assign<ComponentProps<typeof TreeView.Label>, JsxStyleProps>
>(TreeView.Label, 'label')

const Tree = withContext<
  ComponentRef<typeof TreeView.Tree>,
  Assign<ComponentProps<typeof TreeView.Tree>, JsxStyleProps>
>(TreeView.Tree, 'tree')

const Branch = withContext<
  ComponentRef<typeof TreeView.Branch>,
  Assign<ComponentProps<typeof TreeView.Branch>, JsxStyleProps>
>(TreeView.Branch, 'branch')

const BranchControl = withContext<
  ComponentRef<typeof TreeView.BranchControl>,
  Assign<ComponentProps<typeof TreeView.BranchControl>, JsxStyleProps>
>(TreeView.BranchControl, 'branchControl')

const BranchTrigger = withContext<
  ComponentRef<typeof TreeView.BranchTrigger>,
  Assign<ComponentProps<typeof TreeView.BranchTrigger>, JsxStyleProps>
>(TreeView.BranchTrigger, 'branchTrigger')

const BranchIndicator = withContext<
  ComponentRef<typeof TreeView.BranchIndicator>,
  Assign<ComponentProps<typeof TreeView.BranchIndicator>, JsxStyleProps>
>(TreeView.BranchIndicator, 'branchIndicator')

const BranchText = withContext<
  ComponentRef<typeof TreeView.BranchText>,
  Assign<ComponentProps<typeof TreeView.BranchText>, JsxStyleProps>
>(TreeView.BranchText, 'branchText')

const BranchContent = withContext<
  ComponentRef<typeof TreeView.BranchContent>,
  Assign<ComponentProps<typeof TreeView.BranchContent>, JsxStyleProps>
>(TreeView.BranchContent, 'branchContent')

const BranchIndentGuide = withContext<
  ComponentRef<typeof TreeView.BranchIndentGuide>,
  Assign<ComponentProps<typeof TreeView.BranchIndentGuide>, JsxStyleProps>
>(TreeView.BranchIndentGuide, 'branchIndentGuide')

const Item = withContext<
  ComponentRef<typeof TreeView.Item>,
  Assign<ComponentProps<typeof TreeView.Item>, JsxStyleProps>
>(TreeView.Item, 'item')

const ItemText = withContext<
  ComponentRef<typeof TreeView.ItemText>,
  Assign<ComponentProps<typeof TreeView.ItemText>, JsxStyleProps>
>(TreeView.ItemText, 'itemText')

const ItemIndicator = withContext<
  ComponentRef<typeof TreeView.ItemIndicator>,
  Assign<ComponentProps<typeof TreeView.ItemIndicator>, JsxStyleProps>
>(TreeView.ItemIndicator, 'itemIndicator')

const NodeProvider = TreeView.NodeProvider
const NodeContext = TreeView.NodeContext

const NodeCheckbox = withContext<
  ComponentRef<typeof TreeView.NodeCheckbox>,
  Assign<ComponentProps<typeof TreeView.NodeCheckbox>, JsxStyleProps>
>(TreeView.NodeCheckbox, 'nodeCheckbox')

const NodeCheckboxIndicator = withContext<
  ComponentRef<typeof TreeView.NodeCheckboxIndicator>,
  Assign<ComponentProps<typeof TreeView.NodeCheckboxIndicator>, JsxStyleProps>
>(TreeView.NodeCheckboxIndicator, 'nodeCheckboxIndicator')

const NodeRenameInput = withContext<
  ComponentRef<typeof TreeView.NodeRenameInput>,
  Assign<ComponentProps<typeof TreeView.NodeRenameInput>, JsxStyleProps>
>(TreeView.NodeRenameInput, 'nodeRenameInput')

const TreeViewComponent = {
  Root,
  Label,
  Tree,
  NodeProvider,
  NodeContext,
  Branch,
  BranchControl,
  BranchTrigger,
  BranchIndicator,
  BranchText,
  BranchContent,
  BranchIndentGuide,
  Item,
  ItemText,
  ItemIndicator,
  NodeCheckbox,
  NodeCheckboxIndicator,
  NodeRenameInput,
}

export { createTreeCollection } from '@ark-ui/react/tree-view'
export default TreeViewComponent
