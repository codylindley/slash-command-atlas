# `/import [codex|gemini|cursor] [--dry-run] [--yes]`

> Imports configuration from OpenAI Codex, Gemini CLI, or Cursor.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** First-party connection and feature-flag fetching; 2.1.213+ (Cursor: 2.1.265+)
- **Flags:** inherited

## What it does

Imports configuration from OpenAI Codex, Gemini CLI, or Cursor.

Brings over instruction files, MCP servers, commands, subagents, and skills. `--dry-run` previews changes and `--yes` skips the interactive picker.

> **Note:** Unavailable through a Claude apps gateway or third-party provider.

**Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/import codex --dry-run`

## More examples

- `/import cursor --dry-run`

## Related commands

- [`/init`](./init.md)
- [`/mcp`](./mcp.md)
- [`/skills`](./skills.md)

## Also in other surfaces

- [Claude Code CLI — `/import`](../claude-cli/import.md)
- [OpenAI Codex CLI — `/import`](../codex-cli/import.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/import)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
