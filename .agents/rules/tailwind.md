# Tailwind CSS v4 & Canonical Classes Rule

## Role & Constraints
When writing, editing, or refactoring code involving Tailwind CSS in this project:

1. **Always Use Tailwind CSS v4**:
   - Utilize Tailwind CSS v4 architecture and syntax.
   - Leverage CSS-first configuration via `@theme` in `src/app/globals.css`.
   - Adhere to modern v4 design token utilities (`bg-paper`, `bg-surface`, `bg-surface-card`, `bg-surface-hover`, `text-ink`, `text-muted`, `border-line`, `text-accent`, etc.).

2. **Strictly Enforce `tailwindcss(suggestCanonicalClasses)`**:
   - Always output the canonical version of any Tailwind CSS class.
   - **Linear Numeric Scale (multiples of 4px)**: Use canonical numeric scale values rather than arbitrary pixel brackets `[...]`:
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
   - **Transforms & Rotations**: Use canonical directional prefixes (e.g. `rtl:-rotate-90` instead of `rtl:rotate-[-90deg]`).
   - **`size-*`**: Use `size-{n}` instead of `w-{n} h-{n}` for equal dimensions (e.g. `size-4`, `size-5`, `size-6`, `size-8`, `size-full`).
   - **`inset-*`**: Use `inset-{n}`, `inset-x-{n}`, `inset-y-{n}` instead of multi-directional offset declarations when identical.
   - **Alpha / Opacity**: Use standard `/opacity` modifiers (e.g. `bg-black/70`, `text-zinc-200/80`, `border-emerald-500/30`).
   - **No Legacy Classes**: Avoid deprecated Tailwind v3 or non-canonical classes.
   - **Theme Utility Priority**: Use theme utility classes rather than arbitrary bracket syntax `[var(--...)]` where theme tokens are defined.
