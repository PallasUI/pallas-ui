# Carousel

A flexible and accessible carousel component built with embla-carousel-react.

## Features

- Support for multiple slides per screen
- Navigate by swipe and buttons
- Customizable and clickable dot buttons
- Extendable using plugins provided by embla
- TypeScript support

## Installation

```bash
npm install @pallas-ui/carousel
```

## Usage

```tsx
import * as Carousel from '@pallas-ui/carousel'

function Example() {
  return (
    <Carousel.Root>
      <Carousel.List>
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
      </Carousel.List>

      <Carousel.Previous></Carousel.Previous>
      <Carousel.Next></Carousel.Next>

      <Carousel.Dots>
        <Carousel.Dot/>
        <Carousel.Dot/>
        <Carousel.Dot/>
      </Carousel.Dots>
    </Carousel.Root>
  )
}
```

## Components

Root, 
List, 
Item, 
Next,
Previous, 
Dots, 
Dot, 
useCarousel

- `Carousel.Root` - The root element
- `Carousel.List` - The wrapper element for carousel items
- `Carousel.Item` - The wrapper element for an item (slide)
- `Carousel.Previous` - The previous button
- `Carousel.Next` - The next button
- `Carousel.Dots` - The wrapper element for navigation dots
- `Carousel.Dot` - The button element for a dot

- `Carousel.useCarousel` - The hook provides handlers, refs, states etc

## Accessibility

The component follows WAI-ARIA patterns for sidebar navigation:
- Uses semantic HTML elements (`section`, `button`)
- Includes proper ARIA labels and roles
- Maintains keyboard navigation support
- Provides screen reader friendly structure

## License

MIT
