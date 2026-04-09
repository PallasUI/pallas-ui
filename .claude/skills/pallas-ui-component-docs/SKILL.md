---
name: pallas-ui-component-docs
description: Use when writing, creating, or improving documentation for a Pallas UI component. Covers the full MDX doc structure, prop table format, API Reference conventions, example descriptions, and accessibility sections. Trigger this skill whenever the user asks to "write docs", "document a component", "create a doc page", "add examples", or improve existing MDX documentation for any component in the library — even if they don't explicitly say "skill" or "template".
---

# Pallas UI: Writing Component Docs

Component docs live at `apps/docs/app/content/components/<name>.mdx`. They are MDX files rendered by the Next.js docs site using a set of custom components registered in `apps/docs/components/docs/mdx-components.tsx`.

---

## Required Section Order

Every doc must follow this exact sequence — no exceptions, no extra sections:

```
# ComponentName           ← H1 inside <Section gap="1">
<Paragraph description>
<ComponentPreview withRecipe />

## Installation
## Usage
## API Reference          ← always before Examples
## Examples
## Accessibility
```

---

## Frontmatter

```mdx
---
title: ComponentName
description: One sentence describing what the component does.
---
```

If the component wraps a Radix or Ark primitive, add `references` for the external API docs:

```mdx
---
title: Select
description: Displays a list of options for the user to pick from.
references:
  radix:
    link: https://www.radix-ui.com/docs/primitives/components/select
    api: https://www.radix-ui.com/docs/primitives/components/select#api-reference
---
```

---

## The Hero Section

```mdx
<ContentContainer>

<Section gap="1">
  # ComponentName
  <Paragraph size={"extraLarge"} color={"tertiary"}>
    Same sentence as the frontmatter description.
  </Paragraph>
  <ComponentPreview name="component-name" withRecipe />
</Section>
```

---

## Installation

If the component depends on a Radix/Ark package, show the install step first:

```mdx
<Section>
## Installation

<Steps>
<Section>
### Install the following dependencies

<InstallTabs pkg="@radix-ui/react-select" />

### Copy and paste the following code into your project

<ComponentSource name="select" />

### Update the import paths to match your project setup

</Section>
</Steps>
</Section>
```

If there are no external dependencies, omit the install step and just show:

```mdx
<Section>
## Installation

<Steps>
<Section>
### Copy and paste the following code into your project

<ComponentSource name="textarea" />

### Update the import paths to match your project setup

</Section>
</Steps>
</Section>
```

Some components (Toast, Form) also need extra setup steps (Provider mounting, panda config). Add those as additional `###` steps inside the same `<Steps>` block.

---

## Usage

Show the import and a minimal working example. Keep it clean — no inline layout styles, no hardcoded widths or colors.

**Simple component:**

````mdx
<Section>
## Usage

```tsx
import { Badge } from "@/components/ui/badge";
```
````

```tsx
<Badge variant="default">Label</Badge>
```

</Section>
```

**Compound component:** Show the full anatomy so users understand the structure:

````mdx
<Section>
## Usage

```tsx
import Select from "@/components/ui/select";
```
````

```tsx
<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="Pick one" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="a">Option A</Select.Item>
    <Select.Item value="b">Option B</Select.Item>
  </Select.Content>
</Select.Root>
```

</Section>
```

**Rules for the usage snippet:**

- No `style={{ ... }}` — usage docs must not prescribe layout dimensions
- No magic numbers or raw hex colors
- Use realistic placeholder values (`"Pick a theme"`, `"Enter your email"`)
- The snippet should be copy-pasteable and render without modification

---

## API Reference

Every doc needs an `## API Reference` section (not "Properties", not "Props"). For compound components, each sub-part gets its own `### Sub.Part Props` sub-heading.

### Prop table format

```mdx
### ComponentName Props

| Prop       | Type                                  | Default     | Description                     |
| ---------- | ------------------------------------- | ----------- | ------------------------------- |
| `variant`  | `'primary' \| 'outlined' \| 'dashed'` | `'primary'` | Visual style of the component   |
| `size`     | `'sm' \| 'md' \| 'lg'`                | `'md'`      | Controls height and text size   |
| `disabled` | `boolean`                             | `false`     | Disables the component          |
| `css`      | `SystemStyleObject`                   | —           | Inline PandaCSS style overrides |
```

**Table rules:**

- Prop names always in backticks: `` `variant` ``
- Use union type syntax for variant props: `` `'primary' \| 'outlined'` `` (backslash-escape the pipe in MDX)
- Use `boolean`, `string`, `number`, `ReactNode`, `ReactElement` for primitive types — not generic `string` when a union is known
- Default column: show the actual default value in backticks (`'md'`), or `—` if no default applies
- Check `defaultVariants` in the recipe — only document a default if it's explicitly set there; if a variant prop has no `defaultVariants` entry, use `—`
- Mark genuinely TypeScript-required props with **Required.** in the description; mark semantically required (e.g. accessibility) with **Required for accessibility.**
- Add a line after the table for pass-through HTML attrs: `The component also accepts all standard HTML \`<button>\` attributes.`

### Pass-through sub-parts

Sub-parts that just forward all Radix/Ark props (Group, Separator, Label, Trigger) don't need a full table — a one-liner is enough:

```mdx
### Select.Trigger Props

Accepts all Radix `Select.Trigger` props. The chevron icon is rendered automatically.
```

### Sub-part ordering

Put sub-parts in the order they appear in the markup anatomy (Root → Trigger → Value → Content → Item → Label → Group → Separator).

---

## Examples

Each example is a `### Heading` with a 1–2 sentence description followed by a `<ComponentPreview />`.

```mdx
<Section>
## Examples

### Loading State

Use `isLoading` to show a spinner while an async action is in progress. The button is automatically disabled during loading to prevent duplicate submissions.

<ComponentPreview name="button" file="loading" />

### Shapes

Use `rounded` for pill-style buttons and `circle` with `size="icon"` for circular icon buttons.

<ComponentPreview name="button" file="shapes" />
</Section>
```

**What makes a good example description:**

- Explains _when_ or _why_ to use this variant, not just _what_ it shows
- Mentions the specific prop name(s) involved (e.g. `` `isLoading` ``, `` `shape="circle"` ``)
- Notes any important behavior (e.g. "automatically disabled", "renders as a text link")
- 1–2 sentences — never a bulleted list replacing the description

**`<ComponentPreview>` attributes:** No spaces around `=`. Use `name="component-name"` and `file="example-name"` exactly.

---

## Accessibility

Every doc ends with a brief accessibility section. Use a blockquote — the library doesn't have a Callout component yet.

```mdx
<Section>

## Accessibility

> **ComponentName:** [Key accessibility guidance in 2–4 sentences. Cover: keyboard navigation if interactive, required ARIA attributes, screen reader behavior, and any gotchas like focus management or disabled-vs-aria-disabled.]

</Section>

</ContentContainer>
```

**What to cover by component type:**

| Type                                      | Cover                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| Interactive (button, select, combobox)    | Keyboard shortcuts (Space/Enter/Arrow/Escape), ARIA role               |
| Form controls (input, textarea, checkbox) | Label association, error state announcement, required vs aria-required |
| Images / media (avatar)                   | alt text requirement, fallback behavior for screen readers             |
| Disclosure (accordion, modal, sheet)      | Focus management on open/close, Escape key, aria-expanded              |
| Navigation (tabs, breadcrumb)             | Arrow key navigation, aria-selected, landmark roles                    |

---

## Checklist Before Submitting

Go through this before finishing any doc:

- [ ] Frontmatter has `title` and `description`
- [ ] Section order: Installation → Usage → API Reference → Examples → Accessibility
- [ ] All `<Section>` blocks are properly opened and closed
- [ ] `</ContentContainer>` is the last line
- [ ] No `style={{ ... }}` or raw CSS in usage or example snippets
- [ ] Prop table: all prop names backtick-quoted, union types use `\|` syntax
- [ ] Defaults verified against `defaultVariants` in the recipe — no assumed defaults
- [ ] Required. used only for TypeScript-enforced props; accessibility-required props say "Required for accessibility."
- [ ] Every example has a 1–2 sentence description above the `<ComponentPreview />`
- [ ] `<ComponentPreview>` attributes have no spaces around `=`
- [ ] Accessibility section present and meaningful (not generic boilerplate)
