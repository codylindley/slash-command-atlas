# `/delete`

> Permanently deletes the current session and its descendants.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Permanently deletes the current session and its descendants.

Deletes the local transcript and spawned descendant sessions. Stable `0.154.0` exits the TUI; the checked `0.155.0-alpha.4` prerelease can return to the agent command center on a shared server instead. It is unavailable while a chat is running or from inside a side chat.

> **Note:** **Permanent:** unlike `/archive`, this does not retain a restorable transcript.

## Canonical example

`/delete`

## Related commands

- [`/archive`](./archive.md)
- [`/exit`](./exit.md)
- [`/clear`](./clear.md)

## Also in other surfaces

- [GitHub Copilot Chat on GitHub.com — `/delete`](../web/delete.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/chatwidget/slash_dispatch.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/delete)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
