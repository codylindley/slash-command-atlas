# `/goal`

> Sets a persistent goal for this Codex chat to work toward.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex in the ChatGPT desktop app
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Sets a persistent goal for this Codex chat to work toward.

Starts Goal mode for an objective that remains attached to the chat while work continues. The app shows progress above the composer and provides controls there to pause, resume, edit, or clear the goal.

> **Note:** The official guidance recommends using `/plan` first when you want to shape the objective with ChatGPT before making it persistent.

## Reach for it when

- The objective will take multiple turns or a long-running agent loop
- You want progress to remain visible and resumable across follow-up messages

## Canonical example

`/goal`

## Related commands

- [`/plan`](./plan.md)
- [`/status`](./status.md)
- [`/task`](./task.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/autopilot`](../cli/autopilot.md)
- [Claude Code CLI — `/goal`](../claude-cli/goal.md)
- [Claude Desktop — Code tab — `/goal`](../claude-app/goal.md)
- [OpenAI Codex CLI — `/goal`](../codex-cli/goal.md)
- [OpenAI Codex IDE extension — `/goal`](../codex-ide/goal.md)

## Official sources

- [ChatGPT desktop app slash commands](https://learn.chatgpt.com/docs/reference/slash-commands#available-slash-commands)
- [OpenAI Codex in the ChatGPT desktop app slash command reference](https://learn.chatgpt.com/docs/reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-app/goal)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
