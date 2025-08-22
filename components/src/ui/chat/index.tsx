'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { chat } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import PallasAvatar from '../avatar'
import { Check } from 'lucide-react'

const { withProvider, withContext } = createStyleContext(chat)

// Custom Avatar component
const CustomAvatar = React.forwardRef<
  React.ComponentRef<typeof PallasAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof PallasAvatar.Root> & {
    src?: string
    alt?: string
    fallback?: string | React.ReactNode
  }
>(({ src, alt, fallback, children, ...props }, ref) => (
  <PallasAvatar.Root ref={ref} {...props}>
    {src && <PallasAvatar.Image src={src} alt={alt} />}
    <PallasAvatar.Fallback>{fallback || children}</PallasAvatar.Fallback>
  </PallasAvatar.Root>
))
CustomAvatar.displayName = 'Avatar'

// Custom TextArea component with enhanced functionality and auto-resize
const CustomTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    onSend?: (value: string) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    minHeight?: number
    maxHeight?: number
  }
>(({ onSend, onKeyDown, minHeight, maxHeight, ...props }, ref) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  // Merge refs
  React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement)

  // Get min/max heights from CSS custom properties or fallback to props/defaults
  const getHeightValues = React.useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) {
      return {
        min: minHeight ?? 30,
        max: maxHeight ?? 120,
      }
    }

    const computedStyle = getComputedStyle(textarea)
    const minFromCSS = computedStyle.getPropertyValue('--textarea-min-height').trim()
    const maxFromCSS = computedStyle.getPropertyValue('--textarea-max-height').trim()

    return {
      min: minFromCSS ? Number.parseInt(minFromCSS, 10) : (minHeight ?? 30),
      max: maxFromCSS ? Number.parseInt(maxFromCSS, 10) : (maxHeight ?? 120),
    }
  }, [minHeight, maxHeight])

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const { min, max } = getHeightValues()

    // Check if textarea is empty
    const isEmpty = !textarea.value.trim()

    if (isEmpty) {
      textarea.style.height = `${min}px`
      textarea.style.overflowY = 'hidden'
      return
    }

    // Calculate if content needs more than one line
    // First, set height to minimum to get baseline measurement
    textarea.style.height = `${min}px`

    // Check if content overflows at minimum height
    const isOverflowing = textarea.scrollHeight > min

    if (!isOverflowing) {
      // Content fits in one line, keep minimum height
      textarea.style.height = `${min}px`
      textarea.style.overflowY = 'hidden'
    } else {
      // Content needs more space, calculate actual height needed
      textarea.style.height = 'auto'
      const scrollHeight = textarea.scrollHeight
      const newHeight = Math.min(Math.max(scrollHeight, min), max)

      textarea.style.height = `${newHeight}px`

      // Handle overflow for max height
      if (scrollHeight > max) {
        textarea.style.overflowY = 'auto'
      } else {
        textarea.style.overflowY = 'hidden'
      }
    }
  }, [getHeightValues])

  // Adjust height on mount and when value changes
  React.useEffect(() => {
    adjustHeight()
  }, [adjustHeight])

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    adjustHeight()
    props.onInput?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const value = e.currentTarget.value.trim()
      if (value && onSend) {
        onSend(value)
        e.currentTarget.value = ''
        // Reset height after clearing
        setTimeout(() => adjustHeight(), 0)
      }
    }

    // Call any additional onKeyDown handler passed as prop
    onKeyDown?.(e)
  }

  const { min } = getHeightValues()

  return (
    <textarea
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
      style={{
        minHeight: `${min}px`,
        height: `${min}px`,
        ...props.style,
      }}
      {...props}
    />
  )
})
CustomTextArea.displayName = 'TextArea'

// Widget Context for managing selection state - now used by Options
const OptionsContext = React.createContext<{
  selectedOptions: Set<string>
  onOptionSelect?: (optionId: string, isMultiple?: boolean) => void
  isMultiple?: boolean
  showCheck?: boolean
}>({
  selectedOptions: new Set(),
})

// Custom Options component that manages selection state
const CustomOptions = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & {
    selectedOptions?: string[]
    onOptionSelect?: (optionId: string) => void
    multiple?: boolean
    showCheck?: boolean
  }
>(
  (
    {
      children,
      selectedOptions = [],
      onOptionSelect,
      multiple = false,
      showCheck = false,
      ...props
    },
    ref,
  ) => {
    const [internalSelected, setInternalSelected] = React.useState<Set<string>>(
      new Set(selectedOptions),
    )

    const handleOptionSelect = React.useCallback(
      (optionId: string) => {
        setInternalSelected((prev) => {
          const newSelected = new Set(prev)

          if (multiple) {
            if (newSelected.has(optionId)) {
              newSelected.delete(optionId)
            } else {
              newSelected.add(optionId)
            }
          } else {
            newSelected.clear()
            newSelected.add(optionId)
          }

          return newSelected
        })

        onOptionSelect?.(optionId)
      },
      [multiple, onOptionSelect],
    )

    const contextValue = React.useMemo(
      () => ({
        selectedOptions: internalSelected,
        onOptionSelect: handleOptionSelect,
        isMultiple: multiple,
        showCheck,
      }),
      [internalSelected, handleOptionSelect, multiple, showCheck],
    )

    return (
      <OptionsContext.Provider value={contextValue}>
        <ul ref={ref} {...props}>
          {children}
        </ul>
      </OptionsContext.Provider>
    )
  },
)
CustomOptions.displayName = 'Options'

// Individual Option component
const CustomOption = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement> & {
    value: string
    disabled?: boolean
  }
>(({ children, value, disabled = false, onClick, ...props }, ref) => {
  const { selectedOptions, onOptionSelect, isMultiple, showCheck } =
    React.useContext(OptionsContext)
  const isSelected = selectedOptions.has(value)

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      if (disabled) return

      onOptionSelect?.(value, isMultiple)
      onClick?.(e)
    },
    [disabled, onOptionSelect, value, isMultiple, onClick],
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (disabled) return

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()

        const syntheticEvent = {
          ...e,
          type: 'click',
          button: 0,
          buttons: 1,
          detail: 1,
        } as unknown as React.MouseEvent<HTMLLIElement>
        handleClick(syntheticEvent)
      }
    },
    [disabled, handleClick],
  )

  return (
    <li
      ref={ref}
      role={isMultiple ? 'checkbox' : 'radio'}
      aria-checked={isSelected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      data-selected={isSelected ? '' : undefined}
      data-disabled={disabled ? '' : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {showCheck && isSelected && <Check size={16} />}
      {children}
    </li>
  )
})
CustomOption.displayName = 'Option'

export type RootProps = WithFixedClassName<React.HTMLAttributes<HTMLDivElement>>

export const Root = withProvider<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'root')

export const Message = withProvider<
  HTMLDivElement,
  Assign<
    React.HTMLAttributes<HTMLDivElement> & {
      variant?: 'user' | 'assistant'
      streaming?: boolean
    },
    JsxStyleProps
  >
>('div', 'message')

export const Avatar = withContext<
  React.ComponentRef<typeof CustomAvatar>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomAvatar>, JsxStyleProps>
>(CustomAvatar, 'avatar')

export const Bubble = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'bubble')

export const Metadata = withContext<
  HTMLSpanElement,
  Assign<React.HTMLAttributes<HTMLSpanElement>, JsxStyleProps>
>('span', 'metadata')

export const Input = withProvider<
  HTMLDivElement,
  Assign<
    React.HTMLAttributes<HTMLDivElement> & {
      layout?: 'vertical' | 'horizontal'
    },
    JsxStyleProps
  >
>('div', 'input')

export const TextArea = withContext<
  React.ComponentRef<typeof CustomTextArea>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomTextArea>, JsxStyleProps>
>(CustomTextArea, 'textarea')

export const InputActions = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'inputActions')

export const Suggestions = withProvider<
  HTMLDivElement,
  Assign<
    React.HTMLAttributes<HTMLDivElement> & {
      suggestionVariant?: 'outlined' | 'filled' | 'primary'
      suggestionShape?: 'pill' | 'card'
    },
    JsxStyleProps
  >
>('div', 'suggestions')

export const Suggestion = withContext<
  HTMLButtonElement,
  Assign<React.ButtonHTMLAttributes<HTMLButtonElement>, JsxStyleProps>
>('button', 'suggestion')

// Widget exports
export const Widget = withProvider<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'widget')

export const WidgetHeader = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'widgetHeader')

export const WidgetContent = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'widgetContent')

export const WidgetActions = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'widgetActions')

export const Options = withProvider<
  React.ComponentRef<typeof CustomOptions>,
  Assign<
    React.ComponentPropsWithoutRef<typeof CustomOptions> & {
      optionLayout?: 'list' | 'grid' | 'inline'
      optionVariant?: 'default' | 'primary' | 'checkbox'
    },
    JsxStyleProps
  >
>(CustomOptions, 'options')

export const Option = withContext<
  React.ComponentRef<typeof CustomOption>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomOption>, JsxStyleProps>
>(CustomOption, 'option')

export const OptionGroup = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('ul', 'optionGroup')

export const OptionGroupLabel = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('p', 'optionGroupLabel')

const Chat = {
  Root,
  Message,
  Avatar,
  Bubble,
  Metadata,
  Input,
  TextArea,
  InputActions,
  Suggestions,
  Suggestion,
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetActions,
  Options,
  OptionGroup,
  OptionGroupLabel,
  Option,
}

export default Chat
