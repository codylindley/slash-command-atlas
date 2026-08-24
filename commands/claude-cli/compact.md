# `/compact [FOCUS-INSTRUCTIONS]`

> Summarizes the conversation to free context-window space.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Summarizes the conversation to free context-window space.

Optional instructions tell the summary what to preserve. Project instructions and memory reload from disk; details supplied only in conversation can be compressed away, so state the focus when it matters.

## Examples

- `/compact keep the migration decisions and the latest failing test output`

## Related commands

- [`/context`](./context.md)
- [`/autocompact`](./autocompact.md)
- [`/clear`](./clear.md)

## Also in other surfaces

- [GitHub Copilot app — `/compact`](../app/compact.md)
- [GitHub Copilot CLI — `/compact`](../cli/compact.md)
- [GitHub Copilot Chat in VS Code — `/compact`](../vscode/compact.md)
- [GitHub Copilot Chat in JetBrains — `/compact`](../jetbrains/compact.md)
- [Claude Desktop — Code tab — `/compact`](../claude-app/compact.md)
- [Claude Code in VS Code — `/compact`](../claude-vscode/compact.md)
- [Claude Code on the web — `/compact`](../claude-web/compact.md)
- [OpenAI Codex in the ChatGPT desktop app — `/compact`](../codex-app/compact.md)
- [OpenAI Codex CLI — `/compact`](../codex-cli/compact.md)
- [OpenAI Codex IDE extension — `/compact`](../codex-ide/compact.md)

## Official sources

- [Explore the context window](https://code.claude.com/docs/en/context-window)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/compact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
