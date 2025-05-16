import { Skeleton } from '@/components/ui/skeleton'
import { Flex } from '@styled-system/jsx'

export default function SkeletonPreview() {
  return (
    <Flex align="center" gap="4">
      <Skeleton css={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      <Flex direction="column" gap="2">
        <Skeleton css={{ width: '250px', height: '16px' }} />
        <Skeleton css={{ width: '200px', height: '16px' }} />
      </Flex>
    </Flex>
  )
}
