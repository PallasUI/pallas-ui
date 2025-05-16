import { Skeleton } from '@/components/ui/skeleton'
import { VStack } from '@styled-system/jsx'

export default function SkeletonTextBlockPreview() {
  return (
    <VStack gap="2" w="300px">
      <Skeleton css={{ width: '100%', height: '16px' }} />
      <Skeleton css={{ width: '95%', height: '16px' }} />
      <Skeleton css={{ width: '100%', height: '16px' }} />
      <Skeleton css={{ width: '70%', height: '16px' }} />
    </VStack>
  )
}
