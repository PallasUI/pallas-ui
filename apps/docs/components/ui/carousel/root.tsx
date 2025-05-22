import { carousel } from '@styled-system/recipes'
import type { Assign } from '@styled-system/types'
import { useEffect, useRef, useState } from 'react'
import { createStyleContext } from '@pallas-ui/style-context'
import type { RootProps } from '.'

export const { withProvider, withContext } = createStyleContext(carousel)

const Component = withProvider<
  React.ElementRef<'div'>,
  Assign<
    RootProps,
    {
      children: React.ReactNode
    }
  >
>('div', 'root')

export const Root = (props: RootProps) => {
  const { children, itemsVisible = 1, ...rest } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(0)

  const RootElement = useRef<HTMLDivElement>(null)
  const direction = useRef('fromLeft')

  useEffect(() => {
    setLength(RootElement.current?.getElementsByClassName('carousel__item').length || 0)
  }, [])

  useEffect(() => {
    updateItems(currentIndex)
  }, [currentIndex])

  const previous = () => {
    direction.current = 'fromLeft'
    setCurrentIndex((v) => (v === 0 ? length - 1 : v - 1))
  }

  const next = () => {
    direction.current = 'fromRight'
    setCurrentIndex((v) => (v === length - 1 ? 0 : v + 1))
  }

  const goTo = (index: number) => {
    if (index < 0 || index > length - 1)
      return console.error(
        `Index out of range: should from 0 till ${length - 1}. Received: ${index}`,
      )
    direction.current = index > currentIndex ? 'fromRight' : 'fromLeft'
    setCurrentIndex(index)
  }

  const updateItems = (index: number) => {
    const items = RootElement.current?.getElementsByClassName('carousel__item')
    if (!items) return

    const previousItem = RootElement.current?.querySelector('[data-visible]')
    if (previousItem) {
      Array.from(items).map((ele) => ele.removeAttribute('data-exit'))
      previousItem.setAttribute('data-exit', '')
    }

    for (let i = 0; i < items.length; i++) {
      items[i].removeAttribute('data-visible')
    }

    items[index].setAttribute('data-visible', direction.current)
  }

  return (
    <Component ref={RootElement} data-currentindex={currentIndex} {...rest}>
      {children({ previous, next, goTo, currentIndex })}
    </Component>
  )
}
