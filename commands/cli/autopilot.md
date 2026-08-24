# `/autopilot [OBJECTIVE]`

> Starts or refocuses autopilot mode, optionally with an explicit objective.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session modes
- **Data snapshot:** 2026-08-23
- **Aliases:** `/goal`
- **Flags:** experimental

## What it does

Starts or refocuses autopilot mode, optionally with an explicit objective.

Without an objective, autopilot infers intent from context. You can cap spend for an objective with `--max-ai-credits N`; when the cap is reached autopilot pauses and reports credits used, and you either enter a new amount to resume with a fresh window or leave it paused. `/goal on` and `/goal off` toggle the mode without setting an objective.

## Examples

- `/goal Refactor the auth module --max-ai-credits 5`
- `/autopilot get the integration tests green`

## Related commands

- [`/plan`](./plan.md)
- [`/limits`](./limits.md)
- [`/fleet`](./fleet.md)

## Also in other surfaces

- [GitHub Copilot app — `/autopilot`](../app/autopilot.md)
- [Claude Code CLI — `/goal`](../claude-cli/goal.md)
- [Claude Desktop — Code tab — `/goal`](../claude-app/goal.md)
- [OpenAI Codex in the ChatGPT desktop app — `/goal`](../codex-app/goal.md)
- [OpenAI Codex CLI — `/goal`](../codex-cli/goal.md)
- [OpenAI Codex IDE extension — `/goal`](../codex-ide/goal.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/autopilot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
