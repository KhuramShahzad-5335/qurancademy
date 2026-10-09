# Qurancademy

A static Next.js site for online Quran course enquiries and practical parent guidance. Public site: https://qurancademy.vercel.app.

The free implementation keeps the existing dependencies, Vercel URL and WhatsApp contact. It needs no database, paid form service, custom domain or AI API.

## Work locally

- `npm run dev` starts the development site.
- `npm run lint` checks the code.
- `npm run build` generates the static site in `out/`.
- `npm run preview` serves the generated site at http://127.0.0.1:3100.
- `npm start` also serves the static preview; `next start` is unsuitable for the configured static export.
- `node scripts/preview-static.mjs 3101` selects another local preview port.
- `node scripts/check-static-export.mjs` validates the generated pages, SEO files, links, images and article schemas.

Windows may require permission for a local preview socket. Serve or deploy the contents of `out/` through the existing static hosting workflow.

## Contact flow

The contact page and help panel use the same enquiry component. It prepares a draft, then lets the visitor review and send it in WhatsApp. It does not send, store or confirm delivery of an enquiry. No names, phone numbers or messages are recorded as analytics events.

## Optional configuration

Set build-time variables only when appropriate:

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://qurancademy.vercel.app` | Canonical host, sitemap and social metadata. Rebuild when the domain changes. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Empty | A working mailbox verified by the owner. Empty hides email links. |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | `false` | Enables existing Vercel Analytics and Speed Insights. Confirm account access, plan limits and privacy configuration before enabling. |

There are no Google Ads or AdSense tags in the rendered site.

## Content and assets

- `src/app/content/site.config.ts`: course information, contact, navigation and booking steps.
- `src/app/content/faqs.tsx`: consistent FAQ answers.
- `src/app/content/blogs.ts`: six parent guides, sections, images, dates and related links.
- `src/lib/contact.ts`: one correctly encoded WhatsApp message parameter.
- `src/lib/seo.ts`: route metadata, canonical host and safe JSON-LD serialization.
- `public/images/`: original SVG illustrations; `public/social-preview.png`: social share asset.
- `node scripts/generate-site-assets.mjs`: regenerates the existing visual assets using the Sharp dependency supplied by Next.js. This authoring command is not needed during a build.

The three original article URLs are preserved. Do not invent teacher credentials, safety checks, reviews, prices, availability or expert review. Update article dates when content actually changes.

## Handover

See [implementation progress](docs/implementation-progress.md) for completed work, checks and remaining owner inputs. See [the Mermaid roadmap](docs/qurancademy-implementation-plan.mmd) for dependencies.

Before deployment, manually test the enquiry handoff, navigation, keyboard interactions and phone layout. After deployment, verify the free Search Console property and submit the sitemap. Publishing, account setup, actual WhatsApp receipt and search indexing were not verified by this local implementation.
