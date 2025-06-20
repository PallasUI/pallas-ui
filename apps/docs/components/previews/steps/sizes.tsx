import Steps from '@/components/ui/steps'
import { VStack } from '@styled-system/jsx'

const items = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]

export default function StepsSizesPreview() {
  return (
    <VStack gap={8} w="90%">
      {/* Small */}
      <VStack gap={2} align="flex-start">
        <h4>Small</h4>
        <Steps.Root count={items.length} orientation="horizontal" size="sm">
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <span>{index + 1}</span>
                  </Steps.Indicator>
                  <span>{item.title}</span>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </VStack>

      {/* Medium */}
      <VStack gap={2} align="flex-start">
        <h4>Medium</h4>
        <Steps.Root count={items.length} orientation="horizontal" size="md">
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <span>{index + 1}</span>
                  </Steps.Indicator>
                  <span>{item.title}</span>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </VStack>

      {/* Large */}
      <VStack gap={2} align="flex-start">
        <h4>Large</h4>
        <Steps.Root count={items.length} orientation="horizontal" size="lg">
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <span>{index + 1}</span>
                  </Steps.Indicator>
                  <span>{item.title}</span>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </VStack>
    </VStack>
  )
}
