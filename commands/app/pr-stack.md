# `/pr-stack`

> Creates and manages a stack of dependent pull requests, with one child session per layer.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Pull requests
- **Data snapshot:** 2026-08-23
- **Flags:** skill

## What it does

Creates and manages a stack of dependent pull requests, with one child session per layer.

For work too large to review as a single pull request. It splits the change into a stack of dependent PRs and drives a child session for each layer, so every PR stays small and reviewable while the stack as a whole delivers the feature.

> **Note:** This is a built-in skill rather than an entry on the app’s slash command reference page. It appears in the picker when it applies.

## Canonical example

`/pr-stack`

## Related commands

- [`/pr-open`](./pr-open.md)
- [`/orchestrate`](./orchestrate.md)
- [`/spawn`](./spawn.md)

## Official sources

- [Built-in skills for the Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills)
- [About stacked pull requests](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/pr-stack)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
