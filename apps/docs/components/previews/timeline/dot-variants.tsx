'use client'

import Segmented from '@/components/ui/segmented'
import Timeline from '@/components/ui/timeline'
import { Box, VStack } from '@styled-system/jsx'
import { useState } from 'react'

export default function TimelineDotVariantsPreview() {
  const [variant, setVariant] = useState<'default' | 'success' | 'warning' | 'error'>('default')

  const getVariantInfo = () => {
    switch (variant) {
      case 'success':
        return {
          title: 'Success State',
          description: 'Use the success variant to indicate successful steps.',
          step: 'Step 2',
        }
      case 'warning':
        return {
          title: 'Warning State',
          description: 'The warning variant highlights steps that need attention.',
          step: 'Step 3',
        }
      case 'error':
        return {
          title: 'Error State',
          description: 'Error variant shows failed or problematic steps.',
          step: 'Step 4',
        }
      default:
        return {
          title: 'Default State',
          description: 'Default variant for regular timeline steps.',
          step: 'Step 1',
        }
    }
  }

  const renderTimeline = () => {
    const info = getVariantInfo()

    return (
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot variant="default" />
          </Timeline.Indicator>
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Time>9:30 AM</Timeline.Time>
            <Timeline.Title>Project Started</Timeline.Title>
            <Timeline.Description>Initial project setup and configuration.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot variant={variant} />
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Time>{info.step}</Timeline.Time>
            <Timeline.Title>{info.title}</Timeline.Title>
            <Timeline.Description>{info.description}</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    )
  }

  return (
    <VStack gap={4} align="start">
      <Segmented.Root
        value={variant}
        onValueChange={(value) => setVariant(value as 'default' | 'success' | 'warning' | 'error')}
      >
        <Segmented.Option value="default">
          <Segmented.Text>Default</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="success">
          <Segmented.Text>Success</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="warning">
          <Segmented.Text>Warning</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="error">
          <Segmented.Text>Error</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>

      <Box minH="200px" minW="450px" w="full">
        {renderTimeline()}
      </Box>
    </VStack>
  )
}
