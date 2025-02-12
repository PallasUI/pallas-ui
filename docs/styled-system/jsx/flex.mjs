import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getFlexStyle } from '../patterns/flex.mjs';
import { styled } from './factory.mjs';

export const Flex = /* @__PURE__ */ forwardRef(function Flex(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["p","px","py","pt","pr","pb","pl","width","minWidth","maxWidth","height","minHeight","maxHeight","position","align","justify","direction","wrap","basis","grow","shrink","gap","gapX","gapY"])

const styleProps = getFlexStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })