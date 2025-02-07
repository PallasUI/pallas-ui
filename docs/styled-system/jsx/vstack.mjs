import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getVstackStyle } from '../patterns/vstack.mjs';
import { styled } from './factory.mjs';

export const VStack = /* @__PURE__ */ forwardRef(function VStack(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["p","px","py","pt","pr","pb","pl","width","minWidth","maxWidth","height","minHeight","maxHeight","position","justify","gap"])

const styleProps = getVstackStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })