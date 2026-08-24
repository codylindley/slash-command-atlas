# `/archive`

> Archives the current session and exits Codex.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** No task in progress

## What it does

Archives the current session and exits Codex.

Removes the session from active lists and closes the TUI while retaining the transcript locally. A saved session can later be restored with the separate `codex unarchive` program subcommand.

> **Note:** Archiving retains the transcript. Use `/delete` only when you intend permanent removal.

## Related commands

- [`/delete`](./delete.md)
- [`/resume`](./resume.md)
- [`/exit`](./exit.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/archive)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
