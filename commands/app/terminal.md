# `/terminal [COMMAND]`

> Opens a terminal in the right panel, optionally running a command.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Opens a terminal in the right panel, optionally running a command.

Gives you a shell next to the agent, scoped to the session’s own worktree. Useful for checking the agent’s work yourself — running the tests, reading `git status` — without leaving the app or competing with the agent over the same working tree.

## Canonical example

`/terminal npm test`

## Related commands

- [`/review`](./review.md)
- [`/debug`](./debug.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/terminal)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
