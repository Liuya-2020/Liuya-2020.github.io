# Liuya Zhang · Academic Website (张柳雅 学术个人网站)

A bilingual (English / 中文) personal site built as static files — no build step, no dependencies.
Pages: **Home** (`index.html`) and **Research** (`research.html`). A language toggle (EN / 中) in the top-right switches the whole site and remembers the choice.

## Files
```
index.html            Home — the thesis + three research agendas
research.html         Research — the three agendas in detail
assets/style.css      Design system ("strata & axis")
assets/main.js        Language toggle (EN / 中)
assets/Liuya_Zhang_CV.pdf   Linked CV (replace with your latest export)
.nojekyll             Tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages
1. Create a repository. For a personal site at `https://<username>.github.io`, name it exactly `<username>.github.io`. (Any repo name also works; the site will live at `https://<username>.github.io/<repo>/`.)
2. Upload everything in this folder to the repository root (keep the `assets/` folder and `.nojekyll`).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
4. Wait ~1 minute, then open the URL GitHub shows.

## Updating
- **Text:** edit `index.html` / `research.html`. Each translatable piece is two spans — `data-lang="en"` and `data-lang="zh"`. Edit both.
- **CV:** replace `assets/Liuya_Zhang_CV.pdf` with your newest PDF (keep the filename).
- **Colors / type:** all design tokens live at the top of `assets/style.css` under `:root`.

## Notes
- Fonts (Fraunces, Newsreader, IBM Plex Mono, Noto Serif SC) load from Google Fonts; system serifs are used as fallback if offline.
- Works down to mobile; keyboard focus is visible; reduced-motion is respected.
