# `/diff`

> Shows uncommitted changes without leaving the session.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Review & critique
- **Data snapshot:** 2026-09-14
- **Requires:** A Git repository
- **Flags:** blocked

## What it does

Shows uncommitted changes without leaving the session.

In fullscreen mode, opens a side panel that stays visible and updates as you work (2.1.260+). The classic renderer uses a viewer that replaces the prompt until you close it. Git-backed changes include your own edits, not only Claude’s; a submodule entry tracks its commit pointer rather than edits inside it.

> **Note:** **Desktop limitation:** this command opens a terminal panel or controls the terminal renderer, so Desktop refuses it or replaces it with native UI.

## Canonical example

`/diff`

## Related commands

- [`/code-review`](./code-review.md)
- [`/rewind`](./rewind.md)
- [`/export`](./export.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/diff`](../cli/diff.md)
- [Claude Code CLI — `/diff`](../claude-cli/diff.md)
- [OpenAI Codex CLI — `/diff`](../codex-cli/diff.md)

## Official sources

- [Desktop — what is not available](https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Interactive mode](https://code.claude.com/docs/en/interactive-mode)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/diff)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
