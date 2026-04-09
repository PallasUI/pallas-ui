---
name: pallas-ui-component-audit
description: Use when asked to audit, review, or fix an existing Pallas UI component for issues, inconsistencies, or deviations from conventions. Covers both the recipe (Layer 1) and the React component (Layer 3).
---

# Pallas UI: Component Audit & Fix

## Overview

Audit an existing component by checking its recipe (Layer 1) and React implementation (Layer 3) against Pallas UI conventions. Fix every issue found.

## Files to Read First

For a component named `<name>`:

| File                                                 | Purpose                            |
| ---------------------------------------------------- | ---------------------------------- |
| `packages/panda/src/theme/recipes/<name>.ts`         | Layer 1 — recipe to audit          |
| `components/src/ui/<name>/index.tsx` (or named file) | Layer 3 — React component to audit |

Read **both** files before diagnosing anything.

## Recipe Checklist (Layer 1)

### No raw values — tokens only

Every dimension, color, spacing, and radii value must use a design token. Raw `px`, `rem`, `#hex`, or `rgb()` values in recipes are violations.

| Category      | Correct token syntax                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| Colors        | `'{colors.primary}'`, `'{colors.border}'`, `'{colors.text}'`, `'{colors.text.secondary}'`    |
| Spacing       | `'{spacing.padding.inline.md}'`, `'{spacing.padding.block.md}'`, `'{spacing.gap.inline.sm}'` |
| Control sizes | `'{sizes.controlHeight.md}'` (sm/md/lg)                                                      |
| Radii         | `'{radii.md}'`, `'{radii.full}'`                                                             |
| Shadows       | `'{shadows.minimal}'`, `'{shadows.sm}'`                                                      |
| Borders       | `'{borders.default.xs}'`, `'{borders.control}'`                                              |
| Typography    | `textStyle: 'sm'` — never set `fontSize`/`lineHeight` directly                               |

**Exception:** Raw values are permitted in `animation-styles.ts`, `keyframes.ts`, and `global-css.ts`.

### Recipe type

- Single-element component → `defineRecipe`
- Multi-slot compound component → `defineSlotRecipe` with a `slots` array

Slot names in the recipe must exactly match the second argument passed to `withContext`.

### defaultVariants

Every recipe with variants must declare `defaultVariants`. Missing defaults cause unstyled renders.

### Disabled state

Interactive components (buttons, inputs, selects, checkboxes, etc.) must handle disabled:

```ts
'&:disabled, &[disabled]': {
  cursor: 'not-allowed',
  opacity: 0.6,
}
```

Or via PandaCSS conditions: `_disabled: { cursor: 'not-allowed', opacity: 0.6 }`.

### Variant naming conventions

Use standard variant prop names across all components:

| Prop      | Values                                                 |
| --------- | ------------------------------------------------------ |
| `variant` | visual style (primary, outlined, default, text, link…) |
| `size`    | sm / md / lg                                           |
| `shape`   | default / rounded / circle (where applicable)          |
| `width`   | full (where applicable)                                |

## React Component Checklist (Layer 3)

### `'use client'` directive

Required at the top of any component that:

- Uses Radix UI / Ark UI primitives
- Has interactive state (hooks, event handlers)
- Uses `createStyleContext`

Simple `styled()` wrappers don't need it.

### forwardRef + displayName

Every component exported from Layer 3 must:

1. Use `React.forwardRef` (not a plain function component)
2. Set `displayName` — use `'ComponentName'` for root, `'ComponentName.SubPart'` for sub-parts

```tsx
InputRoot.displayName = "Input";
InputPrefix.displayName = "Input.Prefix";
```

### Compound component pattern

When wrapping Radix/Ark primitives with slot recipes:

```tsx
const { withProvider, withContext } = createStyleContext(mySlotRecipe);
```

- Root sub-component → `withProvider(..., 'root')`
- All other sub-components → `withContext(..., 'slotName')`
- Slot name string must match recipe `slots` exactly

**Export as object literal:**

```tsx
const MyComponent = { Root, Trigger, Content };
export default MyComponent;
```

### Simple component pattern

For single-element or non-Radix components, prefer `styled()`:

```tsx
export const Badge = styled("div", badge);
```

Or `forwardRef` when custom logic is needed:

```tsx
export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cx(myRecipe({ size }), className)} {...props} />
  ),
);
MyComponent.displayName = "MyComponent";
```

### Import aliases

| Import                                                 | Source                     |
| ------------------------------------------------------ | -------------------------- |
| `cx`, `css`                                            | `@styled-system/css`       |
| `styled`                                               | `@styled-system/jsx`       |
| Recipe + variant types                                 | `@styled-system/recipes`   |
| `JsxStyleProps`, `ComponentProps`, `SystemStyleObject` | `@styled-system/types`     |
| `createStyleContext`, `Assign`, `WithFixedClassName`   | `@pallas-ui/style-context` |
| Internal UI components                                 | `~/ui/<name>`              |

### css prop escape hatch

Components that accept ad-hoc style overrides must include:

```tsx
css?: SystemStyleObject
```

And apply it: `cx(recipe({ variant }), cssProp && css(cssProp), className)`.

### No inline styles or raw classNames

All visual styling belongs in the recipe. The component file should contain zero hardcoded color, spacing, or size values.

## Common Issues to Look For

| Issue                                      | Fix                                                     |
| ------------------------------------------ | ------------------------------------------------------- |
| `px: '16px'` in recipe                     | Replace with `'{spacing.padding.inline.md}'`            |
| `borderRadius: '6px'`                      | Replace with `'{radii.md}'`                             |
| `color: '#333'` or `color: 'gray'`         | Replace with semantic color token                       |
| `fontSize: '14px'`                         | Remove and use `textStyle: 'sm'`                        |
| Missing `defaultVariants`                  | Add with sensible defaults                              |
| `displayName` missing                      | Add to every forwardRef component                       |
| `withContext` slot name typo               | Verify against recipe `slots` array                     |
| Missing `'use client'`                     | Add to top of file if component uses hooks/events/Radix |
| Plain function component (no `forwardRef`) | Wrap with `React.forwardRef`                            |
| Disabled state missing                     | Add `_disabled` or `&:disabled` block to recipe         |
| Raw `className` strings for styling        | Move styles to recipe                                   |
| `height: '40px'` hardcoded in recipe       | Use `'{sizes.controlHeight.md}'`                        |

## Workflow

**Always present findings before touching any file.**

### Phase 1 — Analyze

1. Read both the recipe file and the React component file
2. Work through each checklist above, noting every violation
3. Produce a findings report (see format below) and present it to the user
4. Ask: _"Which of these would you like me to fix?"_ — wait for approval before proceeding

### Phase 2 — Fix (only after approval)

5. Fix only the issues the user approved
6. Fix recipe violations first (token usage, structure, defaultVariants)
7. Fix component violations (forwardRef, displayName, imports, export pattern)
8. After fixing: run `cd components && pnpm panda codegen` if the recipe was changed
9. Run `pnpm lint` to catch any remaining issues

## Findings Report Format

Present issues grouped by file, with severity and a one-line description of the fix:

```
## Audit: <ComponentName>

### packages/panda/src/theme/recipes/<name>.ts
- [HIGH] Raw value `height: '40px'` in size.icon variant → use `'{sizes.controlHeight.md}'`
- [MED]  Missing `defaultVariants` → add `{ variant: 'primary', size: 'md' }`

### components/src/ui/<name>/index.tsx
- [HIGH] Missing `'use client'` directive — component uses Radix primitives
- [LOW]  `Trigger.displayName` not set → add `Trigger.displayName = 'MyComponent.Trigger'`

Total: 2 high, 1 medium, 1 low
```

Severity guide:

- **HIGH** — will cause broken styles, runtime errors, or accessibility issues
- **MED** — inconsistency that deviates from convention but doesn't break anything
- **LOW** — polish / completeness issue
