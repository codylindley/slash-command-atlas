# `/sandbox-add-read-dir <ABSOLUTE_PATH>`

> Grants the sandbox read access to an additional directory.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Requires:** Native Windows CLI

## What it does

Grants the sandbox read access to an additional directory.

Validates an existing absolute directory, refreshes the Windows sandbox policy, and makes that directory readable to later sandboxed commands. This command is documented only for the CLI running natively on Windows.

## Examples

- `/sandbox-add-read-dir C:\src\shared`

## Related commands

- [`/permissions`](./permissions.md)
- [`/setup-default-sandbox`](./setup-default-sandbox.md)
- [`/status`](./status.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/sandbox-add-read-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
