# Break Your Own Site: Hardening Log

**Portfolio:** [Muhammad Haroon Khan - ML Portfolio](https://haroonk2607.github.io/ml-portfolio/)

**Test date:** 30 August 2026

**Proof statement:** I turn messy search and content data into clear, evidence-led decisions through readable ML work.

## What I Tested

I tested the live site in Chrome and the Codex in-app Chromium browser. I submitted the score demo empty, entered non-numeric text, used values above the allowed ranges, used valid boundary values, and clicked the action twice quickly. I also opened every internal page, repository link, navigation link, image, font, and contact link.

## Fix Now: Found and Fixed

| Finding | What happened | Fix and evidence |
|---|---|---|
| Out-of-range demo values | Values such as 1,000,001 impressions and 101% CTR could still produce a score. | Added JavaScript range and integer checks, native form validity reporting, and `aria-invalid`. Invalid input now shows a clear correction message and no score. |
| Incomplete share/search metadata | The page lacked a canonical URL, social preview metadata, and structured identity data. | Added canonical, Open Graph, Twitter Card, robots, theme color, and Person JSON-LD metadata. |
| No crawler map | Search engines had no repository-owned sitemap or robots file. | Added `robots.txt` and `sitemap.xml`, including all public portfolio pages. |
| Heavy font downloads | The first audit transferred about 1,107 KiB, mostly full TTF font files. | Added subset WOFF2 fonts and preload hints. The checked transfer fell to about 391 KiB. |
| Old evidence on the homepage | The scorecard described an earlier starter run. | Replaced it with the verified grouped-validation result: 12,023 eligible rows, five client-grouped folds, Random Forest mean P@50 of 0.896, and rule baseline mean P@50 of 0.756. |

## Edge-Case Results

| Test | Result |
|---|---|
| Empty form | Blocked with a correction message; no score produced. |
| Letters in number fields | Rejected by number inputs and validation. |
| Values outside allowed ranges | Blocked; no misleading score produced. |
| Valid values | Produced the expected result and explanation. |
| Double-click on the action | Stable result, no duplicate request or side effect. |
| Internal navigation and project links | Resolved successfully. |
| Images and fonts | Loaded without broken assets. |
| Narrow-layout overflow check | No horizontal document overflow detected. |
| Browser console | No page errors observed. |

## SEO, Findability, and Speed

The site now has a descriptive title, meta description, canonical URL, Open Graph preview, Twitter Card preview, JSON-LD Person data, `robots.txt`, and `sitemap.xml`.

An exact-name search did not yet show the portfolio. This is a known limitation because publishing metadata does not force immediate search-engine indexing. The site is crawl-ready, and I will recheck after crawlers have had time to visit it.

Lighthouse was run before and after the changes. The original live check scored 82 for Performance and 100 for Accessibility, Best Practices, and SEO, with about 1,107 KiB transferred. The updated build scored 92 locally with about 389 KiB transferred. Repeat live checks transferred about 391 KiB and retained 100 for Accessibility, Best Practices, and SEO, but Performance varied from 59 to 61 because measured main-thread blocking varied between runs. I will treat the transfer reduction as confirmed and keep the live runtime score under observation rather than claiming a stable improvement.

## Known Limitations

- Search indexing is not visible yet, even though the site is crawl-ready.
- LinkedIn can show its sign-in wall to logged-out visitors; the destination profile URL is valid.
- The email link depends on the visitor having an email application configured.
- The portfolio is a static site. It does not collect contact-form data or run a backend.
- Live Lighthouse performance varied between repeated checks, so one score should not be treated as definitive.

## Hardening Review

The technical self-review is complete. A real mentor or peer review is still required by the assignment. The exact review request is in `hardening-review-request.md`. Any must-fix feedback from that review must be addressed on the live site before claiming this checkpoint as passed.

## Evidence

- Live site: https://haroonk2607.github.io/ml-portfolio/
- Hardening commit: `8e842bb`
- Crawler files: https://haroonk2607.github.io/ml-portfolio/robots.txt and https://haroonk2607.github.io/ml-portfolio/sitemap.xml
- Mobile and responsive evidence from the previous checkpoint: `mobile-fix-log.md` and files in `proof/`
