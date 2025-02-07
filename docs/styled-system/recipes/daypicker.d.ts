/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DaypickerVariant {
  
}

type DaypickerVariantMap = {
  [key in keyof DaypickerVariant]: Array<DaypickerVariant[key]>
}

export type DaypickerVariantProps = {
  [key in keyof DaypickerVariant]?: ConditionalValue<DaypickerVariant[key]> | undefined
}

export interface DaypickerRecipe {
  __type: DaypickerVariantProps
  (props?: DaypickerVariantProps): Pretty<Record<"root" | "months" | "month" | "month_caption" | "weekdays" | "weekday" | "caption" | "caption_label" | "nav" | "button_previous" | "button_next" | "month_grid" | "day" | "selected" | "today" | "outside" | "disabled" | "range_start" | "range_middle" | "range_end" | "hidden" | "week", string>>
  raw: (props?: DaypickerVariantProps) => DaypickerVariantProps
  variantMap: DaypickerVariantMap
  variantKeys: Array<keyof DaypickerVariant>
  splitVariantProps<Props extends DaypickerVariantProps>(props: Props): [DaypickerVariantProps, Pretty<DistributiveOmit<Props, keyof DaypickerVariantProps>>]
  getVariantProps: (props?: DaypickerVariantProps) => DaypickerVariantProps
}

/**
 * Styles for the DayPicker component


 */
export declare const daypicker: DaypickerRecipe