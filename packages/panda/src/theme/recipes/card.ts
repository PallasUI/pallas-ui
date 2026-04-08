import { defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
  className: 'card',
  description: 'Styles for the Card component',
  slots: ['root', 'header', 'body', 'footer', 'title', 'description', 'cover', 'skeleton'],
  base: {
    root: {
      bg: '{colors.surface.elevated}',
      color: '{colors.text}',
      rounded: '{radii.md}',
      border: '1px solid {colors.border}',
      shadow: 'md',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
      p: 0,
      transitionProperty: 'shadow, transform',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
    },
    cover: {
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      img: {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      textAlign: 'left',
    },
    body: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      color: '{colors.text}',
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      spaceX: '{spacing.gap.inline.sm}',
      flexWrap: 'wrap',
    },
    title: {
      fontWeight: 'semibold',
      color: '{colors.text}',
    },
    description: {
      color: '{colors.text.secondary}',
    },
    skeleton: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
  },
  variants: {
    variant: {
      elevated: {
        root: {
          bg: '{colors.surface.elevated}',
          borderColor: '{colors.border}',
          shadow: 'md',
        },
      },
      container: {
        root: {
          bg: '{colors.bg.container}',
          borderColor: '{colors.border}',
          shadow: 'minimal',
        },
      },
    },
    size: {
      sm: {
        root: {
          rounded: '{radii.sm}',
        },
        header: {
          pt: '{spacing.padding.block.md}',
          pb: '{spacing.padding.block.md}',
          px: '{spacing.padding.inline.sm}',
        },
        body: {
          pt: '{spacing.padding.block.sm}',
          pb: '{spacing.padding.block.md}',
          px: '{spacing.padding.inline.sm}',
        },
        footer: {
          pt: '{spacing.padding.block.sm}',
          pb: '{spacing.padding.block.md}',
          px: '{spacing.padding.inline.sm}',
        },
        skeleton: {
          pt: '{spacing.padding.block.sm}',
          pb: '{spacing.padding.block.md}',
          px: '{spacing.padding.inline.sm}',
        },
        title: {
          textStyle: 'md',
        },
        description: {
          textStyle: 'xs',
        },
      },
      md: {
        root: {},
        header: {
          pt: '{spacing.padding.block.lg}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.md}',
        },
        body: {
          pt: '{spacing.padding.block.md}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.md}',
        },
        footer: {
          pt: '{spacing.padding.block.md}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.md}',
        },
        skeleton: {
          pt: '{spacing.padding.block.md}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.md}',
        },
        title: {
          textStyle: 'lg',
        },
        description: {
          textStyle: 'sm',
        },
      },
      lg: {
        root: {
          rounded: '{radii.lg}',
        },
        header: {
          pt: '{spacing.padding.block.lg}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.lg}',
        },
        body: {
          pt: '{spacing.padding.block.lg}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.lg}',
        },
        footer: {
          pt: '{spacing.padding.block.lg}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.lg}',
        },
        skeleton: {
          pt: '{spacing.padding.block.lg}',
          pb: '{spacing.padding.block.lg}',
          px: '{spacing.padding.inline.lg}',
        },
        title: {
          textStyle: 'xl',
        },
        description: {
          textStyle: 'md',
        },
      },
    },
    hoverable: {
      true: {
        root: {
          cursor: 'pointer',
          _hover: {
            shadow: 'lg',
            transform: 'translateY(-3px)',
          },
        },
      },
      false: {},
    },
    disabled: {
      true: {
        root: {
          opacity: 0.5,
          pointerEvents: 'none',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'elevated',
    size: 'md',
    hoverable: false,
  },
})
