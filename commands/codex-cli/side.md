# `/side [PROMPT]`

> Starts an ephemeral side chat.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/btw`
- **Requires:** Main chat outside review mode

## What it does

Starts an ephemeral side chat.

Creates a temporary fork for a focused detour without switching the main chat away from its work. The side transcript stays separate, and the command is unavailable inside another side chat or during review mode.

## Canonical example

`/side Check whether this plan has an obvious risk`

## Related commands

- [`/fork`](./fork.md)
- [`/plan`](./plan.md)
- [`/subagents`](./subagents.md)

## Also in other surfaces

- [OpenAI Codex in the ChatGPT desktop app — `/side`](../codex-app/side.md)
- [OpenAI Codex IDE extension — `/side`](../codex-ide/side.md)
- [Claude Code CLI — `/btw`](../claude-cli/btw.md)
- [Claude Desktop — Code tab — `/btw`](../claude-app/btw.md)
- [Claude Code in VS Code — `/btw`](../claude-vscode/btw.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/side)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
