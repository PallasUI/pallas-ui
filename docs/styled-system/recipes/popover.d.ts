/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface PopoverVariant {
  
}

type PopoverVariantMap = {
  [key in keyof PopoverVariant]: Array<PopoverVariant[key]>
}

export type PopoverVariantProps = {
  [key in keyof PopoverVariant]?: ConditionalValue<PopoverVariant[key]> | undefined
}

export interface PopoverRecipe {
  __type: PopoverVariantProps
  (props?: PopoverVariantProps): Pretty<Record<"root" | "trigger" | "portal" | "content" | "arrow" | "close", string>>
  raw: (props?: PopoverVariantProps) => PopoverVariantProps
  variantMap: PopoverVariantMap
  variantKeys: Array<keyof PopoverVariant>
  splitVariantProps<Props extends PopoverVariantProps>(props: Props): [PopoverVariantProps, Pretty<DistributiveOmit<Props, keyof PopoverVariantProps>>]
  getVariantProps: (props?: PopoverVariantProps) => PopoverVariantProps
}

/**
 * Styles for the Popover component


 */
export declare const popover: PopoverRecipe