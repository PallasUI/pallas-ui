'use client'

import { Button } from '@/components/ui/button'
import Steps from '@/components/ui/steps'
import { Heading, Paragraph } from '@/components/ui/typography'
import { HStack, VStack } from '@styled-system/jsx'
import { useState } from 'react'

const items = [
  { title: 'Basic Info', description: 'Enter your name and email' },
  { title: 'Preferences', description: 'Set your account preferences' },
  { title: 'Verification', description: 'Verify your account' },
  { title: 'Complete', description: 'Account setup complete' },
]

export default function StepsDisabledPreview() {
  const [currentStep, setCurrentStep] = useState(0)
  const [disabledSteps, setDisabledSteps] = useState([false, false, true, true])

  const nextStep = () => {
    if (currentStep < items.length - 1 && !disabledSteps[currentStep + 1]) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    if (!disabledSteps[step]) {
      setCurrentStep(step)
    }
  }

  const enableNextStep = () => {
    if (currentStep < items.length - 1) {
      setDisabledSteps((prev) => {
        const newDisabled = [...prev]
        newDisabled[currentStep + 1] = false
        return newDisabled
      })
    }
  }

  const toggleStepDisabled = (index: number) => {
    setDisabledSteps((prev) => {
      const newDisabled = [...prev]
      newDisabled[index] = !newDisabled[index]
      return newDisabled
    })
  }

  return (
    <VStack gap={6} w="95%">
      <Steps.Root count={items.length} orientation="horizontal" size="md" step={currentStep}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger onClick={() => goToStep(index)}>
                <Steps.Indicator css={{ alignItems: 'center' }} disabled={disabledSteps[index]}>
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
              {disabledSteps[index] && (
                <Paragraph size="compact" css={{ color: 'text.tertiary', marginTop: '2' }}>
                  This step is currently disabled
                </Paragraph>
              )}
            </VStack>
          </Steps.Content>
        ))}
      </Steps.Root>

      <VStack gap={4} align="stretch">
        <HStack gap={4} justify="center">
          <Button onClick={prevStep} disabled={currentStep === 0} variant="outlined">
            Previous
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === items.length - 1 || disabledSteps[currentStep + 1]}
            variant="primary"
          >
            Next
          </Button>
          <Button
            onClick={enableNextStep}
            disabled={currentStep === items.length - 1 || !disabledSteps[currentStep + 1]}
            variant="outlined"
          >
            Enable Next Step
          </Button>
        </HStack>

        <HStack gap={2} justify="center">
          {items.map((item, index) => (
            <Button
              key={index}
              onClick={() => toggleStepDisabled(index)}
              variant={disabledSteps[index] ? 'primary' : 'outlined'}
              size="sm"
            >
              {disabledSteps[index] ? 'Enable' : 'Disable'} {index + 1}
            </Button>
          ))}
        </HStack>
      </VStack>
    </VStack>
  )
}
