import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { Stack, VStack } from '@styled-system/jsx'
import { Check, Plus } from 'lucide-react'
import { useState } from 'react'
import { type ControllerRenderProps, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/ui/button'
import Combobox from '~/ui/combobox'
import Form from '~/ui/form'
import { Label } from '~/ui/label'

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'blueberry',
    label: 'Blueberry',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
  {
    value: 'pineapple',
    label: 'Pineapple',
  },
]

const vegetables = [
  {
    value: 'carrot',
    label: 'Carrot',
  },
  {
    value: 'celery',
    label: 'Celery',
  },
  {
    value: 'cucumber',
    label: 'Cucumber',
  },
  {
    value: 'lettuce',
    label: 'Lettuce',
  },
  {
    value: 'onion',
    label: 'Onion',
  },
]

const meta: Meta = {
  title: 'Forms/Combobox',
  render: (_args) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
      <Combobox.Root open={open} onOpenChange={setOpen}>
        <Combobox.Trigger className={css({ w: 200 })} placeholder="Select fruit...">
          {value && fruits.find((fruit) => fruit.value === value)?.label}
        </Combobox.Trigger>
        <Combobox.Content placeholder="Search fruit..." className={css({ w: 200 })}>
          <Combobox.Group heading="Fruit">
            {fruits.map((fruit) => (
              <Combobox.Item
                key={fruit.value}
                value={fruit.value}
                onSelect={(newValue) => {
                  if (newValue === value) {
                    setValue('')
                  } else {
                    setValue(newValue)
                  }
                  setOpen(false)
                }}
                selected={value === fruit.value}
                icon={
                  <Check
                    className={css({
                      visibility: value === fruit.value ? 'visible' : 'hidden',
                    })}
                  />
                }
              >
                {fruit.label}
              </Combobox.Item>
            ))}
          </Combobox.Group>
        </Combobox.Content>
      </Combobox.Root>
    )
  },
  component: Combobox.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  args: {},
}

type Item<T = string> = {
  value: T
  label: string
}

type Side = 'left' | 'bottom' | 'top' | 'right'
const sides: Item<Side>[] = [
  {
    value: 'left',
    label: 'Left',
  },
  {
    value: 'bottom',
    label: 'Bottom',
  },
  {
    value: 'top',
    label: 'Top',
  },
  {
    value: 'right',
    label: 'Right',
  },
]

export const withPopover: Story = {
  render: (_args) => {
    const [open, setOpen] = useState(false)
    const [popoverSide, setPopoverSide] = useState<Item<Side> | null>(null)

    return (
      <Combobox.Root open={open} onOpenChange={setOpen}>
        <Combobox.Trigger css={{ w: 200 }} icon={<Plus />} placeholder="Set side">
          {popoverSide?.label}
        </Combobox.Trigger>
        <Combobox.Content side={popoverSide?.value ?? 'bottom'} className={css({ w: 200 })}>
          <Combobox.Group heading="Side">
            {sides.map((side) => (
              <Combobox.Item
                key={side.value}
                value={side.value}
                onSelect={() => {
                  setPopoverSide(side)
                  setOpen(false)
                }}
                icon={
                  <Check
                    className={css({
                      visibility: popoverSide?.value === side.value ? 'visible' : 'hidden',
                    })}
                  />
                }
              >
                {side.label}
              </Combobox.Item>
            ))}
          </Combobox.Group>
        </Combobox.Content>
      </Combobox.Root>
    )
  },
  decorators: [
    (Story) => (
      <>
        <p
          className={css({
            color: '{colors.text.secondary}',
          })}
        >
          Side
        </p>
        <Story />
      </>
    ),
  ],
}

const ComboboxInner = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <Combobox.Trigger css={{ w: 200 }} placeholder="Select fruit...">
        {value && fruits.find((fruit) => fruit.value === value)?.label}
      </Combobox.Trigger>
      <Combobox.Content placeholder="Search fruit..." css={{ w: 200 }}>
        <Combobox.Group heading="Fruit">
          {fruits.map((fruit) => (
            <Combobox.Item
              key={fruit.value}
              value={fruit.value}
              onSelect={(newValue) => {
                if (newValue === value) {
                  setValue('')
                } else {
                  setValue(newValue)
                }
                setOpen(false)
              }}
              selected={value === fruit.value}
              icon={
                <Check
                  className={css({
                    visibility: value === fruit.value ? 'visible' : 'hidden',
                  })}
                />
              }
            >
              {fruit.label}
            </Combobox.Item>
          ))}
        </Combobox.Group>
      </Combobox.Content>
    </>
  )
}

export const Variants: Story = {
  render: (_args) => {
    const [openSm, setOpenSm] = useState(false)
    const [openMd, setOpenMd] = useState(false)
    const [openLg, setOpenLg] = useState(false)
    const [openBorderless, setOpenBorderless] = useState(false)
    return (
      <Stack>
        <h3>Combobox Styles</h3>
        <Stack>
          <Label>Outline</Label>
          <Combobox.Root styling="outline" open={openSm} onOpenChange={setOpenSm}>
            <ComboboxInner setOpen={setOpenSm} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Filled</Label>
          <Combobox.Root styling="filled" open={openMd} onOpenChange={setOpenMd}>
            <ComboboxInner setOpen={setOpenMd} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Underlined</Label>
          <Combobox.Root styling="underlined" open={openLg} onOpenChange={setOpenLg}>
            <ComboboxInner setOpen={setOpenLg} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Borderless</Label>
          <Combobox.Root
            styling="borderless"
            open={openBorderless}
            onOpenChange={setOpenBorderless}
          >
            <ComboboxInner setOpen={setOpenBorderless} />
          </Combobox.Root>
        </Stack>
      </Stack>
    )
  },
}
export const Sizes: Story = {
  render: (_args) => {
    const [openSm, setOpenSm] = useState(false)
    const [openMd, setOpenMd] = useState(false)
    const [openLg, setOpenLg] = useState(false)
    return (
      <Stack>
        <h3>Combobox Sizes</h3>
        <Stack>
          <Label>Small</Label>
          <Combobox.Root size="sm" open={openSm} onOpenChange={setOpenSm}>
            <ComboboxInner setOpen={setOpenSm} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Medium</Label>
          <Combobox.Root size="md" open={openMd} onOpenChange={setOpenMd}>
            <ComboboxInner setOpen={setOpenMd} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Large</Label>
          <Combobox.Root size="lg" open={openLg} onOpenChange={setOpenLg}>
            <ComboboxInner setOpen={setOpenLg} />
          </Combobox.Root>
        </Stack>
      </Stack>
    )
  },
}

export const ValidationStates: Story = {
  render: (_args) => {
    const [openErr, setOpenErr] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openWarn, setOpenWarn] = useState(false)
    return (
      <Stack>
        <h3>Combobox Validation states</h3>
        <Stack>
          <Label>Error</Label>
          <Combobox.Root data-status="error" open={openErr} onOpenChange={setOpenErr}>
            <ComboboxInner setOpen={setOpenErr} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Success</Label>
          <Combobox.Root data-status="success" open={openSuccess} onOpenChange={setOpenSuccess}>
            <ComboboxInner setOpen={setOpenSuccess} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Warning</Label>
          <Combobox.Root data-status="warning" open={openWarn} onOpenChange={setOpenWarn}>
            <ComboboxInner setOpen={setOpenWarn} />
          </Combobox.Root>
        </Stack>
      </Stack>
    )
  },
}

export const Radii: Story = {
  render: (_args) => {
    const [openErr, setOpenErr] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openWarn, setOpenWarn] = useState(false)
    const [openFull, setOpenFull] = useState(false)
    return (
      <Stack>
        <h3>Combobox border radii</h3>
        <Stack>
          <Label>Small</Label>
          <Combobox.Root radii="sm" open={openErr} onOpenChange={setOpenErr}>
            <ComboboxInner setOpen={setOpenErr} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Medium</Label>
          <Combobox.Root radii="md" open={openSuccess} onOpenChange={setOpenSuccess}>
            <ComboboxInner setOpen={setOpenSuccess} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Large</Label>
          <Combobox.Root radii="lg" open={openWarn} onOpenChange={setOpenWarn}>
            <ComboboxInner setOpen={setOpenWarn} />
          </Combobox.Root>
        </Stack>
        <Stack>
          <Label>Full</Label>
          <Combobox.Root radii="full" open={openFull} onOpenChange={setOpenFull}>
            <ComboboxInner setOpen={setOpenFull} />
          </Combobox.Root>
        </Stack>
      </Stack>
    )
  },
}

export const Multiple: Story = {
  render: (_args) => {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState<string[]>([])

    return (
      <Combobox.Root open={open} onOpenChange={setOpen}>
        <Combobox.Trigger className={css({ w: 200 })} placeholder="Select fruit...">
          {values.length > 0 &&
            values
              .map((value) => fruits.find((fruit) => fruit.value === value)?.label)
              .filter(Boolean)
              .join(', ')}
        </Combobox.Trigger>
        <Combobox.Content placeholder="Search fruit..." className={css({ w: 200 })}>
          <Combobox.Group heading="Fruit">
            {fruits.map((fruit) => (
              <Combobox.Item
                key={fruit.value}
                value={fruit.value}
                onSelect={(newValue) => {
                  if (values.includes(newValue)) {
                    setValues((prev) => prev.filter((v) => v !== newValue))
                  } else {
                    setValues((prev) => [...prev, newValue])
                  }
                }}
                selected={values.includes(fruit.value)}
                icon={
                  <Check
                    className={css({
                      visibility: values.includes(fruit.value) ? 'visible' : 'hidden',
                    })}
                  />
                }
              >
                {fruit.label}
              </Combobox.Item>
            ))}
          </Combobox.Group>
        </Combobox.Content>
      </Combobox.Root>
    )
  },
}

export const Groups: Story = {
  render: (_args) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const handleSelect = (newValue: string) => {
      if (newValue === value) {
        setValue('')
      } else {
        setValue(newValue)
      }
      setOpen(false)
    }

    return (
      <Combobox.Root open={open} onOpenChange={setOpen}>
        <Combobox.Trigger className={css({ w: 200 })} placeholder="Select fruit...">
          {value && [...fruits, ...vegetables].find((fruit) => fruit.value === value)?.label}
        </Combobox.Trigger>
        <Combobox.Content placeholder="Search fruit..." className={css({ w: 200 })}>
          <Combobox.Group heading="Fruit">
            {fruits.map((fruit) => (
              <Combobox.Item
                key={fruit.value}
                value={fruit.value}
                onSelect={handleSelect}
                selected={value === fruit.value}
                icon={
                  <Check
                    className={css({
                      visibility: value === fruit.value ? 'visible' : 'hidden',
                    })}
                  />
                }
              >
                {fruit.label}
              </Combobox.Item>
            ))}
          </Combobox.Group>
          <Combobox.Separator />
          <Combobox.Group heading="Vegetables">
            {vegetables.map((vegetable) => (
              <Combobox.Item
                key={vegetable.value}
                value={vegetable.value}
                onSelect={handleSelect}
                selected={value === vegetable.value}
                icon={
                  <Check
                    className={css({
                      visibility: value === vegetable.value ? 'visible' : 'hidden',
                    })}
                  />
                }
              >
                {vegetable.label}
              </Combobox.Item>
            ))}
          </Combobox.Group>
        </Combobox.Content>
      </Combobox.Root>
    )
  },
}

const schema = z.object({
  fruit: z
    .enum(['apple', 'banana', 'blueberry', 'grapes', 'pineapple'])
    .array()
    .max(3, 'More than 3 fruits selected'),
})

type Fruit = z.infer<typeof schema>['fruit'][number]

export const withForm: Story = {
  render: (_args) => {
    const form = useForm({
      defaultValues: {
        fruit: [],
      },
      resolver: zodResolver(schema),
    })

    const handleSubmit = (data: z.infer<typeof schema>) => {}

    const [open, setOpen] = useState(false)

    const handleSelect = (
      newValue: Fruit,
      field: ControllerRenderProps<{ fruit: Fruit[] }, 'fruit'>,
    ) => {
      if (field.value.includes(newValue as Fruit)) {
        field.onChange(field.value.filter((v) => v !== newValue))
      } else {
        field.onChange([...field.value, newValue])
      }
    }

    const triggerText = (field: ControllerRenderProps<{ fruit: Fruit[] }, 'fruit'>) =>
      field.value.length > 0 &&
      field.value.map((fruit) => fruits.find((f) => f.value === fruit)?.label).join(', ')

    return (
      <Form.Provider form={form} onSubmit={form.handleSubmit(handleSubmit)}>
        <VStack gap="4">
          <VStack gap="0.5">
            <Form.Field
              name="fruit"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label htmlFor="fruit">Fruit</Form.Label>
                  <Form.Control>
                    <Combobox.Root open={open} onOpenChange={setOpen}>
                      <Combobox.Trigger id="fruit" css={{ w: 200 }} placeholder="Select fruit...">
                        {triggerText(field)}
                      </Combobox.Trigger>
                      <Combobox.Content placeholder="Search fruit..." css={{ w: 200 }} side="top">
                        <Combobox.Group heading="Fruits">
                          {fruits.map((fruit) => (
                            <Combobox.Item
                              key={fruit.value}
                              value={fruit.value}
                              onSelect={(newValue) => handleSelect(newValue as Fruit, field)}
                              icon={
                                <Check
                                  className={css({
                                    visibility: field.value.includes(fruit.value as Fruit)
                                      ? 'visible'
                                      : 'hidden',
                                  })}
                                />
                              }
                            >
                              {fruit.label}
                            </Combobox.Item>
                          ))}
                        </Combobox.Group>
                      </Combobox.Content>
                    </Combobox.Root>
                  </Form.Control>
                  <Form.Description>Select up to 3 fruits</Form.Description>
                  <Form.Message />
                </Form.Item>
              )}
            />
          </VStack>
          <Button type="submit">Submit</Button>
        </VStack>
      </Form.Provider>
    )
  },
}
