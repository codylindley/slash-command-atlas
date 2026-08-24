# `/claude-api [migrate|upgrade|managed-agents-onboard|prompt-audit]`

> Loads current Claude API guidance and runs migration workflows.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Customization authoring
- **Data snapshot:** 2026-08-23
- **Flags:** skill

## What it does

Loads current Claude API guidance and runs migration workflows.

Activates automatically for Anthropic SDK imports, or invoke a focused workflow: update model usage, upgrade the SDK, onboard a Managed Agent, or audit prompts for instructions written for older models.

## Subcommands

- `/claude-api migrate` — Update Claude API code to a newer model
- `/claude-api upgrade` — Upgrade a supported Anthropic SDK major version
- `/claude-api managed-agents-onboard` — Create and configure a Managed Agent
- `/claude-api prompt-audit` — Find model-era assumptions in prompts and tool descriptions

## Related commands

- [`/skills`](./skills.md)
- [`/init`](./init.md)
- [`/import`](./import.md)

## Also in other surfaces

- [Claude Code CLI — `/claude-api`](../claude-cli/claude-api.md)

## Official sources

- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/claude-api)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
