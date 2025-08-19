import Timeline from '@/components/ui/timeline'
import { Box, VStack } from '@styled-system/jsx'

export default function TimelineDotVariantsPreview() {
  return (
    <VStack gap={6}>
      <Box>
        <Box mb={2}>Default</Box>
        <Timeline.Root>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="default" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>Step 1</Timeline.Time>
              <Timeline.Title>Default State</Timeline.Title>
              <Timeline.Description>
                This is the default variant used for regular timeline items.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
      <Box>
        <Box mb={2}>Success</Box>
        <Timeline.Root>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>Step 2</Timeline.Time>
              <Timeline.Title>Success State</Timeline.Title>
              <Timeline.Description>
                Use the success variant to indicate completed or successful steps.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
      <Box>
        <Box mb={2}>Warning</Box>
        <Timeline.Root>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="warning" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>Step 3</Timeline.Time>
              <Timeline.Title>Warning State</Timeline.Title>
              <Timeline.Description>
                The warning variant highlights steps that need attention.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
      <Box>
        <Box mb={2}>Error</Box>
        <Timeline.Root>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="error" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>Step 4</Timeline.Time>
              <Timeline.Title>Error State</Timeline.Title>
              <Timeline.Description>
                Use the error variant to indicate failed or problematic steps.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
    </VStack>
  )
}
