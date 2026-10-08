# SPHERE

Static Italian showcase website for SPHERE, retaining the supplied visual identity.
The page presents the project through four sections: Progetto, Team, Visione,
and Casi d’uso. It does not host a simulator or individual clinical cases.

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

- `index.html`: the four showcase sections, contact links, and three explanatory
  tabs about the educational approach within Visione.
- `sphere_index_old.html`: the previous page, preserved as a reference.
- `styles.css`: responsive layout and typography.
- `script.js`: accessible training-mode tabs, including keyboard navigation.
- `assets/sphere-hero.png`: hero image extracted from the supplied archive.

The new layout rules are scoped to `project-showcase` so the archived page
retains its original appearance and interactions.
The contact address `sphere@gmail.com` is retained from the reference; confirm
it is the intended inbox. Contact buttons open the visitor's email application.
Fonts load from Google Fonts with local system-font fallbacks.
