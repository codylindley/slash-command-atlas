# `/ide [PROMPT]`

> Includes open files, the current selection, and other IDE context.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Includes open files, the current selection, and other IDE context.

Pulls available editor state into the next prompt. Optional inline text can tell Codex what to do with the selected code or open files.

## Examples

- `/ide explain how the selected handler reaches the database`

## Related commands

- [`/mention`](./mention.md)
- [`/app`](./app.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/ide`](../cli/ide.md)
- [Claude Code CLI — `/ide`](../claude-cli/ide.md)
- [Claude Desktop — Code tab — `/ide`](../claude-app/ide.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/ide)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
