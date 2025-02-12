import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@styled-system/jsx'
import { type LabelVariant, label } from '@styled-system/recipes'

export interface LabelProps extends LabelVariant, LabelPrimitive.LabelProps {}

export const Label = styled(LabelPrimitive.Root, label)
