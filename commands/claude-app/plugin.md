# `/plugin [SUBCOMMAND]`

> Browses and manages Claude Code plugins.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Flags:** inherited

## What it does

Browses and manages Claude Code plugins.

Run bare for the plugin menu or use direct subcommands such as `list`, `install`, `enable`, and `disable`. The install summary tells you whether activation was immediate or needs a reload.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

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

- [GitHub Copilot CLI — `/plugins`](../cli/plugins.md)
- [Claude Code CLI — `/plugin`](../claude-cli/plugin.md)
- [Claude Code on the web — `/plugin`](../claude-web/plugin.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Create plugins](https://code.claude.com/docs/en/plugins)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/plugin)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
