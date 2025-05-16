'use client'

import { Badge } from '@/components/ui/badge'
import { Flex } from '@styled-system/jsx'

export default function BadgePrimaryPreview() {
  return (
    <Flex gap="4">
      <Badge variant="primary">Primary Badge</Badge>
    </Flex>
  )
}
