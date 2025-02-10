import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'

export default function Example() {
  return (
    <Alert variant="error">
      <AlertCircle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  )
}
