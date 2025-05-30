import Steps from '@/components/ui/steps'

const items = [
  { title: 'Contact Info', description: 'Your basic information' },
  { title: 'Date & Time', description: 'Select your preferred time' },
  { title: 'Confirmation', description: 'Review and confirm' },
]

export default function StepsPreview() {
  return (
    <Steps.Root count={items.length} orientation="horizontal" size="md">
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Trigger>
              <Steps.Indicator>{index + 1}</Steps.Indicator>
              <span>{item.title}</span>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {items.map((item, index) => (
        <Steps.Content key={index} index={index}>
          <div style={{ padding: '1rem' }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Steps.Content>
      ))}
    </Steps.Root>
  )
}
