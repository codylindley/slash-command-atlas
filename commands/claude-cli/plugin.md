# `/plugin [SUBCOMMAND]`

> Browses and manages Claude Code plugins.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Browses and manages Claude Code plugins.

Run bare for the plugin menu or use direct subcommands such as `list`, `install`, `enable`, and `disable`. In 2.1.268+, closing the menu automatically reloads its changes, after the current response if necessary. Cache-invalidating changes can remain pending until you confirm with `/reload-plugins --force`.

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
- [Claude Desktop — Code tab — `/plugin`](../claude-app/plugin.md)
- [Claude Code on the web — `/plugin`](../claude-web/plugin.md)

## Official sources

- [Create plugins](https://code.claude.com/docs/en/plugins)
- [Apply plugin changes without restarting](https://code.claude.com/docs/en/discover-plugins#apply-plugin-changes-without-restarting)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/plugin)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
