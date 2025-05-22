import type useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import type { CarouselProps } from './types'

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  onDotButtonClick: (index: number) => void
  selectedIndex: number
  scrollSnaps: number[]
} & CarouselProps

export const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel.Root />')
  }

  return context
}
