# `/setup-default-sandbox`

> Sets up the elevated agent sandbox on Windows.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Requires:** Windows using the degraded sandbox

## What it does

Sets up the elevated agent sandbox on Windows.

Appears only when native Windows Codex is using the degraded restricted-token sandbox. It starts the administrator setup flow, configures the elevated sandbox, and selects the corresponding automatic approval preset.

## Related commands

- [`/permissions`](./permissions.md)
- [`/sandbox-add-read-dir`](./sandbox-add-read-dir.md)
- [`/status`](./status.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/setup-default-sandbox)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
