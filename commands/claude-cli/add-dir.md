# `/add-dir <PATH>`

> Adds another working directory for this session to access.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-09-14

## What it does

Adds another working directory for this session to access.

Grants file access and fires `DirectoryAdded` hooks. It is not a full configuration switch: skills, legacy commands, subagents, and plugin-discovery settings are exceptions to the usual exclusion of added-directory configuration. Memory files require a separate opt-in.

> **Note:** In 2.1.257+, adding an already-readable project subdirectory can load its skills, commands, and subagents without adding another working directory. Settings-only `permissions.additionalDirectories` grants file access, not these discovery exceptions.

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
- [Permissions and working directories](https://code.claude.com/docs/en/permissions)
- [Hooks reference](https://code.claude.com/docs/en/hooks)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/add-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
