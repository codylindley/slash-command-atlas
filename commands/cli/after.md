# `/after [DELAY PROMPT]`

> Schedules a one-off prompt, skill, or schedulable slash command.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23
- **Flags:** experimental

## What it does

Schedules a one-off prompt, skill, or schedulable slash command.

The non-recurring counterpart to `/every`. With no arguments it opens the same schedule manager.

## Canonical example

`/after 30m remind me the time`

## More examples

- `/after 1h /chronicle standup`

## Related commands

- [`/every`](./every.md)
- [`/tasks`](./tasks.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/after)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
