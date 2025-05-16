'use client'

import { Badge } from '@/components/ui//badge'
import { Flex } from '@styled-system/jsx'

export default function BadgePreview() {
  return (
    <Flex gap="4">
      <Badge>Default Badge</Badge>
      <Badge variant="default">Default</Badge>
    </Flex>
  )
}
