# `/plugin [install SOURCE|update PLUGIN[@MARKETPLACE]|uninstall PLUGIN[@MARKETPLACE]|list|marketplace SUBCOMMAND]`

> Opens the plugins dashboard or manages installed plugins and marketplaces.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Opens the plugins dashboard or manages installed plugins and marketplaces.

The dashboard’s Installed, Online, and Marketplace views cover plugins only. Select an installed plugin to enable, disable, update, or uninstall it. Use `/mcp` for servers and `/skills` for skills.

> **Note:** The experimental `/plugins` slash command was removed in 1.0.81. It is not an alias for `/plugin`. The terminal command `copilot plugins` is a separate, legacy alias for `copilot plugin`.

## Subcommands

- `/plugin install SOURCE` — Install from a marketplace, repo, git URL or local path
- `/plugin update PLUGIN[@MARKETPLACE]` — Update an installed plugin
- `/plugin uninstall PLUGIN[@MARKETPLACE]` — Remove a plugin (aliases: remove, rm)
- `/plugin list` — List installed plugins (alias: ls)
- `/plugin marketplace add SOURCE` — Register a marketplace
- `/plugin marketplace remove NAME` — Unregister a marketplace
- `/plugin marketplace list` — List registered marketplaces
- `/plugin marketplace browse NAME` — Browse a marketplace’s plugins
- `/plugin marketplace update [NAME]` — Refresh one marketplace catalog, or all of them (alias: refresh)

## Canonical example

`/plugin list`

## Related commands

- [`/mcp`](./mcp.md)
- [`/skills`](./skills.md)
- [`/extensions`](./extensions.md)

## Also in other surfaces

- [Claude Code CLI — `/plugin`](../claude-cli/plugin.md)
- [Claude Desktop — Code tab — `/plugin`](../claude-app/plugin.md)
- [Claude Code on the web — `/plugin`](../claude-web/plugin.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [About plugins](https://docs.github.com/en/copilot/concepts/agents/about-plugins)
- [CLI plugin reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/plugins)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
