'use client'

import { Badge } from '@/components/ui//badge'
import { Flex } from '@styled-system/jsx'

export default function BadgeErrorPreview() {
  return (
    <Flex gap="4">
      <Badge variant="error">Error Badge</Badge>
    </Flex>
  )
}
