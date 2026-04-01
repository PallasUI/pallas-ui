import { defineSlotRecipe } from '@pandacss/dev'

export const treeView = defineSlotRecipe({
  className: 'tree-view',
  description: 'Styles for the TreeView component',
  slots: [
    'root',
    'label',
    'tree',
    'branch',
    'branchControl',
    'branchTrigger',
    'branchIndicator',
    'branchText',
    'branchContent',
    'branchIndentGuide',
    'item',
    'itemText',
    'itemIndicator',
    'nodeCheckbox',
    'nodeCheckboxIndicator',
    'nodeRenameInput',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '{spacing.gap.component.xs}',
      width: 'full',
    },
    label: {
      textStyle: 'sm',
      fontWeight: 'semibold',
      color: '{colors.text.secondary}',
      paddingBottom: '{spacing.gap.inline.xs}',
    },
    tree: {
      display: 'flex',
      flexDirection: 'column',
    },
    branch: {
      display: 'flex',
      flexDirection: 'column',
    },
    branchControl: {
      display: 'flex',
      alignItems: 'center',
      gap: '{spacing.gap.inline.xs}',
      cursor: 'pointer',
      rounded: '{radii.sm}',
      transition: 'common',
      width: 'full',
      _focusVisible: {
        outline: '2px solid {colors.primary}',
        outlineOffset: '-2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.5,
        bg: '{colors.fill.disabled}',
      },
    },
    branchIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'common',
      _open: {
        transform: 'rotate(90deg)',
      },
    },
    branchTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0,
      background: 'none',
      border: 'none',
      padding: 0,
      color: 'inherit',
    },
    branchText: {
      flex: 1,
      userSelect: 'none',
    },
    branchContent: {
      paddingLeft: '{spacing.gap.component.sm}',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    branchIndentGuide: {
      position: 'absolute',
      left: '{spacing.gap.inline.xs}',
      top: '0',
      bottom: '0',
      width: '1px',
      bg: '{colors.border}',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '{spacing.gap.inline.xs}',
      cursor: 'pointer',
      rounded: '{radii.sm}',
      transition: 'common',
      width: 'full',
      _focusVisible: {
        outline: '2px solid {colors.primary}',
        outlineOffset: '-2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.5,
        bg: '{colors.fill.disabled}',
      },
    },
    itemText: {
      flex: 1,
      userSelect: 'none',
    },
    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    nodeCheckbox: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      w: '{sizes.selectionControl.sm}',
      h: '{sizes.selectionControl.sm}',
      rounded: '{radii.xs}',
      border: '{borders.default.sm}',
      cursor: 'pointer',
      transition: 'common',
      _checked: {
        bg: '{colors.primary}',
        border: '{borders.primary.sm}',
      },
      _indeterminate: {
        bg: '{colors.primary}',
        border: '{borders.primary.sm}',
      },
    },
    nodeCheckboxIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'full',
      height: 'full',
      fontSize: '{fontSizes.xs}',
      lineHeight: 1,
      color: '{colors.surface.elevated}',
    },
    nodeRenameInput: {
      flex: 1,
      background: 'transparent',
      outline: '1px solid {colors.primary}',
      outlineOffset: '2px',
      rounded: '{radii.sm}',
      fontSize: 'inherit',
      padding: '0 {spacing.gap.inline.xs}',
    },
  },
  variants: {
    size: {
      sm: {
        branchControl: {
          padding: '{spacing.padding.block.sm} {spacing.padding.inline.sm}',
          fontSize: '{fontSizes.sm}',
        },
        item: {
          padding: '{spacing.padding.block.sm} {spacing.padding.inline.sm}',
          fontSize: '{fontSizes.sm}',
        },
        branchIndicator: {
          width: '{sizes.icon.sm}',
          height: '{sizes.icon.sm}',
        },
        itemIndicator: {
          width: '{sizes.icon.sm}',
          height: '{sizes.icon.sm}',
        },
      },
      md: {
        branchControl: {
          padding: '{spacing.padding.block.md} {spacing.padding.inline.md}',
          fontSize: '{fontSizes.md}',
        },
        item: {
          padding: '{spacing.padding.block.md} {spacing.padding.inline.md}',
          fontSize: '{fontSizes.md}',
        },
        branchIndicator: {
          width: '{sizes.icon.md}',
          height: '{sizes.icon.md}',
        },
        itemIndicator: {
          width: '{sizes.icon.md}',
          height: '{sizes.icon.md}',
        },
      },
      xs: {
        branchControl: {
          padding: '{spacing.padding.block.xs} {spacing.padding.inline.xs}',
          fontSize: '{fontSizes.xs}',
        },
        item: {
          padding: '{spacing.padding.block.xs} {spacing.padding.inline.xs}',
          fontSize: '{fontSizes.xs}',
        },
        branchIndicator: {
          width: '{sizes.icon.sm}',
          height: '{sizes.icon.sm}',
        },
        itemIndicator: {
          width: '{sizes.icon.sm}',
          height: '{sizes.icon.sm}',
        },
      },
    },
    variant: {
      subtle: {
        branchControl: {
          _hover: {
            bg: '{colors.fill.secondary}',
          },
          _selected: {
            bg: '{colors.primary.bg}',
            color: '{colors.primary.textActive}',
          },
        },
        item: {
          _hover: {
            bg: '{colors.fill.secondary}',
          },
          _selected: {
            bg: '{colors.primary.bg}',
            color: '{colors.primary.textActive}',
          },
        },
      },
      outline: {
        branchControl: {
          _hover: {
            outline: '{borders.default.sm}',
            outlineOffset: '-1px',
          },
          _selected: {
            outline: '{borders.primary.sm}',
            outlineOffset: '-1px',
            color: '{colors.primary.textActive}',
          },
        },
        item: {
          _hover: {
            outline: '{borders.default.sm}',
            outlineOffset: '-1px',
          },
          _selected: {
            outline: '{borders.primary.sm}',
            outlineOffset: '-1px',
            color: '{colors.primary.textActive}',
          },
        },
      },
      solid: {
        branchControl: {
          _hover: {
            bg: '{colors.primary.bgHover}',
          },
          _selected: {
            bg: '{colors.primary}',
            color: '{colors.bgSolid.text}',
          },
        },
        item: {
          _hover: {
            bg: '{colors.primary.bgHover}',
          },
          _selected: {
            bg: '{colors.primary}',
            color: '{colors.bgSolid.text}',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'subtle',
  },
})
