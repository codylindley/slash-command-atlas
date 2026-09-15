# `/autopilot [OBJECTIVE] [--max-ai-credits N]`

> Starts or refocuses autopilot mode, optionally with an explicit objective.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session modes
- **Data snapshot:** 2026-09-14
- **Aliases:** `/goal`

## What it does

Starts or refocuses autopilot mode, optionally with an explicit objective.

Without an objective, autopilot infers intent from context. `--max-ai-credits N` caps spending for the objective; reaching the cap pauses work. Enter a new amount in the pause panel, or run `/goal --max-ai-credits 5`, to resume with a fresh credit window rather than adding to the old cap. `/goal on` and `/goal off` toggle the mode without setting an objective and cannot be combined with the credit option.

> **Note:** Enterprise-managed deny and ask rules remain enforced in autopilot: automatic continuation cannot unblock a denied operation or replace required human approval.

## Canonical example

`/autopilot get the integration tests green`

## More examples

- `/autopilot refactor the auth module --max-ai-credits 5`

## Related commands

- [`/plan`](./plan.md)
- [`/limits`](./limits.md)
- [`/fleet`](./fleet.md)

## Also in other surfaces

- [GitHub Copilot app — `/autopilot`](../app/autopilot.md)
- [GitHub Copilot Chat in VS Code — `/autopilot`](../vscode/autopilot.md)
- [Claude Code CLI — `/goal`](../claude-cli/goal.md)
- [Claude Desktop — Code tab — `/goal`](../claude-app/goal.md)
- [OpenAI Codex in the ChatGPT desktop app — `/goal`](../codex-app/goal.md)
- [OpenAI Codex CLI — `/goal`](../codex-cli/goal.md)
- [OpenAI Codex IDE extension — `/goal`](../codex-ide/goal.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Enterprise-managed permissions (GA, 2026-09-09)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/autopilot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
