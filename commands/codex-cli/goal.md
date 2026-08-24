# `/goal [OBJECTIVE|edit|pause|resume|clear]`

> Sets, views, edits, pauses, resumes, or clears a task goal.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Sets, views, edits, pauses, resumes, or clears a task goal.

Keeps a persistent objective attached to the active chat while work continues. The bare command shows the current goal; action arguments manage it. Objectives must be non-empty and no longer than 4,000 characters.

## Examples

- `/goal Finish the migration and keep tests green`
- `/goal pause`
- `/goal clear`

## Related commands

- [`/plan`](./plan.md)
- [`/status`](./status.md)
- [`/side`](./side.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/autopilot`](../cli/autopilot.md)
- [Claude Code CLI — `/goal`](../claude-cli/goal.md)
- [Claude Desktop — Code tab — `/goal`](../claude-app/goal.md)
- [OpenAI Codex in the ChatGPT desktop app — `/goal`](../codex-app/goal.md)
- [OpenAI Codex IDE extension — `/goal`](../codex-ide/goal.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/goal)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
