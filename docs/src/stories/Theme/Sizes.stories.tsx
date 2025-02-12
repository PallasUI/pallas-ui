import type { Meta, StoryObj } from '@storybook/react'
import { Box, Stack } from '@styled-system/jsx'
import { type Token, token } from '@styled-system/tokens'
import { Paragraph } from '~/ui/typography'
import { Heading } from '~/ui/typography'

const meta = {
  title: 'Theme/Sizes & Spacing',
  component: Box,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const SizeBox = ({ label, width, height }: { label: string; width: string; height: string }) => (
  <Stack gap="3">
    <Stack direction="column" gap="1">
      <Paragraph size="compact">{label}</Paragraph>
      <Paragraph size="subscript">
        {width} x {height}
      </Paragraph>
    </Stack>
    <Box
      css={{
        bg: '#1677ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      style={{ width: width, height: height }}
    />
  </Stack>
)

const SpacingBox = ({ label, size }: { label: string; size: string }) => (
  <Stack gap="3" direction="row">
    <Stack direction="column" gap="1" css={{ width: '1/4' }}>
      <Paragraph size="compact">{label}</Paragraph>
      <Paragraph size="subscript">{size}</Paragraph>
    </Stack>
    <Box
      css={{
        height: '1rem',
        bg: '#1677ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      style={{ width: token(size as Token) }}
    />
  </Stack>
)

export const Sizes: Story = {
  render: () => (
    <Stack direction="column" gap="6">
      <Stack direction="column" gap="6">
        <Heading level={3}>Sizes</Heading>
        <Stack gap={4}>
          <Heading level={4}>Control Heights</Heading>
          <Stack direction="row" gap={6}>
            <SizeBox label="Small" width="100px" height={token('sizes.controlHeight.sm')} />
            <SizeBox label="Medium" width="100px" height={token('sizes.controlHeight.md')} />
            <SizeBox label="Large" width="100px" height={token('sizes.controlHeight.lg')} />
          </Stack>
        </Stack>

        <Stack gap={4}>
          <Heading level={4}>Selection Controls</Heading>
          <Stack direction="row" gap={6}>
            <SizeBox
              label="Small"
              width={token('sizes.selectionControl.sm')}
              height={token('sizes.selectionControl.sm')}
            />
            <SizeBox
              label="Medium"
              width={token('sizes.selectionControl.md')}
              height={token('sizes.selectionControl.md')}
            />
            <SizeBox
              label="Large"
              width={token('sizes.selectionControl.lg')}
              height={token('sizes.selectionControl.lg')}
            />
          </Stack>
        </Stack>

        <Stack gap={4}>
          <Heading level={4}>Icons</Heading>
          <Stack direction="row" gap={6}>
            <SizeBox label="Small" width={token('sizes.icon.sm')} height={token('sizes.icon.sm')} />
            <SizeBox
              label="Medium"
              width={token('sizes.icon.md')}
              height={token('sizes.icon.md')}
            />
            <SizeBox label="Large" width={token('sizes.icon.lg')} height={token('sizes.icon.lg')} />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" gap="8">
        <Heading level={3}>Spacing</Heading>
        <Stack gap={4}>
          <Heading level={4}>Layout Spacing</Heading>
          <Stack gap={6}>
            <Stack direction="column" gap="2">
              <Heading level={5}>Default</Heading>

              <Stack direction="column" gap="4">
                <SpacingBox label="Small" size={'spacing.layout.default.sm'} />
                <SpacingBox label="Medium" size={'spacing.layout.default.md'} />
                <SpacingBox label="Large" size={'spacing.layout.default.lg'} />
              </Stack>
            </Stack>

            <Stack direction="column" gap="2">
              <Heading level={5}>Internal</Heading>
              <Stack direction="column" gap="4">
                <SpacingBox label="Small" size={'spacing.layout.internal.sm'} />
                <SpacingBox label="Medium" size={'spacing.layout.internal.md'} />
                <SpacingBox label="Large" size={'spacing.layout.internal.lg'} />
              </Stack>
            </Stack>

            <Stack direction="column" gap="2">
              <Heading level={5}>Section</Heading>
              <Stack direction="column" gap="4">
                <SpacingBox label="Small" size={'spacing.layout.section.sm'} />
                <SpacingBox label="Medium" size={'spacing.layout.section.md'} />
                <SpacingBox label="Large" size={'spacing.layout.section.lg'} />
              </Stack>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Heading level={4}>Gap Spacing</Heading>
            <Stack gap={6}>
              <Stack direction="column" gap="2">
                <Heading level={5}>Component</Heading>
                <Stack direction="column" gap="4">
                  <SpacingBox label="Small" size={'spacing.gap.component.sm'} />
                  <SpacingBox label="Medium" size={'spacing.gap.component.md'} />
                  <SpacingBox label="Large" size={'spacing.gap.component.lg'} />
                </Stack>
              </Stack>

              <Stack direction="column" gap="2">
                <Heading level={5}>Inline</Heading>
                <Stack direction="column" gap="4">
                  <SpacingBox label="Small" size={'spacing.gap.inline.sm'} />
                  <SpacingBox label="Medium" size={'spacing.gap.inline.md'} />
                  <SpacingBox label="Large" size={'spacing.gap.inline.lg'} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Heading level={4}>Padding</Heading>
            <Stack gap={6}>
              <Stack direction="column" gap="2">
                <Heading level={5}>Block</Heading>
                <Stack direction="column" gap="4">
                  <SpacingBox label="Small" size={'spacing.padding.block.sm'} />
                  <SpacingBox label="Medium" size={'spacing.padding.block.md'} />
                  <SpacingBox label="Large" size={'spacing.padding.block.lg'} />
                </Stack>
              </Stack>

              <Stack direction="column" gap="2">
                <Heading level={5}>Inline</Heading>
                <Stack direction="column" gap="4">
                  <SpacingBox label="Extra Small" size={'spacing.padding.inline.xs'} />
                  <SpacingBox label="Small" size={'spacing.padding.inline.sm'} />
                  <SpacingBox label="Medium" size={'spacing.padding.inline.md'} />
                  <SpacingBox label="Large" size={'spacing.padding.inline.lg'} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
}
