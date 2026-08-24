# `/fewer-permission-prompts`

> Builds a conservative allowlist from repeated read-only tool calls.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Flags:** skill

## What it does

Builds a conservative allowlist from repeated read-only tool calls.

Scans transcripts for common Bash and MCP calls, prioritizes safe read-only patterns, and proposes additions to project `.claude/settings.json`.

> **Note:** Review the proposed rules before accepting them; repetition does not make a command harmless.

## Related commands

- [`/permissions`](./permissions.md)
- [`/doctor`](./doctor.md)
- [`/sandbox`](./sandbox.md)

## Also in other surfaces

- [Claude Code CLI — `/fewer-permission-prompts`](../claude-cli/fewer-permission-prompts.md)

## Official sources

- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/fewer-permission-prompts)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
