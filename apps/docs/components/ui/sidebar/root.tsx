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
>(RootCollapsible, 'root')

const RootNonCollapsibleStyled = withContext<
  React.ComponentRef<typeof RootNonCollapsible>,
  React.ComponentProps<typeof RootNonCollapsible>
>(RootNonCollapsible, 'rootNonCollapsible')

const GapStyled = withContext<
  React.ComponentRef<typeof RootGap>,
  React.ComponentProps<typeof RootGap>
>(RootGap, 'gap')

const FixedStyled = withContext<
  React.ComponentRef<typeof RootFixed>,
  React.ComponentProps<typeof RootFixed>
>(RootFixed, 'fixed')

const InnerStyled = withContext<
  React.ComponentRef<typeof RootInner>,
  React.ComponentProps<typeof RootInner>
>(RootInner, 'inner')

export const Root = React.forwardRef<
  React.ComponentRef<typeof RootNonCollapsibleStyled>,
  SidebarRootProps
>(({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (isMobile) {
    return (
      <Drawer.Root open={openMobile} onOpenChange={setOpenMobile} {...props} side={side}>
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
      <RootNonCollapsibleStyled ref={ref} {...props}>
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
      <FixedStyled {...props}>
        <InnerStyled>{children}</InnerStyled>
      </FixedStyled>
    </RootCollapsibleStyled>
  )
})
Root.displayName = 'Sidebar'
