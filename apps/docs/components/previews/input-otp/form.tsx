'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import Form from '@/components/ui/form'
import InputOTP from '@/components/ui/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import { VStack } from '@styled-system/jsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  otp: z.string().min(6, 'OTP must be 6 digits'),
})

export default function FormExample() {
  const [showAlert, setShowAlert] = useState(false)
  const [otpCode, setOtpCode] = useState('')

  const form = useForm({
    defaultValues: {
      otp: '',
    },
    resolver: zodResolver(formSchema),
  })
  const handleSubmit = form.handleSubmit((data) => {
    setOtpCode(data.otp)
    setShowAlert(true)
  })

  return (
    <Form.Provider form={form} onSubmit={handleSubmit}>
      <VStack gap="1">
        <Form.Field
          name="otp"
          control={form.control}
          render={({ field }) => {
            return (
              <Form.Item>
                <Form.Label htmlFor="otp-form">Enter OTP</Form.Label>
                <Form.Control>
                  <InputOTP.Root maxLength={6} pattern="^[0-9]*$" {...field}>
                    <InputOTP.Group>
                      <InputOTP.Slot index={0} />
                      <InputOTP.Slot index={1} />
                      <InputOTP.Slot index={2} />
                      <InputOTP.Slot index={3} />
                      <InputOTP.Slot index={4} />
                      <InputOTP.Slot index={5} />
                    </InputOTP.Group>
                  </InputOTP.Root>
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )
          }}
        />
        <Button type="submit" css={{ my: 2 }}>
          Submit
        </Button>
        {showAlert && (
          <Alert variant={'info'}>
            <AlertTitle>You submitted:</AlertTitle>
            <AlertDescription>{otpCode}</AlertDescription>
          </Alert>
        )}
      </VStack>
    </Form.Provider>
  )
}
