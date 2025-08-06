# Input OTP

An accessible one-time-password input component built on top of [input-otp](https://input-otp.rodz.dev/)

## Features

- Variants based on style, shape and size that can be customized
- Validation state based styling for each variant
- Support for copy-paste and keyboard navigation
- TypeScript support

## Installation

```bash
npm install @your-scope/input-otp
```

## Usage

```tsx
import InputOTP from '@your-scope/input-otp'

function Example() {
  return (
        <InputOTP.Root maxLength={6}>
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
  )
}
```

## Components

- `InputOTP.Root` - The root element
- `InputOTP.Group` - The group wrapper element
- `InputOTP.Slot` - The input slot element
- `InputOTP.Separator` - A separator element

## Accessibility

The component follows WAI-ARIA patterns for slots navigation:
- Includes proper ARIA labels for accessibility
- Maintains keyboard navigation support
- Maintains copy-paste support

## License

MIT
