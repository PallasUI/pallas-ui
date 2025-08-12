import { defineSlotRecipe } from '@pandacss/dev'

export const sidebar = defineSlotRecipe({
  className: 'sidebar',
  description: 'Styles for the Sidebar component',
  slots: [
    'provider',
    'rootNonCollapsible',
    'root', // Outer container
    'gap', // Transition width handler
    'fixed', // Fixed positioned wrapper
    'inner', // sidebar content wrapper
    'inset',
    'content',
    'trigger',
    'rail',
    'header',
    'footer',
    'separator',
    'group',
    'groupLabel',
    'groupAction',
    'groupContent',
    'menu',
    'menuItem',
    'menuButton',
    'menuAction',
    'menuBadge',
    'menuSkeleton',
    'menuSub',
    'menuSubItem',
    'menuSubButton',
  ],
  base: {
    provider: {
      // 'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar'
      display: 'flex',
      height: 'full',
      width: 'full',
      '&:has([data-variant=inset])': {
        backgroundColor: '{colors.surface.layout}',
      },
    },
    root: {
      // className="group peer hidden text-sidebar-foreground md:block"
      display: 'none',
      color: '{colors.text}',
      md: { display: 'block' },
      bg: '{colors.surface.layout}',
    },
    rootNonCollapsible: {
      // 'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
      display: 'flex',
      flexDirection: 'column',
      width: '{sizes.2xs}',
      bg: '{colors.surface.layout}',
      color: '{colors.text}',
      visibility: 'hidden',
      overflow: 'auto',
      //make scrollbar thin and change its
    },
    gap: {
      // cx(
      //   'relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
      //   'group-data-[collapsible=offcanvas]:w-0',
      //   'group-data-[side=right]:rotate-180',
      //   variant === 'floating' || variant === 'inset'
      //     ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
      //     : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
      // )
      position: 'relative',
      width: '{sizes.2xs}',
      bg: 'transparent',
      transition: 'width 200ms linear',

      '.group:is([data-collapsible=offcanvas]) &': { width: '0' },
      '.group:is([data-side=right]) &': { transform: 'rotate(180deg)' },

      '.group:is([data-variant=floating], [data-variant=inset]):is([data-collapsible=icon]) &': {
        w: 'calc(3rem + {spacing.4})',
      },
      '.group:is([data-variant=sidebar]):is([data-collapsible=icon]) &': {
        w: '3rem',
      },
    },
    fixed: {
      // cx(
      //   'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
      //   side === 'left'
      //     ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
      //     : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
      //   // Adjust the padding for floating and inset variants.
      //   variant === 'floating' || variant === 'inset'
      //     ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
      //     : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
      //   className,
      // )
      position: 'fixed',
      insetY: '0',
      zIndex: 10,
      h: 'full',
      w: '{sizes.2xs}',
      transition: 'left 200ms linear, right 200ms linear, width 200ms linear',
      display: 'none',
      md: { display: 'flex' },
      borderColor: '{colors.border}',

      '.group:is([data-side=left]) &': {
        left: '0',
        right: 'auto',
      },
      '.group:is([data-side=right]) &': {
        right: '0',
        left: 'auto',
      },

      '.group:is([data-collapsible=offcanvas]):is([data-side=left]) &': {
        left: 'calc({sizes.2xs} * -1)',
      },
      '.group:is([data-collapsible=offcanvas]):is([data-side=right]) &': {
        right: 'calc({sizes.2xs} * -1)',
      },

      '.group:is([data-variant=floating], [data-variant=inset]) &': {
        p: 2,
      },

      '.group:is([data-variant=floating], [data-variant=inset]):is([data-collapsible=icon]) &': {
        w: 'calc(3rem + {spacing.4} + 2px)',
      },
      '.group:is([data-variant=sidebar]):is([data-collapsible=icon]) &': {
        w: '3rem',
      },
      '.group:is([data-variant=sidebar]):is([data-side=left]) &': {
        borderRightWidth: '1',
      },
      '.group:is([data-variant=sidebar]):is([data-side=right]) &': {
        borderLeftWidth: '1',
      },
    },
    inner: {
      // className="flex h-full w-full flex-col bg-sidebar
      // group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
      display: 'flex',
      h: 'full',
      w: 'full',
      flexDirection: 'column',
      bg: '{colors.surface.elevated}',

      '.group:is([data-variant=floating]) &': {
        rounded: 'lg',
        border: '1px solid {colors.border}',
        shadow: 'lg',
      },
    },
    inset: {
      // 'relative flex w-full flex-1 flex-col bg-background',
      // 'md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      flex: '1',
      backgroundColor: '{colors.surface.container}',
      md: {
        '.peer:is([data-variant=inset])': {
          m: 2,
          ml: 0,
          rounded: 'xl',
          shadow: 'md',
        },
        '.peer:is([data-variant=inset]):is([data-state=collapsed])': {
          ml: 2,
        },
      },
    },
    content: {
      // 'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden'
      minHeight: '0',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      visibility: 'visible',

      overflow: 'auto',
      _hover: {
        '& .sidebar__rootNonCollapsible': {
          visibility: 'visible',
        },
        '&::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        visibility: 'hidden',
        backgroundColor: '{colors.border}',
      },

      gap: 2,
      '.group:is([data-collapsible=icon]) &': {
        overflow: 'hidden',
      },
    },
    trigger: {
      // 'h-7 w-7'
      h: 7,
      w: 7,
      p: '0!',
    },
    rail: {
      // 'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear
      //  after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border
      //  group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
      // '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
      // '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
      // 'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
      // '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
      // '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
      position: 'absolute',
      top: '0',
      bottom: '0',
      zIndex: 20,
      insetY: 0,
      width: 1,
      transform: 'translateX(-50%)',
      transition: 'all linear',

      display: 'none',
      sm: {
        display: 'flex',
      },

      _after: {
        content: '""',
        position: 'absolute',
        insetY: 0,
        bottom: '0',
        left: '50%',
        width: '2px',
      },
      '&:is(:hover, [data-hover])::after': {
        backgroundColor: '{colors.border}',
      },

      '.group:is([data-side=left]) &': {
        right: '-4',
        cursor: 'w-resize',
      },
      '.group:is([data-side=right]) &': {
        left: 0,
        cursor: 'e-resize',
      },

      '.group:is([data-side=left]):is([data-state=collapsed]) &': {
        cursor: 'e-resize',
      },
      '.group:is([data-side=right]):is([data-state=collapsed]) &': {
        cursor: 'w-resize',
      },

      '.group:is([data-collapsible=offcanvas]) &': {
        transform: 'translateX(0)',
        '&:is(:hover, [data-hover])::after': {
          backgroundColor: '{colors.border}',
        },
        _after: {
          left: 'full',
        },
      },

      '.group:is([data-side=left]):is([data-collapsible=offcanvas]) &': {
        right: '-2',
      },
      '.group:is([data-side=right]):is([data-collapsible=offcanvas]) &': {
        left: '-2',
      },
    },
    header: {
      // 'flex flex-col gap-2 p-2',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: 2,
    },
    footer: {
      // 'flex flex-col gap-2 p-2'
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: 2,
    },
    separator: {
      // 'mx-2 w-auto bg-sidebar-border'
      w: 'auto!',
      mx: 2,
      borderColor: '{colors.border}',
    },
    group: {
      // relative flex w-full min-w-0 flex-col p-2
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      minWidth: '0',
      pl: 4,
      pr: 2,
    },
    groupLabel: {
      // cx(
      //   'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring
      //    transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      //   'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      // )
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      borderRadius: 'md',
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.sm}',
      mt: '{spacing.gap.component.sm}',
      fontSize: 'xs',
      fontWeight: '{medium}',
      color: '{colors.text.secondary}',
      outline: 'none',
      transition: 'opacity 200ms linear, margin 200ms linear',

      '.group:is([data-collapsible=icon]) &': {
        mt: -6,
        opacity: 0,
      },
    },
    groupContent: {
      // w-full text-sm
      width: 'full',
      textStyle: 'sm',
    },
    groupAction: {
      //   'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform
      //    hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      //    // Increases the hit area of the button on mobile.
      //   'after:absolute after:-inset-2 after:md:hidden',
      //   'group-data-[collapsible=icon]:hidden',
      position: 'absolute',
      right: 3,
      top: 3,
      aspectRatio: 1,
      w: 5,
      rounded: 'md',
      padding: '0!',
      transition: 'transform 200ms linear',

      '& > svg': {
        size: '1rem',
        flexShrink: 0,
      },
      '.group:is([data-collapsible=icon]) &': {
        display: 'none',
      },
    },
    menu: {
      // 'flex w-full min-w-0 flex-col gap-1'
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      gap: 2,
    },
    menuItem: {
      // 'group/menu-item relative'
      position: 'relative',
      fontWeight: 'medium',
    },
    menuButton: {
      // peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding]
      // hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2
      // active:bg-sidebar-accent active:text-sidebar-accent-foreground
      // disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50
      // data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground
      // data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground
      // group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8
      width: 'full',
      overflow: 'hidden',
      justifyContent: 'left',
      mt: 2,
      gap: '{spacing.gap.inline.xs}',
      h: 'auto!',
      '.group:is([data-collapsible=icon]) &': {
        p: '2!',
        w: '8!',
        h: '8!',
      },
      '&:has(svg,img)': {
        gap: '0.5',
      },
      transition: 'width 200ms linear, height 200ms linear, padding 200ms linear',

      '& > span:last-of-type': {
        truncate: true,
      },
      '& > svg': {
        size: '1rem',
        flexShrink: 0,
        left: '-4px',
        position: 'relative',
      },
      '&[data-active=true]': {
        size: '1rem',
        flexShrink: 0,
        left: '-4px',
        position: 'relative',
      },
      _activeTrue: {
        backgroundColor: '{colors.primary.bg}!',
        color: '{colors.primary.text}!',
      },
    },
    menuAction: {
      // 'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
      //   // Increases the hit area of the button on mobile.
      //   'after:absolute after:-inset-2 after:md:hidden',
      //   'peer-data-[size=sm]/menu-button:top-1',
      //   'peer-data-[size=default]/menu-button:top-1.5',
      //   'peer-data-[size=lg]/menu-button:top-2.5',
      //   'group-data-[collapsible=icon]:hidden',
      // NOT IMPLEMENTED YET
      //   showOnHover &&
      //     'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
      position: 'absolute',
      right: 1,
      top: 0,
      '.menu-button.button--size_sm ~ &': {
        top: 1,
      },
      '.menu-button.button--size_md ~ &': {
        top: 1.5,
      },
      '.menu-button.button--size_lg ~ &': {
        top: 2.5,
      },

      aspectRatio: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'md',
      p: '0!',
      color: '{colors.text}',
      // '& > svg': {
      //   size: '1rem',
      //   flexShrink: 0,
      // },
      '.group:is([data-collapsible=icon]) &': {
        display: 'none',
      },
    },
    menuBadge: {
      // 'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground',
      // 'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      // 'peer-data-[size=sm]/menu-button:top-1',
      // 'peer-data-[size=default]/menu-button:top-1.5',
      // 'peer-data-[size=lg]/menu-button:top-2.5',
      // 'group-data-[collapsible=icon]:hidden',
      position: 'absolute',
      h: 5,
      right: 1,
      userSelect: 'none',

      '.menu-button.button--size_sm ~ &': {
        top: 1,
      },
      '.menu-button.button--size_md ~ &': {
        top: 1.5,
      },
      '.menu-button.button--size_lg ~ &': {
        top: 2.5,
      },

      '& .group:is([data-collapsible=icon]) &': {
        display: 'none',
      },
    },
    menuSub: {
      // 'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
      // 'group-data-[collapsible=icon]:hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      minWidth: '0',
      borderLeftWidth: '1px',
      borderColor: '{colors.border}',
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.xs}',
      ml: '{spacing.padding.inline.md}',
      mr: '{spacing.padding.inline.xs}',
      transform: 'translateX(1px)',
      fontWeight: 'normal',
      '.group:is([data-collapsible=icon]) &': {
        display: 'none',
      },
    },
    menuSubButton: {
      // 'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring
      //  hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground
      //  disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50
      //  [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
      //  'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
      //  size === 'sm' && 'text-xs',
      //  size === 'md' && 'text-sm',
      //  'group-data-[collapsible=icon]:hidden',
      height: '1.6rem',
      minWidth: '0',
      transform: 'translateX(-1px)',
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      overflow: 'hidden',
      rounded: 'md',
      px: '2',
      color: '{colors.text}',
      outlineColor: '{colors.primary.text}',
      fontSize: 'sm',

      _hover: {
        bg: '{colors.fill.secondary}',
        cursor: 'pointer',
      },
      _focusVisible: {
        outlineWidth: '2',
      },
      _activeTrue: {
        bg: '{colors.primary}',
        color: '{colors.bgSolid.text}',
        fontWeight: 'semibold',
        _hover: {
          bg: '{colors.primary.hover}',
          color: '{colors.bgSolid.text}',
        },
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },

      '&[data-size=sm]': {
        fontSize: 'sm',
      },
      '&[data-size=lg]': {
        fontSize: 'lg',
      },

      '.group:is([data-collapsible=icon]) &': {
        display: 'none',
      },

      '& > span:last-of-type': {
        truncate: true,
      },
      '& > svg': {
        size: '1rem',
        flexShrink: '0',
        color: 'sidebar.accent.foreground',
      },
    },
  },
})
