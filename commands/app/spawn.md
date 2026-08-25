# `/spawn [PROMPT]`

> Creates a focused child session for delegated work.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23

## What it does

Creates a focused child session for delegated work.

Hands one well-defined subtask to its own session with its own context, keeping the parent’s context clean. It is the lightest of the three delegation commands: `/spawn` is one child, `/fleet` is many parallel workers, `/orchestrate` is a managed programme of work.

## Canonical example

`/spawn write integration tests for the new webhook endpoint`

## Related commands

- [`/fleet`](./fleet.md)
- [`/orchestrate`](./orchestrate.md)
- [`/fork`](./fork.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/spawn)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
