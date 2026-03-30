# PallasUI Contribution Guide

Thank you for considering contributing to **PallasUI**! This guide will help you get started.

## Ways to Contribute

- Report bugs
- Suggest features or improvements
- Submit pull requests for code or documentation
- Review existing issues and PRs

## Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Coding Style](#coding-style)
- [Component Styling Checklist](#component-styling-checklist)
- [API Design Checklist](#api-design-checklist)
- [Documentation Template](#documentation-template)
- [License](#license)


## Getting Started

**1. Fork the repository**

**2. Clone your fork:**

```sh
git clone https://github.com/your-username/pallas-ui.git
```

**3. Install dependencies:**

```sh
pnpm install
```

**4. To run the project:**

```sh
pnpm dev
```

**5. To run storybook:**
```sh
cd components
pnpm storybook
```

## Project Structure

### 1. Primitives
- **Directory**: `ui-primitives/`
- Contains raw and unstyled foundational UI components.
- **Purpose**: Acts as the base layer for components, meant to be reused and styled elsewhere.

### 2. Styles
- **Directory**: `packages/panda/src/theme/recipes/`
- Stores reusable style recipes (variants, base styles) using PandaCSS.
- **Purpose**: Centralizes design tokens, variants, and theme definitions to maintain visual consistency.

### 3. Apply styles to primitives
- **Directory**: `components/src/ui/`
- Combines unstyled primitives with style recipes to create styled UI components.
- **Purpose**: Exposes the final styled API for consumers to use.

### 4. Storybook examples
- **Directory**: `components/src/stories/`
- Contains isolated component stories for visual testing and documentation.
- **Purpose**: Enables interactive previewing of all styled UI components.

### 5. Documentation
- **Directory**: `apps/docs/app/content/`
- MDX-based documentation content used in the docs site.
- **Purpose**: Contains component usage guides, API reference, and design guidelines.
- **How to run**: To compile the shared packages and UI components, use the following command in **root directory** to build the documentation site:

```sh
pnpm build
```

### 6. Previews used in docs
- **Directory**: `apps/docs/components/previews/`
- MDX-based documentation content used in the docs site.
- **Purpose**: Contains component usage guides, API reference, and design guidelines.

## Development Guidelines

**1. Create a branch from main:**

```sh
git checkout -b feature/my-feature
```

**2. Use Conventional Commits for commit messages:**

```sh
feat: add dark mode toggle
fix: correct typo in login error
```

**3. Submit a pull request with a clear description.**

- Tag PRs with "Closes #\<issue-number>"

## Coding Style

By default, this project has already setup the following utilites:
- TypeScript for static type checking
- Biome for code linting
- Prettier for code formatting

For issues other than these, refer to the code style and conventions of the existing files in the codebase.

## Component Styling Checklist

Use the given token system and utilites (see `packages/panda/src/theme/{tokens, recipes, utilities, semantic-tokens}/` for more options or for making other tokens). You can use the following list as a checklist.

### colors
- Background: `colors.surface.elevated`
- Font: `colors.text.secondary`
- Dialog overlay: `colors.fill`
- For different colors in validation states use the tokens that are defined like `colors.success.bg`, `colors.error.bgHover`, etc.

### borders
#### Data entry components
- Default state: `borders.default.xs`
- Hover/Focus: `borders.hover.xs`
- Success: `borders.success.xs` (hover: `…successHover.xs`)
- Error: `borders.error.xs` (hover: `…errorHover.xs`)
- Warning: `borders.warning.xs` (hover: `…warningHover.xs`)

### shadows
#### Data entry components
- Focus: `shadows.primary.2xs`
- Success: `shadows.success.2xs`
- Error: `shadows.error.2xs`
- Warning: `shadows.warning.2xs`

### outlines
- none of the components should use any visible outline

### sizes:
- Control buttons: `sizes.controlHeight…`
- Icons: `sizes.icon…`
- Selection indicators: `size.selectionControl…`

### spacing:
- Padding top/bottom: `spacing.padding.block…`
- Padding left/right: `spacing.padding.inline…`
- Margin: `spacing.layout…`
- Gap: `spacing.gap…`

### border radius
- Rounded: `radii…`

### fonts
- textStyle: `xs`, `sm`, `md`, `lg`…

### disabled
- Cursor: `not-allowed`
- Font color: `colors.text.disabled`
- Background color: `colors.fill.disabled`
- Border: `borders.disabled.xs`

### animations/transitions
- animations can be used from `packages\panda\src\theme\animation-styles.ts`:

- transitions defined in `packages\panda\src\theme\utilities\transition-style.ts`
    - Hover transition
    - Focus transition
    - Open dialog transition

## API Design Checklist

### General component composition

Refer to the following example when composing the component:
```html
<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>

```

### Data Entry component variants

- styling: `outline`(default), `filled`, `underlined`, `borderless`
- radii: `sm`, `md`(default), `lg`, `full`
- size: `sm`, `md`(default), `lg`
- dataStatus: `error`, `success`, `warning`

## Documentation Template

Follow this template when making the `mdx` file for a component:

```md
---
title: [Component name]
description: [Short description of component]
references:
  [Ref name]:
    link: [Ref link]
  …
  [Repeat for multiple references]
---

<ContentContainer>

<Section gap="1">
# [Component name]
<Paragraph size={'extraLarge'} color={'tertiary'}>[Short description of component]</Paragraph>
<ComponentPreview name="[Component preview folder]" withRecipe/>
</Section>

<Section>
## Installation

<Steps>
<Section>
### Install the following dependencies

<InstallTabs pkg="[Name of package]" />

### Copy and paste the following code into your project

<ComponentSource name="[Component preview folder]" />

### Update the import paths to match your project setup

</Section>
</Steps>
</Section>

<Section>

## Usage

```tsx [Component import] ``` 

```tsx [Basic usage example] ```

</Section>

<Section>

## Examples

### Default
<ComponentPreview name="[Component preview folder]" />

### [Variant name]
<ComponentPreview name="[Component preview folder]" file="[Variant preview file]" />

…

[Repeat the above block for each variant]

</Section>

<Section>
## API Reference

### [Subcomponent name]
[Subcomponent description]

#### Props
| Property | Type | Default | Description | Options |
|----------|------|---------|-------------|----------|
|          |      |         |             |          |

#### Data attributes
| Attribute | Values |
| --------- | ------ |
|           |        |

…

[Repeat the above block for each subcomponent]

</Section>
</ContentContainer>
```

- For **[Basic usage example]**, do not include any optional props

- For **[Variant preview file]** in `<ComponentPreview>` do not include file extension

- You can refer to the **Sidebar** docs as an example.

- In **Data Entry components**, follow these headings in this order for the variant examples (If there are variants other than these, put them after this list):
    1. Default
    2. Style Variants
    3. Radii
    4. Sizes
    5. With [Optional subcomponent for eg. Separator]
    6. Disabled
    7. Validation States [Show all style variants' validation states as well]
    8. Form

## License
By contributing, you agree that your contributions will be licensed under the MIT License.

Thanks again for your support!