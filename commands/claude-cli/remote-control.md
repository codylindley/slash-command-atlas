# `/remote-control [NAME]`

> Makes this local session steerable from claude.ai or mobile.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Aliases:** `/rc`
- **Requires:** claude.ai subscription sign-in; direct Anthropic connection; Remote Control allowed

## What it does

Makes this local session steerable from claude.ai or mobile.

Execution and filesystem access stay on your machine. An optional name sets the remote session title. After the one-time confirmation, the command connects; running it again opens connection status with the session link, QR code, and a disconnect option.

## Canonical example

`/remote-control checkout-investigation`

## Related commands

- [`/teleport`](./teleport.md)
- [`/background`](./background.md)
- [`/color`](./color.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/remote-control`](../claude-app/remote-control.md)
- [Claude Code in VS Code — `/remote-control`](../claude-vscode/remote-control.md)

## Official sources

- [Remote Control](https://code.claude.com/docs/en/remote-control)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/remote-control)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
