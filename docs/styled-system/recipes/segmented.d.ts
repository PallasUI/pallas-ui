/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SegmentedVariant {
  /**
 * @default "horizontal"
 */
orientation: "horizontal" | "vertical"
/**
 * @default "md"
 */
size: "sm" | "md" | "lg"
block: boolean
}

type SegmentedVariantMap = {
  [key in keyof SegmentedVariant]: Array<SegmentedVariant[key]>
}

export type SegmentedVariantProps = {
  [key in keyof SegmentedVariant]?: ConditionalValue<SegmentedVariant[key]> | undefined
}

export interface SegmentedRecipe {
  __type: SegmentedVariantProps
  (props?: SegmentedVariantProps): Pretty<Record<"root" | "option" | "text", string>>
  raw: (props?: SegmentedVariantProps) => SegmentedVariantProps
  variantMap: SegmentedVariantMap
  variantKeys: Array<keyof SegmentedVariant>
  splitVariantProps<Props extends SegmentedVariantProps>(props: Props): [SegmentedVariantProps, Pretty<DistributiveOmit<Props, keyof SegmentedVariantProps>>]
  getVariantProps: (props?: SegmentedVariantProps) => SegmentedVariantProps
}

/**
 * Styles for the Segmented component


 */
export declare const segmented: SegmentedRecipe