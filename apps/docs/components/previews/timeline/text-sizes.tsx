import Timeline from "@/components/ui/timeline";
import { Box, VStack } from "@styled-system/jsx";

export default function TimelineTextSizesPreview() {
  return (
    <VStack gap="gap.component.md">
      <VStack gap="gap.inline.sm">
        <Box>Small Text</Box>
        <Timeline.Root textSize="sm">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Small Text Size</Timeline.Title>
              <Timeline.Description>
                Timeline content with small text styling.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>

      <VStack gap="gap.inline.sm">
        <Box>Medium Text</Box>
        <Timeline.Root textSize="md">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Medium Text Size</Timeline.Title>
              <Timeline.Description>
                Timeline content with medium text styling.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>

      <VStack gap="gap.inline.sm">
        <Box>Large Text</Box>
        <Timeline.Root textSize="lg">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Large Text Size</Timeline.Title>
              <Timeline.Description>
                Timeline content with large text styling.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>

      <VStack gap="gap.inline.sm">
        <Box>Extra Large Text</Box>
        <Timeline.Root textSize="xl">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Extra Large Text</Timeline.Title>
              <Timeline.Description>
                Timeline content with extra large text styling.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </VStack>
    </VStack>
  );
}
