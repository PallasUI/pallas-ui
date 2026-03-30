import { defineAnimationStyles } from '@pandacss/dev'
import type { Theme } from '@pandacss/types'

export const animationStyles: Theme['animationStyles'] = defineAnimationStyles({
  slideInRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.slow}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-right, fade-in',
    },
  },
  slideInLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.slow}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-left, fade-in',
    },
  },
  slideOutRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.slow}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-right, fade-out',
    },
  },
  slideOutLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.slow}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-left, fade-out',
    },
  },

  carousel: {
    slideInLeft: {
      value: {
        transformOrigin: 'center',
        animationDuration: '{durations.slowest}',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationName: 'slide-in-left',
      },
    },
    slideInRight: {
      value: {
        transformOrigin: 'center',
        animationDuration: '{durations.slowest}',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationName: 'slide-in-right',
      },
    },
  },

  drawerSlideRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.slow}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      '&[data-state=open]': {
        animationName: 'slide-in-right, fade-in',
      },
      '&[data-state=closed]': {
        animationName: 'slide-out-right, fade-out',
      },
    },
  },
  drawerSlideLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.slow}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      '&[data-state=open]': {
        animationName: 'slide-in-left, fade-in',
      },
      '&[data-state=closed]': {
        animationName: 'slide-out-left, fade-out',
      },
    },
  },

  slideFadeIn: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      '&[data-side^=top]': {
        animationName: 'slide-down, fade-in',
      },
      '&[data-side^=bottom]': {
        animationName: 'slide-up, fade-in',
      },
      '&[data-side^=left]': {
        animationName: 'slide-right, fade-in',
      },
      '&[data-side^=right]': {
        animationName: 'slide-left, fade-in',
      },
    },
  },
  modalContentShow: {
    value: {
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'modal-content-show',
      animationFillMode: 'both',
    },
  },
  modalContentHide: {
    value: {
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'modal-content-hide',
      animationFillMode: 'both',
    },
  },
  skeleton: {
    value: {
      animationName: 'skeleton-pulse',
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
    },
  },
  caretBlink: {
    value: {
      animationName: 'caret-blink',
      animationDuration: '1.2s',
      animationTimingFunction: 'ease-out',
      animationIterationCount: 'infinite',
    },
  },

  loading: {
    value: {
      animation: 'rotation 1s linear infinite',
    },
  },
  fadeInScale: {
    value: {
      animationName: 'fade-in-scale',
      animationDuration: '0.2s',
      animationTimingFunction: 'ease-out',
    },
  },
})
