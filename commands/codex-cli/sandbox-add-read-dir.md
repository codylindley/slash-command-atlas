# `/sandbox-add-read-dir <ABSOLUTE_PATH>`

> Grants the sandbox read access to an additional directory.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-09-14
- **Requires:** Idle native Windows main chat in stable CLI 0.154.0

## What it does

Grants the sandbox read access to an additional directory.

Validates an existing absolute directory, refreshes the Windows sandbox policy, and makes that directory readable to later sandboxed commands. This command is documented only for the CLI running natively on Windows.

> **Note:** Still documented and present in stable `0.154.0`, but removed from the checked `0.155.0-alpha.4` prerelease. Keep this distinction in mind when following the prose reference with a newer build.

## Canonical example

`/sandbox-add-read-dir C:\src\shared`

## Related commands

- [`/permissions`](./permissions.md)
- [`/setup-default-sandbox`](./setup-default-sandbox.md)
- [`/status`](./status.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI command source (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs)
- [Codex CLI command source (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/slash_command.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/sandbox-add-read-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
