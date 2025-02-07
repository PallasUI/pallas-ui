import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const accordianDefaultVariants = {}
const accordianCompoundVariants = []

const accordianSlotNames = [
  [
    "root",
    "accordian__root"
  ],
  [
    "item",
    "accordian__item"
  ],
  [
    "itemTrigger",
    "accordian__itemTrigger"
  ],
  [
    "itemHeader",
    "accordian__itemHeader"
  ],
  [
    "itemContent",
    "accordian__itemContent"
  ]
]
const accordianSlotFns = /* @__PURE__ */ accordianSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, accordianDefaultVariants, getSlotCompoundVariant(accordianCompoundVariants, slotName))])

const accordianFn = memo((props = {}) => {
  return Object.fromEntries(accordianSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const accordianVariantKeys = []
const getVariantProps = (variants) => ({ ...accordianDefaultVariants, ...compact(variants) })

export const accordian = /* @__PURE__ */ Object.assign(accordianFn, {
  __recipe__: false,
  __name__: 'accordian',
  raw: (props) => props,
  variantKeys: accordianVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, accordianVariantKeys)
  },
  getVariantProps
})