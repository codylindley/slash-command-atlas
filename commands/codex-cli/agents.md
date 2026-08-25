# `/agents`

> Opens a dashboard of active root agent sessions.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Requires:** Shared app-server session dashboard available

## What it does

Opens a dashboard of active root agent sessions.

Shows loaded top-level sessions from the shared app server and lets you inspect or switch between them. This is broader than `/subagents`, which stays within the current session’s spawned threads.

## Canonical example

`/agents`

## Related commands

- [`/subagents`](./subagents.md)
- [`/resume`](./resume.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/subagents`](../cli/subagents.md)
- [GitHub Copilot Chat in VS Code — `/agents`](../vscode/agents.md)
- [Claude Code CLI — `/agents`](../claude-cli/agents.md)
- [Claude Desktop — Code tab — `/agents`](../claude-app/agents.md)

## Official sources

- [Codex CLI slash-command source (August 21, 2026)](https://github.com/openai/codex/blob/df6a54ee851129447290b5684b8c2d2df10a5cd5/codex-rs/tui/src/slash_command.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/agents)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
