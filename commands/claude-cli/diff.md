# `/diff`

> Opens an interactive viewer for Git and per-turn diffs.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Requires:** A Git repository

## What it does

Opens an interactive viewer for Git and per-turn diffs.

Move left and right between the working-tree diff and individual Claude turns, then browse changed files. The viewer reads raw Git blobs, so configured diff drivers and `textconv` filters do not rewrite what you see.

## Canonical example

`/diff`

## Related commands

- [`/code-review`](./code-review.md)
- [`/rewind`](./rewind.md)
- [`/export`](./export.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/diff`](../cli/diff.md)
- [Claude Desktop — Code tab — `/diff`](../claude-app/diff.md)
- [OpenAI Codex CLI — `/diff`](../codex-cli/diff.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/diff)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
