/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ParagraphVariant {
  /**
 * @default "base"
 */
size: "base" | "large" | "compact" | "subscript"
/**
 * @default "default"
 */
color: "default" | "secondary" | "success" | "warning" | "error" | "disabled"
textAlign: "left" | "center" | "right" | "justify"
textStyle: "italic" | "bold" | "underline"
}

type ParagraphVariantMap = {
  [key in keyof ParagraphVariant]: Array<ParagraphVariant[key]>
}

export type ParagraphVariantProps = {
  [key in keyof ParagraphVariant]?: ConditionalValue<ParagraphVariant[key]> | undefined
}

export interface ParagraphRecipe {
  __type: ParagraphVariantProps
  (props?: ParagraphVariantProps): string
  raw: (props?: ParagraphVariantProps) => ParagraphVariantProps
  variantMap: ParagraphVariantMap
  variantKeys: Array<keyof ParagraphVariant>
  splitVariantProps<Props extends ParagraphVariantProps>(props: Props): [ParagraphVariantProps, Pretty<DistributiveOmit<Props, keyof ParagraphVariantProps>>]
  getVariantProps: (props?: ParagraphVariantProps) => ParagraphVariantProps
}

/**
 * Styles for the Paragraph component


 */
export declare const paragraph: ParagraphRecipe