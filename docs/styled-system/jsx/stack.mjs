import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getStackStyle } from '../patterns/stack.mjs';
import { styled } from './factory.mjs';

export const Stack = /* @__PURE__ */ forwardRef(function Stack(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["p","px","py","pt","pr","pb","pl","width","minWidth","maxWidth","height","minHeight","maxHeight","position","align","justify","direction","gap"])

const styleProps = getStackStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })