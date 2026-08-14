---
name: Obsidian Noir & Crimson Rose
colors:
  surface: '#12131a'
  surface-dim: '#12131a'
  surface-bright: '#383940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#1a1b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a31'
  surface-container-highest: '#33343c'
  on-surface: '#e2e1eb'
  on-surface-variant: '#e3bdbf'
  inverse-surface: '#e2e1eb'
  inverse-on-surface: '#2f3037'
  outline: '#aa888a'
  outline-variant: '#5b4041'
  surface-tint: '#ffb2b7'
  primary: '#ffb2b7'
  on-primary: '#67001b'
  primary-container: '#ff516a'
  on-primary-container: '#5b0017'
  inverse-primary: '#bc0b3b'
  secondary: '#c6c4da'
  on-secondary: '#2f2f3f'
  secondary-container: '#464557'
  on-secondary-container: '#b5b3c8'
  tertiary: '#c7c5d3'
  on-tertiary: '#302f3a'
  tertiary-container: '#918f9c'
  on-tertiary-container: '#292933'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b7'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#92002a'
  secondary-fixed: '#e3e0f6'
  secondary-fixed-dim: '#c6c4da'
  on-secondary-fixed: '#1a1a2a'
  on-secondary-fixed-variant: '#464557'
  tertiary-fixed: '#e3e1ef'
  tertiary-fixed-dim: '#c7c5d3'
  on-tertiary-fixed: '#1b1b25'
  on-tertiary-fixed-variant: '#464651'
  background: '#12131a'
  on-background: '#e2e1eb'
  surface-variant: '#33343c'
typography:
  section-number:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: IBM Plex Mono
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: IBM Plex Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: IBM Plex Mono
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  metadata:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid_unit: 40px
  gutter: 24px
  margin_mobile: 20px
  margin_desktop: 80px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 32px
---

## Brand & Style

The design system is engineered for high-end technical portfolios, blending the precision of a developer's terminal with the premium aesthetic of a boutique hardware studio. It targets an audience of technical directors, senior engineers, and stakeholders who value architectural rigor and refined craftsmanship.

The visual style is a hybrid of **Cyber-Minimalism** and **Modern Corporate**. It utilizes a deep, multi-layered dark canvas to create immense depth, contrasted by a singular, high-energy accent color—Crimson Rose—to guide the eye to critical data points and calls to action. The emotional response is one of calculated confidence, technical mastery, and "stealth-wealth" professionalism.

Key visual identifiers include:
- A pervasive 40px structural grid overlay.
- Low-latency interactions with high-intensity visual feedback.
- A rigid adherence to information hierarchy through mixed typeface styles (Mono vs. Sans).

## Colors

The palette is anchored in "Obsidian Noir," a deep slate-black that serves as the foundation for all depth tiers. 

- **Primary (Crimson Rose):** Reserved strictly for interactive elements, status indicators, and branding moments. It should be used sparingly to maintain its impact.
- **Surface Tiers:** Backgrounds transition from `#0a0a0f` (canvas) to `#111118` (elevated panels) to create a subtle sense of z-axis hierarchy.
- **Borders & Grids:** Two levels of slate are used to define boundaries without visual clutter. The lighter `#252535` is for active borders, while the darker `#1a1a24` is for the background grid lines.
- **Accents:** Use the muted Crimson fill for hover states or background highlights behind critical data visualizations.

## Typography

This design system employs a dual-typeface strategy to distinguish between "Machine Data" and "Human Narrative."

- **IBM Plex Mono (Technical/Display):** Used for headlines, numeric tags, terminal logs, and navigation. This font signals technical expertise and precision. Headlines should always be uppercase in large formats to emphasize structural weight.
- **Inter (Reading/Body):** Used for all paragraph text, case study descriptions, and long-form content. Inter provides the necessary legibility and warmth to balance the coldness of the monospace display face.

**Hierarchy Rule:** Every major section must begin with a numeric tag (e.g., 01 // ) in IBM Plex Mono to maintain the "indexed" portfolio aesthetic.

## Layout & Spacing

The layout is governed by a **40px Fixed Grid System**. 

- **Grid Overlay:** A global background pattern of lines spaced at 40px intervals using `#1a1a24` at 0.15 opacity. All major components should snap to these grid lines.
- **Desktop:** A 12-column system with 24px gutters. Wide margins (80px) are used to create a "letterboxed" cinematic feel for high-end project displays.
- **Mobile:** A 4-column system with 20px margins. The 40px grid persists but can be simplified to 20px subdivisions if necessary for tight layouts.
- **Rhythm:** Spacing between sections should be multiples of 40px (80px, 120px, 160px) to maintain the structural integrity of the design system.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Selective Glows** rather than traditional drop shadows.

- **Background:** The base canvas is flat `#0a0a0f`.
- **Panels:** Cards and containers use `#111118` with a 1px border of `#252535`. This creates a "machined" look where elements appear inlaid rather than floating.
- **Interactive Depth:** When hovering over cards, a 3D scale effect (approx. 1.02x) is applied. 
- **Luminosity:** The primary Crimson Rose buttons feature a soft outer glow (`0px 0px 20px rgba(244, 63, 94, 0.4)`) to simulate a powered-on LED or laser indicator.
- **Grid Transparency:** All overlays and modals should use backdrop-blur (12px) combined with a semi-transparent slate-black fill to keep the underlying grid visible but legible.

## Shapes

The design system utilizes a **Rounded-Medium** approach for large containers to soften the "Brutalist" mono-typography, while keeping small elements sharp and technical.

- **Cards & Major Panels:** Use `rounded-xl` (1.5rem / 24px) to create a distinct, modern silhouette.
- **Buttons & Inputs:** Use `rounded-lg` (1rem / 16px) for a comfortable touch target that still feels structured.
- **Badges & Tags:** Use full pill-shaping (rounded-full) for high-contrast visibility against the rectangular grid.

## Components

### Buttons
- **Primary:** Crimson Rose solid background, white text. Includes a soft crimson outer glow on idle.
- **Secondary:** Slate-gray background (`#252535`), subtle scale on hover.
- **Outline:** 1px border of Zinc-800, no fill. Border brightens to Zinc-400 on hover.
- **Ghost:** Zinc-400 text, no background or border. Used for tertiary actions or terminal navigation.

### Cards
- **Construction:** Background of `zinc-950` at 80% opacity, 1px border of `zinc-800/80`.
- **Behavior:** 3D transform (scale and slight tilt) on hover to emphasize the technical "object" nature of the projects.

### Badges
- **Style:** Monospace, uppercase, pill-shaped.
- **Success State:** Includes a 6px pulsing dot in Crimson Rose to indicate "Live" or "Active" status.

### Section Headers
- **Composition:** A numeric tag (e.g., `01 /`) followed by a large uppercase title. A vertical 2px "status bar" in Crimson Rose should sit to the left of the title for primary sections.

### Input Fields
- **Style:** Dark backgrounds with 1px slate borders. Focus state triggers a Crimson Rose border and a 2px inner-shadow to give an "inset" technical feel.

### Terminal Logs
- **Usage:** For metadata or "About" sections. A dark `#050507` box with a `zinc-500` IBM Plex Mono text, simulating a command-line interface.
