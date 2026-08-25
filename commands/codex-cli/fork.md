# `/fork`

> Forks the current chat into a new chat.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23

## What it does

Forks the current chat into a new chat.

Clones the active transcript into a new chat with a fresh ID and leaves the original untouched. The separate `codex fork` program subcommand handles forking a saved session from the picker.

## Reach for it when

- You want to test an alternative approach from the current context
- The experiment should be durable rather than an ephemeral side chat

## Canonical example

`/fork`

## Related commands

- [`/side`](./side.md)
- [`/new`](./new.md)
- [`/subagents`](./subagents.md)

## Also in other surfaces

- [GitHub Copilot app — `/fork`](../app/fork.md)
- [GitHub Copilot CLI — `/fork`](../cli/fork.md)
- [GitHub Copilot Chat in VS Code — `/fork`](../vscode/fork.md)
- [Claude Code CLI — `/fork`](../claude-cli/fork.md)
- [Claude Desktop — Code tab — `/fork`](../claude-app/fork.md)
- [OpenAI Codex in the ChatGPT desktop app — `/fork`](../codex-app/fork.md)
- [OpenAI Codex IDE extension — `/fork`](../codex-ide/fork.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/fork)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
