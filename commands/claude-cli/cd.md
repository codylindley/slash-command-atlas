# `/cd <PATH>`

> Moves this session to another working directory without losing context.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-09-14
- **Requires:** Claude Code 2.1.169+

## What it does

Moves this session to another working directory without losing context.

Keeps the conversation, loads the destination’s project instructions, and asks for workspace trust when needed. Since 2.1.246 it also applies the new settings, hooks, MCP servers, plugins, skills, and subagents immediately, replacing the previous directory’s project connections. `Cd` permission rules can restrict targets.

> **Note:** Environment values from the new settings overlay those from the old directory rather than clearing them. The session becomes resumable from its new directory.

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
- [Permissions and working directories](https://code.claude.com/docs/en/permissions)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/cd)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
