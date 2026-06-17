---
name: Lumina Resume
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c6c5d7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#908fa0'
  outline-variant: '#454555'
  surface-tint: '#bec2ff'
  primary: '#bec2ff'
  on-primary: '#0002ab'
  primary-container: '#7c85ff'
  on-primary-container: '#000197'
  inverse-primary: '#424bdb'
  secondary: '#ffb5a0'
  on-secondary: '#601500'
  secondary-container: '#ff5723'
  on-secondary-container: '#541100'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#db7619'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bec2ff'
  on-primary-fixed: '#00016d'
  on-primary-fixed-variant: '#262dc3'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#872100'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-elevated: '#1A1A1A'
  text-muted: '#4D4D4D'
  text-white: '#FFFFFF'
typography:
  headline-xl:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Public Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
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
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  unit: 8px
---

## Brand & Style

The design system is engineered for the modern professional, blending a high-end corporate aesthetic with the avant-garde energy of the tech industry. The brand personality is authoritative yet innovative, aimed at a target audience of high-tier recruiters, venture capitalists, and design-led organizations.

The design style is a hybrid of **Modern Corporate** and **Glassmorphism**, elevated by **3D-like decorative elements**. It leverages a sophisticated dark theme that emphasizes depth and clarity. Information hierarchy is paramount, using high-contrast typography and subtle textural shifts to guide the eye through the professional narrative. The inclusion of vibrant, 3D amorphous shapes provides a "future-proof" aesthetic, contrasting against the rigid, clean structure of the profile data.

## Colors

The palette is anchored in a deep black (`#000000`), serving as a canvas for high-chroma accents. 

- **Primary:** An electric indigo (`#6670FF`) used for core interactive elements and highlighting key technical skills.
- **Secondary:** A vivid orange-red (`#F94706`) reserved for high-impact calls to action and critical status indicators (e.g., "Available for work").
- **Neutral Context:** Grays are used sparingly to define hierarchy. `#4D4D4D` serves as the primary shade for secondary text and borders, while `#FFFFFF` is reserved for primary headings to ensure maximum legibility.
- **Dynamic Backgrounds:** Gradient blurs using the primary and secondary colors should be placed at low opacity (10-15%) behind 3D elements to create atmospheric depth.

## Typography

This design system utilizes a structured hierarchy to handle dense information. **Public Sans** provides a sturdy, institutional feel for headlines, conveying reliability. **Inter** is used for body text and UI labels due to its exceptional legibility at small sizes and its neutral, systematic character.

Tight letter spacing is applied to large headlines to create a compact, modern editorial look. Labels use uppercase styling with increased letter spacing to distinguish metadata from content.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centering a 12-column grid within a 1200px container. On mobile, it transitions to a single-column fluid layout with 20px side margins.

A strict 8px spatial scale is used to define all padding and margins. Section spacing is generous (using 80px or 120px blocks) to allow the 3D decorative elements to "breathe" without interfering with the readability of the CV content. Content blocks like "About Me" and "Experience" should use staggered vertical alignments on desktop to create a more dynamic, gallery-like flow.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Glassmorphism**. Rather than traditional drop shadows, this design system uses:

1.  **Base Layer:** Solid `#000000`.
2.  **Surface Layer:** Cards and containers use a semi-transparent `#1A1A1A` with a 20px backdrop blur and a subtle 1px border (`#FFFFFF` at 10% opacity) to simulate frosted glass.
3.  **3D Layer:** High-fidelity 3D renders or CSS-based amorphous shapes sit between the base and surface layers, or occasionally float above surfaces with a soft, tinted ambient shadow (`primary_color` at 20% opacity, 40px blur).

## Shapes

The shape language is refined and "Soft-Industrial." Standard UI components like cards and input fields utilize a 0.5rem (8px) corner radius. This provides a professional balance—neither too sharp and aggressive nor too round and playful. 

Interactive elements like buttons use a slightly more aggressive "Pill" shape to stand out against the geometric grid. Decorative 3D elements should be organic and fluid, contrasting with the mathematical precision of the layout.

## Components

- **Buttons:** Primary buttons are pill-shaped with a solid `#6670FF` fill and white text. Secondary buttons use a "Ghost" style with the 1px subtle border and backdrop blur.
- **Skill Chips:** Small, rounded containers with a background of `primary_color` at 10% opacity and a solid primary-colored label.
- **Experience Cards:** Utilize the Glassmorphic style with a left-aligned vertical accent line in the primary color to denote chronology.
- **Input Fields:** Dark background (`#000000`), 1px border in `#4D4D4D`, transitioning to `primary_color` on focus.
- **3D Accents:** Floating, high-gloss spheres or toroids placed near section headers. These should have a "slow float" animation to add life to the static CV.
- **Progress Indicators:** For technical skills, use thin, 4px high bars with a gradient from `#6670FF` to `#F94706`.