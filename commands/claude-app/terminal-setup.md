# `/terminal-setup`

> Configures terminal-specific newline keys and integration settings.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Supported terminal needing setup
- **Flags:** blocked

## What it does

Configures terminal-specific newline keys and integration settings.

Installs Shift+Enter for VS Code, Cursor, Devin Desktop, Alacritty, and Zed. In Apple Terminal it configures Option+Enter and turns off the bell; in iTerm2 it enables the clipboard access used by `/copy`.

> **Note:** **Desktop limitation:** this command opens a terminal panel or controls the terminal renderer, so Desktop refuses it or replaces it with native UI.

## Canonical example

`/terminal-setup`

## Related commands

- [`/keybindings`](./keybindings.md)
- [`/ide`](./ide.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/terminal-setup`](../cli/terminal-setup.md)
- [Claude Code CLI — `/terminal-setup`](../claude-cli/terminal-setup.md)

## Official sources

- [Desktop — what is not available](https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/terminal-setup)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
