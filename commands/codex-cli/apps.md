# `/apps`

> Browses apps (connectors) and inserts one into the prompt.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Apps/connectors available

## What it does

Browses apps (connectors) and inserts one into the prompt.

Opens the app picker. Selecting an app inserts its mention as `$app-slug` in the composer so the next request can ask Codex to use it.

## Canonical example

`/apps`

## Related commands

- [`/plugins`](./plugins.md)
- [`/mcp`](./mcp.md)
- [`/skills`](./skills.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI command availability (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/bottom_pane/slash_commands.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/apps)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
