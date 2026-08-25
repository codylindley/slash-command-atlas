# `/focus`

> Toggles a compact view of the current turn.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Fullscreen renderer
- **Flags:** blocked

## What it does

Toggles a compact view of the current turn.

Focus view keeps only your last prompt, a one-line tool summary with edit counts, and the final response visible. The choice persists across sessions through the `viewMode` setting.

> **Note:** **Desktop limitation:** this command opens a terminal panel or controls the terminal renderer, so Desktop refuses it or replaces it with native UI.

## Canonical example

`/focus`

## Related commands

- [`/tui`](./tui.md)
- [`/statusline`](./statusline.md)

## Also in other surfaces

- [Claude Code CLI — `/focus`](../claude-cli/focus.md)

## Official sources

- [Desktop — what is not available](https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/focus)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
