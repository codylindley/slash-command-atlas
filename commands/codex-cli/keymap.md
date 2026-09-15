# `/keymap [debug]`

> Inspects and remaps TUI keyboard shortcuts.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Inspects and remaps TUI keyboard shortcuts.

Opens an interactive shortcut editor, applies the new binding immediately, and persists custom bindings under `tui.keymap` in `config.toml`. Context-specific bindings override global ones. Add `debug` to open the keypress inspector instead.

## Reach for it when

- A default TUI shortcut conflicts with your terminal or editor
- You want to inspect which action a key currently triggers

## Canonical example

`/keymap`

## More examples

- `/keymap debug`

## Related commands

- [`/vim`](./vim.md)
- [`/raw`](./raw.md)
- [`/statusline`](./statusline.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/slash_dispatch.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/keymap)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
