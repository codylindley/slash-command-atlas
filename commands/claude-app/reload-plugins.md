# `/reload-plugins [--force]`

> Reloads active plugins and reports component or load errors.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Flags:** inherited

## What it does

Reloads active plugins and reports component or load errors.

Applies plugin changes without restarting. If changed MCP tools would invalidate the prompt cache, the command warns and skips that reload unless you pass `--force`.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Related commands

- [`/plugin`](./plugin.md)
- [`/reload-skills`](./reload-skills.md)
- [`/mcp`](./mcp.md)

## Also in other surfaces

- [Claude Code CLI — `/reload-plugins`](../claude-cli/reload-plugins.md)
- [Claude Code on the web — `/reload-plugins`](../claude-web/reload-plugins.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Create plugins](https://code.claude.com/docs/en/plugins)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/reload-plugins)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
