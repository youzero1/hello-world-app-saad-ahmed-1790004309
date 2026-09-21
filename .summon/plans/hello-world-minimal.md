---
status: implemented
title: Minimal Hello World Home Page
---

1. Verify the base project scaffold exists with the standard entry points: `index.html`, `src/main.tsx`, `src/styles/global.css`, `src/routes/__root.tsx`, and `src/routes/index.tsx`. Create any that are missing. Expected outcome: the app boots with file-based routing and a single home route at `/`.

2. Ensure `src/styles/global.css` contains exactly the single Tailwind import line as its first statement, with no other custom CSS rules. Expected outcome: Tailwind v4 utilities are available app-wide with no competing stylesheet.

3. Ensure `src/main.tsx` imports `src/styles/global.css` exactly once and mounts the router built from the generated route tree. Expected outcome: styles load and routing renders without duplicate imports.

4. Simplify `src/routes/__root.tsx` to a bare shell: an outlet only, with no navigation bar, no header, no footer, and no devtools panel visible in the layout. Apply base page styling here — white background, dark neutral text, antialiased rendering, and full viewport height. Expected outcome: every route renders on a clean white canvas with no starter chrome.

5. Rewrite `src/routes/index.tsx` so the home route renders a single centered heading reading exactly "Hello, World!". Center it both horizontally and vertically using Tailwind flex utilities on a full-height container, with generous padding around the content. Expected outcome: visiting `/` shows only the greeting, perfectly centered at any viewport size.

6. Style the heading with readable, minimal typography: a large responsive font size that scales down on small screens, medium-to-semibold weight, slight negative letter spacing, and a dark neutral color rather than pure black. Expected outcome: the greeting looks deliberate and well-set, not like default browser text.

7. Remove all default starter content: delete any placeholder components in `src/components/`, demo assets such as logos or SVGs under `src/assets/` or `public/` that are no longer referenced, and any leftover counter or example routes other than the home route. Expected outcome: no unused files or dead imports remain.

8. Update `index.html` so the document title reads "Hello World" and the page language and meta viewport tags are correct. Expected outcome: the browser tab shows a meaningful title instead of the scaffold default.

9. Run the dev server and confirm: `/` renders the centered greeting on a white background, no console errors or TypeScript errors appear, and the layout holds on both mobile and desktop widths. Expected outcome: a clean, single-page Hello World app ready to view.
