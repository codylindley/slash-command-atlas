# `/reset-allowed-tools`

> Clears session-level tool approvals and turns auto-approval off.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Clears session-level tool approvals and turns auto-approval off.

The undo for approvals you granted in the moment, including `/yolo`. The agent goes back to asking. Worth running after a demo, or once you have finished whatever justified opening things up.

## Related commands

- [`/allow-all-tools`](./allow-all-tools.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/reset-allowed-tools`](../cli/reset-allowed-tools.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/reset-allowed-tools)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
