# `/bug [DESCRIPTION]`

> Opens the VS Code problem-report dialog with an optional prefilled description.

- **Product:** Claude Code
- **Surface:** Claude Code in VS Code
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23
- **Requires:** Claude Code 2.1.229+

## What it does

Opens the VS Code problem-report dialog with an optional prefilled description.

A first-party Anthropic connection can submit the confirmed report directly. On a third-party provider or without Anthropic credentials the dialog still opens, but the extension sends nothing and does not create the local archive the CLI would.

> **Note:** Review the selected report context for secrets before submitting.

## Related commands

- [`/feedback`](./feedback.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/feedback`](../cli/feedback.md)
- [Claude Code CLI — `/bug`](../claude-cli/bug.md)
- [Claude Desktop — Code tab — `/bug`](../claude-app/bug.md)

## Official sources

- [Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-vscode/bug)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
