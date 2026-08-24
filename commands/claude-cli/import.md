# `/import [codex|gemini] [--dry-run] [--yes]`

> Imports configuration from OpenAI Codex or Gemini CLI.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Requires:** First-party Anthropic connection; Claude Code 2.1.213+

## What it does

Imports configuration from OpenAI Codex or Gemini CLI.

Brings over instruction files, MCP servers, commands, subagents, and skills. `--dry-run` previews changes and `--yes` skips the interactive picker.

## Examples

- `/import codex --dry-run`

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
