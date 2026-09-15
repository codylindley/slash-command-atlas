# `/copy`

> Copies a whole response, code block, quote, or status field.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-09-14
- **Requires:** Completed response or recent /status output; non-Android TUI

## What it does

Copies a whole response, code block, quote, or status field.

Opens a target picker for the latest completed response, including its code blocks and quotes. Immediately after `/status`, it instead offers the whole status output or individual fields. Whole-response copying preserves Markdown and rich-text formatting.

> **Note:** The stable `0.154.0` implementation is broader than the prose reference. The picker takes no inline arguments and does not copy an unfinished response.

## Canonical example

`/copy`

## Related commands

- [`/raw`](./raw.md)
- [`/diff`](./diff.md)
- [`/status`](./status.md)
- [`/export`](./export.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/copy`](../cli/copy.md)
- [Claude Code CLI — `/copy`](../claude-cli/copy.md)
- [Claude Desktop — Code tab — `/copy`](../claude-app/copy.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI copy picker (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/interaction.rs)
- [Codex CLI 0.154.0 release notes](https://github.com/openai/codex/releases/tag/rust-v0.154.0)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/copy)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
