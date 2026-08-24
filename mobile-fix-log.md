# Open It on Your Phone - Fix Log

**Live URL:** https://haroonk2607.github.io/ml-portfolio/

**Audit date:** 24 August 2026

## What I checked

I audited the portfolio at 390 x 844 (phone), 768 x 1024 (tablet), and 1440 x 900 (desktop). I also checked the CV, technical explainer, and DNS walkthrough at phone width.

## Before and after

| Area | Before | Change | After |
|---|---|---|---|
| Tap targets | Navigation and text links were only 17-24 px high. | Set interactive text links to a minimum 44 px height and narrow navigation labels to a minimum 44 px width. | No undersized link, button, or input targets at the three tested widths. |
| Mobile hero | The phone hero loaded a 2,266,591-byte PNG. | Created a 1024 x 683 WebP specifically for the mobile breakpoint. | The phone hero uses a 29,116-byte WebP, about 98.7% smaller. |
| Work captures | Adding lazy loading made below-the-fold captures blank in a full-page audit. | Kept asynchronous image decoding but removed lazy loading from the three small proof images. | All three captures load completely at 1600 x 1000 natural resolution and remain crisp at their rendered sizes. |
| Responsive layout | No horizontal overflow was present, but touch ergonomics needed work. | Preserved the existing responsive grids and improved the interaction sizes. | Page width equals viewport width at phone, tablet, and desktop sizes. |
| Readability and contrast | Body copy was already 17 px with comfortable line spacing. | Checked the main foreground/background pairs. | Tested contrast ratios range from 5.41:1 to 14.37:1, passing WCAG AA for normal text. |

## Link check

- All internal anchors resolve.
- CV, technical explainer, DNS walkthrough, favicon, and stylesheet return HTTP 200.
- GitHub profile, portfolio repository, internship repository, and both notebook links return HTTP 200.
- Email links use valid `mailto:` URLs.
- LinkedIn blocks automated checks with status 999, so its visible profile link remains part of the real-phone manual check.

## Automated verification

- Phone: 390 x 844, no horizontal overflow, no undersized targets, no console warnings or errors.
- Tablet: 768 x 1024, no horizontal overflow, no undersized targets, no console warnings or errors.
- Desktop: 1440 x 900, no horizontal overflow, no undersized targets, no console warnings or errors.
- Supporting pages at phone width: no overflow and no undersized targets.
- Live score demo remains usable with numeric inputs, a 44 px-plus button, readable output, and an accessible progress state.
- Live demo test: 50,000 impressions, 0.03% CTR, and position 5 returned score 86, action "Review snippet now," and meter value 86.

## Screenshot evidence

- Before: `Open-It-on-Your-Phone-Before.png`
- After: `Open-It-on-Your-Phone-After.png`
- Tablet: `Open-It-on-Your-Phone-Tablet.png`
- Desktop: `Open-It-on-Your-Phone-Desktop.png`

## Real-phone check

The final physical-device step must be completed on a real phone: open the live URL, scroll through every section, run the score demo, open the repository and LinkedIn links, and capture one screenshot. Automated responsive testing cannot honestly replace this step.
