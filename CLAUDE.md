# Branching
Trunk-based development with short-lived feature branches.

- Never commit, push, or merge directly to `master`. All changes reach master via PR.
- Starting new work: branch from an up-to-date `master` (`git pull` first).
  Name it `feature/<short-desc>` or `fix/<short-desc>`.
- Continuing work: if already on a feature branch for the current task, stay on it.
- Commit to the feature branch in small, logical commits.
- Keep the branch current by rebasing on `master`. Force-push (`--force-with-lease`)
  is allowed only on your own feature branch.
- Push the branch and open a PR when the work is ready for review.

## Shared content

- The CV page, services, About text and side projects come from www.henrikbecker.net, not from this repo. `_data/shared.js` fetches `https://henrikbecker.pages.dev/assets/site-data.json` and `/sv/assets/site-data.json` (the Pages hostname; the custom domain 403s CI runners) at build time and returns `{ en, sv }`; `_data/cv.js` and `_data/projects.js` map both. Templates use `shared[lang]`, `cv[lang]` and `projects[lang]`. Edit that content in the handiman.github.io repo.
- The site is bilingual: Swedish at `/`, English under `/en/`. See the Languages section in README.md; chrome strings are in `_data/i18n.yml`.
- Local work on both sites: `SHARED_DATA=../handiman.github.io/_site/assets/site-data.json npm start` (a path or URL).
- CI rebuilds on `repository_dispatch` (`shared-content-updated`), sent by henrikbecker.net after it deploys, and can be run by hand (workflow_dispatch).
