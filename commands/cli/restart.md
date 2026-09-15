# `/restart`

> Restarts the CLI and restores its live sessions.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14

## What it does

Restarts the CLI and restores its live sessions.

Restores all live sessions in this process, not just the foreground session. If the target version cannot restore multiple sessions, the CLI asks whether to continue with only the foreground session or cancel.

## Canonical example

`/restart`

## Related commands

- [`/clear`](./clear.md)
- [`/update`](./update.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/restart)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
