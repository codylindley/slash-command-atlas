# `/orchestrate [PROMPT]`

> Coordinates work across sessions and repositories by creating and guiding child sessions.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Flags:** skill

## What it does

Coordinates work across sessions and repositories by creating and guiding child sessions.

The conductor. Rather than doing the work itself, it decomposes a goal, spins up child sessions for the pieces — potentially in different repositories — and steers them. This is the command for a change that has to land in a frontend, a backend and a shared library at the same time.

## Reach for it when

- A feature that crosses repository boundaries
- Parallelizable work that still needs a shared goal
- Coordinating a migration across several services

## Canonical example

`/orchestrate rename User.email to primaryEmail across the API, the web client and the SDK`

## Related commands

- [`/fleet`](./fleet.md)
- [`/spawn`](./spawn.md)
- [`/pr-stack`](./pr-stack.md)

## Official sources

- [Built-in skills for the Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/orchestrate)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
