import { type HTMLStyledProps, styled } from '@styled-system/jsx'
import { badge } from '@styled-system/recipes'

export const Badge = styled('div', badge)

export type BadgeProps = HTMLStyledProps<typeof Badge>
