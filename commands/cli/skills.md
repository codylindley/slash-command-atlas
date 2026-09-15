# `/skills [list|info NAME|add [--project] SOURCE|remove NAME-OR-DIRECTORY|reload]`

> Manages skills for enhanced capabilities.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Manages skills for enhanced capabilities.

Run bare to open the Skills dashboard, where you can inspect, enable, and disable skills. `reload` picks up edits without restarting. Plugin-provided skills are removed by managing their plugin rather than deleting the skill separately.

## Subcommands

- `/skills list` — List available skills
- `/skills info NAME` — Show a skill’s details and source
- `/skills add [--project] SOURCE` — Add a file, URL, or directory; --project makes file or URL installs repository-scoped
- `/skills remove NAME-OR-DIRECTORY` — Remove a directly installed skill or unregister a skill directory
- `/skills reload` — Reload skills from all configured directories

## Canonical example

`/skills list`

## Related commands

- [`/plugin`](./plugins.md)
- [`/agent`](./agent.md)
- [`/init`](./init.md)

## Also in other surfaces

- [GitHub Copilot app — `/skills`](../app/skills.md)
- [GitHub Copilot Chat in VS Code — `/skills`](../vscode/skills.md)
- [Claude Code CLI — `/skills`](../claude-cli/skills.md)
- [Claude Desktop — Code tab — `/skills`](../claude-app/skills.md)
- [OpenAI Codex CLI — `/skills`](../codex-cli/skills.md)
- [OpenAI Codex IDE extension — `/skills`](../codex-ide/skills.md)

## Official sources

- [Add skills](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/skills)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
