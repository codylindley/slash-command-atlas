# `/resume [SESSION_ID|NAME]`

> Resumes a saved chat from the picker or by ID or name.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Resumes a saved chat from the picker or by ID or name.

The bare command opens the saved-session picker. Supply a session ID or name to select a saved chat directly and continue with its original history.

## Canonical example

`/resume`

## More examples

- `/resume auth migration`

## Related commands

- [`/fork`](./fork.md)
- [`/new`](./new.md)
- [`/rename`](./rename.md)
- [`/archive`](./archive.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/resume`](../cli/resume.md)
- [Claude Code CLI — `/resume`](../claude-cli/resume.md)
- [Claude Desktop — Code tab — `/resume`](../claude-app/resume.md)
- [Claude Code on the web — `/resume`](../claude-web/resume.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/slash_dispatch.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/resume)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
