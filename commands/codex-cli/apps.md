# `/apps`

> Browses apps (connectors) and inserts one into the prompt.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23

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

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/apps)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
