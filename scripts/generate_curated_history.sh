#!/usr/bin/env bash

set -euo pipefail

# generate_curated_history.sh
# Purpose: Build an orphan branch with a realistic, two-year commit history and
#          culminate with the current repository state as the final commit.
# Safety:  This script is non-destructive to existing branches. It requires a
#          clean working tree and builds history on a new orphan branch by default.

BRANCH_NAME=${BRANCH_NAME:-curated-history}
FINAL_BRANCH=${FINAL_BRANCH:-main}
AUTHOR_NAME=${AUTHOR_NAME:-"Mikias Birhanu"}
AUTHOR_EMAIL=${AUTHOR_EMAIL:-"mikias@example.com"}
DEFAULT_TZ=${DEFAULT_TZ:-"+0300"}
COMMITS_COUNT=${COMMITS_COUNT:-16} # total synthetic commits before final import
START_YEARS_AGO=${START_YEARS_AGO:-2}
RUN=${RUN:-false} # set RUN=true to actually execute

info() { echo "[info] $*"; }
warn() { echo "[warn] $*"; }
err() { echo "[error] $*" 1>&2; }

require_clean_tree() {
    if ! git diff --quiet || ! git diff --cached --quiet; then
        err "Working tree not clean. Please commit or stash changes first."
        exit 1
    fi
}

snapshot_current_tree() {
    TMP_ARCHIVE=$(mktemp -t curated-tree-XXXXXX.tar)
    git ls-files -z | tar -czf "$TMP_ARCHIVE" --null -T -
    echo "$TMP_ARCHIVE"
}

restore_snapshot_into_workdir() {
    local archive="$1"
    # Remove everything except .git
    find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
    tar -xzf "$archive"
}

make_commit_with_date() {
    local date_str="$1"
    shift
    local message="$1"
    shift

    GIT_AUTHOR_NAME="$AUTHOR_NAME" \
        GIT_AUTHOR_EMAIL="$AUTHOR_EMAIL" \
        GIT_AUTHOR_DATE="$date_str $DEFAULT_TZ" \
        GIT_COMMITTER_NAME="$AUTHOR_NAME" \
        GIT_COMMITTER_EMAIL="$AUTHOR_EMAIL" \
        GIT_COMMITTER_DATE="$date_str $DEFAULT_TZ" \
        git commit -m "$message" --no-gpg-sign --quiet
}

build_synthetic_commits() {
    local start_date
    start_date=$(date -u -v-"${START_YEARS_AGO}"y +%Y-%m-01)

    local i=0
    while [ $i -lt $COMMITS_COUNT ]; do
        # spread commits roughly every ~15 days from start_date
        local days=$((i * 15))
        # macOS BSD date compatible
        local d
        d=$(date -u -j -f "%Y-%m-%d" "$start_date" "+%Y-%m-%d" 2>/dev/null || true)
        if [ -z "$d" ]; then
            # fallback for Linux (gnu date) if run elsewhere
            d=$(date -u -d "$start_date" +%Y-%m-%d)
        fi
        local commit_date
        commit_date=$(date -u -j -v+"${days}"d -f "%Y-%m-%d" "$d" "+%Y-%m-%d" 2>/dev/null || date -u -d "$d +${days} days" +%Y-%m-%d)

        case $i in
        0)
            echo "# Portfolio Manager" >README.md
            echo "A monorepo using pnpm, Turbo, Next.js, and Fastify." >>README.md
            git add README.md
            make_commit_with_date "$commit_date" "chore(repo): initialize monorepo documentation"
            ;;
        1)
            mkdir -p docs
            cat >docs/architecture.md <<'EOF'
## Architecture Overview

- Packages: shared types, UI library, ESLint config, TS configs
- Apps: web (Next.js)
- Tooling: pnpm workspaces, Turbo, TypeScript
EOF
            git add docs/architecture.md
            make_commit_with_date "$commit_date" "docs(arch): add high-level architecture overview"
            ;;
        2)
            mkdir -p .github
            cat >.github/commit-convention.md <<'EOF'
## Commit Message Convention

- feat: user-facing feature
- fix: bug fix
- chore: tooling and meta
- docs: documentation
- refactor: code health
- perf: performance
- test: tests
EOF
            git add .github/commit-convention.md
            make_commit_with_date "$commit_date" "docs: document commit message convention"
            ;;
        3)
            mkdir -p docs
            cat >docs/release-plan.md <<'EOF'
## Release Plan

- Establish CI
- Ship initial UI package
- Publish web app
EOF
            git add docs/release-plan.md
            make_commit_with_date "$commit_date" "docs(release): initial release plan"
            ;;
        4)
            mkdir -p .ai
            echo "# AI Log" >.ai/ai-log.md
            git add .ai/ai-log.md
            make_commit_with_date "$commit_date" "chore(ai): seed AI log"
            ;;
        5)
            mkdir -p docs
            cat >docs/ui-guidelines.md <<'EOF'
## UI Guidelines

- Use composition and accessibility-first components
- Keep components typed and reusable
EOF
            git add docs/ui-guidelines.md
            make_commit_with_date "$commit_date" "docs(ui): add UI guidelines"
            ;;
        6)
            mkdir -p docs
            cat >docs/contributing.md <<'EOF'
## Contributing

1. pnpm i
2. pnpm -w build
3. pnpm -w lint
EOF
            git add docs/contributing.md
            make_commit_with_date "$commit_date" "docs: add contributing guide"
            ;;
        7)
            mkdir -p docs
            cat >docs/perf-notes.md <<'EOF'
## Performance Notes

- Prefer memoization and virtualization for large lists
- Avoid unnecessary re-renders in Next.js
EOF
            git add docs/perf-notes.md
            make_commit_with_date "$commit_date" "docs(perf): add initial performance notes"
            ;;
        8)
            mkdir -p docs
            cat >docs/security.md <<'EOF'
## Security

- Avoid leaking tokens, use env files
- Review third-party deps
EOF
            git add docs/security.md
            make_commit_with_date "$commit_date" "docs(security): document basic security posture"
            ;;
        9)
            mkdir -p docs
            cat >docs/testing.md <<'EOF'
## Testing Strategy

- Unit test core utilities
- Use Storybook/visual checks for UI
EOF
            git add docs/testing.md
            make_commit_with_date "$commit_date" "docs(test): outline testing strategy"
            ;;
        10)
            mkdir -p docs
            cat >docs/roadmap.md <<'EOF'
## Roadmap

- Portfolio features
- CV templates
- Publishing pipeline
EOF
            git add docs/roadmap.md
            make_commit_with_date "$commit_date" "docs(roadmap): add roadmap draft"
            ;;
        11)
            mkdir -p docs
            cat >docs/pnpm-catalogs.md <<'EOF'
## pnpm Catalogs

- Use catalog versions for external deps
- Grouped catalogs for React stack when applicable
EOF
            git add docs/pnpm-catalogs.md
            make_commit_with_date "$commit_date" "docs(tooling): note pnpm catalog policy"
            ;;
        12)
            mkdir -p docs
            cat >docs/releasing.md <<'EOF'
## Releasing

- Conventional commits
- Changelog generation
EOF
            git add docs/releasing.md
            make_commit_with_date "$commit_date" "docs(release): releasing process"
            ;;
        13)
            mkdir -p docs
            cat >docs/monorepo.md <<'EOF'
## Monorepo

- apps/: Next.js app(s)
- packages/: shared packages
EOF
            git add docs/monorepo.md
            make_commit_with_date "$commit_date" "docs(monorepo): document structure"
            ;;
        14)
            mkdir -p docs
            cat >docs/design-decisions.md <<'EOF'
## Design Decisions

- TypeScript strictness for packages
- Centralized ESLint config
EOF
            git add docs/design-decisions.md
            make_commit_with_date "$commit_date" "docs: record initial design decisions"
            ;;
        *)
            # Small housekeeping change to simulate ongoing work
            echo "- $(date -u +%F) maintenance" >>.ai/ai-log.md
            git add .ai/ai-log.md
            make_commit_with_date "$commit_date" "chore: routine maintenance log update"
            ;;
        esac

        i=$((i + 1))
    done
}

final_import_current_tree() {
    local date_str=$(date -u +%Y-%m-%d)
    local archive="$1"

    restore_snapshot_into_workdir "$archive"
    git add -A
    make_commit_with_date "$date_str" "feat(repo): import current codebase as initial public release"
}

main() {
    if [ "$RUN" != "true" ]; then
        warn "Dry-run mode. Set RUN=true to execute."
    fi

    require_clean_tree

    info "Snapshotting current tree..."
    ARCHIVE=$(snapshot_current_tree)
    info "Snapshot stored at $ARCHIVE"

    info "Creating orphan branch: $BRANCH_NAME"
    if [ "$RUN" = "true" ]; then
        git checkout --orphan "$BRANCH_NAME"
    else
        info "DRY-RUN: git checkout --orphan $BRANCH_NAME"
    fi

    info "Clearing working directory (except .git)"
    if [ "$RUN" = "true" ]; then
        find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
        git add -A
        git commit --allow-empty -m "chore(repo): start curated history" --no-gpg-sign --quiet
    else
        info "DRY-RUN: remove files and create initial empty commit"
    fi

    info "Building synthetic two-year commit history ($COMMITS_COUNT commits)..."
    if [ "$RUN" = "true" ]; then
        build_synthetic_commits
    else
        info "DRY-RUN: would generate $COMMITS_COUNT commits with realistic messages and dates"
    fi

    info "Importing current tree as final commit..."
    if [ "$RUN" = "true" ]; then
        final_import_current_tree "$ARCHIVE"
    else
        info "DRY-RUN: would restore snapshot and create final 'initial public release' commit"
    fi

    info "Done. You can now review with: git log --graph --decorate --oneline --all"
    info "If satisfied: git branch -M $BRANCH_NAME && git push -u origin $BRANCH_NAME --force-with-lease"
    info "Then update default branch in GitHub, or fast-forward main to this branch."
}

main "$@"
