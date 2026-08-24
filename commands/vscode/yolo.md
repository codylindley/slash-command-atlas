# `/yolo`

> Enables global auto-approval of all tool calls.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Aliases:** `/autoApprove`

## What it does

Enables global auto-approval of all tool calls.

Shows a warning dialog the first time, and for good reason: it approves every tool call in every workspace, including terminal commands.

> **Note:** This is a global setting, not a per-session one. `/disableYolo` turns it back off.

## Related commands

- [`/disableYolo`](./disableYolo.md)

## Also in other surfaces

- [GitHub Copilot app — `/allow-all-tools`](../app/allow-all-tools.md)
- [GitHub Copilot CLI — `/allow-all`](../cli/allow-all.md)

## Official sources

- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/yolo)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
