import { DayPicker } from '@/components/ui/daypicker'
import Popover from '@/components/ui/popover'
import { Slot } from '@radix-ui/react-slot'
import { css, cx } from '@styled-system/css'
import { type InputVariantProps, icon, input } from '@styled-system/recipes'
import { format } from 'date-fns'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Calendar } from 'lucide-react'
import React from 'react'

const InputContext = React.createContext<{
  id: string
  dataStatus?: 'error' | 'success' | 'warning'
} | null>(null)

// Hook to ensure components are used within InputRoot
const useInputContext = () => {
  const context = React.useContext(InputContext)
  if (!context) {
    throw new Error('Input components must be used within an Input component')
  }
  return context
}

// Root component
const InputRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    InputVariantProps & { 'data-status'?: 'error' | 'success' | 'warning' }
>(({ className, size, shape, 'data-status': dataStatus, ...props }, ref) => {
  const id = React.useId()
  const { root } = input({ size, shape })
  return (
    <InputContext.Provider value={{ id, dataStatus }}>
      <div ref={ref} className={cx(root, className)} {...props} />
    </InputContext.Provider>
  )
})
InputRoot.displayName = 'Input'

// Prefix component
const InputPrefix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    useInputContext()
    const { prefix } = input()
    return <div ref={ref} className={cx(prefix, className)} {...props} />
  },
)
InputPrefix.displayName = 'Input.Prefix'

// Postfix component
const InputPostfix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    useInputContext()
    const { postfix } = input()
    return <div ref={ref} className={cx(postfix, className)} {...props} />
  },
)
InputPostfix.displayName = 'Input.Postfix'

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  formatter?: (value: string) => string
  maxLength?: number
  showCount?: boolean
  status?: 'error' | 'success' | 'warning'
}

// Text input component
const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    { className, formatter, maxLength, showCount, status, onChange, value, defaultValue, ...props },
    ref,
  ) => {
    const { id, dataStatus } = useInputContext()
    const { field, charCount } = input()
    const [inputValue, setInputValue] = React.useState(value || defaultValue || '')
    const characterCount = String(inputValue).length

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value
      if (formatter) {
        newValue = formatter(newValue)
      }
      if (maxLength) {
        newValue = newValue.slice(0, maxLength)
      }
      setInputValue(newValue)
      onChange?.(e)
    }

    return (
      <div className={css({ position: 'relative', width: '100%', height: '100%' })}>
        <Slot className={css({ flexGrow: 1 })}>
          <input
            id={id}
            ref={ref}
            type="text"
            value={value ?? inputValue}
            onChange={handleChange}
            maxLength={maxLength}
            className={cx(field, className)}
            data-status={status || dataStatus}
            data-char-count={showCount}
            {...props}
          />
        </Slot>
        {showCount && maxLength && (
          <div className={charCount}>
            {characterCount}/{maxLength}
          </div>
        )}
      </div>
    )
  },
)
InputText.displayName = 'Input.Text'

type InputNumberProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  controls?: boolean
  step?: number
  min?: number
  max?: number
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ className, controls = true, step = 1, min, max, value, onChange, ...props }, ref) => {
    const { id, dataStatus } = useInputContext()
    const { field, control } = input()
    const [localValue, setLocalValue] = React.useState<number | undefined>(
      value !== undefined ? Number(value) : undefined,
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value === '' ? undefined : Number(e.target.value)
      setLocalValue(newValue)
      onChange?.(e)
    }

    const increment = () => {
      if (localValue === undefined) {
        const newValue = min ?? 0
        setLocalValue(newValue)
        simulateInputChange(newValue)
      } else {
        const newValue = Math.min(max ?? Number.POSITIVE_INFINITY, localValue + step)
        setLocalValue(newValue)
        simulateInputChange(newValue)
      }
    }

    const decrement = () => {
      if (localValue === undefined) {
        const newValue = min ?? 0
        setLocalValue(newValue)
        simulateInputChange(newValue)
      } else {
        const newValue = Math.max(min ?? Number.NEGATIVE_INFINITY, localValue - step)
        setLocalValue(newValue)
        simulateInputChange(newValue)
      }
    }

    // Helper function to simulate input change event
    const simulateInputChange = (newValue: number) => {
      const event = {
        target: { value: String(newValue) },
      } as React.ChangeEvent<HTMLInputElement>
      onChange?.(event)
    }

    return (
      <div className={css({ display: 'flex', alignItems: 'center', width: '100%' })}>
        <Slot className={css({ flexGrow: 1, position: 'relative' })}>
          <input
            id={id}
            ref={ref}
            type="number"
            value={value ?? localValue ?? ''}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            data-status={dataStatus}
            className={cx(
              field,
              css({
                // Hide browser default spinners
                WebkitAppearance: 'textfield',
                appearance: 'textfield',
              }),
              className,
            )}
            {...props}
          />
        </Slot>
        {controls && (
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '0.125rem',
            })}
          >
            <button
              type="button"
              onClick={increment}
              disabled={localValue !== undefined && localValue >= (max ?? Number.POSITIVE_INFINITY)}
              className={control}
            >
              <ChevronUp size={14} />
            </button>
            <button
              type="button"
              onClick={decrement}
              disabled={localValue !== undefined && localValue <= (min ?? Number.NEGATIVE_INFINITY)}
              className={control}
            >
              <ChevronDown size={14} />
            </button>
          </div>
        )}
      </div>
    )
  },
)
InputNumber.displayName = 'Input.Number'

type InputDayPickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> & {
  value?: Date
  onChange?: (date: Date | undefined) => void
  format?: string
  placeholder?: string
}

const InputDayPicker = React.forwardRef<HTMLInputElement, InputDayPickerProps>(
  (
    { className, value, onChange, format: formatStr = 'PP', placeholder = 'Pick a date', ...props },
    ref,
  ) => {
    const { id, dataStatus } = useInputContext()
    const { field, postfix } = input()
    const [selected, setSelected] = React.useState<Date | undefined>(value)

    // Update internal state when value prop changes
    React.useEffect(() => {
      setSelected(value)
    }, [value])

    const handleSelect = (date: Date | undefined) => {
      setSelected(date)
      onChange?.(date)
    }

    return (
      <Popover.Root>
        <Popover.Trigger className={css({ display: 'flex', width: '100%' })}>
          <div className={css({ position: 'relative', width: '100%', display: 'flex' })}>
            <Slot className={css({ flexGrow: 1 })}>
              <input
                id={id}
                ref={ref}
                type="text"
                readOnly
                value={selected ? format(selected, formatStr) : ''}
                placeholder={placeholder}
                data-status={dataStatus}
                className={cx(field, className)}
                {...props}
              />
            </Slot>
            <div className={postfix}>
              <Calendar className={icon()} />
            </div>
          </div>
        </Popover.Trigger>
        <Popover.Content>
          <DayPicker mode="single" selected={selected} onSelect={handleSelect} />
        </Popover.Content>
      </Popover.Root>
    )
  },
)

InputDayPicker.displayName = 'Input.DayPicker'

// Update the Input export
export const Input = Object.assign(InputRoot, {
  Prefix: InputPrefix,
  Postfix: InputPostfix,
  Text: InputText,
  Number: InputNumber,
  DayPicker: InputDayPicker,
})
