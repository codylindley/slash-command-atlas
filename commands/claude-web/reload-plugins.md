# `/reload-plugins [--force]`

> Reloads plugins through Remote Control when the host is an interactive terminal.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Reloads plugins through Remote Control when the host is an interactive terminal.

A Desktop, SDK, or other non-terminal host refuses a remotely forwarded reload. Direct input in Desktop or a headless session is a different path supported in 2.1.260+; that path leaves plugin MCP server changes for the next session.

> **Note:** Direct Desktop/headless support must not be treated as proof of cloud-browser support. The documented Remote Control form requires an interactive-terminal host.

## Canonical example

`/reload-plugins`

## Related commands

- [`/mcp`](./mcp.md)
- [`/plugin`](./plugin.md)

## Also in other surfaces

- [Claude Code CLI — `/reload-plugins`](../claude-cli/reload-plugins.md)
- [Claude Desktop — Code tab — `/reload-plugins`](../claude-app/reload-plugins.md)

## Official sources

- [Remote Control limitations](https://code.claude.com/docs/en/remote-control#limitations)
- [Direct versus remotely forwarded plugin reloads](https://code.claude.com/docs/en/discover-plugins#apply-plugin-changes-without-restarting)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code on the web slash command reference](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/reload-plugins)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
