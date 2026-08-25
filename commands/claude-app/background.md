# `/background [PROMPT]`

> Detaches this whole session so it can keep running in the background.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/bg`
- **Flags:** inherited

## What it does

Detaches this whole session so it can keep running in the background.

Frees the terminal and moves the conversation into agent view. An optional prompt sends one final instruction before detaching; monitor or reattach with `claude agents`.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/background finish the test run and summarize any failures`

## Related commands

- [`/fork`](./fork.md)
- [`/stop`](./stop.md)
- [`/tasks`](./tasks.md)

## Also in other surfaces

- [Claude Code CLI — `/background`](../claude-cli/background.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Manage multiple agents with agent view](https://code.claude.com/docs/en/agent-view)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/background)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
