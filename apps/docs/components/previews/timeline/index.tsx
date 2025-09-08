import Timeline from '@/components/ui/timeline'
import { Box } from '@styled-system/jsx'

export default function TimelinePreview() {
  return (
    <Box minH="200px" minW="450px" w="full" p={6}>
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot />
          </Timeline.Indicator>
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Time>9:30 AM</Timeline.Time>
            <Timeline.Title>Project Kickoff</Timeline.Title>
            <Timeline.Description>
              Initial meeting with stakeholders to outline project goals and timeline.
            </Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot />
          </Timeline.Indicator>
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Time>11:00 AM</Timeline.Time>
            <Timeline.Title>Requirements Gathering</Timeline.Title>
            <Timeline.Description>
              Detailed discussion of project requirements and technical specifications.
            </Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator>
            <Timeline.Dot />
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Time>2:30 PM</Timeline.Time>
            <Timeline.Title>Planning Phase</Timeline.Title>
            <Timeline.Description>
              Development of project roadmap and resource allocation plan.
            </Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </Box>
  )
}
