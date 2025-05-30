'use client'

import { Button } from '@/components/ui/button'
import Steps from '@/components/ui/steps'
import { HStack, VStack } from '@styled-system/jsx'
import { useState } from 'react'

const items = [
  { title: 'Contact Info', description: 'Enter your personal details' },
  { title: 'Date & Time', description: 'Choose your preferred schedule' },
  { title: 'Payment', description: 'Complete your payment information' },
  { title: 'Confirmation', description: 'Review and confirm your booking' },
]

export default function StepsInteractivePreview() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < items.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <VStack gap={6} w="100%">
      <Steps.Root count={items.length} orientation="horizontal" size="md" step={currentStep}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger onClick={() => goToStep(index)}>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {items.map((item, index) => (
          <Steps.Content key={index} index={index}>
            <div
              style={{
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
            >
              <h3>{item.title}</h3>
              <p style={{ marginTop: '0.5rem', color: '#64748b' }}>{item.description}</p>
            </div>
          </Steps.Content>
        ))}
      </Steps.Root>

      <HStack gap={4}>
        <Button onClick={prevStep} disabled={currentStep === 0} variant="outlined">
          Previous
        </Button>
        <Button onClick={nextStep} disabled={currentStep === items.length - 1} variant="primary">
          Next
        </Button>
      </HStack>
    </VStack>
  )
}
