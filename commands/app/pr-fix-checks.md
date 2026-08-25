# `/pr-fix-checks`

> Runs a prompt to address failing pull request checks.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Pull requests
- **Data snapshot:** 2026-08-23
- **Requires:** Open PR with failing checks

## What it does

Runs a prompt to address failing pull request checks.

Reads the failing CI checks, reproduces locally what it can, and pushes fixes — the loop you would otherwise run by hand between the pull request page and your editor.

## Canonical example

`/pr-fix-checks`

## Related commands

- [`/pr-open`](./pr-open.md)
- [`/pr-resolve-comments`](./pr-resolve-comments.md)
- [`/pr-merge`](./pr-merge.md)

## Official sources

- [Managing issues and pull requests](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/pr-fix-checks)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
