# `/keymap`

> Inspects and remaps TUI keyboard shortcuts.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23

## What it does

Inspects and remaps TUI keyboard shortcuts.

Opens an interactive shortcut editor, applies the new binding immediately, and persists custom bindings under `tui.keymap` in `config.toml`. Context-specific bindings override global ones.

## Reach for it when

- A default TUI shortcut conflicts with your terminal or editor
- You want to inspect which action a key currently triggers

## Canonical example

`/keymap`

## Related commands

- [`/vim`](./vim.md)
- [`/raw`](./raw.md)
- [`/statusline`](./statusline.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/keymap)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
