# `/archive`

> Archives the current session while retaining its transcript.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Archives the current session while retaining its transcript.

Removes the session from active lists. Stable `0.154.0` exits the TUI; the checked `0.155.0-alpha.4` prerelease can return to the agent command center on a shared server instead. Restore the saved session with the separate `codex unarchive` program subcommand.

> **Note:** Archiving retains the transcript. Use `/delete` only when you intend permanent removal.

## Canonical example

`/archive`

## Related commands

- [`/delete`](./delete.md)
- [`/resume`](./resume.md)
- [`/exit`](./exit.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/chatwidget/slash_dispatch.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/archive)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
