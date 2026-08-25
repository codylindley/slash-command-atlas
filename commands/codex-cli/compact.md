# `/compact`

> Summarizes the chat to free context-window space.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Summarizes the chat to free context-window space.

Replaces earlier turns with a concise summary so a long session can continue while retaining critical details.

## Reach for it when

- The context shown by `/status` is getting tight
- You need to continue the same task but no longer need every old turn verbatim

## Canonical example

`/compact`

## Related commands

- [`/status`](./status.md)
- [`/clear`](./clear.md)
- [`/new`](./new.md)

## Also in other surfaces

- [GitHub Copilot app — `/compact`](../app/compact.md)
- [GitHub Copilot CLI — `/compact`](../cli/compact.md)
- [GitHub Copilot Chat in VS Code — `/compact`](../vscode/compact.md)
- [GitHub Copilot Chat in JetBrains — `/compact`](../jetbrains/compact.md)
- [Claude Code CLI — `/compact`](../claude-cli/compact.md)
- [Claude Desktop — Code tab — `/compact`](../claude-app/compact.md)
- [Claude Code in VS Code — `/compact`](../claude-vscode/compact.md)
- [Claude Code on the web — `/compact`](../claude-web/compact.md)
- [OpenAI Codex in the ChatGPT desktop app — `/compact`](../codex-app/compact.md)
- [OpenAI Codex IDE extension — `/compact`](../codex-ide/compact.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/compact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
