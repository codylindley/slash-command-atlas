# `/sandbox [config|status|policy|enable|disable]`

> Manages OS-level sandboxing of filesystem and network access.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23

## What it does

Manages OS-level sandboxing of filesystem and network access.

Sandboxing restricts what shell commands, MCP and LSP servers, and the built-in file and web tools can reach. `policy` shows the effective policy including path grants, denials and network access — the thing to read before you trust a permissive session.

## Subcommands

- `/sandbox config` — Open the sandbox settings dialog (also the bare command)
- `/sandbox status` — Whether sandboxing is on
- `/sandbox policy` — The effective policy: path grants, denials, network access
- `/sandbox enable / disable` — Turn sandboxing on or off

## Related commands

- [`/permissions`](./permissions.md)
- [`/allow-all`](./allow-all.md)
- [`/add-dir`](./add-dir.md)

## Also in other surfaces

- [Claude Code CLI — `/sandbox`](../claude-cli/sandbox.md)
- [Claude Desktop — Code tab — `/sandbox`](../claude-app/sandbox.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/sandbox)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
