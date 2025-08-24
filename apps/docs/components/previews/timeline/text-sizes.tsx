'use client'

import Segmented from '@/components/ui/segmented'
import Timeline from '@/components/ui/timeline'
import { Box, VStack } from '@styled-system/jsx'
import { useState } from 'react'

export default function TimelineTextSizesPreview() {
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')

  const renderTimeline = () => (
    <Timeline.Root textSize={textSize}>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Dot />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>9:30 AM</Timeline.Time>
          <Timeline.Title>
            {textSize.charAt(0).toUpperCase() + textSize.slice(1)} Text Size
          </Timeline.Title>
          <Timeline.Description>Timeline content with {textSize} text size.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Dot />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>11:00 AM</Timeline.Time>
          <Timeline.Title>Development Phase</Timeline.Title>
          <Timeline.Description>Core features implementation in progress.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Dot />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Time>2:30 PM</Timeline.Time>
          <Timeline.Title>Testing Phase</Timeline.Title>
          <Timeline.Description>Quality assurance and validation.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )

  return (
    <VStack gap={4} align="start">
      <Segmented.Root
        value={textSize}
        onValueChange={(value) => setTextSize(value as 'sm' | 'md' | 'lg' | 'xl')}
      >
        <Segmented.Option value="sm">
          <Segmented.Text>Small</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="md">
          <Segmented.Text>Medium</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="lg">
          <Segmented.Text>Large</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="xl">
          <Segmented.Text>Extra Large</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>

      <Box minH="200px" minW="450px" w="full">
        {renderTimeline()}
      </Box>
    </VStack>
  )
}
