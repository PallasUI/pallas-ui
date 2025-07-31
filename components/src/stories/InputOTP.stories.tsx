import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import InputOTP from '../ui/input-otp'

const meta: Meta<typeof InputOTP.Root> = {
  component: InputOTP.Root,
  title: 'Forms/InputOTP',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InputOTP.Root>

export const Default: Story = {
  argTypes: {
    styling: {
      description: 'Styling variants of InputOTP',
      control: 'inline-radio',
      options: ['outline', 'filled', 'underlined', 'borderless'],
    },
    slotSize: {
      description: 'Size of Slots',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      description: 'Shape of Slots',
      control: 'inline-check',
      options: ['rounded'],
    },
    maxLength: {
      description: 'Number of input slots',
      control: { type: 'number' },
    },
    pattern: {
      description: 'Valid input specified as a regex pattern',
      control: { type: 'select' },
      options: ['Numeric', 'Alphabetical', 'Alphanumeric'],
      mapping: {
        Numeric: '^[0-9]*$',
        Alphabetical: '^[a-zA-Z]*$',
        Alphanumeric: '^[a-zA-Z0-9]*$',
      },
    },
    dataStatus: {
      control: { type: 'inline-radio' },
      options: ['none', 'error', 'warning', 'success'],
      description: 'Status of data validation',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the InputOTP Component',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder for the slots',
    },
  },
  args: {
    styling: 'outline',
    slotSize: 'md',
    maxLength: 6,
    pattern: '^[a-zA-Z0-9]*$',
    dataStatus: 'none',
    disabled: false,
    placeholder: '-',
  },
  render: (props) => {
    return (
      <Stack align="flex-start" gap="6">
        <Stack align="flex-start" gap="1">
          <InputOTP.Root
            maxLength={props['maxLength']}
            pattern={props['pattern']}
            styling={props['styling']}
            slotSize={props['slotSize']}
            shape={props['shape']}
            dataStatus={props['dataStatus']}
            disabled={props['disabled']}
            placeholder={props['placeholder']}
          >
            <InputOTP.Group>
              {Array.from({ length: props['maxLength'] }).map((_, i) => (
                <InputOTP.Slot key={i} index={i} />
              ))}
            </InputOTP.Group>
          </InputOTP.Root>
        </Stack>
      </Stack>
    )
  },
}

const maxLength = 6
type Styling = 'outline' | 'filled' | 'underlined' | 'borderless'

const inputOTPVariants = [
  {
    label: 'Outline',
    styling: 'outline',
  },
  {
    label: 'Filled',
    styling: 'filled',
  },
  {
    label: 'Underlined',
    styling: 'underlined',
  },
  {
    label: 'Borderless',
    styling: 'borderless',
  },
]

export const StyleVariants = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Outline</Label>
      <InputOTP.Root maxLength={maxLength} styling="outline">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Filled</Label>
      <InputOTP.Root maxLength={maxLength} styling="filled">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Underlined</Label>
      <InputOTP.Root maxLength={maxLength} styling="underlined">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
    <Stack align="flex-start" gap="1">
      <Label>Borderless</Label>
      <InputOTP.Root maxLength={maxLength} styling="borderless">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
  </Stack>
)

export const SizeVariants = () => {
  return (
    <Stack align="flex-start" gap="6">
      <Stack align="flex-start" gap="1">
        <Label>Small</Label>
        <InputOTP.Root maxLength={maxLength} slotSize="sm">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
      <Stack align="flex-start" gap="1">
        <Label>Medium</Label>
        <InputOTP.Root maxLength={maxLength} slotSize="md">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
      <Stack align="flex-start" gap="1">
        <Label>Large</Label>
        <InputOTP.Root maxLength={maxLength} slotSize="lg">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    </Stack>
  )
}

export const ShapeVariants = () => {
  return (
    <Stack align="flex-start" gap="6">
      <Stack align="flex-start" gap="1">
        <Label>Default</Label>
        <InputOTP.Root maxLength={maxLength}>
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
      <Stack align="flex-start" gap="1">
        <Label>Rounded</Label>
        <InputOTP.Root maxLength={maxLength} shape="rounded">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    </Stack>
  )
}

export const WithSeparatorAndSeparateGroups = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root maxLength={maxLength} styling={variant.styling as Styling}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    ))}
  </Stack>
)

export const WithCustomPlaceholder = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <InputOTP.Root maxLength={maxLength} placeholder="X">
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
  </Stack>
)

export const DisabledState = () => {
  return (
    <Stack align="flex-start" gap="6">
      <Stack align="flex-start" gap="1">
        <InputOTP.Root maxLength={maxLength} disabled={true}>
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    </Stack>
  )
}

export const ErrorState = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root
          maxLength={maxLength}
          styling={variant.styling as Styling}
          dataStatus={'error'}
        >
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    ))}
  </Stack>
)

export const WarningState = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root
          maxLength={maxLength}
          styling={variant.styling as Styling}
          dataStatus={'warning'}
        >
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    ))}
  </Stack>
)

export const SuccessState = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root
          maxLength={maxLength}
          styling={variant.styling as Styling}
          dataStatus={'success'}
        >
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    ))}
  </Stack>
)
