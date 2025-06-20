'use client'

import { Button } from '@/components/ui/button'
import Steps from '@/components/ui/steps'
import { Heading, Paragraph } from '@/components/ui/typography'
import { HStack, VStack } from '@styled-system/jsx'
import { useState } from 'react'

const items = [
  { title: 'Account Setup', description: 'Create your account and verify email' },
  { title: 'Profile Setup', description: 'Complete your profile information' },
  { title: 'Verification', description: 'Verify your identity' },
  { title: 'Complete', description: 'Your account is ready to use' },
]

export default function StepsLoadingPreview() {
  const [currentStep, setCurrentStep] = useState(0)
  const [loadingStep, setLoadingStep] = useState<number | null>(null)

  const processNextStep = () => {
    if (currentStep < items.length - 1) {
      // Start loading
      setLoadingStep(currentStep + 1)

      // Simulate async processing
      setTimeout(() => {
        setLoadingStep(null)
        setCurrentStep(currentStep + 1)
      }, 2000)
    }
  }

  const reset = () => {
    setCurrentStep(0)
    setLoadingStep(null)
  }

  const simulateLoading = (stepIndex: number) => {
    setLoadingStep(stepIndex)
    setTimeout(() => {
      setLoadingStep(null)
    }, 3000)
  }

  return (
    <VStack gap={6} w="95%">
      <Steps.Root count={items.length} orientation="horizontal" size="md" step={currentStep}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator css={{ alignItems: 'center' }} loading={loadingStep === index}>
                  <span>{index + 1}</span>
                </Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {items.map((item, index) => (
          <Steps.Content key={index} index={index} css={{ justifyContent: 'center' }}>
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
              {loadingStep === index && (
                <Paragraph size="compact" css={{ color: 'primary', marginTop: '2' }}>
                  Processing...
                </Paragraph>
              )}
            </VStack>
          </Steps.Content>
        ))}
      </Steps.Root>

      <HStack gap={4}>
        <Button
          onClick={processNextStep}
          disabled={currentStep === items.length - 1 || loadingStep !== null}
          variant="primary"
        >
          {loadingStep !== null ? 'Processing...' : 'Process Next Step'}
        </Button>
        <Button onClick={reset} disabled={loadingStep !== null} variant="outlined">
          Reset
        </Button>
        <Button
          onClick={() => simulateLoading(1)}
          disabled={loadingStep !== null}
          variant="outlined"
          size="sm"
        >
          Simulate Loading Step 2
        </Button>
      </HStack>
    </VStack>
  )
}
