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
| `_data/site.yml` | Company details, contact email, org. number, links |
| `_data/projects.yml` | Side-project cards on the home page and CV |
| `_data/cv.yml` | Content of the short CV page |
| `_layouts/` | `base` (header/footer), `page` (content pages) |
| `_includes/` | Header, footer, icons, obfuscated email link |
| `assets/css/main.css` | All styles; colour tokens at the top, dark mode via `prefers-color-scheme` |

## Fonts

Geist and Geist Mono are self-hosted from `assets/fonts/` under the SIL Open Font License (see the OFL files there).
