import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'

export default function Example() {
  return (
    <Alert>
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
