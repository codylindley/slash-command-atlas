# `/permissions [default|assisted|allow-all|show|reset]`

> Switches permission mode, shows the current one, or resets in-session approvals.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23

## What it does

Switches permission mode, shows the current one, or resets in-session approvals.

This is the canonical command for permission changes; `/allow-all` and `/yolo` remain supported as aliases for `/permissions allow-all`. `reset` clears all in-memory tool and path approvals so the agent prompts again on next use.

## Subcommands

- `/permissions default` — Prompt for tool and path access as normal
- `/permissions assisted` — An intermediate mode between prompting and allow-all
- `/permissions allow-all` — Allow all tools, paths and URLs
- `/permissions show` — Report the current mode
- `/permissions reset` — Clear in-memory approvals for this session

## Related commands

- [`/allow-all`](./allow-all.md)
- [`/reset-allowed-tools`](./reset-allowed-tools.md)
- [`/sandbox`](./sandbox.md)

## Also in other surfaces

- [Claude Code CLI — `/permissions`](../claude-cli/permissions.md)
- [Claude Desktop — Code tab — `/permissions`](../claude-app/permissions.md)
- [OpenAI Codex CLI — `/permissions`](../codex-cli/permissions.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/permissions)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
