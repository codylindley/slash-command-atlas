# `/add-dir <PATH>`

> Adds another working directory for this session to access.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Adds another working directory for this session to access.

Grants file access for the current session and fires `DirectoryAdded` hooks. Most `.claude/` configuration is not discovered from an added directory; skills are the notable exception.

## Canonical example

`/add-dir ../shared-schema`

## Related commands

- [`/cd`](./cd.md)
- [`/permissions`](./permissions.md)
- [`/skills`](./skills.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/add-dir`](../cli/add-dir.md)
- [Claude Desktop — Code tab — `/add-dir`](../claude-app/add-dir.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Hooks reference](https://code.claude.com/docs/en/hooks)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/add-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
