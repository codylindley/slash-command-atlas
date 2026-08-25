# `/status`

> Displays session configuration and token usage.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23

## What it does

Displays session configuration and token usage.

Shows the active model, approval policy, writable roots, and current token usage. Remote TUI sessions also show the remote address and server version.

## Reach for it when

- You need to confirm the model or permission policy before a task
- You want to check context usage or verify the working roots

## Canonical example

`/status`

## Related commands

- [`/usage`](./usage.md)
- [`/permissions`](./permissions.md)
- [`/model`](./model.md)
- [`/debug-config`](./debug-config.md)

## Also in other surfaces

- [Claude Code CLI — `/status`](../claude-cli/status.md)
- [Claude Desktop — Code tab — `/status`](../claude-app/status.md)
- [OpenAI Codex in the ChatGPT desktop app — `/status`](../codex-app/status.md)
- [OpenAI Codex IDE extension — `/status`](../codex-ide/status.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/status)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
