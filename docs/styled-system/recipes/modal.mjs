import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const modalDefaultVariants = {}
const modalCompoundVariants = []

const modalSlotNames = [
  [
    "root",
    "modal__root"
  ],
  [
    "trigger",
    "modal__trigger"
  ],
  [
    "portal",
    "modal__portal"
  ],
  [
    "overlay",
    "modal__overlay"
  ],
  [
    "content",
    "modal__content"
  ],
  [
    "header",
    "modal__header"
  ],
  [
    "footer",
    "modal__footer"
  ],
  [
    "title",
    "modal__title"
  ],
  [
    "description",
    "modal__description"
  ],
  [
    "action",
    "modal__action"
  ],
  [
    "cancel",
    "modal__cancel"
  ]
]
const modalSlotFns = /* @__PURE__ */ modalSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, modalDefaultVariants, getSlotCompoundVariant(modalCompoundVariants, slotName))])

const modalFn = memo((props = {}) => {
  return Object.fromEntries(modalSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const modalVariantKeys = []
const getVariantProps = (variants) => ({ ...modalDefaultVariants, ...compact(variants) })

export const modal = /* @__PURE__ */ Object.assign(modalFn, {
  __recipe__: false,
  __name__: 'modal',
  raw: (props) => props,
  variantKeys: modalVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, modalVariantKeys)
  },
  getVariantProps
})