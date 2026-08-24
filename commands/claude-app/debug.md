# `/debug [DESCRIPTION]`

> Enables session debug logging and investigates the resulting log.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23
- **Flags:** skill, inherited

## What it does

Enables session debug logging and investigates the resulting log.

If logging was not already enabled at launch, it starts at invocation time. An optional issue description focuses the diagnosis on the behavior you are seeing.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Examples

- `/debug MCP tools disappear after compaction`

## Related commands

- [`/doctor`](./doctor.md)
- [`/heapdump`](./heapdump.md)
- [`/bug`](./bug.md)

## Also in other surfaces

- [GitHub Copilot app — `/debug`](../app/debug.md)
- [GitHub Copilot Chat in VS Code — `/debug`](../vscode/debug.md)
- [Claude Code CLI — `/debug`](../claude-cli/debug.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/debug)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
