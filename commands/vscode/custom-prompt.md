# `/<prompt name> [CONTEXT]`

> Runs one of your reusable prompt files by name.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** Local agent session with a saved prompt file
- **Flags:** custom

## What it does

Runs one of your reusable prompt files by name.

The command name comes from the prompt’s `name` frontmatter or its `.prompt.md` filename. Add optional instructions or inputs after the command.

> **Note:** Prompt files still work with the Local agent but are deprecated and not loaded in Agent Host sessions. Migrate them to skills for Agent Host.

## Canonical example

`/create-release-notes`

## Related commands

- [`/prompts`](./prompts.md)
- [`/create-prompt`](./create-prompt.md)
- [`/<skill name>`](./custom-skill.md)

## Official sources

- [Prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/custom-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
