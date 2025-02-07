import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const headingFn = /* @__PURE__ */ createRecipe('heading', {
  "level": 1,
  "variant": "normal",
  "color": "default"
}, [])

const headingVariantMap = {
  "level": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ],
  "variant": [
    "normal",
    "accent"
  ],
  "color": [
    "default",
    "secondary",
    "disabled"
  ]
}

const headingVariantKeys = Object.keys(headingVariantMap)

export const heading = /* @__PURE__ */ Object.assign(memo(headingFn.recipeFn), {
  __recipe__: true,
  __name__: 'heading',
  __getCompoundVariantCss__: headingFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: headingVariantKeys,
  variantMap: headingVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, headingVariantKeys)
  },
  getVariantProps: headingFn.getVariantProps,
})