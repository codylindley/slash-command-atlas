# `/goal [CONDITION|clear]`

> Keeps Claude working across turns until a stated condition is met.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Keeps Claude working across turns until a stated condition is met.

Run bare to inspect the active or most recently achieved goal. `clear`, `stop`, `off`, `reset`, `none`, and `cancel` all end an active goal early.

## Canonical example

`/goal all unit and integration tests pass`

## More examples

- `/goal clear`

## Related commands

- [`/plan`](./plan.md)
- [`/loop`](./loop.md)
- [`/tasks`](./tasks.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/autopilot`](../cli/autopilot.md)
- [Claude Desktop — Code tab — `/goal`](../claude-app/goal.md)
- [OpenAI Codex in the ChatGPT desktop app — `/goal`](../codex-app/goal.md)
- [OpenAI Codex CLI — `/goal`](../codex-cli/goal.md)
- [OpenAI Codex IDE extension — `/goal`](../codex-ide/goal.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/goal)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
