# `/add-dir <PATH>`

> Adds another working directory for this session to access.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Context & input
- **Data snapshot:** 2026-09-14
- **Flags:** inherited

## What it does

Adds another working directory for this session to access.

Grants file access and fires `DirectoryAdded` hooks. It is not a full configuration switch: skills, legacy commands, subagents, and plugin-discovery settings are exceptions to the usual exclusion of added-directory configuration. Memory files require a separate opt-in.

> **Note:** In 2.1.257+, adding an already-readable project subdirectory can load its skills, commands, and subagents without adding another working directory. Settings-only `permissions.additionalDirectories` grants file access, not these discovery exceptions.

**Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/add-dir ../shared-schema`

## Related commands

- [`/cd`](./cd.md)
- [`/permissions`](./permissions.md)
- [`/skills`](./skills.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/add-dir`](../cli/add-dir.md)
- [Claude Code CLI — `/add-dir`](../claude-cli/add-dir.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Permissions and working directories](https://code.claude.com/docs/en/permissions)
- [Hooks reference](https://code.claude.com/docs/en/hooks)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/add-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
