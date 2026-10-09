# Qurancademy proposal review and implementation checklist

Reviewed: 9 October 2026. Scope: the supplied six-page proposal and the current local repository. Live-site claims in the proposal have not been independently reproduced. No application code was changed for this review.

## Verdict

Adopt the direction with revisions. Technical SEO, truthful positioning, real teacher credentials, useful reviewed content and clearer pricing fit this project. However, real enquiry delivery and application readiness must come first. The latest production build and lint checks pass. Treat student enrolment as the primary business outcome; blog advertising is a separate, optional experiment.

The 60% / 15% / 5% completion figures are subjective, not measured project readiness. The proposed one-day technical phase excludes existing application problems and owner dependencies. Six to twelve months is a planning horizon, not a promise of rankings or income. Proposed durations below are effort estimates, not deadlines.

## What the repository actually shows

| Finding | Evidence | Effect on the proposal |
| --- | --- | --- |
| Contact page saves enquiries only in localStorage | `src/app/contact/page.tsx:47-61` | Fix before driving traffic; the academy receives no message. |
| Support form only marks submission successful | `src/app/components/common/floatingWidget.tsx:70-74` | Both forms need one real delivery flow and honest error states. |
| Both forms emit a Google Ads conversion before real delivery | Same handlers and `components/common/googleAds.ts` | Current conversion totals do not prove leads arrived. Separate click, accepted enquiry, booked trial and enrolment. |
| Analytics already exists | `src/app/layout.tsx` imports Vercel Analytics and Speed Insights; also loads Google Ads | The proposal's "no analytics" finding is inaccurate for this checkout. Verify configuration rather than duplicate tracking. GA4 is optional. |
| Static export limits future backend work | `next.config.ts`; incomplete untracked account files were present during the initial inspection but absent at final verification | The earlier files referenced missing modules. The working tree changed during review; the final build passes and contains no account routes. Do not restore that incomplete implementation as part of growth work. Static export still cannot host a custom POST lead endpoint. |
| Contact details conflict | `content/site.config.ts` uses `dummy@dummy.pk`; contact and widget use `support@qurancademy.pk` | Verify a working mailbox and use one source of truth everywhere, including privacy and terms. |
| Claims require evidence | Site config says 500+ students; About says 1,200+, 50+ tutors and 99% satisfaction, plus background verification and Sanad claims | Inconsistency is confirmed; falsity is not established. Verify or remove unsupported claims. |
| Reviews are hardcoded | Three reviews in `content/site.config.ts`, shared slider across pages | The proposal's "one repeated testimonial" description is inaccurate. Authenticity and permission still need confirmation. |
| Blog is thin and incomplete | Three posts, each with three paragraphs; placeholder image paths and visible placeholder covers | Replace weak content and assets before scaling article count. Existing bylines need real bios and reviewer attribution. |
| SEO infrastructure is absent from source | No sitemap, robots, canonical, Open Graph or JSON-LD implementation found | This supports the proposal's technical work, but missing robots/sitemap alone does not prove a site cannot be crawled. |
| Splash hides the page on initial load | `bookLoader.tsx`: 3.2 seconds before exit and 0.7-second exit; visible initial state | Remove the artificial delay. With JavaScript unavailable the overlay remains; test readable content without it. |
| Small interaction defects | Header uses relative `icon.png` with alt `ghjk`; multiple WhatsApp links append a second `text` parameter | Use an absolute asset URL, appropriate alt text and a URL helper that replaces the text parameter. |
| Assistant is a keyword simulator | `floatingWidget.tsx:422` | Label it as an automated FAQ helper, or remove it; unify inconsistent trial and course statements. |

## Keep, revise and defer

- **Keep:** sitemap, per-page canonical URLs, useful metadata, social previews, truthful organization/article schema, real reviews, teacher bios, pricing, Search Console and teacher review of religious content.
- **Revise:** UK/US/Canada positioning must follow actual English teaching capacity and time-zone coverage, including daylight saving. Keep the Pakistan address and +92 number truthful; do not simulate a foreign presence. A working domain mailbox is a practical trust improvement.
- **Revise:** a custom domain helps brand continuity and trust, but Google's ownership requirement is access to the site's HTML, not a universal paid-domain rule. Confirm registration and renewal costs rather than assume $10/year.
- **Revise:** 1,200 words and 15-20 articles can be editorial targets, not Google requirements. Choose depth by the question. Three genuinely useful posts are better than twenty padded ones. No guaranteed approval after week eight.
- **Revise:** adopting MongoDB is not necessary merely to receive enquiries. Default to a hosted form service compatible with static export if its limits, privacy and delivery reliability are acceptable. Choose a custom backend when workflows justify maintenance and hosting costs.
- **Defer:** login, dashboards, broad country-page expansion and AdSense until the core booking journey works. Ads belong only on suitable blog pages, after checking policies and their effect on enrolments.

## Phase checklist

Use `qurancademy-implementation-plan.mmd` as the dependency map. Complete one phase gate before moving to the next. Preserve the current working tree before changing or archiving incomplete authentication work.

### Phase 0: reliable application and enquiry delivery

Owner: developer; business owner selects delivery provider/workflow. Estimate: 2-4 working days.

- [ ] Reproduce build and lint issues; inventory missing modules without exposing environment secrets. Read the installed Next.js guides before implementation.
- [ ] Safely archive or complete server routes appropriate to the chosen architecture. No login implementation is needed for this MVP.
- [ ] Hosted form path: retain static export; configure endpoint, recipient, origin restrictions and provider spam controls. Confirm pricing/quota, data handling and export capability.
- [ ] Custom backend path: remove export mode; use server-capable hosting; implement a lowercase `/api/leads` endpoint with server-side validation, length limits, spam controls and rate limiting. Persist leads with restricted access, then notify the coordinator with retry handling. Keep secrets server-side.
- [ ] Unify both forms. Use loading, success and retry states; retain input on failure; avoid collecting unnecessary child data. Do not treat local browser storage as delivery.
- [ ] Set an accepted enquiry event only after acceptance; avoid duplicate submissions. Confirm actual receipt separately. Never send names, email, phone or message text to analytics.
- [ ] Repair logo path, WhatsApp URL construction and splash behaviour. Add drawer focus handling, Escape close, expanded state and hidden-state keyboard exclusion; associate support-form labels with controls.
- [ ] Gate: production build and lint pass; both forms reach the coordinator in a real end-to-end test; rejection and network failures preserve input and show no success or conversion; test phone-sized screens and keyboard navigation.

### Phase 1: a truthful, coherent offer

Owner: business owner and teachers provide facts; developer applies them. Estimate: 2-4 days after facts are available.

- [ ] Confirm audience wording, trial duration (one demo versus three days), English capability, actual schedules, package prices, currencies and refund/cancellation terms.
- [ ] Verify the mailbox, credentials, statistics, reviews and image permissions. Remove unsupported claims until evidence is available.
- [ ] Update site config, homepage, About, FAQs, contact, helper and policies from consistent facts. Preserve course terminology with clear English explanations.
- [ ] Publish prices and real bios; add a safety page describing existing practices, parent involvement and a real escalation contact. Do not invent safeguarding guarantees.
- [ ] Gate: owner verifies all claims; published course, pricing, contact and trial details agree across pages.

### Phase 2: discoverability and measurement

Owner: developer; owner handles domain purchase and account access. Estimate: 2-3 days plus account/domain turnaround.

- [ ] Configure canonical host, HTTPS and domain redirects. Retain useful existing URLs when possible; document redirects for renamed pages.
- [ ] Set metadata base and route-specific canonicals, including each blog slug. Do not assign the homepage canonical to every route.
- [ ] Add `src/app/sitemap.ts` and `src/app/robots.ts` using the installed Next.js conventions and selected hosting mode. Include only public canonical pages and actual modification dates; verify generated production files.
- [ ] Add social preview assets and accurate EducationalOrganization/BlogPosting JSON-LD. Do not expect schema alone to produce rich results or rankings.
- [ ] Audit existing Vercel monitoring and Google Ads configuration. Measure WhatsApp clicks as clicks, form acceptance as an enquiry, and bookings/enrolments separately. Assess consent requirements before enabling production tracking.
- [ ] Verify Search Console, submit the sitemap and inspect key production pages. Verify title, canonical, main content, image paths and schema in returned HTML; test nonexistent blog slugs and page status codes.
- [ ] Gate: metadata, sitemap and schema validate; no accidental indexing block; test conversions count once on acceptance and zero on failure; mobile performance has a recorded baseline.

### Phase 3: useful course and parent content

Owner: teacher/editor; developer builds templates. Initial cycle: 4-6 weeks, subject to editorial capacity.

- [ ] Research real parent questions and map one search intent to each useful course or article. Start with service pages closest to booking decisions.
- [ ] Extend `content/blogs.ts` and blog templates for headings, reviewer/author bios, images, meaningful dates and related links. Derive reading time from actual content.
- [ ] Rewrite the existing three posts; then publish 1-2 reviewed guides weekly if sustainable. Include practical examples and credible sources where appropriate.
- [ ] Initial topics: first class expectations, starting age and readiness, choosing a teacher, Qaida practice, Tajweed pronunciation help and school-compatible Hifz routines. Content for families new to Islam follows owner and reviewer agreement.
- [ ] Add country-specific service pages only where availability, prices, scheduling and guidance provide distinct value. Avoid three duplicated pages with changed country names.
- [ ] Per-article gate: religious review complete; accurate real attribution; image rights verified; full answer, working links, mobile layout and honest CTA checked.
- [ ] Review search impressions and qualified enquiries after each batch before expanding. Do not wait for a fixed article count to improve weak pages.

### Phase 4: optional AdSense

Owner: business owner; developer checks integration. Timing: readiness-based, not automatically after week eight.

- [ ] Decide whether ad income is worth any distraction from class bookings. Wait for useful readership and a stable enquiry journey.
- [ ] Check current AdSense eligibility, publisher policies, content audience and age-restricted treatment. Parent-focused wording alone does not establish that content is not child-directed.
- [ ] For applicable UK/EEA/Swiss ad serving, implement the current certified consent-platform requirements. Verify region and age settings rather than copy outdated snippets.
- [ ] Apply only when the site is ready and the owner approves account actions; no approval or earnings promise. Add ads.txt when the platform supplies instructions.
- [ ] If approved, test restrained blog-only ads with reserved space; compare reading experience, speed, delivered enquiries and enrolments before expanding placements.

### Ongoing operations

- [ ] Weekly: check lead delivery failures, spam, coordinator response times and trial follow-up. Maintain a recoverable export of leads with appropriate access.
- [ ] Monthly: review indexing, search queries, qualified leads, trial bookings and enrolments; update content and broken links. Collect genuine parent reviews with consent.
- [ ] Seek relevant mosque/community partnerships manually; do not buy links or send unsolicited automated outreach.
- [ ] Track direct costs for domain renewal, email, hosting, forms and editorial work. Measure cost per enrolled student and ad revenue separately.

## Decisions to record before dependent implementation

Audience and teaching languages; actual time-zone coverage; trial length; prices and currencies; working mailbox; verified credentials/reviews; chosen domain; hosted forms versus custom backend; coordinator delivery workflow; data retention; teacher/editor availability; whether advertising is desirable. Missing inputs block only their dependent tasks, not unrelated repairs.

## Verification boundaries

This review combines source inspection, complete PDF text extraction and a visual overview of all six pages. The initial sandboxed build failed because Windows denied path access while loading the Next.js configuration. The final production build outside the sandbox passed, including TypeScript and static generation; `npm run lint` also passed. Earlier untracked account files were absent at final verification; this review did not remove them. Only the two documentation deliverables were added. The Mermaid graph received a structural check; a Mermaid rendering engine was not available locally, so visual rendering has not been verified. A successful deployed journey, live indexing status, account configuration and business claims still require verification during implementation. No rankings, traffic forecasts or revenue estimates were measured in this review.

## Primary references checked

- Proposal: `C:/Users/Lenovo/Desktop/Qurancademy Growth Proposal.pdf`.
- Installed Next.js static-export guide: `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` states static exports support static GET route handlers, not request-dependent POST backends.
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) explicitly says there is no preferred word count and encourages useful original content and accurate authorship.
- [Google AdSense eligibility](https://support.google.com/adsense/answer/9724/eligibility-requirements-for-adsense?hl=en-uk) lists original, high-quality policy-compliant content and age eligibility; it does not specify 15-20 articles.
- [AdSense site ownership](https://support.google.com/adsense/answer/91205?hl=en-GB) requires access to HTML for placement and verification.
- [Google certified consent platform requirements](https://support.google.com/adsense/answer/13554116?hl=en) for applicable UK/EEA/Swiss ad serving.
- [Google age-restricted ad treatment](https://support.google.com/adsense/answer/9007197?hl=en) must be checked at implementation time; older age-treatment tags are deprecated.
