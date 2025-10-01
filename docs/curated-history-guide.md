# Curated Two-Year Git History (Safe Workflow)

This guide explains how to generate a clean, professional two-year Git history without losing current work. The process uses an orphan branch and ends by importing the current repository state as the final commit.

## 1) Prerequisites

- Working tree must be clean (commit or stash changes).
- You should be on the repository root.
- Git configured with your name/email.

## 2) Run the script (dry-run by default)

```bash
cd "/Users/mikiasbirhanu/Developer/Personal v2/fastify-and-nextjs-monorepo/portfolio-manager"
BRANCH_NAME=curated-history \
AUTHOR_NAME="Mikias Birhanu" \
AUTHOR_EMAIL="<your-email@domain>" \
RUN=false \
bash scripts/generate_curated_history.sh
```

Nothing will be changed in dry-run. Review output first.

## 3) Execute for real

```bash
cd "/Users/mikiasbirhanu/Developer/Personal v2/fastify-and-nextjs-monorepo/portfolio-manager"
BRANCH_NAME=curated-history \
AUTHOR_NAME="Mikias Birhanu" \
AUTHOR_EMAIL="<your-email@domain>" \
RUN=true \
bash scripts/generate_curated_history.sh
```

This will:

- Create an orphan branch `curated-history`
- Produce ~16 realistic commits over two years (docs, plans, chores)
- Import the current tree as a final commit named: "feat(repo): import current codebase as initial public release"

## 4) Review the result

```bash
git log --graph --decorate --oneline --all
```

If you want to continue tweaking, you can rerun the script with different variables (e.g., `COMMITS_COUNT`, `START_YEARS_AGO`). Make sure your working tree is clean before each run.

## 5) Publish and promote

Option A: Keep `main` as-is and push the new branch:

```bash
git push -u origin curated-history --force-with-lease
```

Then set `curated-history` as the default branch in GitHub repository settings.

Option B: Replace `main` locally and push:

```bash
git branch -M curated-history
git push -u origin main --force-with-lease
```

Option C: Fast-forward main to curated branch (if empty or aligned):

```bash
git checkout main
git reset --hard curated-history
git push -u origin main --force-with-lease
```

## 6) Notes

- The script uses conventional commit messages and realistic documentation to make the graph look organic.
- Dates are generated with macOS-compatible `date`; it also falls back to GNU date when available.
- The process is non-destructive to your current `main` until you perform Step 5.
