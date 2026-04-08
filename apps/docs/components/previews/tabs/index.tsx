'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Tabs from '@/components/ui/tabs'
import { css } from '@styled-system/css'

export default function TabsDemo() {
  return (
    <Tabs.Root defaultValue="account" className={css({ width: '400px' })}>
      <Tabs.TabList>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.TabList>
      <Tabs.Content value="account">
        <div
          className={css({
            p: 4,
            border: '1px solid',
            borderColor: 'border',
            rounded: 'md',
            mt: 4,
          })}
        >
          <div className={css({ mb: 4 })}>
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: 1 })}>Account</h3>
            <p className={css({ color: 'text.tertiary', fontSize: 'sm' })}>
              Make changes to your account here. Click save when you're done.
            </p>
          </div>
          <div className={css({ display: 'grid', gap: 3 })}>
            <div className={css({ display: 'grid', gap: 2 })}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className={css({ display: 'grid', gap: 2 })}>
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
          <div className={css({ mt: 4 })}>
            <Button>Save changes</Button>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="password">
        <div
          className={css({
            p: 4,
            border: '1px solid',
            borderColor: 'border',
            rounded: 'md',
            mt: 4,
          })}
        >
          <div className={css({ mb: 4 })}>
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: 1 })}>Password</h3>
            <p className={css({ color: 'text.tertiary', fontSize: 'sm' })}>
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
          <div className={css({ display: 'grid', gap: 3 })}>
            <div className={css({ display: 'grid', gap: 2 })}>
              <Label htmlFor="current">Current password</Label>
              <Input id="current" typeof="password" />
            </div>
            <div className={css({ display: 'grid', gap: 2 })}>
              <Label htmlFor="new">New password</Label>
              <Input id="new" typeof="password" />
            </div>
          </div>
          <div className={css({ mt: 4 })}>
            <Button>Save password</Button>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}
