# `/plugin [SUBCOMMAND]`

> Indexes the CLI plugin command; Desktop documents a native manager instead.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Flags:** inherited

## What it does

Indexes the CLI plugin command; Desktop documents a native manager instead.

In local or SSH sessions, use **+ → Plugins** to add or manage plugins. The browser is absent in cloud sessions, which load repository-declared or account-synced plugins instead. Plugins are not available in WSL sessions.

> **Note:** **Desktop inheritance:** the CLI slash subcommands are not separately specified for Desktop. A native plugin manager does not establish the same slash-command behavior.

## Subcommands

- `/plugin list` — List installed plugins
- `/plugin install` — Install from a configured marketplace
- `/plugin enable / disable` — Change plugin activation

## Canonical example

`/plugin list`

## Related commands

- [`/reload-plugins`](./reload-plugins.md)
- [`/skills`](./skills.md)
- [`/mcp`](./mcp.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/plugin`](../cli/plugins.md)
- [Claude Code CLI — `/plugin`](../claude-cli/plugin.md)
- [Claude Code on the web — `/plugin`](../claude-web/plugin.md)

## Official sources

- [Desktop — install plugins](https://code.claude.com/docs/en/desktop#install-plugins)
- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/plugin)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
