# `/autopilot [PROMPT]`

> Switches into Autopilot mode and optionally starts execution.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Switches into Autopilot mode and optionally starts execution.

Full autonomy — the agent writes code, runs tests and iterates without pausing for approval. It works best on well-specified work with a clear pass/fail signal, because a test suite is what tells it whether it is finished. A common pattern is to run `/plan` first, approve the plan, then hand execution to Autopilot.

> **Note:** Autopilot does not ask before acting. Think about tool approvals deliberately here rather than reaching for `/allow-all-tools` out of habit.

## Reach for it when

- Dependency upgrades and other mechanical migrations
- Tasks with an unambiguous success check, like a green test suite
- Long-running chores you do not want to babysit

## Examples

- `/autopilot upgrade to React 19 and get the test suite passing`

## Related commands

- [`/plan`](./plan.md)
- [`/interactive`](./interactive.md)
- [`/allow-all-tools`](./allow-all-tools.md)
- [`/fleet`](./fleet.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/autopilot`](../cli/autopilot.md)

## Official sources

- [Choosing a session mode](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/autopilot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
