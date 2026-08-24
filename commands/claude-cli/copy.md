# `/copy [N]`

> Copies a recent assistant response or one of its code blocks.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Copies a recent assistant response or one of its code blocks.

Pass `N` to select the Nth-latest answer. When the response contains code blocks, an interactive picker lets you copy one block or the whole answer; press `w` to write the selection to a file.

## Examples

- `/copy 2`

## Related commands

- [`/export`](./export.md)
- [`/btw`](./btw.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/copy`](../cli/copy.md)
- [Claude Desktop — Code tab — `/copy`](../claude-app/copy.md)
- [OpenAI Codex CLI — `/copy`](../codex-cli/copy.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/copy)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
