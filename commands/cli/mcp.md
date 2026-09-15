# `/mcp [config|list|show|add|edit|delete|disable|enable|auth|reload|search] [SERVER-NAME]`

> Manages MCP server configuration.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Manages MCP server configuration.

Run bare or use `config` to open the MCP dashboard. `show SERVER-NAME` opens a server’s details and tools; `list` (alias `ls`) prints connection status. The command table permits bare, `config`, `show`, and `list` while the agent is busy; mutating subcommands wait until the turn finishes.

> **Note:** For servers defined in a repository’s `.mcp.json`, `edit` and `delete` direct you to that file instead of modifying a shadowed user-level entry.

## Subcommands

- `/mcp config` — Open the MCP dashboard (also the bare command)
- `/mcp list` — Plain-text list with connection status — safe to run mid-turn
- `/mcp show [SERVER-NAME]` — Show the server list or one server’s details and tools
- `/mcp add / edit / delete` — Manage server entries
- `/mcp enable / disable` — Turn a configured server on or off
- `/mcp auth` — Re-run authentication for a server
- `/mcp reload` — Reload server configuration
- `/mcp search` — Find servers to add

## Canonical example

`/mcp list`

## Related commands

- [`/plugin`](./plugins.md)
- [`/sandbox`](./sandbox.md)
- [`/env`](./env.md)

## Also in other surfaces

- [Claude Code CLI — `/mcp`](../claude-cli/mcp.md)
- [Claude Desktop — Code tab — `/mcp`](../claude-app/mcp.md)
- [Claude Code in VS Code — `/mcp`](../claude-vscode/mcp.md)
- [Claude Code on the web — `/mcp`](../claude-web/mcp.md)
- [OpenAI Codex in the ChatGPT desktop app — `/mcp`](../codex-app/mcp.md)
- [OpenAI Codex CLI — `/mcp`](../codex-cli/mcp.md)
- [OpenAI Codex IDE extension — `/mcp`](../codex-ide/mcp.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Managing MCP servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers#managing-mcp-servers)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/mcp)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
