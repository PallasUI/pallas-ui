import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'Styles for the Tabs component',
  slots: ['root', 'tabList', 'trigger', 'content'],
  base: {
    root: {
      width: 'full',
    },
    trigger: {
      overflow: 'hidden',
      py: '{spacing.padding.block.md}',
      outline: 'none',
      _selected: {
        color: '{colors.primary}',
        borderColor: '{colors.primary}',
      },
      _disabled: {
        color: '{colors.border}',
      },
      _hover: {
        cursor: 'pointer',
        color: '{colors.primary.hover}',
      },
    },
    tabList: {
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '{spacing.gap.component.sm}',
      borderColor: '{colors.border}',
      fontWeight: '{medium}',
    },
    content: {
      overflow: 'hidden',
      color: '{colors.text}',
      textStyle: '{sm}',
    },
  },
  variants: {
    size: {
      sm: {
        trigger: {
          textStyle: 'xs',
        },
      },
      md: {
        trigger: {
          textStyle: 'sm',
        },
      },
      lg: {
        trigger: {
          textStyle: 'md',
        },
      },
    },
    align: {
      start: {
        tabList: {
          justifyContent: 'start',
        },
      },
      center: {
        tabList: {
          justifyContent: 'center',
        },
      },
      end: {
        tabList: {
          justifyContent: 'end',
        },
      },
    },
    position: {
      top: {
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
        tabList: {
          borderWidth: '0',
          borderBottomWidth: '1px',
        },
        trigger: {
          margin: '0',
          mb: '-1.5px',
          _selected: {
            borderWidth: '0',
            borderBottomWidth: '3px',
          },
        },
        content: {
          py: '{spacing.padding.block.lg}',
        },
      },
      left: {
        root: {
          display: 'flex',
        },
        tabList: {
          flexDirection: 'column',
          borderWidth: '0',
          borderRightWidth: '1px',
        },
        trigger: {
          px: '{spacing.padding.block.lg}',
          margin: '0',
          mr: '-1px',
          _selected: {
            borderWidth: '0',
            borderRightWidth: '3px',
          },
          textWrap: 'nowrap',
        },
        content: {
          px: '{spacing.padding.block.lg}',
        },
      },
      right: {
        root: {
          display: 'flex',
          flexDirection: 'row-reverse',
        },
        tabList: {
          flexDirection: 'column',
          borderWidth: '0',
          borderLeftWidth: '1px',
        },
        trigger: {
          px: '{spacing.padding.block.lg}',
          margin: '0',
          ml: '-1px',
          _selected: {
            borderWidth: '0',
            borderLeftWidth: '3px',
          },
          textWrap: 'nowrap',
        },
        content: {
          px: '{spacing.padding.block.lg}',
        },
      },
      bottom: {
        root: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
        tabList: {
          borderWidth: '0',
          borderTopWidth: '1px',
        },
        trigger: {
          margin: '0',
          mt: '-1px',
          _selected: {
            borderWidth: '0',
            borderTopWidth: '3px',
          },
        },
        content: {
          py: '{spacing.padding.block.lg}',
        },
      },
    },
    variant: {
      simple: {},
      card: {
        tabList: {
          gap: '{spacing.gap.inline.sm}',
        },
        trigger: {
          backgroundColor: '{colors.fill.disabled}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          px: '{spacing.padding.block.lg}',
          _selected: {
            color: '{colors.primary}',
            backgroundColor: '{colors.surface.elevated}',
          },
          _disabled: {
            color: '{colors.border}',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'start',
    variant: 'simple',
    position: 'top',
  },
  compoundVariants: [
    {
      variant: 'card',
      position: 'top',
      css: {
        trigger: {
          borderRadius: '0',
          borderTopRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          mb: '-1.5px',
          _selected: {
            borderBottomColor: '{colors.surface.elevated}',
          },
        },
      },
    },
    {
      variant: 'card',
      position: 'left',
      css: {
        trigger: {
          borderRadius: '0',
          borderLeftRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          mr: '-1px',
          _selected: {
            borderRightColor: '{colors.surface.elevated}',
          },
        },
      },
    },
    {
      variant: 'card',
      position: 'right',
      css: {
        trigger: {
          borderRadius: '0',
          borderRightRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          ml: '-1px',
          _selected: {
            borderLeftColor: '{colors.surface.elevated}',
          },
        },
      },
    },
    {
      variant: 'card',
      position: 'bottom',
      css: {
        trigger: {
          borderRadius: '0',
          borderBottomRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          mt: '-1px',
          _selected: {
            borderTopColor: '{colors.surface.elevated}',
          },
        },
      },
    },
  ],
})
