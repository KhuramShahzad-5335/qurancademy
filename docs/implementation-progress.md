# Free implementation progress

Updated 9 October 2026. Public URL: https://qurancademy.vercel.app. All changes are local; the live deployment has not been changed. No new dependencies, paid services, accounts or purchases were introduced.

## Implemented

- Both contact locations use one shared form that prepares a WhatsApp enquiry. Visitors review the draft and send it in WhatsApp. The site does not claim receipt, store details locally or record a delivered-lead conversion.
- Drafts can be copied if WhatsApp does not open. Inputs have labels and length limits; contact information is minimised. Course and time-zone details are included in the draft.
- WhatsApp URLs use one correctly encoded `text` parameter and the existing business number. Direct contact links work without the form.
- The fake AI chat was replaced with honest FAQ/help content. Google Ads scripts and the unused conversion helper were removed. Existing Vercel analytics tools remain available but are off by default.
- Removed the splash delay and custom cursor from the rendered layout. Added a skip link, visible keyboard focus, native dialog navigation/help with Escape support and focus return, and native FAQ disclosures that work without JavaScript.
- Fixed the logo path. Homepage, About, FAQs, contact and policies now share a coherent offer and acknowledge that times, language, teacher and fees must be confirmed.
- Unsupported student counts, certification and background-check claims, hardcoded reviews and unverified teacher profiles are no longer published. Original tracked content is recoverable from Git history.
- Added a course comparison page and four individual course pages, a fee-question checklist and parent guidance. No invented package prices, foreign contact identity or safeguarding guarantee is published.
- Every public page has a route-specific title, description, canonical URL, Open Graph and Twitter metadata. The canonical host defaults to the supplied Vercel URL.
- Added static sitemap and robots files, truthful organization schema and article schema with visible organizational authorship and real content-update dates. Unknown dynamic slugs are excluded from generation.
- Rewrote the three existing thin guides while preserving their URLs and added three more practical parent guides. Six original SVG cover illustrations and a PNG social preview replace image placeholders. Articles have headings, contents links, reading times, author context, related guides and course links.
- Static-export preview and validation scripts use built-in Node tools. No new hosting platform or database is needed.

## Verification

- Production build passed, including TypeScript and static generation of the course pages, six guides and SEO files.
- Lint passed after updating utility scripts to ES modules.
- Contact helper checks passed for Unicode and punctuation encoding, one text parameter, phone normalisation and trimmed draft content.
- Social preview and a representative cover were visually inspected.
- Export checks validate public-page metadata, headings, sitemap targets, images, internal links and article schemas. Run `node scripts/check-static-export.mjs` after a build to reproduce them.
- Browser interaction testing remains unverified: the browser session failed after restart and the local preview socket was blocked by Windows sandbox permissions. Permission for an unrestricted preview was declined. No WhatsApp message was sent during testing.

## Next steps requiring real information or account access

1. Test the form, navigation and help panel in your own browser. Send a real test enquiry yourself to confirm the existing business number can receive it; the website cannot establish delivery.
2. Supply the actual price packages, free-trial length, teaching languages and available local lesson times. These can then replace the current question-based wording.
3. Verify teacher qualifications, bios, photos, review authenticity and permission before republishing profiles or reviews. Confirm actual safeguarding practices before making claims.
4. Provide a working email address if available; no placeholder email is displayed.
5. Deploy the generated site through your existing workflow. Then verify the Search Console property and submit `https://qurancademy.vercel.app/sitemap.xml`. This account action has not been performed.
6. Continue reviewed editorial work using search and enquiry feedback. Six parent guides are an initial batch, not a completed 15-20 article programme or evidence of specialist religious review.
7. Optional advertising remains deferred. No AdSense code, account application or promise of earnings was added. Free operation is preserved.

## Free-operation choices

Static export is retained. WhatsApp is an explicit visitor-controlled handoff, not a backend substitute disguised as delivery. Exact fees and availability are pending owner information. Analytics is opt-in to avoid assuming a paid allowance or completed account setup. The free Vercel URL is used; a custom domain is not required for this implementation.
