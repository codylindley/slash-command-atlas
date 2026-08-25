# `/mcp__<server>__<prompt> [ARGUMENTS]`

> Invokes a prompt dynamically exposed by a connected MCP server.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Customization authoring
- **Data snapshot:** 2026-08-23
- **Flags:** custom

## What it does

Invokes a prompt dynamically exposed by a connected MCP server.

Claude Code discovers MCP prompts at runtime and namespaces them with the server name. The exact commands therefore depend on your active connections and cannot be enumerated as a fixed built-in set.

## Canonical example

`/mcp__github__triage issue 1234`

## Related commands

- [`/mcp`](./mcp.md)
- [`/<skill-name>`](./custom-skill.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/mcp-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
