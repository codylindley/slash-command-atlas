# `/export [PATH]`

> Exports the conversation as Markdown.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Requires:** No task in progress

## What it does

Exports the conversation as Markdown.

Without a path, opens the destination flow for copying or saving the transcript. A path can be absolute, relative to the current directory, or home-relative; Codex refuses to overwrite an existing file.

## Canonical example

`/export notes/auth-investigation.md`

## Related commands

- [`/copy`](./copy.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/share`](../cli/share.md)
- [Claude Code CLI — `/export`](../claude-cli/export.md)
- [Claude Desktop — Code tab — `/export`](../claude-app/export.md)

## Official sources

- [Codex CLI slash-command source (August 21, 2026)](https://github.com/openai/codex/blob/df6a54ee851129447290b5684b8c2d2df10a5cd5/codex-rs/tui/src/slash_command.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/export)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
