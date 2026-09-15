# `/pets [PET_ID|off]`

> Chooses or hides an ambient terminal pet.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-09-14
- **Aliases:** `/pet`
- **Requires:** Idle main chat in a supported terminal

## What it does

Chooses or hides an ambient terminal pet.

Opens the pet picker for built-in and custom pets and persists the selection in supported terminals. Pass a pet ID to select it directly, or `off` to hide the current pet.

> **Note:** Stable source also accepts `disable`, `disabled`, `hide`, `hidden`, and `none` as hide arguments.

## Canonical example

`/pets`

## Related commands

- [`/theme`](./theme.md)
- [`/statusline`](./statusline.md)

## Also in other surfaces

- [OpenAI Codex in the ChatGPT desktop app — `/pet`](../codex-app/pet.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/slash_dispatch.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/pets)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
