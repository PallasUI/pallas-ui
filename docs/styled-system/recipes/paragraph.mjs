import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const paragraphFn = /* @__PURE__ */ createRecipe('paragraph', {
  "color": "default",
  "size": "base"
}, [])

const paragraphVariantMap = {
  "size": [
    "base",
    "large",
    "compact",
    "subscript"
  ],
  "color": [
    "default",
    "secondary",
    "success",
    "warning",
    "error",
    "disabled"
  ],
  "textAlign": [
    "left",
    "center",
    "right",
    "justify"
  ],
  "textStyle": [
    "italic",
    "bold",
    "underline"
  ]
}

const paragraphVariantKeys = Object.keys(paragraphVariantMap)

export const paragraph = /* @__PURE__ */ Object.assign(memo(paragraphFn.recipeFn), {
  __recipe__: true,
  __name__: 'paragraph',
  __getCompoundVariantCss__: paragraphFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: paragraphVariantKeys,
  variantMap: paragraphVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, paragraphVariantKeys)
  },
  getVariantProps: paragraphFn.getVariantProps,
})