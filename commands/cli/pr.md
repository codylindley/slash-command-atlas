# `/pr [view|create|fix|auto|automerge]`

> Manages pull requests for the current branch.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Pull requests
- **Data snapshot:** 2026-08-23

## What it does

Manages pull requests for the current branch.

Where the desktop app splits this across four `/pr-*` commands, the CLI folds it into one. `auto` drives the pull request to green and stops; `automerge` (alias `agentmerge`) drives it to green and then merges it.

## Subcommands

- `/pr view` — Show the pull request for this branch
- `/pr create` — Open a pull request
- `/pr fix` — Work on failing checks and review feedback
- `/pr auto` — Drive the pull request to green, then stop
- `/pr automerge` — Drive it to green and merge it (alias: agentmerge)

## Canonical example

`/pr create`

## Related commands

- [`/delegate`](./delegate.md)
- [`/diff`](./diff.md)
- [`/review`](./review.md)

## Official sources

- [Manage pull requests](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/manage-pull-requests)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/pr)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
