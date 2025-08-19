import Timeline from '@/components/ui/timeline'
import { Box, VStack } from '@styled-system/jsx'

export default function TimelineIndicatorSizesPreview() {
  return (
    <VStack gap="gap.component.md">
      <VStack gap="gap.inline.sm">
        <Box>Small Indicators</Box>
        <Timeline.Root indicatorSize="sm">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Small Indicator</Timeline.Title>
              <Timeline.Description>Timeline with small indicator size.</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>

      <VStack gap="gap.inline.sm">
        <Box>Medium Indicators</Box>
        <Timeline.Root indicatorSize="md">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Medium Indicator</Timeline.Title>
              <Timeline.Description>Timeline with medium indicator size.</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>

      <VStack gap="gap.inline.sm">
        <Box>Large Indicators</Box>
        <Timeline.Root indicatorSize="lg">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Large Indicator</Timeline.Title>
              <Timeline.Description>Timeline with large indicator size.</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>

      <VStack gap="gap.inline.sm">
        <Box>Extra Large Indicators</Box>
        <Timeline.Root indicatorSize="xl">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Extra Large Indicator</Timeline.Title>
              <Timeline.Description>Timeline with extra large indicator size.</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>
    </VStack>
  )
}
