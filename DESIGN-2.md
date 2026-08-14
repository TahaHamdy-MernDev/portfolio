---
name: Obsidian Developer
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  element-gap: 32px
---

## Brand & Style

This design system is engineered for a high-end Full-stack Developer portfolio, emphasizing technical mastery, precision, and architectural clarity. The aesthetic is rooted in **Modern Minimalism with a Technical Edge**, utilizing a deep, monochromatic palette to create a high-focus environment that allows code snippets and project imagery to command attention.

The visual narrative evokes a "dark mode by default" IDE experience, translated into a sophisticated web interface. It targets high-tier tech recruiters and potential clients who value clean code and structural integrity. By stripping away superfluous color and soft edges, the UI communicates authority, reliability, and a professional "developer-first" mindset.

## Colors

The color strategy is strictly monochromatic, leveraging contrast to define hierarchy. 

- **Primary Canvas:** A deep obsidian (#080808) serves as the base, providing a "void" that eliminates visual noise.
- **Surface & Depth:** A slightly elevated gray (#121212) is used for containers and section dividers to create subtle structural differentiation.
- **Typography & Interaction:** Pure white (#FFFFFF) is reserved for primary headings and active states, while a mid-tone gray (#A6A6A6) handles secondary information and body text to reduce eye strain in the dark environment.
- **Accents:** No vibrant hues are used; instead, "light" is the accent. Brightness, rather than color, directs the user's eye.

## Typography

The typography system pairs a sharp, geometric sans-serif for impact with a highly legible utilitarian face for long-form content.

- **Headlines:** Use **Hanken Grotesk** with tight tracking and heavy weights. This creates a bold, structured presence that feels modern and architectural.
- **Body:** **Inter** provides a neutral, systematic feel that ensures readability across all technical descriptions.
- **Technical Metadata:** **JetBrains Mono** is utilized for labels, tags, and code snippets, reinforcing the developer persona.
- **Hierarchy:** Use `label-caps` for section overlines (e.g., ".../WORK") to mimic file directory naming conventions.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to maintain a cinematic, curated feel, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid with generous 24px gutters. Content should often be offset or centered within 8-10 columns to create purposeful whitespace.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Large vertical gaps (120px+) are encouraged between major portfolio sections to allow the design to "breathe" and give each project its own stage.
- **Alignment:** Strict left-alignment for text blocks to maintain the structured, document-like feel of a code editor.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Surface Tiers:** Depth is communicated by shifting the background color from #080808 (Canvas) to #121212 (Surface).
- **Outlines:** Instead of shadows, use 1px solid borders in #262626 (dark gray) to define cards and input fields. This maintains a flat, "schematic" look.
- **Interactive Depth:** On hover, an element's border should brighten to #A6A6A6 or #FFFFFF, rather than lifting off the page with a shadow. 
- **Glassmorphism:** Reserved strictly for navigation bars. A 20px backdrop blur with a 10% white opacity creates a sophisticated "frosted obsidian" effect.

## Shapes

The shape language is **Minimal and Sharp**. 

- **Primary Corner Radius:** A subtle 4px (0.25rem) radius is applied to cards, buttons, and input fields. This "breaks" the harshness of a pure 90-degree angle while maintaining a professional, engineered aesthetic.
- **Media:** Images and project thumbnails should follow the same 4px radius.
- **Buttons:** Small components like tags/chips may use a slightly more rounded 8px radius to differentiate them from structural layout blocks, but never a full pill shape.

## Components

### Buttons
- **Primary:** Solid White background with black text. No border. Sharp 4px corners.
- **Secondary:** Transparent background with a 1px White border. White text.
- **Tertiary/Ghost:** Transparent background, gray text, no border. Brightens to white on hover.

### Cards
- Background: #121212.
- Border: 1px solid #262626.
- Padding: 32px.
- Transition: Border color shifts to #FFFFFF on hover to indicate interactivity.

### Inputs & Fields
- Background: #080808 (indented look) or #121212.
- Border: 1px solid #262626.
- Focus State: Border color becomes #FFFFFF with a 0px offset (inset look).

### Chips & Tags
- Small, uppercase mono-spaced text using `label-caps`.
- Background: #1A1A1A.
- Border: 1px solid #333333.

### Navigation
- Sticky top-bar with `backdrop-filter: blur(20px)`.
- Bottom border: 1px solid #1A1A1A.
- Links: Low-contrast gray (#A6A6A6), transitioning to White on hover with a small dot indicator.