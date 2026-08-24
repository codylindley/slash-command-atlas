# `/pr-open`

> Opens a pull request from the current session’s changes.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Pull requests
- **Data snapshot:** 2026-08-23
- **Requires:** Active session with changes

## What it does

Opens a pull request from the current session’s changes.

Takes the work sitting in the session’s branch and worktree and turns it into a pull request, with a description drawn from what actually happened in the session. The natural next step once `/review` comes back clean.

## Related commands

- [`/pr-fix-checks`](./pr-fix-checks.md)
- [`/pr-resolve-comments`](./pr-resolve-comments.md)
- [`/pr-merge`](./pr-merge.md)
- [`/review`](./review.md)

## Official sources

- [Managing issues and pull requests](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/pr-open)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
