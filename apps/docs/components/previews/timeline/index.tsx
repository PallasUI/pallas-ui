import Timeline from "@/components/ui/timeline";

export default function TimelinePreview() {
  return (
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
            Initial meeting with stakeholders to outline project goals and
            timeline.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Dot />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>11:15 AM</Timeline.Time>
          <Timeline.Title>Development Phase</Timeline.Title>
          <Timeline.Description>
            Started implementing core features and setting up the development
            environment.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Dot />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>2:45 PM</Timeline.Time>
          <Timeline.Title>Code Review</Timeline.Title>
          <Timeline.Description>
            Conducted peer review of the implemented features and addressed
            feedback.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Dot />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Time>4:30 PM</Timeline.Time>
          <Timeline.Title>Testing & Deployment</Timeline.Title>
          <Timeline.Description>
            Ran comprehensive tests and deployed to staging environment for
            review.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  );
}
