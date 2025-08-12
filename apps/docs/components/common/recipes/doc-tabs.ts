import { sva } from '@styled-system/css'

export const docTabs = sva({
  slots: ['root', 'tabList', 'trigger', 'content', 'contentContainer'],
  base: {
    root: {
      border: '1px solid',
      borderColor: 'border',
      rounded: 'md',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
      mt: '2',
    },
    tabList: {
      borderBottom: '1px solid',
      borderColor: 'border',
      position: 'relative',
      zIndex: 1,
      backdropFilter: 'blur(2px)',
      bg: '#e6f4ff4a',
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/noise.svg)',
        backgroundSize: 'cover',
        opacity: 0.3,
        zIndex: 0,
        mixBlendMode: 'overlay',
      },
    },
    trigger: {
      p: '3',
      color: 'text.secondary',
      fontSize: 'sm',
      fontWeight: 'medium',
      zIndex: '1',
      position: 'relative',
      _selected: {
        color: 'text',
        borderBottom: '2px solid',
        borderColor: 'primary',
        fontWeight: 'semibold',
      },
    },
    content: {
      p: '2',
      overflowX: 'auto',
      maxWidth: '100%',
    },
    contentContainer: {
      position: 'relative',
      bg: 'surface.container',
    },
  },
  variants: {
    variant: {
      preview: {
        root: {
          cursor: 'pointer',
        },
        content: {
          bg: 'surface.container',
        },
      },
      package: {
        trigger: {
          borderColor: 'primary',
        },
        content: {
          bg: 'surface.container',
        },
      },
    },
    noPadding: {
      true: {
        content: {
          p: '0!',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'preview',
  },
})
