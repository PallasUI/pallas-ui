import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { User, User2, Users } from 'lucide-react'
import Avatar from '~/ui/avatar'

const meta: Meta<typeof Avatar.Root> = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (props) => (
    <Avatar.Root {...props}>
      <Avatar.Image />
      <Avatar.Fallback>AR</Avatar.Fallback>
    </Avatar.Root>
  ),
}

export default meta

type Story = StoryObj<typeof meta>

const URL =
  'https://images.unsplash.com/photo-1738008896551-9ab767d9e6ac?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const Default: Story = {
  args: {},
}

export const Variants = () => (
  <Stack gap={4}>
    {/* SIZE */}
    <Stack direction="row" align="center">
      <Avatar.Root>
        <Avatar.Image src={URL} />
      </Avatar.Root>

      <Avatar.Root css={{ width: 75, height: 75 }}>
        <Avatar.Image src={URL} />
      </Avatar.Root>

      <Avatar.Root css={{ width: 100, height: 100 }}>
        <Avatar.Image src={URL} />
      </Avatar.Root>
    </Stack>

    <Stack direction="row" align="center">
      <Avatar.Root css={{ borderRadius: 'md' }}>
        <Avatar.Image src={URL} />
      </Avatar.Root>

      <Avatar.Root css={{ width: 75, height: 75, borderRadius: 'lg' }}>
        <Avatar.Image src={URL} />
      </Avatar.Root>

      <Avatar.Root css={{ width: 100, height: 100, borderRadius: '2xl' }}>
        <Avatar.Image src={URL} />
      </Avatar.Root>
    </Stack>

    {/* COLOR */}
    <Stack direction="row" align="center">
      <Avatar.Root>
        <Avatar.Fallback>AK</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root css={{ bg: '{colors.info.bg}' }}>
        <Avatar.Fallback css={{ color: '{colors.info.text}', fontSize: 'xl' }}>AK</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root
        css={{
          width: 85,
          height: 85,
          bg: '{colors.success.bg}',
          border: '1px solid {colors.success.border}',
        }}
      >
        <Avatar.Fallback css={{ color: '{colors.success.text}', fontSize: 'xx-large' }}>
          AK
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root
        css={{
          width: 100,
          height: 100,
          bg: '{colors.error.bg}',
          border: '1px solid {colors.error.active}',
        }}
      >
        <Avatar.Fallback css={{ color: '{colors.error.text}', fontSize: 'xxx-large' }}>
          AK
        </Avatar.Fallback>
      </Avatar.Root>
    </Stack>

    {/* RADIUS */}
    <Stack direction="row" align="center">
      <Avatar.Root css={{ borderRadius: 'md' }}>
        <Avatar.Fallback>
          <User />
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root css={{ borderRadius: 'md', bg: '{colors.info.bg}' }}>
        <Avatar.Fallback css={{ color: '{colors.info.text}', fontSize: 'xl' }}>
          <User />
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root
        css={{
          borderRadius: 'xl',
          width: 85,
          height: 85,
          bg: '{colors.success.bg}',
          border: '1px solid {colors.success.border}',
        }}
      >
        <Avatar.Fallback css={{ color: '{colors.success.text}', fontSize: 'xx-large' }}>
          <User2 size={50} />
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root
        css={{
          borderRadius: '2xl',
          width: 100,
          height: 100,
          bg: '{colors.error.bg}',
          border: '1px solid {colors.error.active}',
        }}
      >
        <Avatar.Fallback css={{ color: '{colors.error.text}', fontSize: 'xxx-large' }}>
          <Users size={60} />
        </Avatar.Fallback>
      </Avatar.Root>
    </Stack>
  </Stack>
)
