# `/pwd`

> Shows the current working directory.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Aliases:** `/cwd`

## What it does

Shows the current working directory.

Prints the active directory for the session. Unlike `/cd`, this read-only command remains available while a task is running and from side conversations.

## Canonical example

`/pwd`

## Related commands

- [`/cd`](./cd.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/cwd`](../cli/cwd.md)

## Official sources

- [Codex CLI slash-command source (August 21, 2026)](https://github.com/openai/codex/blob/df6a54ee851129447290b5684b8c2d2df10a5cd5/codex-rs/tui/src/slash_command.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/pwd)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
