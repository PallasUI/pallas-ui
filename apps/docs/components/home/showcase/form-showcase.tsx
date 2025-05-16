'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { css } from '@styled-system/css'
import { Box, HStack } from '@styled-system/jsx'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const FormShowcase = () => {
  return (
    <ShowcaseCard
      title="Contact Form"
      description="A simple contact form with validation and submission handling"
    >
      <form
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 'gap.component.md',
        })}
        onSubmit={(e) => e.preventDefault()}
      >
        <Box>
          <Label>Full Name</Label>
          <Input>
            <Input.Text id="name" placeholder="Enter your name" />
          </Input>
        </Box>

        <Box>
          <Label>Email Address</Label>
          <Input>
            <Input.Text id="email" placeholder="you@example.com" type="email" />
          </Input>
        </Box>

        <Box>
          <Label>Message</Label>
          <Textarea placeholder="Your message here..." />
        </Box>

        <HStack justify="flex-end" gap="3" mt="2">
          <Button variant="outlined">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </HStack>
      </form>
    </ShowcaseCard>
  )
}
