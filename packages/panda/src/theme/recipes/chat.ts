import { defineSlotRecipe } from '@pandacss/dev'

export const chat = defineSlotRecipe({
  className: 'chat',
  description: 'Accessible chat component',
  slots: [
    'root',
    'message',
    'avatar',
    'bubble',
    'metadata',
    'input',
    'textarea',
    'inputActions',
    'suggestions',
    'suggestion',
    'widget',
    'widgetHeader',
    'widgetContent',
    'widgetActions',
    'options',
    'option',
    'optionGroup',
    'optionGroupLabel',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      gap: 'gap.component.md',
      p: 'padding.block.lg',
      textStyle: 'sm',
    },
    message: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: 'gap.inline.sm',
    },
    avatar: {
      gridArea: 'avatar',
      flexShrink: 0,
      overflow: 'hidden',
    },
    bubble: {
      gridArea: 'bubble',
      display: 'flex',
      flexDirection: 'column',
      gap: 'gap.inline.md',
      width: 'fit-content',
      maxWidth: '3/4',
      px: 'padding.inline.lg',
      py: 'padding.block.lg',
      rounded: 'md',
      color: 'text',
      cursor: 'text',
    },
    metadata: {
      gridArea: 'meta',
      textStyle: 'xs',
      color: 'text.tertiary',
    },
    input: {
      display: 'flex',
      gap: 'gap.inline.sm',
      px: 'padding.block.md',
      py: 'padding.block.lg',
      border: '1px solid {colors.border}',
      rounded: 'md',
      mt: 'padding.block.md',

      _focusWithin: {
        borderColor: 'primary.border',
        shadow: 'sm',
      },
    },
    textarea: {
      '--textarea-min-height': '30px',
      '--textarea-max-height': '120px',

      w: 'full',
      minH: 'var(--textarea-min-height)',
      maxH: 'var(--textarea-max-height)',
      resize: 'none',
      border: 'none',
      rounded: 'md',
      transition: 'height 0.1s ease',

      _placeholder: {
        color: 'text.tertiary',
      },
      _focus: {
        outline: 'none',
      },
    },
    inputActions: {
      display: 'flex',
      alignItems: 'center',
      gap: 'gap.inline.xs',
      flexShrink: 0,
    },
    suggestions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'gap.inline.xs',
      p: 'padding.block.md',
    },
    suggestion: {
      border: '1px solid {colors.border.secondary}',
      fontWeight: 'medium',
      color: 'text.secondary',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      userSelect: 'none',
      whiteSpace: 'nowrap',

      _hover: {
        border: '1px solid {colors.primary.border}',
      },

      _active: {
        transform: 'scale(0.98)',
        outline: '2px solid {colors.primary.border}',
      },
    },
    widget: {
      maxW: 'md',
      border: '1px solid {colors.border}',
      rounded: 'md',
      transition: 'all 0.2s ease-in-out',
    },
    widgetHeader: {
      p: 'padding.block.lg',
      borderBottom: '1px solid {colors.border.secondary}',
      bg: 'fill.tertiary',
      fontWeight: 'semibold',
      color: 'text',
    },
    widgetContent: {
      p: 'padding.block.lg',
    },
    widgetActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'gap.inline.xs',
      p: 'padding.block.lg',
      borderTop: '1px solid {colors.border.secondary}',
      bg: 'fill.tertiary',
    },
    options: {
      display: 'flex',
      gap: 'gap.inline.xs',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      gap: 'gap.inline.xs',
      p: 'padding.block.md',
      rounded: 'md',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      color: 'text.secondary',
      border: '1px solid transparent',

      _active: {
        transform: 'scale(0.98)',
      },
    },
    optionGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'gap.inline.xs',
    },
    optionGroupLabel: {
      textStyle: 'xs',
      fontWeight: 'medium',
      color: 'text.tertiary',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      px: 'padding.block.sm',
    },
  },
  variants: {
    variant: {
      user: {
        message: {
          gridTemplateColumns: '1fr auto',
          gridTemplateAreas: '"bubble avatar" "meta ...."',
          justifyItems: 'end',
        },
        bubble: {
          bg: 'primary.bg',
          color: 'text',
        },
      },
      assistant: {
        message: {
          gridTemplateAreas: '"avatar bubble" ".... meta"',
        },
        bubble: {
          bg: 'fill.tertiary',
          color: 'text',
        },
      },
    },
    layout: {
      vertical: {
        input: {
          flexDirection: 'column',
        },
        textarea: {
          pl: 'padding.inline.md',
        },
        inputActions: {
          w: 'full',
        },
      },
      horizontal: {
        input: {
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 'gap.inline.xs',
          p: 'padding.block.md',
        },
        textarea: {
          p: '0',
        },
        inputActions: {
          w: 'fit',
          h: 'fit',
          gap: 'gap.inline.xs',
          alignItems: 'flex-end',
        },
      },
    },
    suggestionVariant: {
      filled: {
        suggestion: {
          bg: 'fill.tertiary',
          color: 'text.secondary',

          _hover: {
            bg: 'fill.secondary',
            color: 'text',
          },
        },
      },
      primary: {
        suggestion: {
          bg: 'primary.bg',
          color: 'primary.text',

          _hover: {
            bg: 'primary.bgHover',
            color: 'primary.textHover',
          },
        },
      },
      outlined: {
        suggestion: {
          bg: 'transparent',
          border: '1px solid {colors.border}',
          color: 'text.secondary',

          _hover: {
            bg: 'fill.secondary',
            borderColor: 'primary.border',
            color: 'text',
          },
          _active: {
            bg: 'fill.tertiary',
          },
        },
      },
    },
    suggestionShape: {
      pill: {
        suggestion: {
          rounded: 'full',
          px: 'padding.block.lg',
          py: 'padding.block.sm',
        },
      },
      card: {
        suggestion: {
          rounded: 'md',
          px: 'padding.block.lg',
          py: 'padding.block.md',
        },
      },
    },
    optionLayout: {
      list: {
        options: {
          flexDirection: 'column',
        },
      },
      grid: {
        options: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        },
      },
      inline: {
        options: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 'gap.inline.xs',
        },
        option: {
          px: 'padding.block.lg',
          py: 'padding.block.sm',
          rounded: 'full',
          border: '1px solid {colors.border}',
          whiteSpace: 'nowrap',
        },
      },
    },
    optionVariant: {
      default: {
        option: {
          _hover: {
            bg: 'fill.secondary',
            color: 'text',
          },

          '&[data-selected]': {
            bg: 'fill.secondary',
            borderColor: 'primary.border',
            color: 'text',
          },
        },
      },
      primary: {
        option: {
          _hover: {
            bg: 'primary.bgHover',
            borderColor: 'primary.borderHover',
            color: 'primary.textHover',
          },

          '&[data-selected]': {
            bg: 'primary.bg',
            borderColor: 'primary.border',
            color: 'primary.text',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'assistant',
    layout: 'vertical',
    suggestionVariant: 'outlined',
    suggestionShape: 'pill',
    optionLayout: 'list',
    optionVariant: 'default',
  },
  staticCss: [
    { variant: ['*'] },
    { layout: ['*'] },
    { suggestionVariant: ['*'] },
    { suggestionShape: ['*'] },
    { optionLayout: ['*'] },
    { optionVariant: ['*'] },
  ],
})
