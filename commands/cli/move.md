# `/move [branch|task]`

> Moves uncommitted changes into a new Git worktree and switches to it.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** A Git repository
- **Flags:** experimental

## What it does

Moves uncommitted changes into a new Git worktree and switches to it.

The counterpart to `/worktree`: where that leaves your changes behind, this takes them with you. Useful when you realise the work you have started belongs on its own branch.

> **Note:** Experimental in the public reference, but the 1.0.84-6 prerelease (2026-09-14) no longer requires experimental mode.

## Canonical example

`/move rate-limit-api`

## Related commands

- [`/worktree`](./worktree.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Copilot CLI 1.0.84-6 (prerelease, 2026-09-14)](https://github.com/github/copilot-cli/releases/tag/v1.0.84-6)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/move)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
