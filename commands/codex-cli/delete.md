# `/delete`

> Permanently deletes the current session and exits Codex.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Idle main chat

## What it does

Permanently deletes the current session and exits Codex.

Deletes the local transcript, closes the TUI, and also removes spawned descendant sessions. It is unavailable while a chat is running or from inside a side chat.

> **Note:** **Permanent:** unlike `/archive`, this does not retain a restorable transcript.

## Related commands

- [`/archive`](./archive.md)
- [`/exit`](./exit.md)
- [`/clear`](./clear.md)

## Also in other surfaces

- [GitHub Copilot Chat on GitHub.com — `/delete`](../web/delete.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/delete)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
