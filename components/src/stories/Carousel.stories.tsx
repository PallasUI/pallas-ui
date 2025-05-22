import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import Carousel from '../ui/carousel'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1740394846530-cc715503dc6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'lightskyblue',
  },
  {
    src: 'https://images.unsplash.com/photo-1740394800623-86314cdea5cc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'lightsalmon',
  },
  {
    src: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'hotpink',
  },
  {
    src: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'slateblue',
  },
]

const meta: Meta<typeof Carousel.Root> = {
  title: 'Components/Carousel',
  component: Carousel.Root,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel.Root>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (props) => (
    <Carousel.Root
      opts={{ axis: props.orientation === 'horizontal' ? 'x' : 'y' }}
      style={{ margin: 20 }}
      {...props}
    >
      <Carousel.List className={css({ height: 300 })}>
        {/* <img src={src} alt={`image-${i}`} /> */}
        {IMAGES.map((image, i) => (
          <Carousel.Item key={i} className={css({ flexBasis: 'full' })}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 30,
                fontWeight: 'bold',
                backgroundColor: image.color,
              }}
            >
              {i + 1}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.Previous>
        <ChevronLeft />
      </Carousel.Previous>
      <Carousel.Next>
        <ChevronRight />
      </Carousel.Next>

      <Carousel.Dots>
        {IMAGES.map((_, i) => (
          <Carousel.Dot key={i} index={i} />
        ))}
      </Carousel.Dots>
    </Carousel.Root>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: () => (
    <Carousel.Root opts={{ axis: 'y' }} style={{ margin: 20 }} orientation={'vertical'}>
      <Carousel.List className={css({ height: 300 })}>
        {IMAGES.map((image, i) => (
          <Carousel.Item key={i} className={css({ flexBasis: 'full' })}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 30,
                fontWeight: 'bold',
                backgroundColor: image.color,
              }}
            >
              {i + 1}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.List>
      <Carousel.Previous>
        <ChevronUp />
      </Carousel.Previous>
      <Carousel.Next>
        <ChevronDown />
      </Carousel.Next>
    </Carousel.Root>
  ),
}

export const Multiple: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: () => (
    <Carousel.Root
      opts={{ axis: 'x', align: 'start' }}
      style={{ margin: 20 }}
      orientation={'horizontal'}
    >
      <Carousel.List className={css({ height: 300 })}>
        {IMAGES.map((image, i) => (
          <Carousel.Item key={i} className={css({ flexBasis: '1/2' })}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 30,
                fontWeight: 'bold',
                backgroundColor: image.color,
              }}
            >
              {i + 1}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.List>
      <Carousel.Previous>
        <ChevronLeft />
      </Carousel.Previous>
      <Carousel.Next>
        <ChevronRight />
      </Carousel.Next>
    </Carousel.Root>
  ),
}
