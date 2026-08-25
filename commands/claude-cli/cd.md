# `/cd <PATH>`

> Moves this session to another working directory without losing context.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Requires:** Claude Code 2.1.169+

## What it does

Moves this session to another working directory without losing context.

Keeps the conversation and prompt cache, asks for workspace trust when needed, and makes the moved session discoverable by later resume commands from the new directory. `Cd` permission rules can restrict targets.

## Canonical example

`/cd ../service-api`

## Related commands

- [`/add-dir`](./add-dir.md)
- [`/permissions`](./permissions.md)
- [`/resume`](./resume.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/cwd`](../cli/cwd.md)
- [Claude Desktop — Code tab — `/cd`](../claude-app/cd.md)
- [OpenAI Codex CLI — `/cd`](../codex-cli/cd.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/cd)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
