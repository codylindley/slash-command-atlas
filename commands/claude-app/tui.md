# `/tui [default|fullscreen]`

> Selects the terminal renderer and relaunches the current conversation.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Flags:** blocked

## What it does

Selects the terminal renderer and relaunches the current conversation.

`fullscreen` uses the alternate-screen flicker-free UI; `default` returns to ordinary terminal rendering. Run bare to print the active renderer.

> **Note:** **Desktop limitation:** this command opens a terminal panel or controls the terminal renderer, so Desktop refuses it or replaces it with native UI.

## Related commands

- [`/focus`](./focus.md)
- [`/scroll-speed`](./scroll-speed.md)
- [`/theme`](./theme.md)

## Also in other surfaces

- [Claude Code CLI — `/tui`](../claude-cli/tui.md)

## Official sources

- [Desktop — what is not available](https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/tui)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
