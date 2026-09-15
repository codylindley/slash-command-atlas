# `/desktop`

> CLI entry point for opening a terminal conversation in Desktop.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Aliases:** `/app`
- **Requires:** macOS or x64 Windows; Claude subscription
- **Flags:** inherited

## What it does

CLI entry point for opening a terminal conversation in Desktop.

Anthropic documents running this in the terminal, where it saves the conversation, opens the Code tab, and exits the CLI. Inside Desktop, the separate **Continue in** menu offers web or IDE handoff.

> **Note:** **Desktop inheritance:** this indexed engine entry is not evidence of a Code-tab slash handler. The CLI handoff remains limited to macOS and x64 Windows even though Desktop supports additional platforms.

## Canonical example

`/desktop`

## Related commands

- [`/teleport`](./teleport.md)
- [`/exit`](./exit.md)

## Also in other surfaces

- [Claude Code CLI — `/desktop`](../claude-cli/desktop.md)
- [GitHub Copilot CLI — `/app`](../cli/app.md)
- [OpenAI Codex CLI — `/app`](../codex-cli/app.md)

## Official sources

- [Use Claude Code Desktop](https://code.claude.com/docs/en/desktop)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/desktop)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
