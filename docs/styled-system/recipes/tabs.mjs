import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tabsDefaultVariants = {
  "size": "md",
  "align": "start",
  "variant": "simple",
  "position": "top"
}
const tabsCompoundVariants = [
  {
    "variant": "card",
    "position": "top",
    "css": {
      "trigger": {
        "borderRadius": "0",
        "borderTopRadius": "{radii.lg}",
        "borderWidth": "1px",
        "borderColor": "{colors.border}",
        "mb": "-1.5px",
        "_selected": {
          "borderBottomColor": "{colors.surface.elevated}"
        }
      }
    }
  },
  {
    "variant": "card",
    "position": "left",
    "css": {
      "trigger": {
        "borderRadius": "0",
        "borderLeftRadius": "{radii.lg}",
        "borderWidth": "1px",
        "borderColor": "{colors.border}",
        "mr": "-1px",
        "_selected": {
          "borderRightColor": "{colors.surface.elevated}"
        }
      }
    }
  },
  {
    "variant": "card",
    "position": "right",
    "css": {
      "trigger": {
        "borderRadius": "0",
        "borderRightRadius": "{radii.lg}",
        "borderWidth": "1px",
        "borderColor": "{colors.border}",
        "ml": "-1px",
        "_selected": {
          "borderLeftColor": "{colors.surface.elevated}"
        }
      }
    }
  },
  {
    "variant": "card",
    "position": "bottom",
    "css": {
      "trigger": {
        "borderRadius": "0",
        "borderBottomRadius": "{radii.lg}",
        "borderWidth": "1px",
        "borderColor": "{colors.border}",
        "mt": "-1px",
        "_selected": {
          "borderTopColor": "{colors.surface.elevated}"
        }
      }
    }
  }
]

const tabsSlotNames = [
  [
    "root",
    "tabs__root"
  ],
  [
    "tabList",
    "tabs__tabList"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "content",
    "tabs__content"
  ]
]
const tabsSlotFns = /* @__PURE__ */ tabsSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tabsDefaultVariants, getSlotCompoundVariant(tabsCompoundVariants, slotName))])

const tabsFn = memo((props = {}) => {
  return Object.fromEntries(tabsSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tabsVariantKeys = [
  "size",
  "align",
  "position",
  "variant"
]
const getVariantProps = (variants) => ({ ...tabsDefaultVariants, ...compact(variants) })

export const tabs = /* @__PURE__ */ Object.assign(tabsFn, {
  __recipe__: false,
  __name__: 'tabs',
  raw: (props) => props,
  variantKeys: tabsVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "align": [
    "start",
    "center",
    "end"
  ],
  "position": [
    "top",
    "left",
    "right",
    "bottom"
  ],
  "variant": [
    "simple",
    "card"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tabsVariantKeys)
  },
  getVariantProps
})