# `/compact`

> Summarizes earlier parts of the conversation to reduce token pressure.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Summarizes earlier parts of the conversation to reduce token pressure.

Replaces older turns with a condensed summary, freeing up context window while keeping the thread of what happened. Preferable to `/clear` when the session still matters: you lose detail, but not continuity.

## Reach for it when

- A long session has started slowing down or losing the plot
- `/context` shows you are close to the limit
- Starting a substantial new subtask inside the same session

## Canonical example

`/compact`

## Related commands

- [`/context`](./context.md)
- [`/clear`](./clear.md)
- [`/chronicle cost-tips`](./chronicle-cost-tips.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/compact`](../cli/compact.md)
- [GitHub Copilot Chat in VS Code — `/compact`](../vscode/compact.md)
- [GitHub Copilot Chat in JetBrains — `/compact`](../jetbrains/compact.md)
- [Claude Code CLI — `/compact`](../claude-cli/compact.md)
- [Claude Desktop — Code tab — `/compact`](../claude-app/compact.md)
- [Claude Code in VS Code — `/compact`](../claude-vscode/compact.md)
- [Claude Code on the web — `/compact`](../claude-web/compact.md)
- [OpenAI Codex in the ChatGPT desktop app — `/compact`](../codex-app/compact.md)
- [OpenAI Codex CLI — `/compact`](../codex-cli/compact.md)
- [OpenAI Codex IDE extension — `/compact`](../codex-ide/compact.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/compact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
