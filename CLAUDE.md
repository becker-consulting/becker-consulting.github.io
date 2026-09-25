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