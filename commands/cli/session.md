# `/session [info|checkpoints [n]|files|plan|rename [NAME]|cleanup|prune|delete [ID]|delete-all]`

> Shows session information and manages saved sessions.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Aliases:** `/sessions`

## What it does

Shows session information and manages saved sessions.

`info` shows session details, including a session link when available. Deleting a synced session can also offer to remove its remote copy; `delete-all` and `prune` remove local data only.

## Subcommands

- `/session info` — Session details, including the session link when available
- `/session checkpoints [n]` — List session checkpoints
- `/session files` — Files touched in this session
- `/session plan` — The session’s current plan
- `/session rename [NAME]` — Rename the session
- `/session cleanup` — Clean up session data
- `/session prune --older-than DAYS [--dry-run]` — Remove old local sessions, or preview the removal
- `/session delete [ID] [--yes]` — Delete a specified session; without an ID, replace the current session with a new one
- `/session delete-all [--yes]` — Delete local sessions except the current one; sessions in use by another process are skipped

## Canonical example

`/session info`

## Related commands

- [`/resume`](./resume.md)
- [`/rename`](./rename.md)
- [`/undo`](./undo.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/session)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
