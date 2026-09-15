# `/create-prompt [DESCRIPTION]`

> Generates a prompt file with AI assistance in Agent mode.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** Local agent session

## What it does

Generates a prompt file with AI assistance in Agent mode.

Describe the task to capture as a `.prompt.md` file. The agent asks clarifying questions and offers workspace or user storage.

> **Note:** Agent Host does not load prompt files; use a skill for workflows that need to run there.

## Canonical example

`/create-prompt summarize the API changes before a release`

## Related commands

- [`/prompts`](./prompts.md)
- [`/<prompt name>`](./custom-prompt.md)

## Official sources

- [Prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/create-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
