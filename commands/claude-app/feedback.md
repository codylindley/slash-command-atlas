# `/feedback [REPORT]`

> Reviews drafted feedback or opens the problem-report dialog.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-09-14
- **Flags:** inherited

## What it does

Reviews drafted feedback or opens the problem-report dialog.

With no argument, sessions that support Claude-drafted feedback open the drafts queue, where you can edit, send, or discard each report. Supplying text opens the report dialog directly. The consent, first-party submission, and local-bundle rules match `/bug`.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/feedback add keyboard navigation to the session picker`

## Related commands

- [`/bug`](./bug.md)
- [`/release-notes`](./release-notes.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/feedback`](../cli/feedback.md)
- [Claude Code CLI — `/feedback`](../claude-cli/feedback.md)
- [Claude Code in VS Code — `/feedback`](../claude-vscode/feedback.md)
- [OpenAI Codex in the ChatGPT desktop app — `/feedback`](../codex-app/feedback.md)
- [OpenAI Codex CLI — `/feedback`](../codex-cli/feedback.md)
- [OpenAI Codex IDE extension — `/feedback`](../codex-ide/feedback.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/feedback)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
