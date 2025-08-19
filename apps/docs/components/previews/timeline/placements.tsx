import Timeline from "@/components/ui/timeline";
import { Box, Flex, VStack } from "@styled-system/jsx";

export default function TimelinePlacementsPreview() {
  return (
    <VStack gap={10} align="start">
      <Flex direction="column" align="flex-start" w="full" gap="gap.inline.md">
        <Box>Vertical - Right Placement</Box>
        <Timeline.Root orientation="vertical" placement="right">
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
              <Timeline.Time>10:45 AM</Timeline.Time>
              <Timeline.Title>Bug Fixes</Timeline.Title>
              <Timeline.Description>
                Addressed critical issues found during testing.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="warning" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>12:30 PM</Timeline.Time>
              <Timeline.Title>Deployment</Timeline.Title>
              <Timeline.Description>
                Deployed changes to staging environment.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Flex>

      <Flex direction="column" align="flex-end" w="full" gap="gap.inline.md">
        <Box>Vertical - Left Placement</Box>
        <Timeline.Root orientation="vertical" placement="left">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>9:30 AM</Timeline.Time>
              <Timeline.Title>Meeting Started</Timeline.Title>
              <Timeline.Description>
                Team standup meeting commenced with all members present.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="default" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>10:15 AM</Timeline.Time>
              <Timeline.Title>Sprint Planning</Timeline.Title>
              <Timeline.Description>
                Discussed upcoming sprint goals and task allocation.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="default" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>11:00 AM</Timeline.Time>
              <Timeline.Title>Meeting Ended</Timeline.Title>
              <Timeline.Description>
                All action items documented and assigned.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Flex>

      <Flex direction="column" align="center" w="full" gap="gap.inline.md">
        <Box>Vertical - Alternate Placement</Box>
        <Timeline.Root orientation="vertical" placement="alternate">
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="success" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>Phase 1</Timeline.Time>
              <Timeline.Title>Research & Discovery</Timeline.Title>
              <Timeline.Description>
                Conducted user research and market analysis to understand
                requirements.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="default" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>Phase 2</Timeline.Time>
              <Timeline.Title>Design & Prototyping</Timeline.Title>
              <Timeline.Description>
                Created wireframes, mockups, and interactive prototypes.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="default" />
            </Timeline.Indicator>
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Time>Phase 3</Timeline.Time>
              <Timeline.Title>Development</Timeline.Title>
              <Timeline.Description>
                Built the application using modern technologies and frameworks.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator>
              <Timeline.Dot variant="warning" />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Time>Phase 4</Timeline.Time>
              <Timeline.Title>Testing & Launch</Timeline.Title>
              <Timeline.Description>
                Comprehensive testing followed by production deployment.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Flex>

      <Flex direction="column" align="flex-start" w="full" gap="gap.inline.md">
        <Box>Horizontal - Top Placement</Box>
        <Flex justify="center" w="full">
          <Timeline.Root orientation="horizontal" placement="top">
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="success" />
              </Timeline.Indicator>
              <Timeline.Connector />
              <Timeline.Content>
                <Timeline.Time>Q1</Timeline.Time>
                <Timeline.Title>Planning</Timeline.Title>
                <Timeline.Description>
                  Project planning and requirements gathering.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="default" />
              </Timeline.Indicator>
              <Timeline.Connector />
              <Timeline.Content>
                <Timeline.Time>Q2</Timeline.Time>
                <Timeline.Title>Development</Timeline.Title>
                <Timeline.Description>
                  Core development and feature implementation.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="warning" />
              </Timeline.Indicator>
              <Timeline.Content>
                <Timeline.Time>Q3</Timeline.Time>
                <Timeline.Title>Testing</Timeline.Title>
                <Timeline.Description>
                  Quality assurance and testing phase.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </Flex>
      </Flex>

      <Flex direction="column" align="flex-start" w="full" gap="gap.inline.md">
        <Box>Horizontal - Bottom Placement</Box>
        <Flex justify="center" w="full">
          <Timeline.Root orientation="horizontal" placement="bottom">
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="success" />
              </Timeline.Indicator>
              <Timeline.Connector />
              <Timeline.Content>
                <Timeline.Time>Jan</Timeline.Time>
                <Timeline.Title>Kickoff</Timeline.Title>
                <Timeline.Description>
                  Project initialization and team setup.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="default" />
              </Timeline.Indicator>
              <Timeline.Connector />
              <Timeline.Content>
                <Timeline.Time>Mar</Timeline.Time>
                <Timeline.Title>Milestone 1</Timeline.Title>
                <Timeline.Description>
                  First major milestone achieved.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Indicator>
                <Timeline.Dot variant="error" />
              </Timeline.Indicator>
              <Timeline.Content>
                <Timeline.Time>May</Timeline.Time>
                <Timeline.Title>Launch</Timeline.Title>
                <Timeline.Description>
                  Product launch and go-live.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </Flex>
      </Flex>
    </VStack>
  );
}
