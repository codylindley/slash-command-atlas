# `/compact`

> Compacts the current chat context.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex IDE extension
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Compacts the current chat context.

Reduces accumulated context so a long chat has room to continue without starting a new conversation.

## Reach for it when

- The context figure shown by `/status` is getting tight
- You want to retain the task while reducing earlier conversational detail

## Canonical example

`/compact`

## Related commands

- [`/status`](./status.md)
- [`/fork`](./fork.md)
- [`/side`](./side.md)

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
- [OpenAI Codex CLI — `/compact`](../codex-cli/compact.md)

## Official sources

- [Codex IDE extension slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=ide#available-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-ide/compact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
