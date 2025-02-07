import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const segmentedDefaultVariants = {
  "orientation": "horizontal",
  "size": "md"
}
const segmentedCompoundVariants = []

const segmentedSlotNames = [
  [
    "root",
    "segmented__root"
  ],
  [
    "option",
    "segmented__option"
  ],
  [
    "text",
    "segmented__text"
  ]
]
const segmentedSlotFns = /* @__PURE__ */ segmentedSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, segmentedDefaultVariants, getSlotCompoundVariant(segmentedCompoundVariants, slotName))])

const segmentedFn = memo((props = {}) => {
  return Object.fromEntries(segmentedSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const segmentedVariantKeys = [
  "orientation",
  "size",
  "block"
]
const getVariantProps = (variants) => ({ ...segmentedDefaultVariants, ...compact(variants) })

export const segmented = /* @__PURE__ */ Object.assign(segmentedFn, {
  __recipe__: false,
  __name__: 'segmented',
  raw: (props) => props,
  variantKeys: segmentedVariantKeys,
  variantMap: {
  "orientation": [
    "horizontal",
    "vertical"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "block": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, segmentedVariantKeys)
  },
  getVariantProps
})