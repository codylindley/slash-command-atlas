# `/add-dir PATH`

> Adds a directory to the allowed list for file access.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Adds a directory to the allowed list for file access.

The CLI only reads and writes inside directories you have allowed. This widens that boundary deliberately, and leaves an auditable trail of what you opened up.

## Related commands

- [`/list-dirs`](./list-dirs.md)
- [`/cwd`](./cwd.md)
- [`/permissions`](./permissions.md)

## Also in other surfaces

- [Claude Code CLI — `/add-dir`](../claude-cli/add-dir.md)
- [Claude Desktop — Code tab — `/add-dir`](../claude-app/add-dir.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/add-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
