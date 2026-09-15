# `/subagents`

> Switches the active subagent thread.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-09-14

## What it does

Switches the active subagent thread.

Opens the subagent-thread picker so you can inspect or continue work spawned inside the current session without leaving the TUI.

> **Note:** The prose command table still lists `/agent` as an alias, but neither stable `0.154.0` nor the checked `0.155.0-alpha.4` prerelease recognizes it. Use `/subagents`.

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
- [Codex CLI command source (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs)
- [Codex CLI command source (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/slash_command.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/subagents)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
