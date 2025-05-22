import type useEmblaCarousel from 'embla-carousel-react'
import type { UseEmblaCarouselType } from 'embla-carousel-react'

export type CarouselApi = UseEmblaCarouselType[1]
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = UseCarouselParameters[0]
export type CarouselPlugin = UseCarouselParameters[1]

export type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}

export type CarouselRootProps = React.ComponentPropsWithoutRef<'section'> & CarouselProps

