# `/agent`

> Switches the active agent thread.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Aliases:** `/subagents`

## What it does

Switches the active agent thread.

Opens the agent-thread picker so you can inspect or continue work in a spawned subagent thread without leaving the TUI.

## Reach for it when

- A subagent has results you want to inspect directly
- You need to continue a spawned thread rather than the parent chat

## Related commands

- [`/fork`](./fork.md)
- [`/side`](./side.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot app — `/agent`](../app/agent.md)
- [GitHub Copilot CLI — `/agent`](../cli/agent.md)
- [GitHub Copilot CLI — `/subagents`](../cli/subagents.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/agent)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
