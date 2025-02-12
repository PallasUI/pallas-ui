import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const daypickerDefaultVariants = {}
const daypickerCompoundVariants = []

const daypickerSlotNames = [
  [
    "root",
    "daypicker__root"
  ],
  [
    "months",
    "daypicker__months"
  ],
  [
    "month",
    "daypicker__month"
  ],
  [
    "month_caption",
    "daypicker__month_caption"
  ],
  [
    "weekdays",
    "daypicker__weekdays"
  ],
  [
    "weekday",
    "daypicker__weekday"
  ],
  [
    "caption",
    "daypicker__caption"
  ],
  [
    "caption_label",
    "daypicker__caption_label"
  ],
  [
    "nav",
    "daypicker__nav"
  ],
  [
    "button_previous",
    "daypicker__button_previous"
  ],
  [
    "button_next",
    "daypicker__button_next"
  ],
  [
    "month_grid",
    "daypicker__month_grid"
  ],
  [
    "day",
    "daypicker__day"
  ],
  [
    "selected",
    "daypicker__selected"
  ],
  [
    "today",
    "daypicker__today"
  ],
  [
    "outside",
    "daypicker__outside"
  ],
  [
    "disabled",
    "daypicker__disabled"
  ],
  [
    "range_start",
    "daypicker__range_start"
  ],
  [
    "range_middle",
    "daypicker__range_middle"
  ],
  [
    "range_end",
    "daypicker__range_end"
  ],
  [
    "hidden",
    "daypicker__hidden"
  ],
  [
    "week",
    "daypicker__week"
  ]
]
const daypickerSlotFns = /* @__PURE__ */ daypickerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, daypickerDefaultVariants, getSlotCompoundVariant(daypickerCompoundVariants, slotName))])

const daypickerFn = memo((props = {}) => {
  return Object.fromEntries(daypickerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const daypickerVariantKeys = []
const getVariantProps = (variants) => ({ ...daypickerDefaultVariants, ...compact(variants) })

export const daypicker = /* @__PURE__ */ Object.assign(daypickerFn, {
  __recipe__: false,
  __name__: 'daypicker',
  raw: (props) => props,
  variantKeys: daypickerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, daypickerVariantKeys)
  },
  getVariantProps
})