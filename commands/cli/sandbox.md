# `/sandbox [config|status|policy|enable|disable]`

> Manages OS-level sandboxing of filesystem and network access.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-09-14
- **Flags:** experimental

## What it does

Manages OS-level sandboxing of filesystem and network access.

Sandboxing restricts what shell commands, MCP and LSP servers, and the built-in file and web tools can reach. `policy` shows the effective policy including path grants, denials and network access — the thing to read before you trust a permissive session.

> **Note:** Managed policy can limit changes. In the 1.0.84-6 prerelease, `disable` can opt the current session out only when the organization’s policy permits bypass. Read-only `status` and `policy` work mid-turn; configuration changes wait for the turn to finish.

## Subcommands

- `/sandbox config` — Open the sandbox settings dialog (also the bare command)
- `/sandbox status` — Whether sandboxing is on
- `/sandbox policy` — The effective policy: path grants, denials, network access
- `/sandbox enable / disable` — Turn sandboxing on or off

## Canonical example

`/sandbox policy`

## Related commands

- [`/permissions`](./permissions.md)
- [`/allow-all`](./allow-all.md)
- [`/add-dir`](./add-dir.md)

## Also in other surfaces

- [Claude Code CLI — `/sandbox`](../claude-cli/sandbox.md)
- [Claude Desktop — Code tab — `/sandbox`](../claude-app/sandbox.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Copilot CLI 1.0.84-6 (prerelease, 2026-09-14)](https://github.com/github/copilot-cli/releases/tag/v1.0.84-6)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/sandbox)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
