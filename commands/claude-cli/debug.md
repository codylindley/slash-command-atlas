# `/debug [DESCRIPTION]`

> Enables session debug logging and investigates the resulting log.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23
- **Flags:** skill

## What it does

Enables session debug logging and investigates the resulting log.

If logging was not already enabled at launch, it starts at invocation time. An optional issue description focuses the diagnosis on the behavior you are seeing.

## Canonical example

`/debug MCP tools disappear after compaction`

## Related commands

- [`/doctor`](./doctor.md)
- [`/heapdump`](./heapdump.md)
- [`/bug`](./bug.md)

## Also in other surfaces

- [GitHub Copilot app — `/debug`](../app/debug.md)
- [GitHub Copilot Chat in VS Code — `/debug`](../vscode/debug.md)
- [Claude Desktop — Code tab — `/debug`](../claude-app/debug.md)

## Official sources

- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/debug)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
