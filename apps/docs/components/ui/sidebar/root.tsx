import { useSidebar } from '@pallas-ui/sidebar'
import {
  RootCollapsible,
  RootFixed,
  RootGap,
  RootInner,
  RootNonCollapsible,
} from '@pallas-ui/sidebar'
import { css } from '@styled-system/css'
import React from 'react'
import Drawer from '../drawer'
import { withContext } from './provider'

export type SidebarRootProps = React.ComponentPropsWithoutRef<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

const RootCollapsibleStyled = withContext<
  React.ComponentRef<typeof RootCollapsible>,
  React.ComponentProps<typeof RootCollapsible>
>(RootCollapsible as any, 'root')

const RootNonCollapsibleStyled = withContext<
  React.ComponentRef<typeof RootNonCollapsible>,
  React.ComponentProps<typeof RootNonCollapsible>
>(RootNonCollapsible as any, 'rootNonCollapsible')

const GapStyled = withContext<
  React.ComponentRef<typeof RootGap>,
  React.ComponentProps<typeof RootGap>
>(RootGap as any, 'gap')

const FixedStyled = withContext<
  React.ComponentRef<typeof RootFixed>,
  React.ComponentProps<typeof RootFixed>
>(RootFixed as any, 'fixed')

const InnerStyled = withContext<
  React.ComponentRef<typeof RootInner>,
  React.ComponentProps<typeof RootInner>
>(RootInner as any, 'inner')

export const Root = React.forwardRef<
  React.ComponentRef<typeof RootNonCollapsibleStyled>,
  SidebarRootProps
>(({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (isMobile) {
    return (
      <Drawer.Root open={openMobile} onOpenChange={setOpenMobile} {...(props as any)} side={side}>
        <Drawer.Content data-sidebar="sidebar" data-mobile="true">
          <Drawer.Header className={css({ srOnly: true })}>
            <Drawer.Title>Sidebar</Drawer.Title>
            <Drawer.Description>Displays the mobile sidebar.</Drawer.Description>
          </Drawer.Header>
          <Drawer.Body
            css={{
              px: 0,
            }}
          >
            {children}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    )
  }
  if (collapsible === 'none') {
    return (
      <RootNonCollapsibleStyled ref={ref} {...(props as any)}>
        {children}
      </RootNonCollapsibleStyled>
    )
  }

  return (
    <RootCollapsibleStyled
      ref={ref}
      className="group peer"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <GapStyled />
      <FixedStyled {...(props as any)}>
        <InnerStyled>{children}</InnerStyled>
      </FixedStyled>
    </RootCollapsibleStyled>
  )
})
Root.displayName = 'Sidebar'
