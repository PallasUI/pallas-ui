# Pallas UI

A React component library and design system built at Carbonteq. Provides 37+ accessible, themeable components powered by PandaCSS, built as a pnpm monorepo.

## Essential Commands

```bash
pnpm install                        # Install dependencies
pnpm dev                            # Run all dev servers (docs + storybook)
cd components && pnpm storybook     # Run storybook only
pnpm build                          # Build everything (auto-runs sync-components)
pnpm sync-components                # Sync components to docs manually
pnpm lint                           # Lint
cd components && pnpm panda codegen # Regenerate styled-system after token/config changes
```

## Architecture

3-layer design system:

```
packages/panda/        ← Layer 1: Design tokens, color system, recipes (no React)
ui-primitives/         ← Layer 2: Unstyled, accessible behavior-only components
components/src/ui/     ← Layer 3: Final styled components (Layer 1 + Layer 2 combined)
```

Supporting apps:

- `apps/docs/` — Next.js 15 documentation website (MDX-based)
- `components/src/stories/` — Storybook for component development and visual testing
- `scripts/` — Build scripts to sync components into the docs app

## Monorepo Package Structure

| Package                     | Name                       | Purpose                                        |
| --------------------------- | -------------------------- | ---------------------------------------------- |
| `packages/panda/`           | `@pallas-ui/panda-preset`  | PandaCSS preset: tokens, recipes, color system |
| `packages/style-context/`   | `@pallas-ui/style-context` | Styling context provider                       |
| `components/`               | `@pallas-ui/components`    | The main styled component library              |
| `ui-primitives/breadcrumb/` | `@pallas-ui/breadcrumb`    | Unstyled breadcrumb primitive                  |
| `ui-primitives/carousel/`   | `@pallas-ui/carousel`      | Unstyled carousel primitive                    |
| `ui-primitives/sidebar/`    | `@pallas-ui/sidebar`       | Unstyled sidebar primitive                     |
| `ui-primitives/form/`       | `@pallas-ui/form`          | Unstyled form primitive                        |
| `ui-primitives/input-otp/`  | `@pallas-ui/input-otp`     | Unstyled OTP input primitive                   |

## Adding a New Component

See [ADDING-A-COMPONENT](docs/ADDING-A-COMPONENT.md) for the full 8-step workflow.

## Styling Rules

See [STYLING-GUIDE](docs/STYLING-GUIDE.md) for the full token reference (colors, spacing, sizes, typography, disabled state, borders, shadows).

## Component API Conventions & Import Aliases

See [COMPONENT-CONVENTIONS](docs/COMPONENT-CONVENTIONS.md) for compound component pattern, variant props, forwardRef conventions, and import path aliases.

## styled-system/ is Generated — Never Edit It

`components/styled-system/` is PandaCSS codegen output. Regenerate with `cd components && pnpm panda codegen`. Never manually edit files in this folder.

## Sync Components Script

`apps/docs/components/ui/` is a copy of `components/src/ui/` with import paths rewritten — not a symlink or shared package.

- **Automatic**: runs before every `pnpm build` (via Turbo)
- **Manual**: run `pnpm sync-components` while the docs dev server is running
- **Dev mode**: does NOT auto-sync — always run manually after changes

## Git Operations

Never perform any git operations (commit, push, pull, branch, checkout, merge, rebase, stash, tag, etc.) unless the user explicitly asks for it. This includes operations that might seem helpful, like auto-committing after completing a task. Always wait for explicit instruction before touching git.

## Release Process

```bash
pnpm changeset   # Describe your changes, then commit and push
                 # GitHub Actions creates a "Version Packages" PR or publishes to npm
```

Never run `pnpm release` locally.

## Tech Stack

- **React 19** + **TypeScript 5.7**
- **PandaCSS** — styling, design tokens, recipes
- **Radix UI** + **Ark UI** — accessible primitives
- **Turborepo** — monorepo task orchestration with caching
- **Storybook 8** — component development environment
- **Next.js 15** — docs site
- **Biome** — linting | **Prettier** — formatting
- **pnpm 10** — package manager | **Changesets** — versioning and npm publishing
