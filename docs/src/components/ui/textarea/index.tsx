import { type HTMLStyledProps, styled } from '@styled-system/jsx'
import { textarea } from '@styled-system/recipes'

export const Textarea = styled('textarea', textarea)
export type TextareaProps = HTMLStyledProps<typeof Textarea>
