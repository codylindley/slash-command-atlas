# `/mcp [reconnect SERVER|enable|disable [SERVER|all]]`

> Opens web connector settings or manages a Remote Control session’s MCP servers.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Requires:** Claude Code 2.1.166+

## What it does

Opens web connector settings or manages a Remote Control session’s MCP servers.

Bare `/mcp` on the web opens the claude.ai connectors directory. The `reconnect`, `enable`, and `disable` subcommands work from web and mobile; reconnecting without a server name retries every failed server or server awaiting authentication.

> **Note:** This behavior is documented for the claude.ai/code client under Remote Control limitations; Anthropic does not separately state the cloud-session behavior.

## Related commands

- [`/config`](./config.md)
- [`/reload-plugins`](./reload-plugins.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/mcp`](../cli/mcp.md)
- [Claude Code CLI — `/mcp`](../claude-cli/mcp.md)
- [Claude Desktop — Code tab — `/mcp`](../claude-app/mcp.md)
- [Claude Code in VS Code — `/mcp`](../claude-vscode/mcp.md)
- [OpenAI Codex in the ChatGPT desktop app — `/mcp`](../codex-app/mcp.md)
- [OpenAI Codex CLI — `/mcp`](../codex-cli/mcp.md)
- [OpenAI Codex IDE extension — `/mcp`](../codex-ide/mcp.md)

## Official sources

- [Remote Control limitations](https://code.claude.com/docs/en/remote-control#limitations)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code on the web slash command reference](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/mcp)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
