# SPHERE

Static Italian website for SPHERE, based on the supplied saved-page reference.

## Preview

Run `python3 -m http.server 8000` from this folder and open
<http://localhost:8000>.

## Publish on GitHub Pages

Commit and push `index.html`, `styles.css`, `script.js`, `assets/`, and
`.nojekyll` to `main`. In the repository's **Settings → Pages**, select
**Deploy from a branch**, **main**, and **/ (root)**, then save.
After the Pages deployment completes, visit <https://sphere-med.github.io/>.
No build step is required.

## Content and assets

- `index.html`: page content, contact links, and all three training-mode panels.
- `styles.css`: responsive layout and typography.
- `script.js`: accessible training-mode tabs, including keyboard navigation.
- `assets/sphere-hero.png`: hero image extracted from the supplied archive.

The two inactive training-mode panels were absent from the saved archive and
were recreated from the described method. Review that wording before publishing.
The contact address `sphere@gmail.com` is retained from the reference; confirm
it is the intended inbox. Contact buttons open the visitor's email application.
Fonts load from Google Fonts with local system-font fallbacks.
