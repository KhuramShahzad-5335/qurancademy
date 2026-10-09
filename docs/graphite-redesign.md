# Graphite visual redesign

Implemented across all 20 public routes on 9 October 2026. The user's exact graphite 50–950 palette is the shared source for backgrounds, typography, borders, controls, illustration covers and the social preview.

## Page journey

The homepage moves from an illustrated introduction to the family routine, course paths, enquiry steps, parent involvement, practical guides and a closing invitation. About, course comparison, four course details, fees, contact, FAQs, six articles, privacy, terms and parent guidance use the same visual language with content appropriate to each page.

Dark charcoal sections alternate with light graphite sections. Editorial headings, arches, restrained borders and generous spacing provide character without adding a paid service.

## Shared structure

- `src/app/globals.css`: exact palette, semantic tokens, responsive rules and reduced-motion support.
- `src/app/components/story/primitives.tsx`: section, heading, image, feature, action and closing components.
- `src/app/components/story/courseCard.tsx`, `articleCard.tsx`, `journeySteps.tsx`: reusable content components.
- `src/app/components/story/policyLayout.tsx`: readable policy layout and contents navigation.
- `src/app/components/story/design.ts`: artwork and course chapter presentation; defaults support additional courses.
- `src/app/content/courseStories.ts`: course-specific learning stages.
- `src/app/components/story/motionEffects.tsx`: lightweight intersection reveals and a scroll progress indicator. Content is visible without JavaScript and when reduced motion is preferred.

Course and article pages still derive from the existing data and static route generation. No dependency was added. Static export and the existing WhatsApp draft flow are retained.

## Artwork

Generated with the built-in image tool, then resized and encoded with the existing Sharp dependency. These are conceptual illustrations, not real students or teachers. Original generated files remain in the Codex generated-images directory.

Project files:

- `public/images/family-learning.webp`: 1440 × 960, approximately 159 KB.
- `public/images/study-scene.webp`: 1440 × 960, approximately 170 KB.
- `public/images/*-guide.svg`: original code-authored guide illustrations recolored to graphite.
- `public/social-preview.png`: original code-authored social image rendered in graphite.

Prompt summaries:
1. A landscape editorial gouache illustration of a modestly dressed parent and child learning at a wooden desk with a plain book and laptop, an arched window, simple faceless figures, no readable scripture or text.
2. A matching editorial illustration of a sunlit study desk, plain open book on a support, blank notebook, pencil, cup and foliage, without people or writing.
3. For each image, preserve composition, texture and lighting while recoloring to the exact graphite palette, removing green, gold, yellow and brown; use charcoal shadows and pale cool gray light with subtle lavender-gray undertones.

## Validation

Production build, TypeScript, ESLint and the static export checker passed. The export checker covers public-page counts, unique titles, one main heading, canonical URLs, internal links, image targets, sitemap, robots and six article schemas.

The in-app browser failed to attach during visual review. Desktop/mobile screenshot inspection and interactive menu/form testing remain unverified. No deployment was performed.
