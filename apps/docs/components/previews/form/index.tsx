'use client'

import { Button } from '@/components/ui/button'
import Form from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { VStack } from '@styled-system/jsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export default function FormPreview() {
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })

  const handleSubmit = (data: z.infer<typeof schema>) => {}

  return (
    <Form.Provider form={form} onSubmit={form.handleSubmit(handleSubmit)}>
      <VStack gap="4">
        <VStack gap="0.5">
          <Form.Field
            name="email"
            control={form.control}
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Input>
                    <Input.Text placeholder="Enter your email" {...field} />
                  </Input>
                </Form.Control>
                <Form.Description>Only work emails are allowed</Form.Description>
                <Form.Message />
              </Form.Item>
            )}
          />
        </VStack>
        <Button type="submit">Submit</Button>
      </VStack>
    </Form.Provider>
  )
}
