---
name: pallas-ui-new-component
description: Use when creating a new component in the Pallas UI library. Covers the full 3-layer workflow: recipe → styled-system codegen → React component → story → docs → sync.
---

# Pallas UI: Creating a New Component

## Overview

Pallas UI uses a strict 3-layer architecture. Every new component must go through all layers in order. Skipping any step breaks the styled-system or docs.

## The 3-Layer Architecture

```
Layer 1: packages/panda/src/theme/recipes/   ← Design tokens + visual styles (no React)
Layer 2: ui-primitives/                      ← Unstyled behavior primitives (if needed)
Layer 3: components/src/ui/<name>/           ← Styled React components
```

## Step-by-Step Workflow

### Step 1 — Create the Recipe (Layer 1)

Create `packages/panda/src/theme/recipes/<component-name>.ts`.

**Simple component** (single element, e.g. Badge, Spinner):

```ts
import { defineRecipe } from "@pandacss/dev";

export const myComponent = defineRecipe({
  className: "my-component",
  description: "Styles for MyComponent",
  base: {
    display: "inline-flex",
    borderRadius: "{radii.md}", // always tokens, never raw values
    px: "{spacing.padding.inline.md}",
  },
  variants: {
    size: {
      sm: { height: "{sizes.controlHeight.sm}" },
      md: { height: "{sizes.controlHeight.md}" },
    },
  },
  defaultVariants: { size: "md" },
});
```

**Compound component** (multiple slots, e.g. Accordion, Tabs):

```ts
import { defineSlotRecipe } from "@pandacss/dev";

export const myComponent = defineSlotRecipe({
  className: "my-component",
  description: "Styles for MyComponent",
  slots: ["root", "trigger", "content"],
  base: {
    root: { width: "full" },
    trigger: { cursor: "pointer", color: "{colors.text}" },
    content: { px: "{spacing.padding.inline.lg}" },
  },
});
```

**Token rules — NEVER use raw values:**
| Category | Token syntax |
|---|---|
| Colors | `'{colors.primary}'`, `'{colors.border}'`, `'{colors.text}'` |
| Spacing | `'{spacing.padding.inline.md}'`, `'{spacing.gap.component.md}'` |
| Sizes | `'{sizes.controlHeight.md}'`, `'{sizes.full}'` |
| Radii | `'{radii.md}'`, `'{radii.full}'` |
| Shadows | `'{shadows.minimal}'` |
| Typography | `textStyle: 'sm'` (not fontSize/lineHeight directly) |

### Step 2 — Export the Recipe

Add to `packages/panda/src/theme/recipes/index.ts`:

- Simple recipe → add to `recipes` object
- Slot recipe → add to `slotRecipes` object

```ts
// import at top
import { myComponent } from './my-component'

// simple recipes:
export const recipes = { ..., myComponent }

// slot recipes:
export const slotRecipes = { ..., myComponent }
```

### Step 3 — Regenerate styled-system

```bash
cd components && pnpm panda codegen
```

This updates `components/styled-system/` with new recipe types. **Never edit that folder manually.**

### Step 4 — Create the React Component (Layer 3)

Create `components/src/ui/<component-name>/index.tsx`.

**Simple component** (uses `styled` or `forwardRef`):

```tsx
import { styled } from "@styled-system/jsx";
import { myComponent } from "@styled-system/recipes";

export const MyComponent = styled("div", myComponent);
```

Or with forwardRef for custom logic:

```tsx
import { cx } from "@styled-system/css";
import {
  myComponent,
  type MyComponentVariantProps,
} from "@styled-system/recipes";
import React from "react";

export type MyComponentProps = MyComponentVariantProps &
  React.HTMLAttributes<HTMLDivElement>;

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(myComponent({ size }), className)}
      {...props}
    />
  ),
);
MyComponent.displayName = "MyComponent";
```

**Compound component** (uses `createStyleContext`):

```tsx
"use client";
import {
  type Assign,
  type WithFixedClassName,
  createStyleContext,
} from "@pallas-ui/style-context";
import * as RadixFoo from "@radix-ui/react-foo";
import {
  type MyComponentVariantProps,
  myComponent,
} from "@styled-system/recipes";
import type { ComponentProps, JsxStyleProps } from "@styled-system/types";
import type * as React from "react";

const { withProvider, withContext } = createStyleContext(myComponent);

export const Root = withProvider<
  React.ComponentRef<typeof RadixFoo.Root>,
  Assign<
    ComponentProps<typeof RadixFoo.Root>,
    MyComponentVariantProps & JsxStyleProps
  >
>(RadixFoo.Root, "root");

export const Trigger = withContext<
  React.ComponentRef<typeof RadixFoo.Trigger>,
  Assign<ComponentProps<typeof RadixFoo.Trigger>, JsxStyleProps>
>(RadixFoo.Trigger, "trigger");

const MyComponent = { Root, Trigger };
export default MyComponent;
```

### Step 5 — Create the Storybook Story

Create `components/src/stories/<ComponentName>.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import MyComponent from "~/ui/my-component";

const meta: Meta<typeof MyComponent.Root> = {
  component: MyComponent.Root,
  title: "Components/MyComponent",
  tags: ["autodocs"],
};
export default meta;

export const Default = () => (
  <MyComponent.Root>
    <MyComponent.Trigger>Click me</MyComponent.Trigger>
  </MyComponent.Root>
);
```

### Step 6 — Create the Docs Page

Create `apps/docs/app/content/components/<component-name>.mdx`:

````mdx
---
title: MyComponent
description: Brief description of what this component does.
---

<ContentContainer>
<Section gap="1">
# MyComponent
<Paragraph size={'extraLarge'} color={'tertiary'}>Brief description.</Paragraph>
<ComponentPreview name="my-component" withRecipe />
</Section>

<Section>
  ## Installation
  <Steps>
    <Section>
      ### Install the following dependencies
      <InstallTabs pkg="@radix-ui/react-foo" />
      ### Copy and paste the following code into your project
      <ComponentSource name="my-component" />
      ### Update the import paths to match your project setup
    </Section>
  </Steps>
</Section>

<Section>
## Usage
```tsx
import { MyComponent } from '@/components/ui/my-component'
````

</Section>
</ContentContainer>
```

### Step 7 — Sync to Docs

```bash
pnpm sync-components
```

This copies `components/src/ui/` → `apps/docs/components/ui/` with rewritten import paths. Run this while the docs dev server is running, or it runs automatically before `pnpm build`.

### Step 8 — Create a Changeset

```bash
pnpm changeset
```

Describe your changes. This creates a changeset file — commit and push it. GitHub Actions handles the release PR and npm publish.

## Quick Decision Guide

```
Does the component have multiple sub-elements (trigger, content, item...)?
├── YES → defineSlotRecipe + createStyleContext (compound component)
└── NO  → defineRecipe + styled() or forwardRef (simple component)

Does the behavior come from Radix UI?
├── YES → wrap Radix primitives in withProvider/withContext
└── NO  → check Ark UI, ui-primitives/, or build from scratch
```

## Common Mistakes

| Mistake                                                   | Fix                                                            |
| --------------------------------------------------------- | -------------------------------------------------------------- |
| Raw CSS values in recipe (`px: '16px'`)                   | Use `'{spacing.padding.inline.md}'`                            |
| Forgetting `pnpm panda codegen` after recipe changes      | Codegen must run before recipe types are available             |
| Editing `components/styled-system/` directly              | Never — it's generated output                                  |
| Forgetting `pnpm sync-components`                         | Docs won't reflect component changes in dev mode               |
| Running `pnpm release` locally                            | Use `pnpm changeset` only; release is automated via CI         |
| Slot names in recipe don't match `withContext` second arg | Slot name string must exactly match recipe `slots` array entry |
