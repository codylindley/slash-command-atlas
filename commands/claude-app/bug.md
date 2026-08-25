# `/bug [REPORT]`

> Reports a bug or shares a conversation with explicit consent.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23
- **Aliases:** `/share`
- **Flags:** inherited

## What it does

Reports a bug or shares a conversation with explicit consent.

A dialog lets you choose how much session history to include and confirm before sending. First-party Anthropic connections submit directly; third-party or unauthenticated setups write a local feedback bundle you can forward.

> **Note:** Review the selected session history for secrets before confirming.

**Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/bug MCP tools disappear after compaction`

## Related commands

- [`/feedback`](./feedback.md)
- [`/debug`](./debug.md)
- [`/export`](./export.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/feedback`](../cli/feedback.md)
- [Claude Code CLI — `/bug`](../claude-cli/bug.md)
- [Claude Code in VS Code — `/bug`](../claude-vscode/bug.md)
- [GitHub Copilot CLI — `/share`](../cli/share.md)
- [OpenAI Codex in the ChatGPT desktop app — `/share`](../codex-app/share.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/bug)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
