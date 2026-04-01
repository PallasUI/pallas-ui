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
      fontSize: '{fontSizes.sm}',
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
      borderRadius: '{radii.sm}',
      transition: 'background 0.15s ease',
      width: 'full',
      _focusVisible: {
        outline: '2px solid {colors.primary}',
        outlineOffset: '-2px',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: 0.5,
      },
    },
    branchIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'transform 0.15s ease',
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
      backgroundColor: '{colors.border}',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '{spacing.gap.inline.xs}',
      cursor: 'pointer',
      borderRadius: '{radii.sm}',
      transition: 'background 0.15s ease',
      width: 'full',
      _focusVisible: {
        outline: '2px solid {colors.primary}',
        outlineOffset: '-2px',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: 0.5,
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
      width: '1rem',
      height: '1rem',
      borderRadius: '{radii.xs}',
      border: '1px solid {colors.border}',
      cursor: 'pointer',
      transition: 'background 0.15s ease, border-color 0.15s ease',
      _checked: {
        backgroundColor: '{colors.primary}',
        borderColor: '{colors.primary}',
        color: '{colors.primary.textActive}',
      },
      _indeterminate: {
        backgroundColor: '{colors.primary.subtle}',
        borderColor: '{colors.primary}',
      },
    },
    nodeCheckboxIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'full',
      height: 'full',
      fontSize: '0.6rem',
      lineHeight: 1,
      color: 'inherit',
    },
    nodeRenameInput: {
      flex: 1,
      background: 'transparent',
      outline: '1px solid {colors.primary}',
      outlineOffset: '2px',
      borderRadius: '{radii.sm}',
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
          '&:hover:not([data-disabled])': {
            backgroundColor: '{colors.fill.secondary}',
          },
          _selected: {
            backgroundColor: '{colors.primary.bg}',
            color: '{colors.primary.textActive}',
          },
        },
        item: {
          '&:hover:not([data-disabled])': {
            backgroundColor: '{colors.fill.secondary}',
          },
          _selected: {
            backgroundColor: '{colors.primary.bg}',
            color: '{colors.primary.textActive}',
          },
        },
      },
      outline: {
        branchControl: {
          '&:hover:not([data-disabled])': {
            outline: '1px solid {colors.border}',
            outlineOffset: '-1px',
          },
          _selected: {
            outline: '1px solid {colors.primary}',
            outlineOffset: '-1px',
            color: '{colors.primary.textActive}',
          },
        },
        item: {
          '&:hover:not([data-disabled])': {
            outline: '1px solid {colors.border}',
            outlineOffset: '-1px',
          },
          _selected: {
            outline: '1px solid {colors.primary}',
            outlineOffset: '-1px',
            color: '{colors.primary.textActive}',
          },
        },
      },
      ghost: {
        branchControl: {
          '&:hover:not([data-disabled])': {
            color: '{colors.primary.textActive}',
          },
          _selected: {
            backgroundColor: '{colors.primary.bg}',
            color: '{colors.primary.textActive}',
          },
        },
        item: {
          '&:hover:not([data-disabled])': {
            color: '{colors.primary.textActive}',
          },
          _selected: {
            backgroundColor: '{colors.primary.bg}',
            color: '{colors.primary.textActive}',
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
