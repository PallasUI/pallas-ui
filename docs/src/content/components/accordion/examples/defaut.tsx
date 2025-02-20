import { Item, ItemContent, ItemHeader, ItemTrigger, Root } from '~/components/ui/accordian'

export const AccordianExample = () => {
  return (
    <Root type="single" collapsible>
      <Item value="item-1">
        <ItemHeader>
          <ItemTrigger>Is it accessible?</ItemTrigger>
        </ItemHeader>
        <ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</ItemContent>
      </Item>
    </Root>
  )
}
