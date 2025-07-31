import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  'slide-down': {
    '0%': { transform: 'translateY(2px)' },
    '100%': { transform: 'translateY(0)' },
  },
  'slide-up': {
    '0%': { transform: 'translateY(-2px)' },
    '100%': { transform: 'translateY(0)' },
  },
  'slide-right': {
    '0%': { transform: 'translateX(2px)' },
    '100%': { transform: 'translateX(0)' },
  },
  'slide-left': {
    '0%': { transform: 'translateX(-2px)' },
    '100%': { transform: 'translateX(0)' },
  },
  'collapse-in': {
    '0%': { height: '0' },
    '100%': { height: 'var(--height)' },
  },
  'collapse-out': {
    '0%': { height: 'var(--height)' },
    '100%': { height: '0' },
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  'skeleton-pulse': {
    '50%': { opacity: '0.5' },
  },
  rotation: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  'modal-content-show': {
    '0%': { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
    '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
  },
  'modal-content-hide': {
    '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
    '100%': { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
  },
  'slide-in-left': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-out-left': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
  },
  'slide-in-right': {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-out-right': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(100%)' },
  },
  'caret-blink': {
    '0%,70%,100%': { opacity: '1' },
    '20%,50%': { opacity: '0' },
  },
})
