# `/restart-session`

> Restarts the current session and keeps its history.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Restarts the current session and keeps its history.

Reinitializes the session without throwing away the transcript. This is the fix for a session that has gone unresponsive, is holding stale tool state, or has picked up configuration changes that only take effect on restart.

## Canonical example

`/restart-session`

## Related commands

- [`/clear`](./clear.md)
- [`/skills`](./skills.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/restart-session)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
