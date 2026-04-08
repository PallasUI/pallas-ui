import type { Meta, StoryObj } from '@storybook/react'
import { sva } from '@styled-system/css/sva.mjs'
import { ChevronDown, Plus } from 'lucide-react'
import Accordion from '~/ui/accordion'

const meta: Meta<typeof Accordion.Root> = {
  component: Accordion.Root,
  title: 'Components/Accordion',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Accordion.Root type="single" collapsible={true} defaultValue={'0'}>
    <Accordion.Item value="0">
      <Accordion.ItemHeader>
        Accordion Header
        <Accordion.ItemTrigger>
          <ChevronDown />
        </Accordion.ItemTrigger>
      </Accordion.ItemHeader>
      <Accordion.ItemContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
)

export const Multiple = () => (
  <Accordion.Root type="multiple" collapsible={true} defaultValue={'0'}>
    <Accordion.Item value="0">
      <Accordion.ItemHeader>
        Accordion Header
        <Accordion.ItemTrigger>
          <ChevronDown />
        </Accordion.ItemTrigger>
      </Accordion.ItemHeader>
      <Accordion.ItemContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Accordion.ItemContent>
    </Accordion.Item>
    <Accordion.Item value="1">
      <Accordion.ItemHeader>
        Accordion Header 2
        <Accordion.ItemTrigger>
          <ChevronDown />
        </Accordion.ItemTrigger>
      </Accordion.ItemHeader>
      <Accordion.ItemContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Accordion.ItemContent>
    </Accordion.Item>
    <Accordion.Item value="2">
      <Accordion.ItemHeader>
        Accordion Header 3
        <Accordion.ItemTrigger>
          <ChevronDown />
        </Accordion.ItemTrigger>
      </Accordion.ItemHeader>
      <Accordion.ItemContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
)

export const CustomStyles = () => {
  const customAccordion = sva({
    slots: ['root', 'item', 'itemHeader', 'itemContent', 'itemTrigger'],
    base: {
      root: {
        width: '100%',
        border: '2px solid var(--colors-primary-300)',
        borderRadius: 'var(--radii-xl)',
        backgroundColor: 'var(--colors-bg-muted)',
      },
      item: {
        borderWidth: 0,
      },
      itemHeader: {
        backgroundColor: 'var(--colors-primary-100)',
      },
      itemContent: {
        borderWidth: 0,
      },
    },
  })

  const styles = customAccordion()
  return (
    <Accordion.Root type="single" className={styles.root}>
      <Accordion.Item value="item-1" className={styles.item}>
        <Accordion.ItemHeader className={styles.itemHeader}>
          Custom Styling Example
          <Accordion.ItemTrigger className={styles.itemTrigger}>
            <Plus />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent className={styles.itemContent}>
          You can customize the accordion&apos;s appearance with inline styles or by using the
          styling system.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-2" className={styles.item}>
        <Accordion.ItemHeader className={styles.itemHeader}>
          Different Icons
          <Accordion.ItemTrigger className={styles.itemTrigger}>
            <Plus />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent className={styles.itemContent}>
          You can use any icon from Lucide or other icon libraries.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
