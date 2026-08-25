# `/loop [INTERVAL] [PROMPT]`

> Repeats a prompt while the session remains open.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23
- **Aliases:** `/proactive`
- **Flags:** skill

## What it does

Repeats a prompt while the session remains open.

Specify an interval such as `5m`, or let Claude self-pace where supported. With no prompt it runs an autonomous maintenance check, or the instructions in `.claude/loop.md` when present.

## Canonical example

`/loop 5m check whether the deploy finished and report only changes`

## Related commands

- [`/schedule`](./schedule.md)
- [`/goal`](./goal.md)
- [`/tasks`](./tasks.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/loop`](../claude-app/loop.md)

## Official sources

- [Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks)
- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/loop)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
