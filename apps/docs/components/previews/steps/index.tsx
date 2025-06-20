import Steps from '@/components/ui/steps'
import { Heading, Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

const items = [
  { title: 'Contact Info', description: 'Your basic information' },
  { title: 'Date & Time', description: 'Select your preferred time' },
  { title: 'Confirmation', description: 'Review and confirm' },
]

export default function StepsPreview() {
  return (
    <Steps.Root count={items.length} orientation="horizontal" size="md" css={{ width: '90%' }}>
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Trigger>
              <Steps.Indicator css={{ alignItems: 'center' }}>
                <span style={{ alignSelf: 'stretch' }}>{index + 1}</span>
              </Steps.Indicator>
              <span>{item.title}</span>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {items.map((item, index) => (
        <Steps.Content key={index} index={index}>
          <VStack
            w="100%"
            p="4"
            mt="5"
            align="center"
            css={{
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'border',
              borderRadius: 'md',
            }}
          >
            <Heading level={4}>{item.title}</Heading>
            <Paragraph>{item.description}</Paragraph>
          </VStack>
        </Steps.Content>
      ))}
    </Steps.Root>
  )
}
