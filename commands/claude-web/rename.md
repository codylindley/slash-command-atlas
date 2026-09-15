# `/rename NAME`

> Renames the cloud session from the conversation.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Claude Code 2.1.205+ in the session environment

## What it does

Renames the cloud session from the conversation.

Supply an explicit name; the CLI’s bare auto-naming form is not the documented cloud invocation. Claude replaces invisible and control characters with spaces, caps names at 200 characters, and rejects a name that is empty after normalization.

## Canonical example

`/rename checkout-race-investigation`

## Related commands

- [`/color`](./color.md)

## Also in other surfaces

- [GitHub Copilot app — `/rename`](../app/rename.md)
- [GitHub Copilot CLI — `/rename`](../cli/rename.md)
- [GitHub Copilot Chat in VS Code — `/rename`](../vscode/rename.md)
- [GitHub Copilot Chat on GitHub.com — `/rename`](../web/rename.md)
- [Claude Code CLI — `/rename`](../claude-cli/rename.md)
- [Claude Desktop — Code tab — `/rename`](../claude-app/rename.md)
- [OpenAI Codex CLI — `/rename`](../codex-cli/rename.md)

## Official sources

- [Claude Code on the web — manage context](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/rename)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
