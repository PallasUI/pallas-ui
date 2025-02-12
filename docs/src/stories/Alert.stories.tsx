import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Alert',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Pallas UI',
  },
}

export const Variants = () => (
  <Stack>
    <Alert>
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>

    <Alert variant="info">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>

    <Alert variant="error">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>

    <Alert variant="warning">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  </Stack>
)
