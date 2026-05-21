# CLAUDE.md

## Build & Run
- No build system, no dependencies, no package.json. Pure static files.
- View locally: open `dashboard.html` directly in a browser (`file://` works).
- The dashboard loads data via a `<script src="data.js">` tag, not `fetch()`,
  so it renders correctly from `file://` without a local server or CORS setup.

## Test
- No test suite. Verify changes by rendering the page and checking it visually.
- Screenshot with Playwright (installed globally under `/opt/node22`):
  load `file://<abs-path>/dashboard.html`, wait for `.project` elements,
  then capture `fullPage`.

## Tech Stack
- Vanilla HTML + CSS + JavaScript. No framework, no bundler, no transpiler.
- Single-file dashboard (`dashboard.html`) with inline `<style>` and render script.
- Dark theme defined via CSS custom properties in `:root`.

## Project Structure
- `dashboard.html` — markup, styles, and the render script.
- `data.js` — assigns `window.INSIGHTS`; the only source of dashboard content.
- `README.md` — repo intro, not technical docs.

## Conventions
- Data and presentation are kept separate: edit `data.js` for content,
  `dashboard.html` for layout/styling. Never hardcode insights data in the HTML.
- `data.js` is a regenerated snapshot of `/insights` output — refresh the whole
  file when insights are re-run; don't hand-patch individual fields.
- The Projects section is the primary view; other sections (What's Working,
  Friction, Suggestions, On the Horizon) are supporting context. Preserve that
  hierarchy when adding sections.
- The render script reads every field from `window.INSIGHTS`. Adding a data
  field requires a matching render block, and vice versa.
- Empty/zero-session data is expected — keep empty-state handling intact.

## Git
- Active development branch: `claude/build-insights-dashboard-QFxvC`.
