export const conditions = {
  extend: {
    collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    current: '&:is([data-current])',
    hidden: '&:is([hidden])',
    hover: ['@media (hover: hover) and (pointer: fine)', '&:is(:hover, [data-hover])'],
    indeterminate:
      '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    off: '&:is([data-state="off"])',
    on: '&:is([data-state="on"])',
    today: '&:is([data-today])',
    underValue: '&:is([data-state="under-value"])',
    dark: '.dark &',
    light: ':root &, .light &',
    invalid: '&:is([aria-invalid])',
    open: '&[data-state=open]',
    closed: '&[data-state=closed]',
    focusVisible: '&:is(:focus-visible, [data-focus-visible])',
    focusWithin: '&:focus-within',
    focus: '&:is(:focus, [data-focus])',
    top: '&[data-side=top]',
    bottom: '&[data-side=bottom]',
    left: '&[data-side=left]',
    right: '&[data-side=right]',
    active: '&:is(:active, [data-active])',
    activeTrue: '&:is([data-active=true])',

    // Base input states
    inputHover: '&:has(input:hover:not(:disabled))',
    inputFocus: '&:has(input:focus:not(:disabled))',
    inputDisabled: '&:has(input:disabled)',

    // Validation states
    inputSuccess: '&:has(input[data-status=success])',
    inputSuccessHover: '&:has(input[data-status=success]:hover:not(:disabled))',
    inputSuccessFocus: '&:has(input[data-status=success]:focus:not(:disabled))',

    inputError: '&:has(input[data-status=error])',
    inputErrorHover: '&:has(input[data-status=error]:hover:not(:disabled))',
    inputErrorFocus: '&:has(input[data-status=error]:focus:not(:disabled))',

    inputWarning: '&:has(input[data-status=warning])',
    inputWarningHover: '&:has(input[data-status=warning]:hover:not(:disabled))',
    inputWarningFocus: '&:has(input[data-status=warning]:focus:not(:disabled))',
    errorState: '&[data-field-state=error]',
  },
}
