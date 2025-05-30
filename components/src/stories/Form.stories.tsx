import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { HStack, VStack } from '@styled-system/jsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Checkbox } from '~/ui/checkbox'
import { Label } from '~/ui/label'
import { Button } from '../ui/button'
import Form from '../ui/form'
import { Input } from '../ui/input'
import RadioGroup from '../ui/radio-group'

const meta: Meta<typeof Form.Provider> = {
  component: Form.Provider,
  title: 'Forms/Form',
  subcomponents: {},
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  agree: z.boolean(),
  gender: z.string().min(1, 'Select one option'),
})

export const Default: Story = {
  args: {
    children: 'Pallas UI',
  },
  render: () => {
    const form = useForm({
      defaultValues: {
        name: '',
        agree: false,
        gender: '',
      },
      resolver: zodResolver(formSchema),
    })

    const handleSubmit = form.handleSubmit((data) => {
      console.log(data)
    })

    return (
      <Form.Provider form={form} onSubmit={handleSubmit}>
        <VStack gap="4">
          <VStack gap="0">
            <Form.Field
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <Form.Item>
                    <Form.Label>Name</Form.Label>
                    <Form.Control>
                      <Input>
                        <Input.Text placeholder="Enter your name" {...field} />
                      </Input>
                    </Form.Control>
                    <Form.Description>Both first and last name are required</Form.Description>
                    <Form.Message />
                  </Form.Item>
                )
              }}
            />
          </VStack>
          <VStack gap="0">
            <Form.Field
              name="agree"
              control={form.control}
              render={({ field }) => {
                return (
                  <Form.Item>
                    <Form.Label>Are you above 18?</Form.Label>
                    <Form.Control>
                      <HStack gap="2">
                        <Checkbox
                          id="checkbox-1"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                        />
                        <Label htmlFor="checkbox-1">I am above 18</Label>
                      </HStack>
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )
              }}
            />
          </VStack>
          <VStack gap="0">
            <Form.Field
              name="gender"
              control={form.control}
              render={({ field }) => {
                return (
                  <Form.Item>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control>
                      <RadioGroup.Root
                        {...field}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <HStack gap="2">
                          <RadioGroup.Item value="male" id="r1" />
                          <Label htmlFor="r1">Male</Label>
                        </HStack>
                        <HStack gap="2">
                          <RadioGroup.Item value="female" id="r2" />
                          <Label htmlFor="r2">Female</Label>
                        </HStack>
                      </RadioGroup.Root>
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )
              }}
            />
          </VStack>
          <Button type="submit">Submit</Button>
        </VStack>
      </Form.Provider>
    )
  },
}
