import type { Meta, StoryObj } from '@storybook/react'
import { Box, HStack, Stack, VStack } from '@styled-system/jsx'
import { useState } from 'react'

import { Button } from '~/ui/button'
import { Paragraph } from '~/ui/typography'
import Steps from '../ui/steps'

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' },
]

const meta: Meta<typeof Steps.Root> = {
  component: Steps.Root,
  title: 'Components/Steps',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the steps component',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the steps component',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => (
    <Stack w="100%" h="50vh">
      <Steps.Root count={items.length} orientation={args['orientation']} size={args['size']}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator css={{ alignItems: 'center' }}>
                  <span>{index + 1}</span>
                </Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {items.map((item, index) => (
          <Steps.Content key={index} index={index}>
            {item.title} - {item.description}
          </Steps.Content>
        ))}
      </Steps.Root>
    </Stack>
  ),
}

export const Variants: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => (
    <Stack w="100%" h="50vh">
      <Steps.Root count={items.length} orientation={args['orientation']} size={args['size']}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator css={{ alignItems: 'center' }}>
                  <span>{index + 1}</span>
                </Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {items.map((item, index) => (
          <Steps.Content key={index} index={index}>
            {item.title} - {item.description}
          </Steps.Content>
        ))}
      </Steps.Root>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <VStack gap={8} w="100%">
      <VStack gap={4} align="flex-start">
        <Paragraph textStyle="bold">Small (sm)</Paragraph>
        <Steps.Root count={items.length} orientation="horizontal" size="sm">
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator css={{ alignItems: 'center' }}>
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

      <VStack gap={4} align="flex-start">
        <Paragraph textStyle="bold">Medium (md)</Paragraph>
        <Steps.Root count={items.length} orientation="horizontal" size="md">
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator css={{ alignItems: 'center' }}>
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

      <VStack gap={4} align="flex-start">
        <Paragraph textStyle="bold">Large (lg)</Paragraph>
        <Steps.Root count={items.length} orientation="horizontal" size="lg">
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator css={{ alignItems: 'center' }}>
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
  ),
}

export const LoadingState: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => {
    const [loadingSteps, setLoadingSteps] = useState([false, false, false])
    const [currentStep, setCurrentStep] = useState(1)

    const toggleLoading = (index: number) => {
      setLoadingSteps((prev) => {
        const newLoadingSteps = [...prev]
        newLoadingSteps[index] = !newLoadingSteps[index]
        return newLoadingSteps
      })
    }

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

    const simulateLoading = () => {
      // Simulate loading for current step
      setLoadingSteps((prev) => {
        const newLoadingSteps = [...prev]
        newLoadingSteps[currentStep] = true
        return newLoadingSteps
      })

      // Auto-complete after 3 seconds
      setTimeout(() => {
        setLoadingSteps((prev) => {
          const newLoadingSteps = [...prev]
          newLoadingSteps[currentStep] = false
          return newLoadingSteps
        })
        if (currentStep < items.length - 1) {
          setCurrentStep(currentStep + 1)
        }
      }, 3000)
    }

    return (
      <VStack gap={6} w="100%">
        <HStack gap={4}>
          <Button type="button" onClick={prevStep} disabled={currentStep === 0} variant="outlined">
            Previous
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            disabled={currentStep === items.length - 1}
            variant="outlined"
          >
            Next
          </Button>
          <Button type="button" onClick={simulateLoading} variant="primary">
            Simulate Loading Current Step
          </Button>
          {items.map((item, index) => (
            <Button
              key={index}
              type="button"
              onClick={() => toggleLoading(index)}
              variant={loadingSteps[index] ? 'primary' : 'outlined'}
              size="sm"
            >
              {loadingSteps[index] ? `Stop Loading ${item.title}` : `Load ${item.title}`}
            </Button>
          ))}
        </HStack>

        <Stack w="100%" h="50vh">
          <Steps.Root
            count={items.length}
            orientation={args['orientation']}
            size={args['size']}
            step={currentStep}
          >
            <Steps.List>
              {items.map((item, index) => (
                <Steps.Item key={index} index={index}>
                  <Steps.Trigger>
                    <Steps.Indicator css={{ alignItems: 'center' }} loading={loadingSteps[index]}>
                      <span>{index + 1}</span>
                    </Steps.Indicator>
                    <span>{item.title}</span>
                  </Steps.Trigger>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {items.map((item, index) => (
              <Steps.Content key={index} index={index}>
                <VStack gap={2} align="center">
                  <Paragraph textStyle="bold">{item.title}</Paragraph>
                  <Paragraph>{item.description}</Paragraph>
                  {loadingSteps[index] && <Paragraph size="compact">Processing step...</Paragraph>}
                </VStack>
              </Steps.Content>
            ))}
          </Steps.Root>
        </Stack>
      </VStack>
    )
  },
}

export const DisabledState: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => {
    const [disabledSteps, setDisabledSteps] = useState([false, true, false])
    const [currentStep, setCurrentStep] = useState(0)

    const toggleDisabled = (index: number) => {
      setDisabledSteps((prev) => {
        const newDisabledSteps = [...prev]
        newDisabledSteps[index] = !newDisabledSteps[index]
        return newDisabledSteps
      })
    }

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
      if (!disabledSteps[step]) {
        setCurrentStep(step)
      }
    }

    return (
      <VStack gap={6} w="100%">
        <HStack gap={4}>
          <Button type="button" onClick={prevStep} disabled={currentStep === 0} variant="outlined">
            Previous
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            disabled={currentStep === items.length - 1}
            variant="outlined"
          >
            Next
          </Button>
          {items.map((item, index) => (
            <Button
              key={index}
              type="button"
              onClick={() => toggleDisabled(index)}
              variant={disabledSteps[index] ? 'primary' : 'outlined'}
              size="sm"
            >
              {disabledSteps[index] ? `Enable ${item.title}` : `Disable ${item.title}`}
            </Button>
          ))}
        </HStack>

        <Stack w="100%" h="50vh">
          <Steps.Root
            count={items.length}
            orientation={args['orientation']}
            size={args['size']}
            step={currentStep}
          >
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
              <Steps.Content key={index} index={index}>
                <VStack gap={2} align="center">
                  <Paragraph textStyle="bold">{item.title}</Paragraph>
                  <Paragraph>{item.description}</Paragraph>
                  {disabledSteps[index] && (
                    <Paragraph size="compact">This step is disabled</Paragraph>
                  )}
                </VStack>
              </Steps.Content>
            ))}
          </Steps.Root>
        </Stack>
      </VStack>
    )
  },
}

export const Dynamic: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => {
    const [dynamicItems, setDynamicItems] = useState([
      { value: 'first', title: 'First', description: 'Contact Info' },
      { value: 'second', title: 'Second', description: 'Date & Time' },
      { value: 'third', title: 'Third', description: 'Select Rooms' },
    ])
    const [currentStep, setCurrentStep] = useState(0)

    const addStep = () => {
      const stepNumber = dynamicItems.length + 1
      const newStep = {
        value: `step-${stepNumber}`,
        title: `Step ${stepNumber}`,
        description: `Description ${stepNumber}`,
      }
      setDynamicItems([...dynamicItems, newStep])
    }

    const removeStep = () => {
      if (dynamicItems.length > 1) {
        setDynamicItems(dynamicItems.slice(0, -1))
        // Adjust current step if it's beyond the new length
        if (currentStep >= dynamicItems.length - 1) {
          setCurrentStep(Math.max(0, dynamicItems.length - 2))
        }
      }
    }

    const markAllCompleted = () => {
      setCurrentStep(dynamicItems.length)
    }

    const resetSteps = () => {
      setCurrentStep(0)
    }

    return (
      <VStack gap={6} w="100%">
        <HStack gap={4}>
          <Button type="button" onClick={addStep} variant="primary">
            Add Step
          </Button>
          <Button
            type="button"
            onClick={removeStep}
            disabled={dynamicItems.length <= 1}
            variant="outlined"
          >
            Remove Step
          </Button>
          <Button type="button" onClick={markAllCompleted} variant="primary">
            Mark All Complete
          </Button>
          <Button type="button" onClick={resetSteps} variant="outlined">
            Reset
          </Button>
          <Box p={2} bg="gray.100">
            <Paragraph size="compact">
              Total Steps: {dynamicItems.length} | Current: {currentStep + 1}
            </Paragraph>
          </Box>
        </HStack>

        <Stack w="100%" h="50vh">
          <Steps.Root
            count={dynamicItems.length}
            orientation={args['orientation']}
            size={args['size']}
            step={currentStep}
          >
            <Steps.List>
              {dynamicItems.map((item, index) => (
                <Steps.Item key={`${item.value}-${index}`} index={index}>
                  <Steps.Trigger>
                    <Steps.Indicator css={{ alignItems: 'center' }}>
                      <span>{index + 1}</span>
                    </Steps.Indicator>
                    <span>{item.title}</span>
                  </Steps.Trigger>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {dynamicItems.map((item, index) => (
              <Steps.Content key={`${item.value}-${index}`} index={index}>
                {item.title} - {item.description}
              </Steps.Content>
            ))}
          </Steps.Root>
        </Stack>
      </VStack>
    )
  },
}
