# `/claude-api [migrate|upgrade|managed-agents-onboard|prompt-audit|cost-optimize|build-eval|hillclimb]`

> Loads current Claude API guidance and runs migration workflows.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Flags:** skill, inherited

## What it does

Loads current Claude API guidance and runs migration workflows.

Activates automatically for Anthropic SDK imports, or invoke a focused workflow for migrations, SDK upgrades, Managed Agents, prompt audits, cost reduction, or evaluations. Cost optimization changes one measured factor at a time; hillclimb iterates against an existing evaluation set.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Subcommands

- `/claude-api migrate` — Update Claude API code to a newer model
- `/claude-api upgrade` — Upgrade a supported Anthropic SDK major version
- `/claude-api managed-agents-onboard` — Create and configure a Managed Agent
- `/claude-api prompt-audit` — Find model-era assumptions in prompts and tool descriptions
- `/claude-api cost-optimize` — Profile API spending and test savings (2.1.247+)
- `/claude-api build-eval` — Build an evaluation set for a Claude-powered app (2.1.259+)
- `/claude-api hillclimb` — Improve the app against an existing evaluation (2.1.259+)

## Canonical example

`/claude-api migrate`

## Related commands

- [`/skills`](./skills.md)
- [`/init`](./init.md)
- [`/import`](./import.md)

## Also in other surfaces

- [Claude Code CLI — `/claude-api`](../claude-cli/claude-api.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/claude-api)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
