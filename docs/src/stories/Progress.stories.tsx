import type { Meta, StoryObj } from '@storybook/react'
import { HStack, Stack } from '@styled-system/jsx'
import Progress from '~/ui/progress'
import type { RootProps } from '~/ui/progress'
import { SVG } from '~/ui/progress/svg'

const meta: Meta<RootProps> = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  render: ({ ...props }) => (
    <Progress.Root {...props}>
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress</title>
              <Progress.LineTrack />
              <Progress.LineFill x2={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>
  ),
  argTypes: {
    strokeWidth: {
      options: ['sm', 'md', 'lg'],
    },
    strokeLinecap: {
      control: 'inline-radio',
      options: ['round', 'butt'],
    },
    steps: {
      control: 'number',
    },
    shape: {
      control: 'inline-radio',
      // options: ['line', 'circle'],
    },
    stepToGapRatio: {
      control: 'number',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    strokeLinecap: 'butt',
    strokeWidth: 'md',
    value: 50,
    shape: 'line',
    steps: 1,
    stepToGapRatio: 9,
  },
}

export const Variants = () => (
  <Stack gap={6}>
    <Progress.Root value={30} strokeWidth="sm">
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress</title>
              <Progress.LineTrack />
              <Progress.LineFill x2={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={70} strokeLinecap="round">
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress rounded</title>
              <Progress.LineTrack />
              <Progress.LineFill percentage={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={70} strokeLinecap="round" strokeWidth="lg">
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress large</title>
              <Progress.LineTrack />
              <Progress.LineFill percentage={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={40} steps={10}>
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress steps</title>
              <Progress.LineTrack />
              <Progress.LineFill percentage={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root
      width={25}
      value={40}
      strokeWidth="lg"
      color="error"
      steps={10}
      stepToGapRatio={4}
      align="vertical"
      style={{ width: 300 }}
    >
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress steps small</title>
              <Progress.LineTrack />
              <Progress.LineFill percentage={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    {/* CIRCLE */}
    <HStack gap={6}>
      <Progress.Root value={40} shape="circle" align="vertical" style={{ width: 300 }}>
        {({ percentage, valueText }) => {
          return (
            <>
              <SVG>
                <title>progress cricle</title>
                <Progress.CircleTrack />
                <Progress.CircleFill percentage={percentage} />
              </SVG>
              <Progress.Label>{valueText}</Progress.Label>
            </>
          )
        }}
      </Progress.Root>

      <Progress.Root
        value={60}
        shape="circle"
        strokeWidth="lg"
        strokeLinecap="round"
        align="vertical"
        style={{ width: 300 }}
      >
        {({ percentage, valueText }) => {
          return (
            <>
              <Progress.Label>{valueText}</Progress.Label>
              <SVG>
                <title>progress cricle large rounded</title>
                <Progress.CircleTrack />
                <Progress.CircleFill percentage={percentage} />
              </SVG>
            </>
          )
        }}
      </Progress.Root>

      <Progress.Root value={70} shape="circle" steps={10} style={{ width: 300 }}>
        {({ percentage, valueText }) => {
          return (
            <>
              <SVG>
                <title>progress circle steps</title>
                <Progress.CircleTrack />
                <Progress.CircleFill percentage={percentage} />
              </SVG>
              <Progress.Label>{valueText}</Progress.Label>
            </>
          )
        }}
      </Progress.Root>
    </HStack>

    <Progress.Root
      value={40}
      shape="circle"
      strokeLinecap="round"
      textInside
      strokeWidth={20}
      style={{ width: 300 }}
    >
      {({ percentage, valueText }) => {
        return (
          <>
            <SVG>
              <title>progress cricle text inside</title>
              <Progress.CircleTrack />
              <Progress.CircleFill percentage={percentage} />
            </SVG>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>
  </Stack>
)
