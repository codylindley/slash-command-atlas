# `/session [info|checkpoints|files|plan|rename|cleanup|prune|delete|delete-all]`

> Shows session information and manages saved sessions.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/sessions`

## What it does

Shows session information and manages saved sessions.

`info` shows session details including the shareable session link when one is available. The remaining subcommands cover checkpoints, tracked files, the current plan, renaming, and clearing out old sessions.

## Subcommands

- `/session info` — Session details, including the session link when available
- `/session checkpoints [n]` — List session checkpoints
- `/session files` — Files touched in this session
- `/session plan` — The session’s current plan
- `/session rename [NAME]` — Rename the session
- `/session cleanup / prune` — Clear out old session data
- `/session delete [ID] / delete-all` — Delete one session, or all of them

## Related commands

- [`/resume`](./resume.md)
- [`/rename`](./rename.md)
- [`/undo`](./undo.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/session)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
