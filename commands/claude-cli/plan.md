# `/plan [DESCRIPTION]`

> Enters plan mode, optionally starting with a task description.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Enters plan mode, optionally starting with a task description.

Plan mode lets Claude inspect the codebase and propose an approach without editing source files. Supplying a description starts that planning turn immediately.

## Reach for it when

- A change spans several files or has sequencing risk
- You want to approve an approach before Claude starts editing

## Examples

- `/plan replace the session store without changing the public API`

## Related commands

- [`/goal`](./goal.md)
- [`/effort`](./effort.md)
- [`/code-review`](./code-review.md)

## Also in other surfaces

- [GitHub Copilot app — `/plan`](../app/plan.md)
- [GitHub Copilot CLI — `/plan`](../cli/plan.md)
- [GitHub Copilot Chat in VS Code — `/plan`](../vscode/plan.md)
- [Claude Desktop — Code tab — `/plan`](../claude-app/plan.md)
- [OpenAI Codex in the ChatGPT desktop app — `/plan`](../codex-app/plan.md)
- [OpenAI Codex CLI — `/plan`](../codex-cli/plan.md)
- [OpenAI Codex IDE extension — `/plan`](../codex-ide/plan.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/plan)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
