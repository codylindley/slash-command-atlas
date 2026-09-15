# `/reload-plugins [--force]`

> Reloads Desktop plugin components without restarting the session.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Claude Code engine 2.1.260+; direct input in the Desktop prompt

## What it does

Reloads Desktop plugin components without restarting the session.

Type the command directly in the Desktop prompt box. It reloads active plugin components and reports counts or errors, but does not connect or disconnect plugin MCP servers; those changes take effect in the next session.

> **Note:** A remotely forwarded invocation, including one sent through Remote Control to a Desktop-hosted session, is refused.

## Canonical example

`/reload-plugins`

## Related commands

- [`/plugin`](./plugin.md)
- [`/reload-skills`](./reload-skills.md)
- [`/mcp`](./mcp.md)

## Also in other surfaces

- [Claude Code CLI — `/reload-plugins`](../claude-cli/reload-plugins.md)
- [Claude Code on the web — `/reload-plugins`](../claude-web/reload-plugins.md)

## Official sources

- [Plugin reloads in Desktop and headless sessions](https://code.claude.com/docs/en/discover-plugins#apply-plugin-changes-without-restarting)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/reload-plugins)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
