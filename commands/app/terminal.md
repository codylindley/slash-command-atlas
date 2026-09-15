# `/terminal [COMMAND]`

> Opens a terminal in the right panel, optionally running a command.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Active session

## What it does

Opens a terminal in the right panel, optionally running a command.

Opens a shell in the session’s working directory. That can be an isolated worktree, an existing local checkout, or a folder, depending on how the session was created. Use it to run tests or inspect `git status` without leaving the app; the terminal and agent still operate on the same session files.

## Canonical example

`/terminal npm test`

## Related commands

- [`/review`](./review.md)
- [`/debug`](./debug.md)

## Official sources

- [Working with agent sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/terminal)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
