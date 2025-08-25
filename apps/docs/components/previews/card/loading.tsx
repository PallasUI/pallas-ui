'use client'

import { Card } from '@/components/ui/card'
import { Box } from '@styled-system/jsx'

export default function LoadingCardPreview() {
  return (
    <Box w="400px">
      <Card.Root loading />
    </Box>
  )
} 