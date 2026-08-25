# `/mcp [list|show|add|edit|delete|disable|enable|auth|reload|search] [SERVER-NAME]`

> Manages MCP server configuration.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23

## What it does

Manages MCP server configuration.

`list` (alias `ls`) prints servers with connection status and is read-only, so it can run while the agent is mid-turn; every other subcommand is blocked until the turn finishes. Sandboxed local servers report a `connected (sandboxed)` status.

## Subcommands

- `/mcp list` — Plain-text list with connection status — safe to run mid-turn
- `/mcp show / add / edit / delete` — Inspect and manage server entries
- `/mcp enable / disable` — Turn a configured server on or off
- `/mcp auth` — Re-run authentication for a server
- `/mcp reload` — Reload server configuration
- `/mcp search` — Find servers to add

## Canonical example

`/mcp list`

## Related commands

- [`/plugins`](./plugins.md)
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

- [Managing MCP servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers#managing-mcp-servers)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/mcp)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
