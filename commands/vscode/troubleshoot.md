# `/troubleshoot`

> Asks the AI to analyze the agent debug logs for this chat session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23

## What it does

Asks the AI to analyze the agent debug logs for this chat session.

Optionally include `#session` to select and diagnose a previous session instead. Requires the agent debug log setting to be enabled.

## Examples

- `/troubleshoot how many tokens did I use?`
- `/troubleshoot list all paths you tried to load customizations in #session`

## Related commands

- [`/debug`](./debug.md)

## Official sources

- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/troubleshoot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
