# `/rewind`

> Restores code and/or conversation to an earlier checkpoint.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/checkpoint`, `/undo`

## What it does

Restores code and/or conversation to an earlier checkpoint.

The picker can restore both code and conversation, either one alone, or summarize messages before or after a selected point. Only changes made through Claude’s file-editing tools are reliably tracked; Bash, external, symlinked, and most background-subagent edits are outside that guarantee.

> **Note:** Checkpointing is a session safety net, not a replacement for version control.

## Canonical example

`/rewind`

## Related commands

- [`/branch`](./branch.md)
- [`/clear`](./clear.md)
- [`/diff`](./diff.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/undo`](../cli/undo.md)
- [Claude Desktop — Code tab — `/rewind`](../claude-app/rewind.md)

## Official sources

- [Checkpointing](https://code.claude.com/docs/en/checkpointing)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/rewind)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
