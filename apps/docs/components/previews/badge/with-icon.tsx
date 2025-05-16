'use client'

import { Badge } from '@/components/ui/badge'
import { css } from '@styled-system/css'
import { Flex } from '@styled-system/jsx'
import { Check } from 'lucide-react'

export default function BadgeWithIconPreview() {
  return (
    <Flex gap="4">
      <Badge variant="default">
        <Check className={css({ h: '3', w: '3', mr: '1' })} />
        Default
      </Badge>
      <Badge variant="primary">
        <Check className={css({ h: '3', w: '3', mr: '1' })} />
        Primary
      </Badge>
      <Badge variant="error">
        <Check className={css({ h: '3', w: '3', mr: '1' })} />
        Error
      </Badge>
    </Flex>
  )
}
