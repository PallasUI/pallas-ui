import Tabs from '~/components/ui/tabs'

const TABS = [
  {
    id: '1',
    title: 'Tab 1',
    content: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: '2',
    title: 'Tab 2',
    content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur
      adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam,
      quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet
      consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit.
      Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet
      consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit.
      Quisquam, quos.`,
  },
  {
    id: '3',
    title: 'Tab 3',
    content: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

export default function Example() {
  return (
    <Tabs.Root defaultValue="1">
      <Tabs.TabList>
        <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
      </Tabs.TabList>
      {TABS.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
