# `/vim`

> Toggles Vim editing mode for the composer.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Toggles Vim editing mode for the composer.

Switches the current session between Vim-style composer behavior and the default editing mode. The persistent default is configured separately with `tui.vim_mode_default`.

## Canonical example

`/vim`

## Related commands

- [`/keymap`](./keymap.md)
- [`/raw`](./raw.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/vim`](../cli/vim.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI command source (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/vim)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
