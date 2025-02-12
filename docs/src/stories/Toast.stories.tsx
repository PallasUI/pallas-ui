import type { Meta, StoryObj } from '@storybook/react'
import { token } from '@styled-system/tokens'
import { CircleCheck, Info, X, XCircle } from 'lucide-react'
import { Button, type ButtonProps } from '~/ui/button'
import Toast, { Provider, Viewport, type ToastPropTypes } from '~/ui/toast'

const meta: Meta<ToastPropTypes> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  render: ({ ...props }) => (
    <div style={{ height: 300 }}>
      <Provider>
        <Viewport placement={props.placement} />
        <Toast.Root open={true} {...props}>
          <Toast.Title>{props.title}</Toast.Title>
          <Toast.Description>{props.description}</Toast.Description>
          <Toast.Close asChild>
            <Button variant="text" aria-label="Close">
              <X aria-hidden size={20} />
            </Button>
          </Toast.Close>
        </Toast.Root>
      </Provider>
    </div>
  ),
  argTypes: {
    variant: {
      options: ['shadow', 'bordered'],
      control: 'inline-radio',
    },
    placement: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: 'inline-radio',
    },
  },
  decorators: [],
}

export default meta

type Story = StoryObj<typeof meta>

const TITLE = 'This is a title'
const DESCRIPTION = `when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries. when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries.`
const SHORT_DESCRIPTION =
  'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
const ACTIONS = [
  {
    key: '1',
    label: 'Action 1',
    buttonProps: {
      variant: 'outlined',
    } as ButtonProps,
  },
  {
    key: '2',
    label: 'Action 2',
  },
]

export const Default: Story = {
  args: {
    title: TITLE,
    description: DESCRIPTION,
    variant: 'bordered',
    placement: 'topRight',
  },
}

export const Variants = () => (
  <Provider>
    <Viewport />

    <Toast.Root>
      <Toast.Title>Auto hides after 5s</Toast.Title>
      <Toast.Description>{SHORT_DESCRIPTION}</Toast.Description>
    </Toast.Root>

    <Toast.Root duration={10000}>
      <Toast.Title>Auto hides after 10s</Toast.Title>
      <Toast.Description>{SHORT_DESCRIPTION}</Toast.Description>
    </Toast.Root>

    <Toast.Root open={true}>
      <Toast.Description>Toast without title, only description</Toast.Description>
    </Toast.Root>

    <Toast.Root open={true} variant="shadow">
      <Toast.Title>Toast with Shadow & Actions</Toast.Title>
      <Toast.Actions>
        {ACTIONS.map(({ key, label, buttonProps }) => (
          <Toast.Action key={key} asChild altText={label}>
            <Button size="sm" {...buttonProps}>
              {label}
            </Button>
          </Toast.Action>
        ))}
      </Toast.Actions>
      <Toast.Close asChild>
        <Button variant="text" aria-label="Close">
          <X aria-hidden size={20} />
        </Button>
      </Toast.Close>
    </Toast.Root>

    <Toast.Root open={true}>
      <Toast.Icon>
        <Info />
      </Toast.Icon>
      <Toast.Title>Toast with icon, actions and close</Toast.Title>
      <Toast.Description>{DESCRIPTION}</Toast.Description>
      <Toast.Close asChild>
        <Button variant="text" aria-label="Close">
          <X aria-hidden size={20} />
        </Button>
      </Toast.Close>
      <Toast.Actions>
        {ACTIONS.map(({ key, label, buttonProps }) => (
          <Toast.Action key={key} asChild altText={label}>
            <Button size="sm" {...buttonProps}>
              {label}
            </Button>
          </Toast.Action>
        ))}
      </Toast.Actions>
    </Toast.Root>

    <Toast.Root open={true}>
      <Toast.Icon>
        <Info color={token('colors.warning')} />
      </Toast.Icon>
      <Toast.Title>Toast with warning icon</Toast.Title>
    </Toast.Root>

    <Toast.Root open={true}>
      <Toast.Icon>
        <XCircle color={token('colors.error')} />
      </Toast.Icon>
      <Toast.Title>Toast with error icon</Toast.Title>
    </Toast.Root>

    <Toast.Root open={true}>
      <Toast.Icon>
        <CircleCheck color={token('colors.success')} />
      </Toast.Icon>
      <Toast.Title>Toast with success icon</Toast.Title>
    </Toast.Root>
  </Provider>
)

export const Placement = () => (
  <>
    <Provider>
      <Viewport placement="bottomLeft" />
      <Toast.Root open={true} placement="bottomLeft">
        <Toast.Icon>
          <Info color={token('colors.info')} />
        </Toast.Icon>
        <Toast.Title>Toast from Bottom Left</Toast.Title>
        <Toast.Description>{SHORT_DESCRIPTION}</Toast.Description>
      </Toast.Root>
    </Provider>

    <Provider>
      <Viewport placement="bottomRight" />
      <Toast.Root open={true} placement="bottomRight">
        <Toast.Icon>
          <Info color={token('colors.info')} />
        </Toast.Icon>
        <Toast.Title>Toast from Bottom Right</Toast.Title>
        <Toast.Description>{SHORT_DESCRIPTION}</Toast.Description>
      </Toast.Root>
    </Provider>

    <Provider>
      <Viewport placement="topRight" />
      <Toast.Root open={true} placement="topRight">
        <Toast.Icon>
          <Info color={token('colors.info')} />
        </Toast.Icon>
        <Toast.Title>Toast from Top Right</Toast.Title>
        <Toast.Description>{SHORT_DESCRIPTION}</Toast.Description>
      </Toast.Root>
    </Provider>

    <Provider>
      <Viewport placement="topLeft" />
      <Toast.Root open={true} placement="topLeft">
        <Toast.Icon>
          <Info color={token('colors.info')} />
        </Toast.Icon>
        <Toast.Title>Toast from Top Left</Toast.Title>
        <Toast.Description>{SHORT_DESCRIPTION}</Toast.Description>
      </Toast.Root>
    </Provider>
  </>
)
