'use client'

import Timeline from '@/components/ui/timeline'
import { Calendar, CheckCircle, Clock, Users } from 'lucide-react'

export default function TimelineWithIcons() {
  return (
    <Timeline.Root orientation="horizontal" placement="bottom" indicatorSize="xl">
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Icon icon={Calendar} />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>January 15, 2024</Timeline.Time>
          <Timeline.Title>Project Planning</Timeline.Title>
          <Timeline.Description>
            Initial project planning session with stakeholders to define scope and requirements.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Icon icon={Users} />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>February 1, 2024</Timeline.Time>
          <Timeline.Title>Team Assembly</Timeline.Title>
          <Timeline.Description>
            Assembled the development team and conducted initial team-building activities.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Icon icon={Clock} />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Time>March 15, 2024</Timeline.Time>
          <Timeline.Title>Development Sprint</Timeline.Title>
          <Timeline.Description>
            Started the first development sprint with focus on core functionality.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <Timeline.Icon icon={CheckCircle} />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Time>April 30, 2024</Timeline.Time>
          <Timeline.Title>Milestone Completed</Timeline.Title>
          <Timeline.Description>
            Successfully completed the first major milestone with all features implemented.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
}
