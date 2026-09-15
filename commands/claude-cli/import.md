# `/import [codex|gemini|cursor] [--dry-run] [--yes]`

> Imports configuration from OpenAI Codex, Gemini CLI, or Cursor.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** First-party connection and feature-flag fetching; 2.1.213+ (Cursor: 2.1.265+)

## What it does

Imports configuration from OpenAI Codex, Gemini CLI, or Cursor.

Brings over instruction files, MCP servers, commands, subagents, and skills. `--dry-run` previews changes and `--yes` skips the interactive picker.

> **Note:** Unavailable through a Claude apps gateway or third-party provider.

## Canonical example

`/import codex --dry-run`

## More examples

- `/import cursor --dry-run`

## Related commands

- [`/init`](./init.md)
- [`/mcp`](./mcp.md)
- [`/skills`](./skills.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/import`](../claude-app/import.md)
- [OpenAI Codex CLI — `/import`](../codex-cli/import.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/import)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
