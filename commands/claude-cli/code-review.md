# `/code-review [low|medium|high|xhigh|max|ultra] [--fix] [--comment] [--post] [PR|MR|BRANCH|RANGE|PATH]`

> Reviews a diff or target for correctness bugs and cleanup opportunities.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-09-14
- **Aliases:** `/review`, `/ultrareview`
- **Flags:** skill

## What it does

Reviews a diff or target for correctness bugs and cleanup opportunities.

By default reviews branch commits ahead of upstream plus uncommitted changes. Targets also include PRs, GitLab merge requests, paths, branches, and ref ranges. `--fix` applies findings; `--comment` posts inline on GitHub or as one GitLab note through `glab` (2.1.257+). For an eligible `ultra` cloud review, `--post` instead preselects a single github.com PR comment in the confirmation dialog.

> **Note:** `/ultrareview` means `/code-review ultra`, not an ordinary local review. That mode compares against the default branch, or a base branch you supply, and needs claude.ai authentication and cloud-review eligibility; otherwise `/code-review ultra` falls back to a local review. Cloud posting requires 2.1.227+ and per-run consent.

## Subcommands

- `/code-review low … max` — Choose local review effort
- `/code-review ultra` — Run the deep cloud review
- `/code-review --fix` — Apply accepted findings
- `/code-review --comment` — Post inline GitHub findings or one GitLab merge-request note
- `/code-review --post` — For an ultra github.com PR review, preselect posting one finished-results comment

## Canonical example

`/code-review high --fix src/auth`

## More examples

- `/review medium 1234`
- `/code-review ultra 1234 --post`

## Related commands

- [`/security-review`](./security-review.md)
- [`/simplify`](./simplify.md)
- [`/diff`](./diff.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/code-review`](../claude-app/code-review.md)
- [GitHub Copilot app — `/review`](../app/review.md)
- [GitHub Copilot CLI — `/review`](../cli/review.md)
- [OpenAI Codex in the ChatGPT desktop app — `/review`](../codex-app/review.md)
- [OpenAI Codex CLI — `/review`](../codex-cli/review.md)
- [OpenAI Codex IDE extension — `/review`](../codex-ide/review.md)

## Official sources

- [Review a diff locally](https://code.claude.com/docs/en/code-review#review-a-diff-locally)
- [Cloud reviews with ultrareview](https://code.claude.com/docs/en/ultrareview)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/code-review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
