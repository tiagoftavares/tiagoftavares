# Copilot / AI agent instructions — Tiago Tavares portfolio

Purpose: Help an AI coding assistant be productive editing this static portfolio and blog site.

- Project type: static HTML/CSS/JS site (no build tools). Serve files directly or with a simple static server.
- Language: Portuguese (pt-BR). Content and filenames use Portuguese conventions (e.g. `artigo-1.html`).

Quick facts
- Main entry: `index.html` (root)
- Global assets: `styles.css`, `script.js`
- Blog folder: `blog/` (contains `artigo-template.html`, `article-script.js`, `article-styles.css`, article pages like `artigo-1.html`)
- Deployment: GitHub Pages — see `GITHUB_PAGES_SETUP.md` and `README.md` for publish steps

Editing patterns and concrete examples
- Add a blog post: copy `blog/artigo-template.html` → `blog/artigo-novo.html`; update these meta tags at top: `description`, `keywords`, `date`, and `og:url` to the new path. Keep the relative CSS/JS links (`../styles.css`, `article-styles.css`) as in the template.
- Preserve relative paths. Many pages expect `../styles.css` or `../index.html` links; do not make absolute-path edits unless intentionally reorganizing folders.
- Shared CSS/JS: small, vanilla JS in `script.js` and `blog-script.js`. Prefer editing the existing file over adding new global bundles.
- Icons: Font Awesome is loaded from CDN in page headers; if you replace it, update all templates.
- SEO/social: article template uses Open Graph/Twitter meta tags — ensure `og:url` matches deployed location.

Local testing and verification
- No build step. To preview locally run a static server from the repo root, for example:
```bash
python -m http.server 8000
```
Open http://localhost:8000 and navigate to `/blog/artigo-novo.html` to verify article pages.

Conventions and constraints
- Keep content in Portuguese unless the change is explicitly for internationalization.
- Filenames use hyphens and lower-case (e.g. `artigo-1.html`).
- Avoid adding heavy dependencies or build tools; repository is designed to be lightweight and GitHub-Pages-ready.
- Tests: there is no automated test suite. Manual verification (open in browser) is required after changes.

Where to look (examples)
- Home page and global layout: `index.html`
- Global styles and behaviour: `styles.css`, `script.js`
- Blog template and examples: `blog/artigo-template.html`, `blog/artigo-1.html`, `blog/artigo-2.html`
- Blog scripts/styles: `blog/article-script.js`, `blog/article-styles.css`, `blog/blog-script.js`
- Deployment guide: `GITHUB_PAGES_SETUP.md`, quick-start notes: `QUICK_START.md`, main overview: `README.md`

PR guidance for AI agents
- Keep changes focused: one logical change per commit (content vs layout vs assets).
- Use clear commit messages (Portuguese preferred) that state the change and affected pages.
- When modifying templates or global layout, run a local static server and spot-check: home page + one article + navigation links.

If anything here is ambiguous or you need more examples (e.g., sample article metadata or image paths), ask the repository owner for preferred image directories and canonical URLs.
