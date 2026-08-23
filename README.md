# Muhammad Haroon Khan - ML Portfolio

Static HTML/CSS portfolio for GitHub Pages.

## Live site

https://haroonk2607.github.io/ml-portfolio/

## Files I can explain

- `index.html` contains the one-page portfolio structure, cases, links, live demo, About, future-work space, and contact section.
- `styles.css` contains the shared colors, typography, layouts, mobile breakpoints, focus states, and print rules.
- `script.js` runs the one live feature: a transparent refresh-review score calculated entirely in the visitor's browser.
- `feature-explainer.html` explains a backend, the scoring feature, its data flow, and its limits in plain words.
- `cv.html` is a printable web CV built only from verified education, public profile details, and completed internship work. Its one inline browser action opens the normal Print dialog.
- `dns-walkthrough.html` is the public version of the PF-04 DNS explanation.
- `favicon.svg` is the small `MH` browser-tab mark.
- `assets/fonts/` contains the local Inter and Space Grotesk font files, so the site does not depend on a font CDN.
- `assets/work/` contains real captures from the executed ML work used on the page.
- `proof/empty-but-live.png` records the first near-blank GitHub Pages milestone.

There is no framework, package manager, build command, database, or backend. GitHub Pages serves the files directly over HTTPS, and the small JavaScript file calculates the demo result locally without sending or storing visitor inputs.

## Local check

Open `index.html` directly, or serve the folder with:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
