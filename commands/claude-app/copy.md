# `/copy [N]`

> Copies a recent assistant response or one of its code blocks.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Flags:** inherited

## What it does

Copies a recent assistant response or one of its code blocks.

Pass `N` to select the Nth-latest answer. When the response contains code blocks, an interactive picker lets you copy one block or the whole answer; press `w` to write the selection to a file.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Examples

- `/copy 2`

## Related commands

- [`/export`](./export.md)
- [`/btw`](./btw.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/copy`](../cli/copy.md)
- [Claude Code CLI — `/copy`](../claude-cli/copy.md)
- [OpenAI Codex CLI — `/copy`](../codex-cli/copy.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/copy)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
