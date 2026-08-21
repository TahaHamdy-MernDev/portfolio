# Project Guidelines & Rules

## Tailwind CSS Rules

### 1. Tailwind CSS v4 Architecture & Syntax
- **Version Standard**: Always use **Tailwind CSS v4** conventions and syntax.
- **Configuration**: Use CSS-first configuration via `@import "tailwindcss";` and `@theme` blocks (defined in `globals.css`) rather than legacy `tailwind.config.js`.
- **Theme Variables**: Use design tokens and CSS variables mapped in `@theme` (e.g., `bg-paper`, `bg-surface`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `text-accent-ink`, `bg-status-live`).

### 2. Canonical Classes Enforcement (`tailwindcss(suggestCanonicalClasses)`)
When writing or refactoring Tailwind CSS classes in JSX/TSX/HTML, always use **canonical utility class names** as enforced by the Tailwind CSS language server (`tailwindcss(suggestCanonicalClasses)`):

- **Linear Numeric Scale for Multiples of 4px**: In Tailwind CSS v4, any pixel spacing/sizing that is a multiple of 4px has a standard canonical numeric class (`value_in_px / 4`). Never use arbitrary brackets `[...]` for values that map to the standard scale:
  - `max-w-[800px]` $\rightarrow$ `max-w-200` (800 / 4 = 200)
  - `min-h-[420px]` $\rightarrow$ `min-h-105` (420 / 4 = 105)
  - `min-h-[440px]` $\rightarrow$ `min-h-110` (440 / 4 = 110)
  - `min-h-[260px]` $\rightarrow$ `min-h-65` (260 / 4 = 65)
  - `h-[2px]` $\rightarrow$ `h-0.5` (2 / 4 = 0.5)
  - `w-[1120px]` $\rightarrow$ `w-280` (1120 / 4 = 280)
- **CSS Variables Syntax**: In Tailwind CSS v4, CSS variables use parentheses instead of bracketed `var()` calls:
  - `rounded-[var(--radius)]` $\rightarrow$ `rounded-(--radius)`
- **Gradients (`bg-linear-to-*`)**: Use `bg-linear-to-*` instead of legacy `bg-gradient-to-*` (e.g., `bg-linear-to-t`, `bg-linear-to-b`, `bg-linear-to-r`).
- **Scrollbar Utilities**: Use `scrollbar-none` instead of arbitrary `[scrollbar-width:none]`.
- **Logical Positioning**: Use logical positioning utilities like `inset-e-{n}` / `inset-s-{n}` instead of `end-{n}` / `start-{n}`.
- **Z-Index Scale**: Use standard numeric z-indexes like `z-100` instead of `z-[100]`.
- **Dimensions (`size-*`)**: Use `size-{n}` instead of separate `w-{n} h-{n}` when width and height are identical (e.g., use `size-4`, `size-5`, `size-6`, `size-full`, etc.).
- **Transforms & Rotations**: Use canonical directional prefixes and degrees (e.g., `rtl:-rotate-90` instead of `rtl:rotate-[-90deg]`).
- **Positioning (`inset-*`)**: Use `inset-{n}`, `inset-x-{n}`, `inset-y-{n}` instead of specifying opposite sides independently when identical (e.g., `inset-0`, `inset-x-0 top-0 h-20`).
- **Color Opacity**: Use the canonical slash syntax for alpha opacity (e.g., `bg-black/80`, `text-white/70`, `border-emerald-500/30`, `shadow-accent/25`).
- **Standard Utilities**: Prefer canonical standard utilities over arbitrary values `[...]` whenever a standard or theme token utility is available.
- **Transitions & Transforms**: Use canonical v4 transition and animation utilities (e.g., `transition-all`, `transition-colors`, `duration-200`, `ease-in-out`).
- **Clean Grouping**: Group classes logically (layout -> positioning -> display/flex/grid -> spacing/sizing -> typography -> appearance/colors -> states/transitions).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
