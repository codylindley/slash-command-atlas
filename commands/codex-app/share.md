# `/share`

> Creates a read-only snapshot of the current local Codex thread.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex in the ChatGPT desktop app
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Local Codex thread in the macOS desktop app; sharing allowed by workspace policy

## What it does

Creates a read-only snapshot of the current local Codex thread.

Opens the sharing dialog and prepares an uploaded snapshot. Personal accounts can create a link for anyone who has it; workspace accounts can restrict the audience to signed-in members or invited people when policy allows.

> **Note:** Review the snapshot before copying its link. OpenAI redacts detected secrets, but the snapshot can include messages, reasoning summaries, images, and diffs.

## Reach for it when

- You want to share a reproducible thread without giving someone access to the live project
- A teammate needs the conversation and resulting diff, but not local tool or shell history

## Canonical example

`/share`

## Related commands

- [`/fork`](./fork.md)
- [`/status`](./status.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/share`](../cli/share.md)
- [Claude Code CLI — `/bug`](../claude-cli/bug.md)
- [Claude Desktop — Code tab — `/bug`](../claude-app/bug.md)

## Official sources

- [Share a read-only snapshot of a Codex thread](https://learn.chatgpt.com/docs/use-chatgpt#share-a-read-only-snapshot-of-a-codex-thread)
- [OpenAI Codex in the ChatGPT desktop app slash command reference](https://learn.chatgpt.com/docs/reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-app/share)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
