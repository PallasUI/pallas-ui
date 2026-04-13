# Figma CLI

A command-line tool for retrieving Pallas UI component information. Designed primarily for AI agents to programmatically access component recipes, CSS output, props, and design tokens.

## Overview

`@pallas-ui/figma-cli` reads the Pallas UI component library's PandaCSS configuration and source files to extract structured information about components without needing a running application. It leverages PandaCSS's context API and `ts-morph` for static TypeScript analysis.

## Installation

The CLI is part of the monorepo at `packages/figma-cli/`.

```bash
# From the monorepo root
pnpm install

# Run via the package script
cd packages/figma-cli && pnpm cli <command>

# Or after building, run directly
pnpm build && ./dist/index.js <command>
```

## Configuration

Components are registered in `figma-cli-config.json` at the package root. Each entry specifies:

- **`paths`** — Relative paths to the component source files (from the config file location).
- **`isCompound`** — Whether the component is a compound component (exports multiple sub-components like `Accordion.Root`, `Accordion.Item`, etc.).

Example entry:

```json
{
  "accordion": {
    "isCompound": true,
    "paths": ["../../components/src/ui/accordion/index.tsx"]
  },
  "button": {
    "paths": ["../../components/src/ui/button/button.tsx"]
  }
}
```

## Commands

### `component`

Get detailed information about a single component. Outputs the recipe, generated CSS, and props in one combined view.

```bash
figma-cli component <name>
```

**Arguments:**

| Argument | Required | Description                                                            |
| -------- | -------- | ---------------------------------------------------------------------- |
| `<name>` | Yes      | The component name (e.g. `button`, `accordion`). Must be a valid name. |

**Output sections:**

- **Recipe** — The full PandaCSS recipe config as JSON (variants, default variants, base styles).
- **CSS** — The static CSS generated from the recipe.
- **Props** — A markdown table of component props with name, type, and required status.

**Example:**

```bash
figma-cli component button
```

When called without a name, lists all available components.

---

### `css`

Generate the CSS for a component's recipe.

```bash
figma-cli css <name>
```

**Arguments:**

| Argument | Required | Description                                   |
| -------- | -------- | --------------------------------------------- |
| `<name>` | Yes      | The component name or `*` for all components. |

Using `*` generates CSS for all registered component recipes.

**Example:**

```bash
figma-cli css button
figma-cli css "*"
```

When called without a name, lists all available components.

---

### `recipe`

Get the PandaCSS recipe configuration for a component as JSON.

```bash
figma-cli recipe <name>
```

**Arguments:**

| Argument | Required | Description                                |
| -------- | -------- | ------------------------------------------ |
| `<name>` | Yes      | The component name or `*` for all recipes. |

Using `*` returns recipe configs for every registered component.

**Output:** JSON object containing the recipe definition — variants, slot recipes, default variants, and base styles.

**Example:**

```bash
figma-cli recipe button
figma-cli recipe "*"
```

When called without a name, lists all available components.

---

### `props`

Extract and display the TypeScript props interface for a component. Uses `ts-morph` to statically analyze the component source files.

```bash
figma-cli props <name>
```

**Arguments:**

| Argument | Required | Description                    |
| -------- | -------- | ------------------------------ |
| `<name>` | Yes      | The component name to inspect. |

**Options:**

| Flag     | Description                                        |
| -------- | -------------------------------------------------- |
| `--json` | Output props as JSON instead of a formatted table. |

**Behavior by component type:**

- **Simple components** — Displays a single table of props.
- **Compound components** — Displays props grouped by sub-component (e.g. `AccordionRoot`, `AccordionItem`, etc.).

**Output format (default):** A markdown table with columns `Prop`, `Type`, `Required`. For compound components, tables are grouped under their sub-component name.

**Output format (`--json`):** A JSON object with the structure:

```json
{
  "name": "button",
  "isCompound": false,
  "parts": [
    {
      "name": "Button",
      "props": [
        {
          "name": "variant",
          "type": "\"solid\" | \"outline\" | \"ghost\"",
          "required": false
        },
        {
          "name": "size",
          "type": "\"sm\" | \"md\" | \"lg\"",
          "required": false
        }
      ]
    }
  ]
}
```

**Example:**

```bash
figma-cli props button
figma-cli props accordion --json
```

When called without a name, lists all available components.

---

### `tokens`

List the design tokens available in the Pallas UI design system.

```bash
figma-cli tokens
```

**Options:**

| Flag               | Description                                  |
| ------------------ | -------------------------------------------- |
| `-s`, `--semantic` | List semantic tokens instead of base tokens. |

**Base tokens output:** A table of token name, value, and CSS variable for each token group (colors, spacing, sizing, typography, etc.).

**Semantic tokens output:** A table showing token name, light/dark mode values (where applicable), and CSS variable. Tokens with dark mode variants include both `Light value` and `Dark value` columns.

**Example:**

```bash
figma-cli tokens
figma-cli tokens --semantic
```

---

## Validation

All commands that accept a component name validate the name against the registered components in `figma-cli-config.json`. If an invalid name is provided or no name is given, the CLI lists all available components and exits.

## Registered Components

The following 34 components are registered:

| Component   | Type     |
| ----------- | -------- |
| accordion   | Compound |
| alert       | Simple   |
| badge       | Simple   |
| breadcrumb  | Compound |
| button      | Simple   |
| carousel    | Compound |
| checkbox    | Simple   |
| combobox    | Compound |
| command     | Compound |
| daypicker   | Simple   |
| drawer      | Compound |
| form        | Compound |
| input       | Simple   |
| input-otp   | Compound |
| menu-bar    | Compound |
| modal       | Compound |
| popover     | Compound |
| progress    | Compound |
| radio-group | Compound |
| scroll-area | Compound |
| segmented   | Compound |
| select      | Compound |
| separator   | Simple   |
| sheet       | Compound |
| sidebar     | Compound |
| slider      | Simple   |
| steps       | Compound |
| switch      | Simple   |
| tabs        | Compound |
| textarea    | Simple   |
| toast       | Compound |
| tooltip     | Compound |
| treeView    | Compound |
| typography  | Simple   |

## Tech Stack

| Dependency                | Purpose                                            |
| ------------------------- | -------------------------------------------------- |
| `commander`               | CLI framework for command registration and parsing |
| `chalk`                   | Terminal output coloring                           |
| `markdown-table`          | Formatted table output                             |
| `ts-morph`                | Static TypeScript analysis for prop extraction     |
| `@pandacss/node`          | PandaCSS context API for recipe/CSS generation     |
| `@pallas-ui/panda-preset` | Pallas UI's design tokens and recipes              |
