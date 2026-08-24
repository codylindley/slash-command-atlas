# `/cd [PATH]`

> Changes the working directory without losing the conversation.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Requires:** Idle, trusted local session with no background terminals

## What it does

Changes the working directory without losing the conversation.

Moves an idle local session to a trusted directory while preserving its transcript. Relative paths resolve from the current directory; omitting the path selects your home directory. Codex rejects unsafe transitions, remote environments, active work, and incompatible permission profiles.

## Examples

- `/cd ../service-api`
- `/cd`

## Related commands

- [`/pwd`](./pwd.md)
- [`/mention`](./mention.md)
- [`/permissions`](./permissions.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/cwd`](../cli/cwd.md)
- [Claude Code CLI — `/cd`](../claude-cli/cd.md)
- [Claude Desktop — Code tab — `/cd`](../claude-app/cd.md)

## Official sources

- [Codex CLI slash-command source (August 21, 2026)](https://github.com/openai/codex/blob/df6a54ee851129447290b5684b8c2d2df10a5cd5/codex-rs/tui/src/slash_command.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/cd)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
