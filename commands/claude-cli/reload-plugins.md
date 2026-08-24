# `/reload-plugins [--force]`

> Reloads active plugins and reports component or load errors.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23

## What it does

Reloads active plugins and reports component or load errors.

Applies plugin changes without restarting. If changed MCP tools would invalidate the prompt cache, the command warns and skips that reload unless you pass `--force`.

## Related commands

- [`/plugin`](./plugin.md)
- [`/reload-skills`](./reload-skills.md)
- [`/mcp`](./mcp.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/reload-plugins`](../claude-app/reload-plugins.md)
- [Claude Code on the web — `/reload-plugins`](../claude-web/reload-plugins.md)

## Official sources

- [Create plugins](https://code.claude.com/docs/en/plugins)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/reload-plugins)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
