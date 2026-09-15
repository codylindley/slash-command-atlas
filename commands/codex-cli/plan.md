# `/plan [PROMPT]`

> Switches to plan mode and optionally sends a prompt.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session modes
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat with planning available

## What it does

Switches to plan mode and optionally sends a prompt.

Moves the current chat into plan mode. Inline prompt text, pasted content, and images can seed the first planning request; the command is temporarily unavailable while Codex is already working.

## Canonical example

`/plan Propose a migration plan for this service`

## Related commands

- [`/goal`](./goal.md)
- [`/review`](./review.md)
- [`/side`](./side.md)

## Also in other surfaces

- [GitHub Copilot app — `/plan`](../app/plan.md)
- [GitHub Copilot CLI — `/plan`](../cli/plan.md)
- [GitHub Copilot Chat in VS Code — `/plan`](../vscode/plan.md)
- [Claude Code CLI — `/plan`](../claude-cli/plan.md)
- [Claude Desktop — Code tab — `/plan`](../claude-app/plan.md)
- [OpenAI Codex in the ChatGPT desktop app — `/plan`](../codex-app/plan.md)
- [OpenAI Codex IDE extension — `/plan`](../codex-ide/plan.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI command availability (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/bottom_pane/slash_commands.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/plan)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
