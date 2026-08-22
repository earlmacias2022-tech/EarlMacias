# Project Context

## Repository
https://github.com/earlmacias2022-tech/EarlMacias.git

## Deployment
Not deployed yet.

## Product
Personal portfolio for Earl Macias, an IT student and developer.

## Audience
Potential employers and clients, with employers as the priority.

## Goal
Present skills and selected projects clearly and create a path to contact Earl.

## Brand
Modern, clean, technical, confident, and student-focused.

## Visual Direction
Inspired by the supplied reference: editorial portfolio layout, warm off-white surfaces, black typography, outlined oversized display text, restrained borders, pill controls, and a dark closing CTA. Use the reference for hierarchy, spacing, composition, and tone rather than copying it.

## Page Structure
Home → About → Skills → Selected Work → Contact → Footer.

## Copy Direction
Short, direct, specific copy. Position Earl as an IT Student & Developer. Primary CTA: View My Projects. Secondary CTA: Contact Me.

## Assets
No personal portrait or project screenshots supplied yet. The hero currently uses a clearly labeled portrait placeholder. Project cards use text-based placeholders until real project assets are provided.

## Functionality
Responsive navigation, smooth scrolling, project category filtering, accessible focus states, reduced-motion support, and a mailto contact CTA. No framework, build system, or backend.

## Avoid
Generic AI-looking layouts, excessive gradients, flashy animation, walls of text, excessive colors, stock-photo-heavy sections, and template-like presentation.

## Current Decisions
Keep the site as one self-contained `index.html`. Highlight HTML/CSS, JavaScript, C/C#, SQL/databases, Git/GitHub, and UI/UX. Showcase 3–5 strong projects. Use the supplied visual reference as inspiration while keeping the portfolio original. Replace placeholder contact email, portrait, and project content when the user provides the real details.

## Motion & Design Revisions (2026-08)
- Removed section eyebrow labels (`/ABOUT` style). Headings carry their own weight.
- Removed decorative gradients (cursor-follow blob, portrait glow). Depth comes from offset soft shadows instead.
- Hero portrait replaced by an animated SVG monogram medallion labeled "Portrait coming soon"; swap in a real cutout photo later by replacing the `<svg>` inside `.medallion` with an `<img>`.
- Real portrait `assets/earl-macias.png` (uploaded by Earl) now sits inside the medallion frame, over the paper circle, with the rotating ring behind it.
- Full motion pass: scroll progress bar, parallax ghost headings, masked line-by-line headline reveals, per-section entrance choreography, skills marquee, count-up stat, tilt cards, magnetic buttons. All disabled under `prefers-reduced-motion`.
- Themed browser surfaces: custom scrollbar, text selection color, focus-visible rings.
- Display face is Space Grotesk (Google Fonts) with Inter for body copy.
