# `/feedback [REPORT]`

> Reviews drafted feedback or opens the problem-report dialog.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-09-14

## What it does

Reviews drafted feedback or opens the problem-report dialog.

With no argument, sessions that support Claude-drafted feedback open the drafts queue, where you can edit, send, or discard each report. Supplying text opens the report dialog directly. The consent, first-party submission, and local-bundle rules match `/bug`.

## Canonical example

`/feedback add keyboard navigation to the session picker`

## Related commands

- [`/bug`](./bug.md)
- [`/release-notes`](./release-notes.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/feedback`](../cli/feedback.md)
- [Claude Desktop — Code tab — `/feedback`](../claude-app/feedback.md)
- [Claude Code in VS Code — `/feedback`](../claude-vscode/feedback.md)
- [OpenAI Codex in the ChatGPT desktop app — `/feedback`](../codex-app/feedback.md)
- [OpenAI Codex CLI — `/feedback`](../codex-cli/feedback.md)
- [OpenAI Codex IDE extension — `/feedback`](../codex-ide/feedback.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/feedback)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
