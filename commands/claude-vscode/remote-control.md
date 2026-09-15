# `/remote-control`

> Makes the VS Code session available through claude.ai or mobile.

- **Product:** Claude Code
- **Surface:** Claude Code in VS Code
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Aliases:** `/rc`
- **Requires:** claude.ai subscription sign-in; direct Anthropic connection; Remote Control allowed

## What it does

Makes the VS Code session available through claude.ai or mobile.

Execution stays on your machine. The extension displays a Remote Control indicator in the prompt footer and posts the connected session URL in the conversation. Click the connected indicator to open the browser view; run the command again to disconnect.

> **Note:** Unlike the CLI form, VS Code accepts no custom name argument and does not display a QR code.

## Canonical example

`/remote-control`

## Related commands

- [`/usage`](./usage.md)

## Also in other surfaces

- [Claude Code CLI — `/remote-control`](../claude-cli/remote-control.md)
- [Claude Desktop — Code tab — `/remote-control`](../claude-app/remote-control.md)

## Official sources

- [Remote Control from VS Code](https://code.claude.com/docs/en/remote-control#start-a-remote-control-session)
- [Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-vscode/remote-control)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
