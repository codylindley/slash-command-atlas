# `/pr-merge`

> Merges the current pull request into its target branch.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Pull requests
- **Data snapshot:** 2026-08-23
- **Requires:** Mergeable pull request

## What it does

Merges the current pull request into its target branch.

The end of the pipeline: open, fix the checks, resolve the comments, merge. It requires the pull request to actually be mergeable, so failing checks or conflicts have to be dealt with first.

## Canonical example

`/pr-merge`

## Related commands

- [`/pr-open`](./pr-open.md)
- [`/pr-fix-checks`](./pr-fix-checks.md)
- [`/pr-resolve-comments`](./pr-resolve-comments.md)
- [`/pr-stack`](./pr-stack.md)

## Official sources

- [Managing issues and pull requests](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/pr-merge)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
