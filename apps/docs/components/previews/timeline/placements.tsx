'use client'

import Segmented from '@/components/ui/segmented'
import Timeline from '@/components/ui/timeline'
import { Box, VStack } from '@styled-system/jsx'
import { useState } from 'react'

type TimelineOrientation = 'vertical' | 'horizontal'

type TimelinePlacement = 'left' | 'right' | 'alternate' | 'top' | 'bottom'

export default function TimelinePlacementsPreview() {
  const [orientation, setOrientation] = useState<TimelineOrientation>('vertical')
  const [placement, setPlacement] = useState<TimelinePlacement>('right')

  const getPlacementOptions = () => {
    if (orientation === 'vertical') {
      return ['left', 'right', 'alternate']
    }
    return ['top', 'bottom']
  }

  const renderTimeline = () => {
    const currentPlacement = getPlacementOptions().includes(placement)
      ? placement
      : (getPlacementOptions()[0] as TimelinePlacement)

    if (orientation === 'vertical') {
      return (
        <Timeline.Root orientation="vertical" placement={currentPlacement}>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Code Review</Timeline.Title>
              <Timeline.Description>
                Reviewed pull request and provided feedback.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="default" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>11:00 AM</Timeline.Time>
              <Timeline.Title>Development</Timeline.Title>
              <Timeline.Description>Implemented new features and bug fixes.</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="warning" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>2:30 PM</Timeline.Time>
              <Timeline.Title>Testing</Timeline.Title>
              <Timeline.Description>Quality assurance and validation.</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      )
    }

    return (
      <Timeline.Root orientation="horizontal" placement={currentPlacement}>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot variant="success" />
          </Timeline.Indicator>
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Time>Jan</Timeline.Time>
            <Timeline.Title>Q1</Timeline.Title>
            <Timeline.Description>Planning</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot variant="default" />
          </Timeline.Indicator>
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Time>Apr</Timeline.Time>
            <Timeline.Title>Q2</Timeline.Title>
            <Timeline.Description>Development</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot variant="warning" />
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Time>Jul</Timeline.Time>
            <Timeline.Title>Q3</Timeline.Title>
            <Timeline.Description>Testing</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    )
  }

  return (
    <VStack gap={4} align="start">
      <VStack gap={3} align="start">
        <Segmented.Root
          value={orientation}
          onValueChange={(value: string) => setOrientation(value as TimelineOrientation)}
        >
          <Segmented.Option value="vertical">
            <Segmented.Text>Vertical</Segmented.Text>
          </Segmented.Option>
          <Segmented.Option value="horizontal">
            <Segmented.Text>Horizontal</Segmented.Text>
          </Segmented.Option>
        </Segmented.Root>

        <Segmented.Root
          value={placement}
          onValueChange={(value: string) => setPlacement(value as TimelinePlacement)}
        >
          {getPlacementOptions().map((option) => (
            <Segmented.Option key={option} value={option}>
              <Segmented.Text>{option.charAt(0).toUpperCase() + option.slice(1)}</Segmented.Text>
            </Segmented.Option>
          ))}
        </Segmented.Root>
      </VStack>

      <Box minH="200px" minW="450px" w="full">
        {renderTimeline()}
      </Box>
    </VStack>
  )
}
