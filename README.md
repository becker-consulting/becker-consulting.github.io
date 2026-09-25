# becker-consulting.se

Company website for Henrik Becker Consulting AB, built with [Eleventy](https://www.11ty.dev/) and Liquid templates.

```sh
npm install
npm start        # dev server with live reload on http://localhost:8080
npm run build    # production build into _site/
```

Pushes to `master` are built by GitHub Actions and published to the `gh-pages` branch.

Favicons (`favicon.ico`, `apple-touch-icon.png` and `assets/img/favicon*.png`) are committed files, drawn from the "b" logo tile.

## Where things live

| Path | What |
| --- | --- |
| `_data/site.json` | Company details, contact email, org. number, links |
| `_data/projects.json` | Side-project cards on the home page and CV |
| `_data/cv.json` | Content of the short CV page |
| `_layouts/` | `base` (header/footer), `page` (content pages), `post` (blog posts) |
| `_includes/` | Header, footer, icons, obfuscated email link |
| `assets/css/main.css` | All styles; colour tokens at the top, dark mode via `prefers-color-scheme` |
| `posts/` | Blog posts as Markdown. The first post turns the "Coming soon" band into a link. |

## Writing a blog post

Add `posts/YYYY-MM-DD-some-slug.md`:

```md
---
title: Some title
description: One sentence shown on the home page and blog list.
---

Text in Markdown. `## Headings` show up in the "On this page" list.
```

It is published at `/blog/some-slug/`.

## Fonts

Geist and Geist Mono are self-hosted from `assets/fonts/` under the SIL Open Font License (see the OFL files there).
