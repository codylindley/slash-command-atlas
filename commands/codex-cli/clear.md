# `/clear [CHAT NAME]`

> Clears the terminal and starts a fresh chat.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** No task in progress

## What it does

Clears the terminal and starts a fresh chat.

Resets the visible transcript and creates a new chat in the same CLI session. Optional text names the new chat. Unlike `Ctrl+L`, this changes the chat rather than only clearing the terminal view.

## Examples

- `/clear release prep`

## Related commands

- [`/new`](./new.md)
- [`/compact`](./compact.md)
- [`/fork`](./fork.md)

## Also in other surfaces

- [GitHub Copilot app — `/clear`](../app/clear.md)
- [GitHub Copilot CLI — `/clear`](../cli/clear.md)
- [GitHub Copilot Chat in VS Code — `/clear`](../vscode/clear.md)
- [GitHub Copilot Chat on GitHub.com — `/clear`](../web/clear.md)
- [Claude Code CLI — `/clear`](../claude-cli/clear.md)
- [Claude Desktop — Code tab — `/clear`](../claude-app/clear.md)
- [Claude Code on the web — `/clear`](../claude-web/clear.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/clear)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
