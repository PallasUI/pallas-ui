import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const progressDefaultVariants = {
  "strokeWidth": "md",
  "strokeLinecap": "butt",
  "color": "primary",
  "shape": "line",
  "align": "horizontal"
}
const progressCompoundVariants = [
  {
    "shape": "circle",
    "textInside": true,
    "css": {
      "label": {
        "position": "absolute"
      },
      "root": {
        "justifyContent": "center"
      }
    }
  }
]

const progressSlotNames = [
  [
    "root",
    "progress__root"
  ],
  [
    "label",
    "progress__label"
  ],
  [
    "lineTrack",
    "progress__lineTrack"
  ],
  [
    "lineFill",
    "progress__lineFill"
  ],
  [
    "circleTrack",
    "progress__circleTrack"
  ],
  [
    "circleFill",
    "progress__circleFill"
  ]
]
const progressSlotFns = /* @__PURE__ */ progressSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, progressDefaultVariants, getSlotCompoundVariant(progressCompoundVariants, slotName))])

const progressFn = memo((props = {}) => {
  return Object.fromEntries(progressSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const progressVariantKeys = [
  "strokeLinecap",
  "strokeWidth",
  "color",
  "shape",
  "align",
  "textInside"
]
const getVariantProps = (variants) => ({ ...progressDefaultVariants, ...compact(variants) })

export const progress = /* @__PURE__ */ Object.assign(progressFn, {
  __recipe__: false,
  __name__: 'progress',
  raw: (props) => props,
  variantKeys: progressVariantKeys,
  variantMap: {
  "strokeLinecap": [
    "butt",
    "round"
  ],
  "strokeWidth": [
    "sm",
    "md",
    "lg"
  ],
  "color": [
    "primary",
    "success",
    "error"
  ],
  "shape": [
    "line",
    "circle"
  ],
  "align": [
    "horizontal",
    "vertical"
  ],
  "textInside": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, progressVariantKeys)
  },
  getVariantProps
})