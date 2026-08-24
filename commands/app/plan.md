# `/plan [PROMPT]`

> Switches the session into Plan mode, optionally seeded with a prompt.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Switches the session into Plan mode, optionally seeded with a prompt.

Plan mode is the middle setting on the autonomy dial. Copilot investigates the codebase and writes out an approach — which files it intends to touch, in what order, and what it is unsure about — then waits for you to approve before editing anything. Passing a prompt starts the planning immediately instead of only flipping the mode.

## Reach for it when

- Starting a feature that spans more than a couple of files
- A refactor where the sequencing matters more than any individual edit
- You want to check the agent understood the task before it spends tokens implementing the wrong thing

## Examples

- `/plan add rate limiting to the public API, 100 requests per minute per token`

## Related commands

- [`/interactive`](./interactive.md)
- [`/autopilot`](./autopilot.md)
- [`/spar`](./spar.md)
- [`/research`](./research.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/plan`](../cli/plan.md)
- [GitHub Copilot Chat in VS Code — `/plan`](../vscode/plan.md)
- [Claude Code CLI — `/plan`](../claude-cli/plan.md)
- [Claude Desktop — Code tab — `/plan`](../claude-app/plan.md)
- [OpenAI Codex in the ChatGPT desktop app — `/plan`](../codex-app/plan.md)
- [OpenAI Codex CLI — `/plan`](../codex-cli/plan.md)
- [OpenAI Codex IDE extension — `/plan`](../codex-ide/plan.md)

## Official sources

- [Choosing a session mode](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/plan)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
