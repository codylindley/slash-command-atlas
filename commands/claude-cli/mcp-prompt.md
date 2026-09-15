# `/mcp__<server>__<prompt> [ARGUMENTS]`

> Invokes a prompt dynamically exposed by a connected MCP server.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Flags:** custom

## What it does

Invokes a prompt dynamically exposed by a connected MCP server.

The picker labels prompts as `/server:prompt (MCP)`; the full `/mcp__server__prompt` form remains accepted. Arguments are split on whitespace, with one token per argument. The available prompts depend on your connected servers, not a fixed built-in list.

> **Note:** In the full form, unsupported characters in the server name become underscores; the prompt name stays as the server declares it.

## Canonical example

`/mcp__github__triage issue 1234`

## Related commands

- [`/mcp`](./mcp.md)
- [`/<skill-name>`](./custom-skill.md)

## Official sources

- [MCP prompts and server connections](https://code.claude.com/docs/en/mcp#use-mcp-prompts-as-commands)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/mcp-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
