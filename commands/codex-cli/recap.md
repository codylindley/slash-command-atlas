# `/recap`

> Generates a short catch-up on the current conversation.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat with conversation history

## What it does

Generates a short catch-up on the current conversation.

Summarizes the recent objective, progress, and next step or blocker for someone returning to the chat. Unlike `/compact`, it displays a catch-up rather than replacing the conversation context to free tokens.

> **Note:** Source-backed in stable `0.154.0`, although absent from the prose slash-command table. Manual recaps remain available when automatic recaps are disabled.

## Canonical example

`/recap`

## Related commands

- [`/compact`](./compact.md)
- [`/status`](./status.md)
- [`/resume`](./resume.md)

## Also in other surfaces

- [Claude Code CLI — `/recap`](../claude-cli/recap.md)
- [Claude Desktop — Code tab — `/recap`](../claude-app/recap.md)
- [Claude Code on the web — `/recap`](../claude-web/recap.md)

## Official sources

- [Codex CLI command source (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs)
- [Codex CLI conversation recaps (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/app/recap.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/recap)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
