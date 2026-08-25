# `/keep-alive [on|off|busy|DURATION]`

> Prevents the machine from sleeping while Copilot works.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23
- **Aliases:** `/caffeinate`

## What it does

Prevents the machine from sleeping while Copilot works.

Use `on` to keep the machine awake continuously, `busy` only while work is active, or pass a duration such as `30m`, `2h`, or `1d`. Use `off` to restore normal sleep behavior.

## Canonical example

`/keep-alive busy`

## More examples

- `/caffeinate 2h`

## Related commands

- [`/tasks`](./tasks.md)
- [`/every`](./every.md)
- [`/after`](./after.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/keep-alive)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
