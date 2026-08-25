# `/rewind`

> Restores code and/or conversation to an earlier checkpoint.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/checkpoint`, `/undo`
- **Flags:** blocked

## What it does

Restores code and/or conversation to an earlier checkpoint.

The picker can restore both code and conversation, either one alone, or summarize messages before or after a selected point. Only changes made through Claude’s file-editing tools are reliably tracked; Bash, external, symlinked, and most background-subagent edits are outside that guarantee.

> **Note:** Checkpointing is a session safety net, not a replacement for version control.

**Desktop limitation:** this command opens a terminal panel or controls the terminal renderer, so Desktop refuses it or replaces it with native UI.

## Canonical example

`/rewind`

## Related commands

- [`/branch`](./branch.md)
- [`/clear`](./clear.md)
- [`/diff`](./diff.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/undo`](../cli/undo.md)
- [Claude Code CLI — `/rewind`](../claude-cli/rewind.md)

## Official sources

- [Desktop — what is not available](https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop)
- [Checkpointing](https://code.claude.com/docs/en/checkpointing)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/rewind)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
