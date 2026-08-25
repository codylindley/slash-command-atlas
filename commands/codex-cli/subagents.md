# `/subagents`

> Switches the active subagent thread.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23

## What it does

Switches the active subagent thread.

Opens the subagent-thread picker so you can inspect or continue work spawned inside the current session without leaving the TUI.

> **Note:** The prose command table still lists `/agent` as an alias, but the current first-party CLI source removed that alias on August 17, 2026.

## Reach for it when

- A subagent has results you want to inspect directly
- You need to continue a spawned thread rather than the parent chat

## Canonical example

`/subagents`

## Related commands

- [`/agents`](./agents.md)
- [`/fork`](./fork.md)
- [`/side`](./side.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/subagents`](../cli/subagents.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI slash-command source (August 21, 2026)](https://github.com/openai/codex/blob/df6a54ee851129447290b5684b8c2d2df10a5cd5/codex-rs/tui/src/slash_command.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/subagents)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
