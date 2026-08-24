# `/every [INTERVAL PROMPT]`

> Schedules a recurring prompt, skill, or schedulable slash command.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23
- **Flags:** experimental

## What it does

Schedules a recurring prompt, skill, or schedulable slash command.

With no arguments it opens the schedule manager. In that manager, `↑`/`↓` selects an entry and `x` removes it — schedules can only be added from the prompt input, not from the dialog.

## Examples

- `/every 1h run tests`
- `/every 1d /chronicle standup`

## Related commands

- [`/after`](./after.md)
- [`/tasks`](./tasks.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/every)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
