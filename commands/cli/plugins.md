# `/plugins [install|update|uninstall|list|enable|disable|remove|marketplace|mcp]`

> Manages plugins, MCP servers and skills, and opens the plugins dashboard.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Aliases:** `/plugin`

## What it does

Manages plugins, MCP servers and skills, and opens the plugins dashboard.

Run bare to open the dashboard, or pass `--plugin`, `--mcp` or `--skill` to open it focused on that tab. Plugins install from a marketplace spec, a GitHub repository, a git URL, or a local path.

## Subcommands

- `/plugins install SOURCE` — Install from a marketplace, repo, git URL or local path
- `/plugins install --skill [--project] SOURCE` — Install a skill; --project scopes it to this repository
- `/plugins update / uninstall PLUGIN[@MARKETPLACE]` — Update or remove an installed plugin
- `/plugins list` — List installed plugins (alias: ls)
- `/plugins enable|disable|remove --plugin|--mcp|--skill NAME` — Toggle or remove by kind; defaults to --plugin
- `/plugins marketplace add|remove|list|browse|update` — Manage and browse marketplaces
- `/plugins mcp [SUBCOMMAND]` — Delegates to /mcp
- `/plugins help` — Full /plugins usage

## Related commands

- [`/mcp`](./mcp.md)
- [`/skills`](./skills.md)
- [`/extensions`](./extensions.md)

## Also in other surfaces

- [Claude Code in VS Code — `/plugins`](../claude-vscode/plugins.md)
- [OpenAI Codex CLI — `/plugins`](../codex-cli/plugins.md)
- [Claude Code CLI — `/plugin`](../claude-cli/plugin.md)
- [Claude Desktop — Code tab — `/plugin`](../claude-app/plugin.md)
- [Claude Code on the web — `/plugin`](../claude-web/plugin.md)

## Official sources

- [About plugins](https://docs.github.com/en/copilot/concepts/agents/about-plugins)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/plugins)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
