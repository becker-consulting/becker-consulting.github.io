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
| `_data/i18n.yml` | Everything that differs between Swedish and English: nav, footer, default title and description, page URLs |
| `_data/shared.js` | Shared content from henrikbecker.net (services, About, CV, projects), in both languages |
| `_data/projects.js` | The side projects, mapped from the shared content |
| `_layouts/cv.liquid` | Shows the short CV, rendered by henrikbecker.net as an HTML fragment (`shared[lang].cvHtml`) |
| `_layouts/` | `base` (header/footer), `page` (content pages), `home`, `about`, `cv` |
| `index.liquid`, `om.liquid`, `cv.liquid`, `integritet.liquid` | Swedish pages (the default language) |
| `en/` | English pages |
| `posts/` | Blog posts, `YYYY-MM-DD-slug.md`, published at `/en/blog/slug/` (English only). Front matter: `title`, `description`, `date`, optional `original_url` (the LinkedIn original). `en/blog.liquid` is the index, `en/blog-feed.liquid` the Atom feed at `/en/blog/feed.xml` |
| `_includes/` | Header, footer, icons, obfuscated email link |
| `assets/css/main.css` | All styles; colour tokens at the top, dark mode via `prefers-color-scheme` |

## Languages

Swedish is the default at `/`, English lives under `/en/`. Each page sets `lang` (`sv` or `en`) and a `translationKey`; pages with the same key are linked to each other with hreflang tags, in the sitemap and by the language switch in the header. Page copy is in each page's front matter; the markup is shared through the layouts.

| Swedish | English |
| --- | --- |
| `/` | `/en/` |
| `/om/` | `/en/about/` |
| `/cv/` | `/en/cv/` |
| (none, English only) | `/en/blog/` |
| `/integritet/` | `/en/privacy/` |

`/about/` (the old English About URL) is a redirect page to `/en/about/`.

## Fonts

Geist and Geist Mono are self-hosted from `assets/fonts/` under the SIL Open Font License (see the OFL files there).
