'use client'

import Segmented from '@/components/ui/segmented'
import Timeline from '@/components/ui/timeline'
import { Box, VStack } from '@styled-system/jsx'
import { useState } from 'react'

export default function TimelineOrientationsPreview() {
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical')

  return (
    <VStack gap={4} align="start">
      <Segmented.Root
        value={orientation}
        onValueChange={(value) => setOrientation(value as 'vertical' | 'horizontal')}
      >
        <Segmented.Option value="vertical">
          <Segmented.Text>Vertical</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="horizontal">
          <Segmented.Text>Horizontal</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>

      <Box minH="200px" minW="450px" w="full">
        {orientation === 'vertical' ? (
          <Timeline.Root orientation="vertical" placement="right">
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="success" />
              </Timeline.Indicator>
              <Timeline.Connector />
              <Timeline.Content>
                <Timeline.Time>9:30 AM</Timeline.Time>
                <Timeline.Title>Project Started</Timeline.Title>
                <Timeline.Description>
                  Initial project setup and configuration completed.
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
                <Timeline.Title>Development Phase</Timeline.Title>
                <Timeline.Description>
                  Core features implementation in progress.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="warning" />
              </Timeline.Indicator>
              <Timeline.Content>
                <Timeline.Time>2:30 PM</Timeline.Time>
                <Timeline.Title>Testing Phase</Timeline.Title>
                <Timeline.Description>Quality assurance and bug fixing phase.</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        ) : (
          <Timeline.Root orientation="horizontal" placement="bottom">
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
              <Timeline.Connector />
              <Timeline.Content>
                <Timeline.Time>Jul</Timeline.Time>
                <Timeline.Title>Q3</Timeline.Title>
                <Timeline.Description>Testing</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="error" />
              </Timeline.Indicator>
              <Timeline.Content>
                <Timeline.Time>Oct</Timeline.Time>
                <Timeline.Title>Q4</Timeline.Title>
                <Timeline.Description>Launch</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        )}
      </Box>
    </VStack>
  )
}
