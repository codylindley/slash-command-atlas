# `/btw [QUESTION]`

> Opens a side chat that uses session context without adding to the conversation.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Opens a side chat that uses session context without adding to the conversation.

Equivalent to **Cmd+;** on macOS or **Ctrl+;** on Windows. The side chat can read everything in the main thread up to that point.

> **Note:** Available in local, SSH, and WSL sessions only. Desktop does not save side chats to disk, so you cannot return to one after closing the app.

## Canonical example

`/btw which layer currently owns retry policy?`

## Related commands

- [`/context`](./context.md)
- [`/compact`](./compact.md)
- [`/copy`](./copy.md)

## Also in other surfaces

- [GitHub Copilot app — `/ask`](../app/ask.md)
- [Claude Code CLI — `/btw`](../claude-cli/btw.md)
- [Claude Code in VS Code — `/btw`](../claude-vscode/btw.md)
- [OpenAI Codex CLI — `/side`](../codex-cli/side.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Use Claude Code Desktop](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/btw)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
