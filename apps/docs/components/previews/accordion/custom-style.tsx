import Accordion from '@/components/ui/accordion'
import { sva } from '@styled-system/css'
import { Plus } from 'lucide-react'

// Custom accordion recipe that overrides default styles
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

export default function AccordionCustomStylePreview() {
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
