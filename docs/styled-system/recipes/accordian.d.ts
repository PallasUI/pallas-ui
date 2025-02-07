/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AccordianVariant {
  
}

type AccordianVariantMap = {
  [key in keyof AccordianVariant]: Array<AccordianVariant[key]>
}

export type AccordianVariantProps = {
  [key in keyof AccordianVariant]?: ConditionalValue<AccordianVariant[key]> | undefined
}

export interface AccordianRecipe {
  __type: AccordianVariantProps
  (props?: AccordianVariantProps): Pretty<Record<"root" | "item" | "itemTrigger" | "itemHeader" | "itemContent", string>>
  raw: (props?: AccordianVariantProps) => AccordianVariantProps
  variantMap: AccordianVariantMap
  variantKeys: Array<keyof AccordianVariant>
  splitVariantProps<Props extends AccordianVariantProps>(props: Props): [AccordianVariantProps, Pretty<DistributiveOmit<Props, keyof AccordianVariantProps>>]
  getVariantProps: (props?: AccordianVariantProps) => AccordianVariantProps
}

/**
 * Styles for the Accordian component


 */
export declare const accordian: AccordianRecipe