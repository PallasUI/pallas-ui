import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const inputDefaultVariants = {
  "size": "md",
  "shape": "default"
}
const inputCompoundVariants = []

const inputSlotNames = [
  [
    "root",
    "input__root"
  ],
  [
    "prefix",
    "input__prefix"
  ],
  [
    "postfix",
    "input__postfix"
  ],
  [
    "field",
    "input__field"
  ],
  [
    "control",
    "input__control"
  ],
  [
    "charCount",
    "input__charCount"
  ]
]
const inputSlotFns = /* @__PURE__ */ inputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, inputDefaultVariants, getSlotCompoundVariant(inputCompoundVariants, slotName))])

const inputFn = memo((props = {}) => {
  return Object.fromEntries(inputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const inputVariantKeys = [
  "size",
  "shape"
]
const getVariantProps = (variants) => ({ ...inputDefaultVariants, ...compact(variants) })

export const input = /* @__PURE__ */ Object.assign(inputFn, {
  __recipe__: false,
  __name__: 'input',
  raw: (props) => props,
  variantKeys: inputVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "shape": [
    "default",
    "rounded",
    "circle"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys)
  },
  getVariantProps
})