import { Skeleton } from '@/components/ui/skeleton'
import { Flex } from '@styled-system/jsx'

export default function SkeletonCirclePreview() {
  return (
    <Flex align="center" justify="center" h="60px">
      <Skeleton css={{ width: '48px', height: '48px', borderRadius: '50%' }} />
    </Flex>
  )
}
